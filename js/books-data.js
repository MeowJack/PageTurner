/**
 * ===================================
 * Library Website - Books Data
 * ===================================
 * 
 * This file contains all the book data stored in a JavaScript array.
 * Each book is an object with properties like id, title, author, etc.
 * 
 * HOW IT WORKS:
 * - The 'booksData' array holds all book information
 * - Each book has a unique 'id' used to identify it
 * - Other pages import this data to display books
 */

const booksData = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        releaseDate: "July 11, 1960",
        category: "Classic Fiction",
        coverImage: "images/book1.jpg",
        description: "A gripping tale of racial injustice and childhood innocence in the American South. Through the eyes of young Scout Finch, we witness her father Atticus defend a Black man accused of a crime he didn't commit. This Pulitzer Prize-winning novel explores themes of morality, compassion, and the destruction of innocence."
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        releaseDate: "June 8, 1949",
        category: "Dystopian Fiction",
        coverImage: "images/book2.jpg",
        description: "A haunting vision of a totalitarian future where Big Brother watches everything. Winston Smith works for the Ministry of Truth, rewriting history to match the Party's ever-changing version of reality. A powerful warning about the dangers of government overreach and the manipulation of truth."
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        releaseDate: "January 28, 1813",
        category: "Romance",
        coverImage: "images/book3.jpg",
        description: "The beloved story of Elizabeth Bennet and Mr. Darcy. Set in Georgian England, this witty novel explores themes of love, reputation, and class. Elizabeth must overcome her initial prejudice against the proud Mr. Darcy, while he must overcome his own pride to win her heart."
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        releaseDate: "April 10, 1925",
        category: "Classic Fiction",
        coverImage: "images/book4.jpg",
        description: "A portrait of the Jazz Age and the American Dream's corruption. Mysterious millionaire Jay Gatsby throws lavish parties at his Long Island mansion, all in hopes of reuniting with his lost love, Daisy Buchanan. A masterpiece exploring wealth, love, and the impossibility of recapturing the past."
    },
    {
        id: 5,
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        releaseDate: "May 30, 1967",
        category: "Magical Realism",
        coverImage: "images/book5.jpg",
        description: "The epic tale of the Buendía family across seven generations in the mythical town of Macondo. Blending reality with fantasy, this Nobel Prize-winning novel explores themes of solitude, fate, and the cyclical nature of history. A cornerstone of magical realism literature."
    },
    {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        releaseDate: "July 16, 1951",
        category: "Coming-of-Age",
        coverImage: "images/book6.jpg",
        description: "The story of Holden Caulfield, a teenage boy navigating the phoniness of the adult world after being expelled from prep school. Wandering through New York City, Holden grapples with alienation, identity, and the loss of innocence. A defining novel of teenage rebellion and angst."
    },
    {
        id: 7,
        title: "Brave New World",
        author: "Aldous Huxley",
        releaseDate: "1932",
        category: "Science Fiction",
        coverImage: "images/book7.jpg",
        description: "A chilling vision of a future society where humans are genetically modified and socially conditioned for predetermined roles. In this world of instant gratification and engineered happiness, Bernard Marx begins to question whether true freedom has been sacrificed for stability."
    },
    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        releaseDate: "September 21, 1937",
        category: "Fantasy",
        coverImage: "images/book8.jpg",
        description: "Bilbo Baggins, a comfort-loving hobbit, is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Along the way, he discovers courage he never knew he had and finds a mysterious ring that will shape the fate of Middle-earth."
    }
];

/**
 * Function to get all books
 * @returns {Array} - Array of all book objects
 */
function getAllBooks() {
    return booksData;
}

/**
 * Function to get a single book by its ID
 * @param {number} id - The unique ID of the book
 * @returns {Object|undefined} - The book object or undefined if not found
 */
function getBookById(id) {
    // Convert id to number in case it's passed as a string
    const bookId = parseInt(id);
    // Find and return the book with matching ID
    return booksData.find(book => book.id === bookId);
}

