let notifySubscriber = null

export function subscribe(subscriber) {
    notifySubscriber = subscriber
}

export const time = {
    hours: '0',
    minutes: '0',
    seconds: '0'
}

let timeId

export function startClock() {
    clearInterval(timeId)
    timeId = setInterval(updateTime, 1000)
}

export function stopClock() {
    clearInterval(timeId)
}

export function updateTime() {
    const timeNow = new Date()
    time.hours = timeNow.getHours()
    time.minutes = timeNow.getMinutes()
    time.seconds = timeNow.getSeconds()
    notifySubscriber()
}