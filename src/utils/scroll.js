/**
 * Scroll Utilities
 * Centralized scroll functions to avoid duplication
 */

/**
 * Smooth scroll to a section by ID
 * @param {string} sectionId - The ID of the target section
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Smooth scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
