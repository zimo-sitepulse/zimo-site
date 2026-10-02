const header = document.querySelector<HTMLElement>("[data-site-header]");
const toggle = header?.querySelector<HTMLButtonElement>("[data-mobile-toggle]");
const mobileMenu = header?.querySelector<HTMLElement>("[data-mobile-menu]");

if (header && toggle && mobileMenu) {
  const productMenus = header.querySelectorAll<HTMLDetailsElement>(".product-menu");

  function closeProductMenus() {
    productMenus.forEach((menu) => {
      menu.open = false;
    });
  }

  const setMobileOpen = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    mobileMenu.classList.toggle("hidden", !open);
    if (!open) closeProductMenus();
  };

  toggle.addEventListener("click", () => {
    setMobileOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const target = event.target;

    productMenus.forEach((menu) => {
      if (!menu.contains(target) || target.closest("a")) menu.open = false;
    });

    if (!header.contains(target) || (mobileMenu.contains(target) && target.closest("a"))) {
      setMobileOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const openProductMenu = Array.from(productMenus).find((menu) => menu.open);
    if (openProductMenu) {
      openProductMenu.open = false;
      openProductMenu.querySelector("summary")?.focus();
    } else if (toggle.getAttribute("aria-expanded") === "true") {
      setMobileOpen(false);
      toggle.focus();
    }
  });

  // Keep hidden mobile menus and desktop dropdowns closed when the layout changes.
  window.matchMedia("(min-width: 1024px)").addEventListener("change", () => setMobileOpen(false));
}
