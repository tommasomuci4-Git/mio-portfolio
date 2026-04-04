/* ============================================================
   ANIMATIONS.JS — GSAP ScrollTrigger: tutti i reveal
   ============================================================ */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Rispetta prefers-reduced-motion
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initAnimations() {
  if (prefersReduced) {
    // Rende visibili tutti gli elementi senza animare
    document.querySelectorAll('.js-fade').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // ─── Utility: fade-up riutilizzabile ───
  const fadeUp = (selector, opts = {}) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    gsap.from(selector, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: opts.stagger ?? 0.12,
      scrollTrigger: {
        trigger: selector,
        start: 'top 88%',
        once: true,
        ...(opts.scrollTrigger ?? {}),
      },
      ...opts.gsap,
    });
  };

  // ─── Hero: animazione all'ingresso ───
  gsap.from('.hero__content > *', {
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.1,
    delay: 0.2,
  });
  gsap.from('.hero__visual', {
    scale: 0.9,
    opacity: 0,
    duration: 1.1,
    ease: 'power3.out',
    delay: 0.4,
  });

  // ─── Chi sono ───
  fadeUp('.chi-sono__text p', { stagger: 0.1 });
  fadeUp('.chi-sono__pill',   { stagger: 0.07 });

  // ─── Cosa faccio ───
  fadeUp('.cosa-faccio__card', { stagger: 0.15 });

  // ─── Skills ───
  fadeUp('.skills__item', { stagger: 0.06 });

  // ─── Progetti ───
  fadeUp('.progetto', { stagger: 0.12 });

  // ─── Blog ───
  fadeUp('.blog-card', { stagger: 0.1 });

  // ─── Curiosità ───
  gsap.from('.curiosita__card', {
    scale: 0.85,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.curiosita__grid',
      start: 'top 88%',
      once: true,
    },
  });

  // ─── Obiettivi ───
  fadeUp('.obiettivi__item', { stagger: 0.15 });

  // ─── Sezioni header generici ───
  fadeUp('.section__label');
  fadeUp('.section__title');
  fadeUp('.section__subtitle');
}
