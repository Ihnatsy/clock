import {ControlButtonElement} from "./button.js";
import {startClock, stopClock} from "../data.js";

export function buttonsPanel() {
    const controlsBtns = document.createElement('div')
    controlsBtns.className = "buttonCase"
    const startBTN = ControlButtonElement('Запустить часы', startClock)
    const stopBTN = ControlButtonElement('Остановить часы', stopClock)
    controlsBtns.append(startBTN, stopBTN)
    return controlsBtns
}