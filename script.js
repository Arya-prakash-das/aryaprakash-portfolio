// 🍃 Falling Leaves
function createLeaf() {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");
    leaf.innerHTML = "🍃";

    leaf.style.left = Math.random() * window.innerWidth + "px";
    leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
    leaf.style.opacity = Math.random();

    document.body.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 10000);
}

setInterval(createLeaf, 400);


// ✨ Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);