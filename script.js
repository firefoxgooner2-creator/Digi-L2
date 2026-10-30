const touchSlides = window.matchMedia("(hover: none)");

if (touchSlides.matches) {
  document.querySelectorAll("main section[tabindex]").forEach((section) => {
    section.addEventListener("click", () => {
      section.classList.toggle("is-revealed");
    });
  });
}