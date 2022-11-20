(() => {
  const menuBtnOpen = document.querySelector("[data-menu-open]");
  const menuBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnOpen.addEventListener("click", () => {
    const expanded =
      menuBtnOpen.getAttribute("aria-expanded") === "true" || false;

    menuBtnOpen.classList.toggle("is-open");
    menuBtnOpen.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
  menuBtnClose.addEventListener("click", () => {
    const expanded =
      menuBtnClose.getAttribute("aria-expanded") === "true" || false;

    menuBtnClose.classList.toggle("is-open");
    menuBtnClose.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();