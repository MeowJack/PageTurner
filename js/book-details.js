// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayBookDetails();
});

// ========================================
// DISPLAY BOOK DETAILS
// ========================================

function displayBookDetails() {
    // Get container element
    var container = document.getElementById('book-details');
    
    // Check if container exists
    if (!container) {
        return;
    }
    
    // Get book ID from URL
    // URL looks like: book.html?id=1
    var urlParams = new URLSearchParams(window.location.search);
    var bookId = urlParams.get('id');
    
    // Check if ID exists
    if (!bookId) {
        container.innerHTML = '<p>No book selected.</p>';
        return;
    }
    
    // Get book data
    var book = getBookById(bookId);
    
    // Check if book exists
    if (!book) {
        container.innerHTML = '<p>Book not found.</p>';
        return;
    }
    
    // Create HTML for book details
    var html = 
        '<div class="book-details-header">' +
            '<div class="book-details-cover-placeholder">' +
                '<img src="' + book.image + '" alt="' + book.title + '" class="book-details-cover" onerror="this.style.display=\'none\'; this.parentElement.innerHTML=\'📖\';">' +
            '</div>' +
            '<div class="book-details-info">' +
                '<h1>' + book.title + '</h1>' +
                '<p class="author">by ' + book.author + '</p>' +
                '<div class="book-meta">' +
                    '<span><strong>Released:</strong> ' + book.year + '</span>' +
                    '<span><strong>Category:</strong> ' + book.category + '</span>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="book-description">' +
            '<h3>About This Book</h3>' +
            '<p>' + book.description + '</p>' +
        '</div>';
    
    // Add HTML to container
    container.innerHTML = html;
    
    // Update page title
    document.title = book.title + ' - PageTurner Library';
}
