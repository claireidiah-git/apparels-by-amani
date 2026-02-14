document.addEventListener("DOMContentLoaded", function () {

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
toggle.addEventListener("click", function () {
navLinks.classList.toggle("active");
const isOpen = navLinks.classList.contains("active");
toggle.setAttribute("aria-expanded", isOpen);
});
}

const yearEl = document.getElementById("year");
if (yearEl) {
yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener("click", function (e) {
const targetId = this.getAttribute("href");
if (targetId.length > 1) {
e.preventDefault();
const target = document.querySelector(targetId);
if (target) {
target.scrollIntoView({ behavior: "smooth" });
}
}
});
});

});
