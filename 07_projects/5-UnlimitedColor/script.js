// generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

let intervalId;

function startChangingColor() {
    // Prevent multiple intervals
    if (!intervalId) {
        intervalId = setInterval(() => {
            const newColor = randomColor();
            document.body.style.backgroundColor = newColor;
            document.querySelector("#colorCode").innerText = newColor;
        }, 1000);
    }
}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;
}

// Event Listeners
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);