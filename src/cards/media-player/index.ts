import { changeState, changeSubButtonState } from "../../tools/global-changes.ts";
import {
    changeStatus,
    changeName,
    changeMediaInfo,
    changeDisplayedInfo,
    changeIcon,
    changeSlider,
    changePlayPauseIcon,
    changeMuteIcon,
    changePowerIcon,
    changeStyle
} from './changes.ts';
import {
    createSmallStructure,
    createLargeStructure,
    createStructure
} from './create.ts';

export function handleMediaPlayer(context) {
    if (context.cardType !== `media-player`) {
        createStructure(context);
    }

    changeStatus(context);
    changeName(context);
    changeMediaInfo(context);
    changeDisplayedInfo(context);
    changeIcon(context);
    changeState(context);
    changeSlider(context);
    changePlayPauseIcon(context);
    changeMuteIcon(context);
    changePowerIcon(context);
    changeSubButtonState(context, context.content, context.elements.buttonContainer, true);
    changeStyle(context);
}
