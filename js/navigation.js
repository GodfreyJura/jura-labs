const menuButton = document.querySelector(".nav-menu-button");
const navMenu = document.querySelector("#nav-menu");
const navMenuLinks = document.querySelectorAll("#nav-menu a");

function openMenu() {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");

    navMenu.setAttribute("aria-hidden", "false");
    navMenu.classList.add("is-open");
}

function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");

    navMenu.setAttribute("aria-hidden", "true");
    navMenu.classList.remove("is-open");
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

navMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
    if (
        navMenu.classList.contains("is-open") &&
        !navMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
    }
});