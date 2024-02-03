import {buttonsPanel} from "./controlPanel.js";
import {timePanel} from "./timePanel.js";
import {time} from "../data.js";

export function clockContainer() {
    const container = document.createElement('div')

    const currentTime = timePanel(time)
    const controls = buttonsPanel()

    container.append(currentTime, controls )
    return container
}