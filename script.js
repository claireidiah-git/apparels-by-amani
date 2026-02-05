// Apparels by Amani - simple helper JS (safe for GitHub Pages)

function openWhatsApp() {
  // WhatsApp uses country code without +
  const phone = "254768043466";

  const message = [
    "Hi Apparels by Amani 👋",
    "I want to order:",
    "",
    "• Product:",
    "• Size:",
    "• Color:",
    "• Delivery or CBD pickup:",
    "",
    "Thank you!"
  ].join("\n");

  const url = https://wa.me/${phone}?text=${encodeURIComponent(message)};
  window.open(url, "_blank", "noopener,noreferrer");
}

document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("whatsappBtn");
  const btn2 = document.getElementById("whatsappBtn2");

  if (btn1) btn1.addEventListener("click", openWhatsApp);
  if (btn2) btn2.addEventListener("click", openWhatsApp);

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
