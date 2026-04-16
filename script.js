// Smooth scroll
function scrollToSection() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Typing animation
const text = "Aspiring Cloud & Operations Professional";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();

// Animated visitor counter (frontend only for now)
let count = 0;
let target = 100;

let interval = setInterval(() => {
    count++;
    document.getElementById("counter").innerText = count;

    if (count >= target) {
        clearInterval(interval);
    }
}, 30);