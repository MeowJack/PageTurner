/**
 * ===================================
 * Library Website - Book Details Script
 * ===================================
 * 
 * HOW THIS WORKS:
 * 1. When someone clicks a book on the books page, they come here
 * 2. The book ID is passed in the URL (e.g., book.html?id=1)
 * 3. This script reads the ID from the URL
 * 4. It finds the matching book in our data
 * 5. It displays all the book information dynamically
 * 6. When language changes, the content is re-rendered with translations
 * 
 * URL PARAMETERS EXPLAINED:
 * - The URL "book.html?id=1" contains a parameter called "id" with value "1"
 * - We use URLSearchParams to extract this value
 * - This is how we know which book the user wants to see
 */

// Store the book ID globally so we can use it when language changes
let currentBookId = null;

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the book ID from URL and render
    initBookDetails();
    
    // Listen for language change events (dispatched by main.js)
    document.addEventListener('languageChanged', function(event) {
        // Re-render book details when language changes
        if (currentBookId) {
            renderBookDetails(currentBookId);
        }
    });
});

/**
 * Initialize book details page
 */
function initBookDetails() {
    // Get the container where book details will be displayed
    const detailsContainer = document.getElementById('book-details');
    
    // Check if container exists
    if (!detailsContainer) {
        console.error('Book details container not found!');
        return;
    }
    
    // Get current language
    const currentLang = getCurrentLanguage();
    
    // ===================================
    // Step 1: Get the book ID from the URL
    // ===================================
    
    // URLSearchParams helps us read URL parameters easily
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
    
    // Check if an ID was provided
    if (!bookId) {
        showError(detailsContainer, getTranslation('no_book_selected', currentLang));
        return;
    }
    
    // Store the book ID for later use
    currentBookId = bookId;
    
    // Render the book details
    renderBookDetails(bookId);
}

/**
 * Render book details for the given book ID
 * @param {string} bookId - The book ID
 */
function renderBookDetails(bookId) {
    const detailsContainer = document.getElementById('book-details');
    const currentLang = getCurrentLanguage();
    
    // ===================================
    // Step 2: Find the book in our data
    // ===================================
    
    const book = getBookById(bookId);
    
    // Check if the book was found
    if (!book) {
        showError(detailsContainer, getTranslation('book_not_found', currentLang));
        return;
    }
    
    // ===================================
    // Step 3: Display the book details
    // ===================================
    
    displayBookDetails(detailsContainer, book, currentLang);
    
    // Update the page title with the book name
    const translatedBook = getTranslatedBook(book.id, currentLang);
    document.title = translatedBook.title + ' - PageTurner Library';
}

/**
 * Displays the book details in the container
 * @param {HTMLElement} container - The container element
 * @param {Object} book - The book object with all details
 * @param {string} lang - Current language code ('en' or 'ar')
 */
function displayBookDetails(container, book, lang) {
    // Get translated book data
    const translatedBook = getTranslatedBook(book.id, lang);
    
    // Get translated labels
    const backText = getTranslation('back_to_books', lang);
    const releasedLabel = getTranslation('released_label', lang);
    const categoryLabel = getTranslation('category_label', lang);
    const aboutBookTitle = getTranslation('about_book', lang);
    
    // Determine cover HTML - use image if available, otherwise placeholder
    let coverHtml;
    if (book.coverImage) {
        coverHtml = `<img src="${escapeHtml(book.coverImage)}" alt="${escapeHtml(translatedBook.title)} cover" class="book-details-cover" onerror="this.parentElement.innerHTML='📖'; this.parentElement.classList.add('book-details-cover-placeholder');">`;
    } else {
        coverHtml = `<div class="book-details-cover-placeholder">📖</div>`;
    }
    
    // Build the HTML for the book details
    // Using template literals (backticks) for easier multi-line strings
    
    const html = `
        <a href="books.html" class="back-btn">
            ${escapeHtml(backText)}
        </a>
        
        <div class="book-details-container">
            <div class="book-details-header">
                <div class="book-cover-wrapper">
                    ${coverHtml}
                </div>
                
                <div class="book-details-info">
                    <h1 class="book-details-title">${escapeHtml(translatedBook.title)}</h1>
                    <p class="book-details-author">${getTranslation('by_author', lang)} ${escapeHtml(translatedBook.author)}</p>
                    
                    <div class="book-meta">
                        <span class="book-meta-item">
                            <span class="book-meta-label">${escapeHtml(releasedLabel)}</span> ${escapeHtml(translatedBook.releaseDate)}
                        </span>
                        <span class="book-meta-item">
                            <span class="book-meta-label">${escapeHtml(categoryLabel)}</span> ${escapeHtml(translatedBook.category)}
                        </span>
                    </div>
                </div>
            </div>
            
            <div class="book-description">
                <h3>${escapeHtml(aboutBookTitle)}</h3>
                <p>${escapeHtml(translatedBook.description)}</p>
            </div>
        </div>
    `;
    
    // Insert the HTML into the container
    container.innerHTML = html;
}

/**
 * Shows an error message
 * @param {HTMLElement} container - The container element
 * @param {string} message - The error message to display
 */
function showError(container, message) {
    const currentLang = getCurrentLanguage();
    const backText = getTranslation('back_to_books', currentLang);
    
    container.innerHTML = `
        <a href="books.html" class="back-btn">
            ${escapeHtml(backText)}
        </a>
        <div class="error-message">
            <p>${escapeHtml(message)}</p>
        </div>
    `;
}

/**
 * Escapes HTML special characters to prevent XSS attacks
 * This is a security best practice when displaying user data
 * @param {string} text - The text to escape
 * @returns {string} - The escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Helper function to get current language
 * Checks localStorage first, then HTML attribute, then defaults to 'en'
 * @returns {string} - Current language code
 */
function getCurrentLanguage() {
    // First, check localStorage for saved preference (most reliable)
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        return savedLang;
    }
    // Fallback: read from HTML lang attribute
    return document.documentElement.getAttribute('lang') || 'en';
}
