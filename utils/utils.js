export function burgerButtonClickHandler() {
  const burgerButton = document.querySelector('[data-burger-button]');
  const burgerMenu = document.querySelector('[data-burger-menu]');
  const body = document.body;

  function openBurger() {
    burgerMenu.classList.add('burger-menu--open');
    body.classList.add('scroll-lock');
  }

  function closeBurger() {
    burgerMenu.classList.remove('burger-menu--open');
    body.classList.remove('scroll-lock');
  }

  function toggleBurger() {
    const isOpen = burgerMenu.classList.contains('burger-menu--open');
    isOpen ? closeBurger() : openBurger();
  }

  burgerButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBurger();
  });

  document.addEventListener('click', (e) => {
    if (
      burgerMenu.classList.contains('burger-menu--open') &&
      !burgerMenu.contains(e.target) &&
      e.target !== burgerButton
    ) {
      closeBurger();
    }
  });
}

export function burgerButtonClickHandlerMobile() {
  document.addEventListener("DOMContentLoaded", () => {
    const burgerButtonMobile = document.querySelector("[data-burger-button-mobile]");
    const burgerMenuMobile = document.querySelector("[data-burger-menu-mobile]");
  
    if (burgerButtonMobile && burgerMenuMobile) {
      burgerButtonMobile.addEventListener("click", () => {
        const isOpen = burgerMenuMobile.classList.toggle("burger-menu--open");
        burgerButtonMobile.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector("[data-burger-menu-mobile]");
    if (!burgerMenu) return;
  
    function switchView(name) {
      const views = burgerMenu.querySelectorAll(".burger-menu__view");
      views.forEach(view => view.classList.remove("is-active"));
  
      const target = burgerMenu.querySelector(`[data-view="${name}"]`);
      if (target) {
        target.classList.add("is-active");
      }
    }
  
    burgerMenu.addEventListener("click", (e) => {
      const openTarget = e.target.closest("[data-open]");
      const backTarget = e.target.closest("[data-back]");
  
      if (openTarget) {
        e.preventDefault();
        const viewName = openTarget.getAttribute("data-open");
        switchView(viewName);
      }
  
      if (backTarget) {
        e.preventDefault();
        const viewName = backTarget.getAttribute("data-back");
        switchView(viewName);
      }
    });
  
    // Включаем главное меню по умолчанию
    const defaultView = burgerMenu.querySelector('[data-view="main"]');
    if (defaultView) {
      defaultView.classList.add("is-active");
    }
  });
  
}
