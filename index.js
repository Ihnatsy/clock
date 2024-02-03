let timerId; // переменная, которая будет хранить ID таймера


//const startButton = ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
// startButton.ЭДэВЕНТлИСТНЕР('ТЯП', function () {
//     // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
//     timerId = СЕТиНТРЕВАЛ(updateClock, ОДНАсЕКУНДА); // запускаем  updateClock() каждую секунду
// });

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
});


//const stopButton = ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
// stopButton.addEventListener('ТЯП', function () {
//     // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
//     clearInterval(timerId); // останавливаем таймер
// });

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    let secondsNow = seconds >= 0 & seconds <=9 ? '0'+ seconds : seconds
    clock.textContent = hours + ':' + minutes + ':' + secondsNow;
}
