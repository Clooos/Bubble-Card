import { html } from "lit";
import setupTranslation from '../../tools/localize.js';
import "../../components/editor/ha-selector-calendar_entity.js";

export function renderCalendarEditor(editor){
    const t = setupTranslation(editor.hass);
    
    // S'assurer que event_action est initialisé
    if (!editor._config.event_action) {
        editor._config.event_action = {
            tap_action: { action: "more-info" },
            double_tap_action: { action: "none" },
            hold_action: { action: "none" }
        };
    }

    return html`
        <div class="card-config">
            ${editor.makeDropdown(t('editor.common.card_type'), "card_type", editor.cardTypeList)}
            <ha-form
                .hass=${editor.hass}
                .data=${editor._config}
                .schema=${[
                  {
                    name: "entities",
                    title: t('editor.calendar.entities'),
                    selector: { calendar_entity: {} },
                  },
                ]}   
                .computeLabel=${editor._computeLabelCallback}
                @value-changed=${editor._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t('editor.calendar.settings')}
                </h4>
                <div class="content">
                    <ha-form
                      .hass=${editor.hass}
                      .data=${editor._config}
                      .schema=${[
                        {
                          name: 'days',
                          label: t('editor.calendar.days'),
                          title: t('editor.calendar.days'),
                          selector: { number: { step: 1, min: 1, max: 7} },
                        },
                        {
                          name: 'limit',
                          label: t('editor.calendar.limit'),
                          title: t('editor.calendar.limit'),
                          selector: { number: { step: 1, min: 1} },
                        },
                        {
                          name: 'show_end',
                          label: t('editor.calendar.show_end'),
                          title: t('editor.calendar.show_end'),
                          selector: { boolean: {} },
                        },
                        {
                          name: 'show_progress',
                          label: t('editor.calendar.show_progress'),
                          title: t('editor.calendar.show_progress'),
                          selector: { boolean: {} },
                        },
                        {
                          name: 'show_started_events',
                          label: t('editor.calendar.show_started_events'),
                          title: t('editor.calendar.show_started_events'),
                          selector: { boolean: {} },
                          default: true
                        },
                        {
                          name: 'show_place',
                          label: t('editor.calendar.show_place'),
                          title: t('editor.calendar.show_place'),
                          selector: { boolean: {} },
                        },
                        {
                          name: 'scrolling_effect',
                          label: t('editor.calendar.text_scrolling'),
                          title: t('editor.calendar.text_scrolling'),
                          selector: { boolean: {} },
                          default: true
                        }
                      ]}   
                      .computeLabel=${editor._computeLabelCallback}
                      @value-changed=${editor._valueChanged}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  ${t('editor.actions.on_day')}
                </h4>
                <div class="content">
                    ${editor.makeActionPanel('tap', editor._config, 'none')}
                    ${editor.makeActionPanel('double_tap')}
                    ${editor.makeActionPanel('hold')}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                  ${t('editor.actions.on_event')}
                </h4>
                <div class="content">
                    ${editor.makeActionPanel('tap', editor._config.event_action, 'none', 'event_action')}
                    ${editor.makeActionPanel('double_tap', editor._config.event_action, 'none', 'event_action')}
                    ${editor.makeActionPanel('hold', editor._config.event_action, 'none', 'event_action')}
                </div>
            </ha-expansion-panel>
            ${editor.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  ${t('editor.common.styling_options')}
                </h4>
                <div class="content">
                    ${editor.makeLayoutOptions()}
                    ${editor.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${editor.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    ${t('editor.calendar.info_title')}
                </h4>
                <div class="content">
                    <p>${t('editor.calendar.info_body')}</p>
                </div>
            </div>
            ${editor.makeVersion()}
        </div>
    `;
}
