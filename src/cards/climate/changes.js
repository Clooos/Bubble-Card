import { 
    getClimateColor, 
} from './helpers.js';
import { 
    getState,
    getAttribute,
    setLayout
} from '../../tools/utils.js';
import { handleCustomStyles } from '../../tools/style-processor.js';

export function changeTemperature(context) {
    const temperature = getAttribute(context, "temperature");

    if (temperature === '') {
        context.elements.temperatureContainer?.classList.add('hidden');
    } else {
        context.elements.temperatureContainer?.classList.remove('hidden');
    }

    if (temperature !== context.previousTemp) {
        context.previousTemp = temperature;
        if (context.elements.tempDisplay) {
            context.elements.tempDisplay.innerText = parseFloat(temperature).toFixed(1);
        }
    }
}

export function changeTargetTempLow(context) {
    const targetTempLow = getAttribute(context, "target_temp_low");
    const hideTargetTempLow = context.config.hide_target_temp_low;

    if (targetTempLow === '') {
        context.elements.targetTemperatureContainer?.classList.add('hidden');
    } else {
        context.elements.targetTemperatureContainer?.classList.remove('hidden');
    }

    if (hideTargetTempLow) {
        context.elements.lowTempContainer?.classList.add('hidden');
    } else {
        context.elements.lowTempContainer?.classList.remove('hidden');
    }

    if (targetTempLow !== context.previousTargetTempLow) {
        context.previousTargetTempLow = targetTempLow;
        if (context.elements.lowTempDisplay) {
            context.elements.lowTempDisplay.innerText = parseFloat(targetTempLow).toFixed(1);
        }
    }
}

export function changeTargetTempHigh(context) {
    const targetTempHigh = getAttribute(context, "target_temp_high");
    const hideTargetTempHigh = context.config.hide_target_temp_high;

    if (hideTargetTempHigh) {
        context.elements.highTempContainer?.classList.add('hidden');
    } else {
        context.elements.highTempContainer?.classList.remove('hidden');
    }

    if (targetTempHigh !== context.previousTargetTempHigh) {
        context.previousTargetTempHigh = targetTempHigh;
        if (context.elements.highTempDisplay) {
            context.elements.highTempDisplay.innerText = parseFloat(targetTempHigh).toFixed(1);
        }
    }
}

export function changeStyle(context) {
    setLayout(context);
    handleCustomStyles(context);

    const state = getState(context);

    if (context.previousState !== state) {
        context.previousState = state;
        const element = context.elements.background;
        element.style.backgroundColor = `var(--bubble-climate-background-color, ${getClimateColor(context)})`;
    }

    const cardLayout = context.config.card_layout;
    const dropdown = context.elements.hvacModeDropdown;
}