const roles = [
    "Digital Marketer",
    "Backend Developer",
    "FastAPI Specialist",
    "Machine Learning Enthusiast"
];

let index = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.querySelector(".typing");
    const text = roles[index];

    if (!deleting) {
        typing.textContent = text.substring(0, charIndex++);
        if (charIndex > text.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typing.textContent = text.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            index = (index + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelector(".toggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
});