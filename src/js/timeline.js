/* ============================================================
   TIMELINE.JS — Path draw animato + milestone bounce
   ============================================================ */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initTimeline() {
  const section = document.querySelector('.timeline');
  if (!section) return;

  if (prefersReduced) {
    // Rende visibile tutto senza animare
    section.querySelectorAll('.timeline__card, .timeline__dot').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // ─── Path draw (stroke-dashoffset) ───
  const path = section.querySelector('.timeline__path');
  if (path) {
    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 30%',
        scrub: 1.5,
      },
    });
  }

  // ─── Cards: bounce cartoon all'entrata ───
  const cards = section.querySelectorAll('.timeline__card');
  cards.forEach((card, i) => {
    gsap.from(card, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        once: true,
      },
    });
  });

  // ─── Dots: pop-in ───
  const dots = section.querySelectorAll('.timeline__dot');
  dots.forEach((dot, i) => {
    gsap.from(dot, {
      scale: 0,
      duration: 0.5,
      ease: 'back.out(2)',
      delay: i * 0.1 + 0.1,
      scrollTrigger: {
        trigger: dot,
        start: 'top 90%',
        once: true,
      },
    });
  });
}
