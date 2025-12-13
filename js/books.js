/**
 * ===================================
 * Library Website - Books Page Script
 * ===================================
 * 
 * HOW THIS WORKS:
 * 1. When the page loads, this script runs
 * 2. It gets all books from the booksData array (defined in books-data.js)
 * 3. For each book, it creates HTML elements (cards) dynamically
 * 4. Each card is clickable and navigates to the book details page
 * 5. The book ID is passed in the URL so the details page knows which book to show
 * 6. When language changes, the books are re-rendered with translated content
 */

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Initial render of books
    renderBooks();
    
    // Listen for language change events (dispatched by main.js)
    document.addEventListener('languageChanged', function(event) {
        // Re-render books when language changes
        renderBooks();
    });
});

/**
 * Renders all books to the page
 */
function renderBooks() {
    // Get the container where books will be displayed
    const booksGrid = document.getElementById('books-grid');
    
    // Check if the container exists
    if (!booksGrid) {
        console.error('Books grid container not found!');
        return;
    }
    
    // Get current language
    const currentLang = getCurrentLanguage();
    
    // Get all books from our data
    const books = getAllBooks();
    
    // Check if we have books to display
    if (books.length === 0) {
        booksGrid.innerHTML = '<p class="error-message">' + getTranslation('no_books', currentLang) + '</p>';
        return;
    }
    
    // Clear any existing content
    booksGrid.innerHTML = '';
    
    // Loop through each book and create a card
    books.forEach(function(book) {
        // Create the book card element
        const bookCard = createBookCard(book, currentLang);
        // Add the card to the grid
        booksGrid.appendChild(bookCard);
    });
}

/**
 * Creates a book card element
 * @param {Object} book - The book object with all its properties
 * @param {string} lang - Current language code ('en' or 'ar')
 * @returns {HTMLElement} - The complete book card element
 */
function createBookCard(book, lang) {
    // Get translated book data
    const translatedBook = getTranslatedBook(book.id, lang);
    
    // Create the main card container (an anchor tag for clickability)
    const card = document.createElement('a');
    card.className = 'book-card';
    // Link to book details page with the book ID in the URL
    card.href = 'book.html?id=' + book.id;
    
    // Create the cover image container
    const coverDiv = document.createElement('div');
    coverDiv.className = 'book-cover-placeholder';
    
    // Check if the book has a cover image
    if (book.coverImage) {
        // Create image element
        const img = document.createElement('img');
        img.src = book.coverImage;
        img.alt = translatedBook.title + ' cover';
        
        // If image fails to load, show placeholder emoji
        img.onerror = function() {
            this.parentElement.innerHTML = '📖';
        };
        
        // Add image to cover div
        coverDiv.appendChild(img);
    } else {
        // No image available, show placeholder
        coverDiv.textContent = '📖';
    }
    
    // Create the book info section
    const infoDiv = document.createElement('div');
    infoDiv.className = 'book-info';
    
    // Create and add the title (use translated title)
    const title = document.createElement('h3');
    title.className = 'book-title';
    title.textContent = translatedBook.title;
    
    // Create and add the author (use translated author and "by" text)
    const author = document.createElement('p');
    author.className = 'book-author';
    author.textContent = getTranslation('by_author', lang) + ' ' + translatedBook.author;
    
    // Assemble the info section
    infoDiv.appendChild(title);
    infoDiv.appendChild(author);
    
    // Assemble the complete card
    card.appendChild(coverDiv);
    card.appendChild(infoDiv);
    
    return card;
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
