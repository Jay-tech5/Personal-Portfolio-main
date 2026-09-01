/**
 * Global constants for UI, performance, and animation configurations
 */

// Scroll & Navigation
export const SCROLL_OFFSET_THRESHOLD = 50; // Navbar background change threshold
export const NAV_ACTIVE_SECTION_OFFSET = 120; // Navbar active section detection
export const BACK_TO_TOP_THRESHOLD = 400; // Scroll position to show back-to-top button

// Z-Index Stack (maintain consistent hierarchy)
export const Z_INDEX = {
  PARTICLE_BACKGROUND: 0,
  CONTENT: 1,
  NAVBAR: 1000,
  NAVBAR_MOBILE_MENU: 1001, // Higher than navbar to stay visible
  LOADING_SCREEN: 10000,
  BACK_TO_TOP: 50,
} as const;

// Animation Timings (milliseconds)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 600,
  LOADING_ITEM_1: 200,
  LOADING_ITEM_2: 600,
  LOADING_ITEM_3: 1200,
  SPINNER: 100,
  FLOATING_ICON: 3000, // Loop duration
  TYPING: 50, // Per character
} as const;

// Animation Delays
export const ANIMATION_DELAY = {
  FLOATING_ICON_1: 0,
  FLOATING_ICON_2: 500, // 0.5s
  FLOATING_ICON_3: 1000, // 1.0s
  INTERSECTION_OBSERVER: 0.3, // Threshold
} as const;

// Image Dimensions
export const IMAGE_SIZES = {
  PROFILE_AVATAR: { width: 280, height: 280 },
  TESTIMONIAL_AVATAR: { width: 48, height: 48 },
  PROJECT_THUMBNAIL: { width: 300, height: 180, aspectRatio: 16 / 9 },
  CERTIFICATION_ICON: { width: 120, height: 120 },
  CERTIFICATION_THUMBNAIL: { width: 150, height: 150 },
} as const;

// Debounce/Throttle Timings
export const DEBOUNCE_DELAY = {
  SEARCH_INPUT: 300,
  RESIZE: 100,
  SCROLL: 100, // For scroll progress bar
} as const;

// Responsive Breakpoints (Bootstrap equivalent)
export const BREAKPOINTS = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1400,
} as const;

// Content Limits
export const LIMITS = {
  TESTIMONIALS_PER_PAGE: 1,
  MIN_SKILLS_PER_CATEGORY: 5,
  MAX_VISIBLE_CERTIFICATIONS: 6,
} as const;

// Accessibility
export const A11Y = {
  SKIP_LINK_ID: "skip-to-content",
  REDUCED_MOTION_QUERY: "(prefers-reduced-motion: reduce)",
} as const;

// Font Display
export const FONT_DISPLAY = "swap"; // Prevent invisible text flash
