import { getClimateDomainConfig } from './domains.js';
import { 
    getClimateColor, 
    formatTemperature
} from './helpers.js';
import { 
    getState,
    getAttribute,
    setLayout
} from '../../tools/utils.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

export function changeTemperature(context) {
    const domainConfig = getClimateDomainConfig(context.config.entity);
    const temperature = getAttribute(context, domainConfig.target);
    const state = getState(context);

    const hideTemperature = context.config.hide_temperature;
    const shouldHide = hideTemperature || state === 'unavailable' || temperature === '' || temperature === undefined;
    if (shouldHide) {
        context.elements.temperatureContainer?.classList.add('hidden');
    } else {
        context.elements.temperatureContainer?.classList.remove('hidden');
    }

    if (temperature !== context.previousTemp) {
        context.previousTemp = temperature;
        if (context.elements.tempDisplay && temperature !== '' && temperature !== undefined) {
            context.elements.tempDisplay.innerText = formatTemperature(temperature, context);
        }
    }
}

export function changeTargetTempLow(context) {
    const targetTempLow = getAttribute(context, "target_temp_low");
    const hideTargetTempLow = context.config.hide_target_temp_low;
    const state = getState(context);

    const shouldHideLow = state === 'unavailable' || targetTempLow === '' || targetTempLow === undefined || hideTargetTempLow;

    if (shouldHideLow) {
        context.elements.targetTemperatureContainer?.classList.add('hidden');
        context.elements.lowTempContainer?.classList.add('hidden');
    } else {
        context.elements.targetTemperatureContainer?.classList.remove('hidden');
        context.elements.lowTempContainer?.classList.remove('hidden');
    }

    if (targetTempLow !== context.previousTargetTempLow) {
        context.previousTargetTempLow = targetTempLow;
        if (context.elements.lowTempDisplay && targetTempLow !== '' && targetTempLow !== undefined) {
            context.elements.lowTempDisplay.innerText = formatTemperature(targetTempLow, context);
        }
    }
}

export function changeTargetTempHigh(context) {
    const targetTempHigh = getAttribute(context, "target_temp_high");
    const hideTargetTempHigh = context.config.hide_target_temp_high;
    const state = getState(context);

    const shouldHideHigh = state === 'unavailable' || targetTempHigh === '' || targetTempHigh === undefined || hideTargetTempHigh;

    if (shouldHideHigh) {
        context.elements.highTempContainer?.classList.add('hidden');
    } else {
        context.elements.highTempContainer?.classList.remove('hidden');
        context.elements.targetTemperatureContainer?.classList.remove('hidden');
    }

    if (targetTempHigh !== context.previousTargetTempHigh) {
        context.previousTargetTempHigh = targetTempHigh;
        if (context.elements.highTempDisplay && targetTempHigh !== '' && targetTempHigh !== undefined) {
            context.elements.highTempDisplay.innerText = formatTemperature(targetTempHigh, context);
        }
    }
}

export function changeStyle(context) {
    setLayout(context);
    handleCustomStyles(context);

    // The state alone is not the whole signal: a thermostat starts and stops
    // heating, and a humidifier starts and stops running, without their state
    // ever changing. The colour is its own memo instead, so the card follows the
    // action it is taking and the DOM is still only written when it moves.
    const backgroundColor = `var(--bubble-climate-background-color, ${getClimateColor(context)})`;

    if (context.previousClimateBackground !== backgroundColor) {
        context.previousClimateBackground = backgroundColor;
        context.elements.background.style.backgroundColor = backgroundColor;
    }
}
