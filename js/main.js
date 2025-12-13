/**
 * ===================================
 * Library Website - Main JavaScript
 * ===================================
 * 
 * This file handles common functionality across all pages:
 * - Mobile navigation menu toggle
 * - Active navigation link highlighting
 * - Language switching (English/Arabic)
 * - RTL/LTR layout direction
 * - localStorage for saving language preference
 */

// Wait for the page to fully load before running code
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    
    // Get the mobile menu button and navigation links
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Add click event to toggle mobile menu
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide menu
            navLinks.classList.toggle('active');
            
            // Change the icon between menu (☰) and close (✕)
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.textContent = '✕';
            } else {
                mobileMenuBtn.textContent = '☰';
            }
        });
    }
    
    // ===================================
    // Active Navigation Link
    // ===================================
    
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Find all navigation links
    const allNavLinks = document.querySelectorAll('.nav-links a');
    
    // Loop through links and add 'active' class to current page
    allNavLinks.forEach(function(link) {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
    
    // ===================================
    // Language Switching System
    // ===================================
    
    // Initialize language on page load
    initializeLanguage();
    
    // Get the language toggle button
    const langToggleBtn = document.getElementById('lang-toggle');
    
    // Add click event to toggle language
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', function() {
            toggleLanguage();
        });
    }
});

/**
 * ===================================
 * LANGUAGE FUNCTIONS
 * ===================================
 */

/**
 * Initialize language when page loads
 * - Checks localStorage for saved language preference
 * - Defaults to English if no preference saved
 */
function initializeLanguage() {
    // Get saved language from localStorage, default to 'en'
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Apply the saved language
    applyLanguage(savedLang);
}

/**
 * Toggle between English and Arabic
 */
function toggleLanguage() {
    // Get current language
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    
    // Switch to the other language
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Apply the new language
    applyLanguage(newLang);
    
    // Save preference to localStorage
    localStorage.setItem('selectedLanguage', newLang);
}

/**
 * Apply language to the page
 * @param {string} lang - Language code ('en' or 'ar')
 */
function applyLanguage(lang) {
    // Set the lang attribute on the HTML element
    document.documentElement.setAttribute('lang', lang);
    
    // Set the direction (LTR for English, RTL for Arabic)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all text content on the page
    updatePageText(lang);
    
    // Update the language toggle button text
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.textContent = getTranslation('lang_toggle', lang);
    }
    
    // Dispatch custom event for other scripts to know language changed
    // This is used by books.js and book-details.js to update their content
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

/**
 * Update all text content on the page based on language
 * @param {string} lang - Language code ('en' or 'ar')
 */
function updatePageText(lang) {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Loop through each element and update its text
    elements.forEach(function(element) {
        // Get the translation key from the data-i18n attribute
        const key = element.getAttribute('data-i18n');
        
        // Get the translated text
        const translatedText = getTranslation(key, lang);
        
        // Update the element's text content
        if (translatedText) {
            element.textContent = translatedText;
        }
    });
}

/**
 * Get current language
 * @returns {string} - Current language code ('en' or 'ar')
 */
function getCurrentLanguage() {
    return document.documentElement.getAttribute('lang') || 'en';
}
