function changeText() {
    document.getElementById("message").innerText = "JavaScript is awesome!";
}
function changeColor() {
    document.getElementById("message").style.color = "blue";
}

function greetUser() {
    let name = document.getElementById("userInput").value;
    if (name.trim() === "") {
        document.getElementById("greetingMessage").innerText = "Please enter a valid name!";
    } else {
        document.getElementById("greetingMessage").innerText = `Hello, ${name}! Welcome!`;
    }
}

function changeBackground() {
    const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("title").addEventListener("click", changeBackground);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("message").classList.add("fade-in");
});

function cycleBackgroundColors() {
    const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff"];
    let index = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 3000); // Change every 3 seconds
}

cycleBackgroundColors();
