// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "block";
    mobileNav.style.display = isOpen ? "none" : "block";
    navToggle.textContent = isOpen ? "Menu" : "Close";
  });
}

// WhatsApp order buttons
const phone = "254768043466";
const message = encodeURIComponent(
  "Hi Apparels by Amani, I’d like to order. Please share available options and prices."
);
const waLink = `https://wa.me/${phone}?text=${message}`;

const waBtn1 = document.getElementById("whatsappBtn");
const waBtn2 = document.getElementById("whatsappBtn2");

if (waBtn1) {
  waBtn1.href = waLink;
  waBtn1.target = "_blank";
  waBtn1.rel = "noreferrer";
}

if (waBtn2) {
  waBtn2.href = waLink;
  waBtn2.target = "_blank";
  waBtn2.rel = "noreferrer";
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
