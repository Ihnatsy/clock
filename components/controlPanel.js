import {ControlButtonElement} from "./button.js";
import {startClock, stopClock} from "../data.js";

export function buttonsPanel() {
    const controlsBtns = document.createElement('div')
    controlsBtns.className = "buttonCase"
    const startButton = ControlButtonElement('Запустить часы', startClock)
    startButton.id = "start"
    const stopButton = ControlButtonElement('Остановить часы', stopClock)
    stopButton.id = "stop"
    controlsBtns.append(startButton, stopButton)
    return controlsBtns
}