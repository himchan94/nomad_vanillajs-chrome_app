const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", SHOWING_CN = "showing";


function paintGreeting(text) {
    greeting.innerText = `Hello ${text}`
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}


function askForNmae() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN);
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForNmae();
    } else {
        paintGreeting(currentUser);
    }

}

function init() {
    loadName();
}

init();