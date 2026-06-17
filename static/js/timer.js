const weddingDate = new Date("2026-07-23T14:25:00");

function updateTimer() {

    const now = new Date();

    const diff = weddingDate - now;

    if (diff <= 0) return;

    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            diff / (1000 * 60 * 60)
        ) % 24;

    const minutes =
        Math.floor(
            diff / (1000 * 60)
        ) % 60;

    const seconds =
        Math.floor(
            diff / 1000
        ) % 60;

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateTimer();

setInterval(updateTimer, 1000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".fade-in")
    .forEach(el => observer.observe(el));