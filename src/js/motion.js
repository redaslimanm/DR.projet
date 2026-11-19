// GSAP + plugins, enregistrés une seule fois.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const reduceMotionQuery = '(prefers-reduced-motion: reduce)';
export const prefersReducedMotion = () => window.matchMedia(reduceMotionQuery).matches;

// En arabe (RTL), les déplacements horizontaux sont inversés
export const dirX = () => (document.documentElement.dir === 'rtl' ? -1 : 1);
