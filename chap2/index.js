const title = document.querySelector("#title");

const BASE_COLOR = "yellow"
const OTHER_COLOR = "grey";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else if (currentColor === OTHER_COLOR) {
        title.style.color = BASE_COLOR;
    };
};

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);

};

init();

function handleOffline() {
    console.log("hi");

};

window.addEventListener("offline", handleOffline);

