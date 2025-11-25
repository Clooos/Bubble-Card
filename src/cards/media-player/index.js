import { changeState, changeName, changeStatus } from "../../components/base-card/changes.js";
import { changeSubButtons } from "../../components/sub-button/changes.js";
import {
    changeMediaInfo,
    changeDisplayedInfo,
    changeBackground,
    changeSlider,
    changePlayPauseIcon,
    changeMuteIcon,
    changePowerIcon,
    changeStyle,
    changeMediaIcon
} from './changes.js';
import { createStructure } from './create.js';

export function handleMediaPlayer(context) {
    if (context.cardType !== `media-player`) {
        createStructure(context);
    }

    changeStatus(context);
    changeName(context);
    changeMediaInfo(context);
    changeDisplayedInfo(context);
    changeMediaIcon(context);
    changeBackground(context);
    changeState(context);
    changeSlider(context);
    changePlayPauseIcon(context);
    changeMuteIcon(context);
    changePowerIcon(context);
    changeSubButtons(context);
    changeStyle(context);
}
