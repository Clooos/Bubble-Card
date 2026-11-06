import { afterEach, beforeAll, beforeEach, describe, expect, jest, test } from '@jest/globals';

// Cut the CSS import chains so the module loads under the node test environment
// (utils.js -> base-card/index.js -> *.css, and style-processor.js -> sub-button -> *.css).
jest.unstable_mockModule('../../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
    syncMainButtonsBottomClass: jest.fn(),
}));

jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

const ENTITY = 'media_player.test';
let evaluateCoverState;
let crossfadeTo;

beforeAll(async () => {
    ({ evaluateCoverState, crossfadeTo } = await import('./changes.js'));
});

// Minimal context whose hass state can be mutated between calls so the
// per-context cover state (context._mediaCoverState) persists, mirroring how
// the card re-evaluates on every hass update.
function makeContext() {
    return {
        config: { entity: ENTITY, cover_background: true },
        _hass: {
            hassUrl: (path) => path,
            states: {
                [ENTITY]: { state: 'idle', attributes: {} }
            }
        }
    };
}

function setTrack(context, { state = 'playing', entity_picture, media_content_id, media_title, media_artist }) {
    const attributes = {};
    if (entity_picture) attributes.entity_picture = entity_picture;
    if (media_content_id) attributes.media_content_id = media_content_id;
    if (media_title) attributes.media_title = media_title;
    if (media_artist) attributes.media_artist = media_artist;
    context._hass.states[ENTITY] = { state, attributes };
}

describe('evaluateCoverState', () => {
    test('removes the cached cover when switching to a track without album art', () => {
        const context = makeContext();

        // Track 1 has album art.
        setTrack(context, {
            entity_picture: '/art/track1.png',
            media_content_id: '1',
            media_title: 'Aloe Blacc',
            media_artist: 'Aloe Blacc'
        });
        expect(evaluateCoverState(context).resolvedUrl).toContain('/art/track1.png');

        // Track 2 (different album) has no album art -> background must be cleared.
        setTrack(context, {
            media_content_id: '2',
            media_title: 'Madama Butterfly',
            media_artist: 'Puccini'
        });
        expect(evaluateCoverState(context).resolvedUrl).toBe('');
    });

    test('still clears after passes where the fingerprint was not worth reading', () => {
        const context = makeContext();

        // Nothing to fingerprint and nothing cached: these passes are skipped.
        setTrack(context, { media_content_id: '1', media_title: 'A', media_artist: 'X' });
        expect(evaluateCoverState(context).resolvedUrl).toBe('');
        setTrack(context, { media_content_id: '2', media_title: 'B', media_artist: 'X' });
        expect(evaluateCoverState(context).resolvedUrl).toBe('');

        // A cover shows up, then a track change without one still drops it.
        setTrack(context, {
            entity_picture: '/art/track3.png',
            media_content_id: '3',
            media_title: 'C',
            media_artist: 'X'
        });
        expect(evaluateCoverState(context).resolvedUrl).toContain('/art/track3.png');

        setTrack(context, { media_content_id: '4', media_title: 'D', media_artist: 'X' });
        expect(evaluateCoverState(context).resolvedUrl).toBe('');
    });

    test('keeps the cover during a transient empty cover for the same track', () => {
        const context = makeContext();

        setTrack(context, {
            entity_picture: '/art/track1.png',
            media_content_id: '1',
            media_title: 'Aloe Blacc',
            media_artist: 'Aloe Blacc'
        });
        const url = evaluateCoverState(context).resolvedUrl;
        expect(url).toContain('/art/track1.png');

        // Same track, cover momentarily missing -> previous cover should remain.
        setTrack(context, {
            media_content_id: '1',
            media_title: 'Aloe Blacc',
            media_artist: 'Aloe Blacc'
        });
        expect(evaluateCoverState(context).resolvedUrl).toBe(url);
    });
});

// A layer that records what is done to it, in order.
const fakeLayer = () => {
    const classes = new Set();
    const style = {};
    return {
        classList: {
            add: (n) => classes.add(n),
            remove: (n) => classes.delete(n),
            contains: (n) => classes.has(n),
        },
        style,
        dataset: {},
        get visible() { return classes.has('is-visible'); },
    };
};

const layerState = (visibleIndex = 0) => {
    const layers = [fakeLayer(), fakeLayer()];
    layers[visibleIndex].classList.add('is-visible');
    return { layers, visibleIndex, currentValue: '' };
};

