// ========================================
// BOOKS DATA
// Array of book objects
// ========================================

var books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: "1960",
        category: "Classic Fiction",
        image: "images/book1.jpg",
        description: "A gripping tale of racial injustice and childhood innocence in the American South. Through the eyes of young Scout Finch, we witness her father Atticus defend a Black man accused of a crime he didn't commit."
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        year: "1949",
        category: "Dystopian Fiction",
        image: "images/book2.jpg",
        description: "A haunting vision of a totalitarian future where Big Brother watches everything. Winston Smith works for the Ministry of Truth, rewriting history to match the Party's version of reality."
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: "1813",
        category: "Romance",
        image: "images/book3.jpg",
        description: "The beloved story of Elizabeth Bennet and Mr. Darcy. Set in Georgian England, this witty novel explores themes of love, reputation, and class."
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: "1925",
        category: "Classic Fiction",
        image: "images/book4.jpg",
        description: "A portrait of the Jazz Age and the American Dream's corruption. Mysterious millionaire Jay Gatsby throws lavish parties at his Long Island mansion."
    },
    {
        id: 5,
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        year: "1967",
        category: "Magical Realism",
        image: "images/book5.jpg",
        description: "The epic tale of the Buendía family across seven generations in the mythical town of Macondo. A cornerstone of magical realism literature."
    },
    {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: "1951",
        category: "Coming-of-Age",
        image: "images/book6.jpg",
        description: "The story of Holden Caulfield, a teenage boy navigating the phoniness of the adult world after being expelled from prep school."
    },
    {
        id: 7,
        title: "Brave New World",
        author: "Aldous Huxley",
        year: "1932",
        category: "Science Fiction",
        image: "images/book7.jpg",
        description: "A chilling vision of a future society where humans are genetically modified and socially conditioned for predetermined roles."
    },
    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: "1937",
        category: "Fantasy",
        image: "images/book8.jpg",
        description: "Bilbo Baggins, a comfort-loving hobbit, is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug."
    }
];

// ========================================
// HELPER FUNCTIONS
// ========================================

// Get a book by its ID
function getBookById(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            return books[i];
        }
    }
    return null;
}

// Get all books
function getAllBooks() {
    return books;
}
