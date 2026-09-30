import { Variants } from "framer-motion";

/**
 * Shared scroll-animation tokens for SALUS.
 * Keep every entrance in this file so timing/easing stays consistent
 * across the whole site instead of being re-invented per component.
 */

// Soft "ease-out-expo"-style curve — decelerates gently, never bounces.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Trigger once, a little before the element is fully in view, and never replay.
export const viewport = { once: true, margin: "-80px 0px -80px 0px" as const };

/** Fade + small upward drift. Used for headings, paragraphs, buttons, labels. */
export const fadeUp = (distance = 22, delay = 0): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  },
});

/** Plain fade, no movement — for background washes, gradients, fine print. */
export const fadeIn = (delay = 0, duration = 0.9): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration, delay, ease: EASE } },
});

/** Premium image reveal: fade + very subtle scale-down + slight rise. */
export const revealImage = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 1.04, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, delay, ease: EASE },
  },
});

/**
 * Fade + horizontal drift. x is a physical (not logical) offset, so a
 * positive value always enters from the right regardless of RTL/LTR —
 * used for the CTA copy block, which sits flush right.
 */
export const slideIn = (distance = 28, delay = 0): Variants => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, delay, ease: EASE },
  },
});

/** Wrap a group of children in this, then give each child a `visible` variant. */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
