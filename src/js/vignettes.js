/* ============================================================
   VIGNETTES.JS — Toggle .vignette--active on hover
   ============================================================ */

export function initVignettes() {
  const vignettes = document.querySelectorAll('.vignette');
  if (!vignettes.length) return;

  vignettes.forEach((v) => {
    v.addEventListener('mouseenter', () => v.classList.add('vignette--active'));
    v.addEventListener('mouseleave', () => v.classList.remove('vignette--active'));

    // Touch support: tap per toggle
    v.addEventListener('touchstart', (e) => {
      e.preventDefault();
      v.classList.toggle('vignette--active');
    }, { passive: false });
  });
}
