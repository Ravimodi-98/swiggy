// Fade-in animation on page load
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.2s ease-in-out";
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 200);
});

// Location select interaction
const placeSelect = document.getElementById("place");

placeSelect.addEventListener("change", () => {
    alert("Location selected: " + placeSelect.value);
});

// Hover animation for search box
const searchBox = document.querySelector(".sc-dBFDNq");

searchBox.addEventListener("mouseenter", () => {
    searchBox.style.transform = "scale(1.05)";
    searchBox.style.transition = "0.3s";
});

searchBox.addEventListener("mouseleave", () => {
    searchBox.style.transform = "scale(1)";
});
// Smooth text re-animation on reload
window.addEventListener("load", () => {
    const text = document.querySelector("main p");
    text.style.opacity = "0";

    setTimeout(() => {
        text.style.opacity = "1";
        text.style.transition = "opacity 1.2s ease";
    }, 300);
});
