const illustrations = document.querySelectorAll<HTMLElement>("[data-architecture]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  illustrations.forEach((illustration) => {
    illustration.classList.add("is-ready");
    observer.observe(illustration);
  });

  // A preference change must never leave a partially drawn or hidden illustration.
  reducedMotion.addEventListener(
    "change",
    () => {
      observer.disconnect();
      illustrations.forEach((illustration) =>
        illustration.classList.remove("is-ready", "is-visible"),
      );
    },
    { once: true },
  );
}
