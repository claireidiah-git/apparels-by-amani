// Apparels by Amani – minimal interactions
// WhatsApp-only ordering

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // WhatsApp order button
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const phone = "254768043466";
      const message = encodeURIComponent(
        "Hi Apparels by Amani 👋 I’d like to place an order."
      );
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
  }
});
