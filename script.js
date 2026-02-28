// Falling Leaves (subtle)
function createLeaf() {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");
    leaf.innerHTML = "🍃";

    leaf.style.left = Math.random() * window.innerWidth + "px";
    leaf.style.animationDuration = 6 + Math.random() * 4 + "s";
    leaf.style.opacity = Math.random();

    document.body.appendChild(leaf);

    setTimeout(() => leaf.remove(), 10000);
}

setInterval(createLeaf, 800);


// Scroll Reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);