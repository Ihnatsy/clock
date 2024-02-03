export function ControlButtonElement(title, func) {
    function callbackFunc() {
        func()
    }

    const button = document.createElement('button')
    button.addEventListener('click', callbackFunc)

    const btnTitle = document.createElement('span')
    btnTitle.innerText = title
    button.append(btnTitle)

    return button
}
