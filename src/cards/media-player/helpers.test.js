import { beforeAll, describe, expect, jest, test } from '@jest/globals';

// Same cut as changes.test.js: helpers.js reaches utils.js, which pulls the
// base card and its stylesheets, which the node test environment cannot parse.
jest.unstable_mockModule('../../components/base-card/index.js', () => ({
    updateContentContainerFixedClass: jest.fn(),
    syncMainButtonsBottomClass: jest.fn(),
}));

const ENTITY = 'media_player.test';
let computeMediaDescription;

beforeAll(async () => {
    ({ computeMediaDescription } = await import('./helpers.js'));
});

// The line under the title. Home Assistant picks it from the kind of thing
// playing (frontend, data/media-player.ts, computeMediaDescription), and this
// card used to read `media_artist` whatever it was, which is empty on
// everything that is not music.
const described = (attributes) => computeMediaDescription({
    config: { entity: ENTITY },
    _hass: { states: { [ENTITY]: { state: 'playing', attributes } } },
});

describe('computeMediaDescription', () => {
    test('music is its artist, which is what the card always showed', () => {
        expect(described({ media_content_type: 'music', media_artist: 'Nina Simone' })).toBe('Nina Simone');
        expect(described({ media_content_type: 'image', media_artist: 'Nina Simone' })).toBe('Nina Simone');
    });

    // The case that showed nothing at all: a series carries neither title nor
    // artist, so the card hid the whole block and fell back to the entity name.
    test('a tv show is its series, its season and its episode', () => {
        const base = { media_content_type: 'tvshow', media_series_title: 'Severance' };
        expect(described({ ...base, media_season: '2', media_episode: '5' })).toBe('Severance S2E5');
        expect(described({ ...base, media_season: '2' })).toBe('Severance S2');
        expect(described(base)).toBe('Severance');
    });

    test('a radio is its channel, a playlist its playlist', () => {
        expect(described({ media_content_type: 'channel', media_channel: 'FIP' })).toBe('FIP');
        expect(described({ media_content_type: 'playlist', media_playlist: 'Road trip' })).toBe('Road trip');
    });

    test('a playlist with no name of its own falls back to the artist', () => {
        expect(described({ media_content_type: 'playlist', media_artist: 'Nina Simone' })).toBe('Nina Simone');
    });

    // A Chromecast playing something the integration cannot read still says
    // which app is doing it.
    test('anything else is the app that is playing it', () => {
        expect(described({ media_content_type: 'video', app_name: 'Netflix' })).toBe('Netflix');
        expect(described({ app_name: 'YouTube' })).toBe('YouTube');
    });

    // Home Assistant's own rule stops at `app_name` here and would drop the
    // artist. Every player reporting one and no content type keeps what it
    // displayed before this existed.
    test('an artist with no content type is kept, where HA would drop it', () => {
        expect(described({ media_artist: 'Nina Simone' })).toBe('Nina Simone');
        expect(described({ media_content_type: 'video', media_artist: 'Nina Simone' })).toBe('Nina Simone');
    });

    // A half-reported show must not read "undefined S2E5".
    test('a kind with nothing to say falls through rather than inventing a line', () => {
        expect(described({ media_content_type: 'tvshow', media_season: '2', media_episode: '5', app_name: 'Plex' })).toBe('Plex');
        expect(described({ media_content_type: 'channel', app_name: 'TuneIn' })).toBe('TuneIn');
    });

    // The branch that catches everything HA does not name, `track` and `album`
    // included, which is what Music Assistant and half the integrations
    // report. Falling through to the app would swap the artist those cards
    // display for the name of the software playing it.
    test('an unnamed kind keeps its artist rather than naming the app', () => {
        expect(described({ media_content_type: 'track', media_artist: 'Nina Simone', app_name: 'Music Assistant' }))
            .toBe('Nina Simone');
        expect(described({ media_content_type: 'album', media_artist: 'Nina Simone', app_name: 'Plex' }))
            .toBe('Nina Simone');
    });

    // Whether the block is worth showing is not the same question as what to
    // write in it. A player reporting an app and nothing else would open it on
    // a blank first line, where the card shows its own name today.
    test('the app alone does not count as knowing what is playing', () => {
        const attrs = { app_name: 'Netflix' };
        expect(described(attrs)).toBe('Netflix');
        expect(computeMediaDescription({
            config: { entity: ENTITY },
            _hass: { states: { [ENTITY]: { state: 'playing', attributes: attrs } } },
        }, { withApp: false })).toBe('');
    });

    test('a player with nothing at all describes nothing', () => {
        expect(described({})).toBe('');
        expect(computeMediaDescription({ config: { entity: ENTITY }, _hass: { states: {} } })).toBe('');
    });
});
