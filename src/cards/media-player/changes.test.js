import { beforeAll, describe, expect, jest, test } from '@jest/globals';

// Cut the CSS import chains so the module loads under the node test environment
// (utils.js -> base-card/index.js -> *.css, and style-processor.js -> sub-button -> *.css).
jest.unstable_mockModule('../../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
}));

jest.unstable_mockModule('../../tools/style-processor.js', () => ({
    handleCustomStyles: jest.fn(),
}));

const ENTITY = 'media_player.test';
let evaluateCoverState;

beforeAll(async () => {
    ({ evaluateCoverState } = await import('./changes.js'));
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
