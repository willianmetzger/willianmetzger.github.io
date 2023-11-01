const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contact = document.querySelector(".contacts-icon");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    contact.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    contact.classList.remove("active");
}))