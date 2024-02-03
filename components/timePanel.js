export function timePanel(timeNow) {
    let currentTime = document.createElement('h1')

    const hoursNow = timeNow.hours >= 0 && timeNow.hours <= 9 ? '0' + timeNow.hours : timeNow.hours
    const minutesNow = timeNow.minutes >= 0 && timeNow.minutes <= 9 ? '0' + timeNow.minutes : timeNow.minutes
    const secondsNow = timeNow.seconds >= 0 && timeNow.seconds <= 9 ? '0' + timeNow.seconds : timeNow.seconds

    currentTime.append(hoursNow + ':' + minutesNow + ':' + secondsNow)
    return currentTime
}