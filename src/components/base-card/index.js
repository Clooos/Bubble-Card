
import { createBaseStructure } from './create.js';
import { updateContentContainerFixedClass } from './changes.js';

export const defaultOptions = {
    type: 'base',
    appendTo: null,
    baseCardStyles: null,
    styles: '',
    withMainContainer: true,
    withBaseElements: true,
    withFeedback: true,
    withImage: true,
    withSlider: false,
    holdToSlide: false,
    readOnlySlider: false,
    withCustomStyle: true,
    withState: true,
    withBackground: true,
    withSubButtons: false,
    iconActions: true,
    buttonActions: false
};

export { createBaseStructure, updateContentContainerFixedClass };