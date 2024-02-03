import {ControlButtonElement} from "./button.js";
import {startClock, stopClock} from "../data.js";

export function buttonsPanel() {
    const controlsBtns = document.createElement('div')
    controlsBtns.className = "buttonCase"
    const startButton = ControlButtonElement('Запустить часы', startClock)
    const stopButton = ControlButtonElement('Остановить часы', stopClock)
    controlsBtns.append(startButton, stopButton)
    return controlsBtns
}