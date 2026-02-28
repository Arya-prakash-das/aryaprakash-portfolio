// Typing Animation
const roles = [
    "Digital Marketer",
    "Backend Developer",
    "FastAPI Specialist",
    "Machine Learning Enthusiast"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typing = document.querySelector(".typing");
    const fullText = roles[index];

    if (!isDeleting) {
        typing.textContent = fullText.substring(0, charIndex++);
        if (charIndex > fullText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typing.textContent = fullText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

// Scroll Reveal
function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Dark / Light Toggle
document.querySelector(".toggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
});