// The rewrite exists because the old crossfade raced with itself: it swapped
// `visibleIndex` only at commit time, 50 ms after starting, with an async
// preload in between, so a call arriving in that window could not tell which
// layer was free. A card re-evaluates on every hass update and a playing
// player emits many per second, so one track change went through that window
// a dozen times — and the result differed from one skip to the next.
describe('crossfadeTo', () => {
    let loaders;
    beforeEach(() => {
        jest.useFakeTimers();
        loaders = [];
        global.Image = function () {
            const img = {};
            loaders.push(img);
            Object.defineProperty(img, 'src', { set() {} });
            return img;
        };
        global.requestAnimationFrame = (fn) => { fn(); return 1; };
    });
    afterEach(() => {
        jest.useRealTimers();
        delete global.Image;
        delete global.requestAnimationFrame;
    });

    const settle = () => loaders.splice(0).forEach((img) => img.onload && img.onload());

    test('a fade swaps the visible layer once the image has loaded', () => {
        const state = layerState();
        crossfadeTo(state, 'https://example.com/a.jpg');
        expect(state.visibleIndex).toBe(0); // nothing moves before the preload
        settle();
        expect(state.visibleIndex).toBe(1);
        expect(state.layers[1].visible).toBe(true);
        expect(state.layers[0].visible).toBe(false);
    });

    // The bug that made a single skip restart the same fade ten times.
    test('asking again for the image already targeted does nothing', () => {
        const state = layerState();
        crossfadeTo(state, 'https://example.com/a.jpg');
        settle();
        const index = state.visibleIndex;
        for (let i = 0; i < 10; i++) crossfadeTo(state, 'https://example.com/a.jpg');
        expect(loaders).toHaveLength(0); // no new preload
        expect(state.visibleIndex).toBe(index); // nothing swapped
    });

    test('a request arriving mid-fade waits instead of starting on top', () => {
        const state = layerState();
        crossfadeTo(state, 'https://example.com/a.jpg');
        settle();
        const index = state.visibleIndex;
        jest.advanceTimersByTime(400); // past the swap window
        crossfadeTo(state, 'https://example.com/b.jpg');
        expect(state.visibleIndex).toBe(index); // the running fade is untouched
        expect(state.queued.url).toBe('https://example.com/b.jpg');
    });

    // Home Assistant often reports one track change as TWO pictures a moment
    // apart. Queueing the second ran a whole extra fade right after the first,
    // which is the short second transition Clooos could see, with the icon
    // showing through its dip.
    test('a second url arriving at once is folded into the running fade', () => {
        const state = layerState();
        crossfadeTo(state, 'https://example.com/a.jpg');
        settle();
        const index = state.visibleIndex;
        crossfadeTo(state, 'https://example.com/b.jpg'); // same instant
        settle();
        expect(state.queued).toBeFalsy();          // no second fade queued
        expect(state.visibleIndex).toBe(index);    // no second swap either
        expect(state.currentValue).toBe('https://example.com/b.jpg');
    });

    test('the queued request runs when the fade lands', () => {
        const state = layerState();
        crossfadeTo(state, 'https://example.com/a.jpg');
        settle();
        jest.advanceTimersByTime(400); // past the swap window
        crossfadeTo(state, 'https://example.com/b.jpg');
        jest.advanceTimersByTime(2000);
        settle();
        expect(state.currentValue).toBe('https://example.com/b.jpg');
    });

    // Holding "next" must cost one extra fade, not one per press.
    test('only the last of several queued requests survives', () => {
        const state = layerState();
        crossfadeTo(state, 'https://example.com/a.jpg');
        settle();
        jest.advanceTimersByTime(400); // past the swap window
        crossfadeTo(state, 'https://example.com/b.jpg');
        crossfadeTo(state, 'https://example.com/c.jpg');
        crossfadeTo(state, 'https://example.com/d.jpg');
        expect(state.queued.url).toBe('https://example.com/d.jpg');
        jest.advanceTimersByTime(2000);
        settle();
        expect(state.currentValue).toBe('https://example.com/d.jpg');
    });

    test('an empty url fades to nothing without preloading', () => {
        const state = layerState();
        crossfadeTo(state, '');
        expect(loaders).toHaveLength(0);
        expect(state.currentValue).toBe('');
    });

    test('a cover that cannot load leaves the card as it was, and can be retried', () => {
        const state = layerState();
        crossfadeTo(state, 'https://example.com/gone.jpg');
        loaders.splice(0).forEach((img) => img.onerror && img.onerror());
        expect(state.visibleIndex).toBe(0);
        crossfadeTo(state, 'https://example.com/gone.jpg');
        expect(loaders).toHaveLength(1); // a fresh attempt was made
    });

    // Integrations reissue a picture in another form a beat later: measured
    // here, http://api.deezer.com/2.0/album/X/image then
    // https://api.deezer.com/album/X/image, same album, 1.5 s apart. Both
    // carry the same media fingerprint, and fading twice for one track change
    // is the short second transition Clooos could see.
    test('the same artwork under another url does not fade again', () => {
        const state = layerState();
        crossfadeTo(state, 'http://api.deezer.com/2.0/album/42/image?size=big&v=abc');
        settle();
        const index = state.visibleIndex;
        jest.advanceTimersByTime(1500); // well past the swap window
        crossfadeTo(state, 'https://api.deezer.com/album/42/image?size=big&v=abc');
        expect(loaders).toHaveLength(0);        // nothing preloaded
        expect(state.queued).toBeFalsy();       // nothing queued
        expect(state.visibleIndex).toBe(index); // nothing swapped
    });

    test('a genuinely different track still fades', () => {
        const state = layerState();
        crossfadeTo(state, 'https://api.deezer.com/album/42/image?v=abc');
        settle();
        jest.advanceTimersByTime(2000);
        crossfadeTo(state, 'https://api.deezer.com/album/43/image?v=def');
        expect(loaders).toHaveLength(1);
    });

    // Without a fingerprint there is nothing to compare but the url itself.
    test('urls with no fingerprint fall back to a plain comparison', () => {
        const state = layerState();
        crossfadeTo(state, 'https://example.com/a.jpg');
        settle();
        jest.advanceTimersByTime(2000);
        crossfadeTo(state, 'https://example.com/b.jpg');
        expect(loaders).toHaveLength(1);
    });

    test('a call with no layer state is harmless', () => {
        expect(() => crossfadeTo(null, 'https://example.com/a.jpg')).not.toThrow();
    });
});
