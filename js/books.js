// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayBooks();
});

// ========================================
// DISPLAY BOOKS
// ========================================

function displayBooks() {
    // Get the container element
    var container = document.getElementById('books-container');
    
    // Check if container exists
    if (!container) {
        return;
    }
    
    // Get all books
    var allBooks = getAllBooks();
    
    // Clear container
    container.innerHTML = '';
    
    // Loop through each book
    for (var i = 0; i < allBooks.length; i++) {
        var book = allBooks[i];
        
        // Create book card
        var card = createBookCard(book);
        
        // Add card to container
        container.appendChild(card);
    }
}

// ========================================
// CREATE BOOK CARD
// ========================================

function createBookCard(book) {
    // Create link element
    var card = document.createElement('a');
    card.href = 'book.html?id=' + book.id;
    card.className = 'book-card';
    
    // Create HTML for card
    card.innerHTML = 
        '<div class="book-cover-placeholder">' +
            '<img src="' + book.image + '" alt="' + book.title + '" class="book-cover" onerror="this.style.display=\'none\'; this.parentElement.innerHTML=\'📖\';">' +
        '</div>' +
        '<div class="book-info">' +
            '<h3>' + book.title + '</h3>' +
            '<p>by ' + book.author + '</p>' +
        '</div>';
    
    return card;
}
