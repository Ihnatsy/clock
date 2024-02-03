import {subscribe, time, updateTime} from "./data.js";
import {clockContainer} from "./components/clock.js";

function clockUi() {
    const rootElement = document.getElementById('root')
    rootElement.innerHTML = ''
    const clockElement = clockContainer()
    rootElement.append(clockElement)
}

clockUi()
subscribe(clockUi)

