document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ================================
// HAMBURGER MENU
// ================================

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
