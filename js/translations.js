/**
 * ===================================
 * Library Website - Translations
 * ===================================
 * 
 * This file contains all text content in both English and Arabic.
 * Each text element has a unique key that matches the data-i18n attribute in HTML.
 * 
 * HOW IT WORKS:
 * - 'translations' object contains two sub-objects: 'en' and 'ar'
 * - Each key (like 'nav_home') maps to the translated text
 * - JavaScript reads these values and updates the page content
 */

const translations = {
    // ===================================
    // ENGLISH TRANSLATIONS
    // ===================================
    en: {
        // Navigation
        nav_home: "Home",
        nav_books: "Books",
        nav_about: "About",
        lang_toggle: "العربية",
        
        // Home Page - Hero Section
        hero_title: "Welcome to PageTurner Library",
        hero_subtitle: "Discover a world of knowledge and imagination. Browse our collection of timeless classics and find your next great read.",
        hero_btn: "Explore Our Books",
        
        // Home Page - Features Section
        features_title: "What We Offer",
        feature1_title: "Extensive Collection",
        feature1_desc: "Browse through our carefully curated collection of classic literature, fiction, and timeless masterpieces.",
        feature2_title: "Detailed Information",
        feature2_desc: "Get comprehensive details about each book including author, release date, category, and synopsis.",
        feature3_title: "Easy to Navigate",
        feature3_desc: "Our simple and intuitive design makes it easy to find and explore books that interest you.",
        
        // Home Page - About Section
        about_title: "About This Library",
        about1_title: "Educational Purpose",
        about1_desc: "This website was created as a college graduation project to demonstrate web development skills using HTML, CSS, and JavaScript.",
        about2_title: "Classic Literature",
        about2_desc: "We feature some of the most beloved and influential books in literary history, perfect for students and book lovers alike.",
        about3_title: "Responsive Design",
        about3_desc: "Enjoy a seamless experience on any device - whether you're browsing on desktop, tablet, or mobile phone.",
        
        // Books Page
        books_title: "Our Book Collection",
        books_subtitle: "Click on any book to see more details",
        loading: "Loading books",
        no_books: "No books available at the moment.",
        by_author: "by",
        
        // Book Details Page
        back_to_books: "← Back to Books",
        released_label: "Released:",
        category_label: "Category:",
        about_book: "About This Book",
        loading_details: "Loading book details",
        no_book_selected: "No book selected. Please go back and select a book.",
        book_not_found: "Book not found. The book you are looking for does not exist.",
        
        // About Page
        about_page_title: "About Us",
        about_page_subtitle: "Meet the team behind PageTurner Library",
        project_title: "College Graduation Project",
        project_desc: "This website was developed as a graduation project to demonstrate web development skills using HTML, CSS, and vanilla JavaScript. The project showcases a modern, responsive library website with bilingual support (English & Arabic).",
        team_title: "Our Team",
        tech_title: "Technologies Used",
        tech_html: "Structure & Content",
        tech_css: "Styling & Layout",
        tech_js: "Interactivity & Logic",
        
        // Footer
        footer_text: "© 2025 PageTurner Library. College Graduation Project."
    },
    
    // ===================================
    // ARABIC TRANSLATIONS
    // ===================================
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_books: "الكتب",
        nav_about: "من نحن",
        lang_toggle: "English",
        
        // Home Page - Hero Section
        hero_title: "مرحباً بكم في مكتبة بيج تيرنر",
        hero_subtitle: "اكتشف عالماً من المعرفة والخيال. تصفح مجموعتنا من الكلاسيكيات الخالدة وابحث عن كتابك القادم.",
        hero_btn: "استكشف كتبنا",
        
        // Home Page - Features Section
        features_title: "ما نقدمه",
        feature1_title: "مجموعة واسعة",
        feature1_desc: "تصفح مجموعتنا المختارة بعناية من الأدب الكلاسيكي والروايات والروائع الخالدة.",
        feature2_title: "معلومات تفصيلية",
        feature2_desc: "احصل على تفاصيل شاملة عن كل كتاب بما في ذلك المؤلف وتاريخ الإصدار والفئة والملخص.",
        feature3_title: "سهولة التصفح",
        feature3_desc: "تصميمنا البسيط والبديهي يجعل من السهل العثور على الكتب التي تهمك واستكشافها.",
        
        // Home Page - About Section
        about_title: "عن هذه المكتبة",
        about1_title: "غرض تعليمي",
        about1_desc: "تم إنشاء هذا الموقع كمشروع تخرج جامعي لإظهار مهارات تطوير الويب باستخدام HTML و CSS و JavaScript.",
        about2_title: "الأدب الكلاسيكي",
        about2_desc: "نعرض بعضاً من أكثر الكتب المحبوبة والمؤثرة في تاريخ الأدب، مثالية للطلاب ومحبي الكتب على حد سواء.",
        about3_title: "تصميم متجاوب",
        about3_desc: "استمتع بتجربة سلسة على أي جهاز - سواء كنت تتصفح من الكمبيوتر أو الجهاز اللوحي أو الهاتف المحمول.",
        
        // Books Page
        books_title: "مجموعة كتبنا",
        books_subtitle: "انقر على أي كتاب لرؤية المزيد من التفاصيل",
        loading: "جاري تحميل الكتب",
        no_books: "لا توجد كتب متاحة حالياً.",
        by_author: "بقلم",
        
        // Book Details Page
        back_to_books: "→ العودة إلى الكتب",
        released_label: "تاريخ الإصدار:",
        category_label: "الفئة:",
        about_book: "عن هذا الكتاب",
        loading_details: "جاري تحميل تفاصيل الكتاب",
        no_book_selected: "لم يتم اختيار كتاب. يرجى العودة واختيار كتاب.",
        book_not_found: "الكتاب غير موجود. الكتاب الذي تبحث عنه غير موجود.",
        
        // About Page
        about_page_title: "من نحن",
        about_page_subtitle: "تعرف على الفريق وراء مكتبة بيج تيرنر",
        project_title: "مشروع تخرج جامعي",
        project_desc: "تم تطوير هذا الموقع كمشروع تخرج لإظهار مهارات تطوير الويب باستخدام HTML و CSS و JavaScript. يعرض المشروع موقع مكتبة حديث ومتجاوب مع دعم ثنائي اللغة (الإنجليزية والعربية).",
        team_title: "فريقنا",
        tech_title: "التقنيات المستخدمة",
        tech_html: "البنية والمحتوى",
        tech_css: "التنسيق والتصميم",
        tech_js: "التفاعل والمنطق",
        
        // Footer
        footer_text: "© 2025 مكتبة بيج تيرنر. مشروع تخرج جامعي."
    }
};

/**
 * Book data translations
 * Contains translated versions of book information
 */
const booksTranslations = {
    en: {
        1: {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            releaseDate: "July 11, 1960",
            category: "Classic Fiction",
            description: "A gripping tale of racial injustice and childhood innocence in the American South. Through the eyes of young Scout Finch, we witness her father Atticus defend a Black man accused of a crime he didn't commit. This Pulitzer Prize-winning novel explores themes of morality, compassion, and the destruction of innocence."
        },
        2: {
            title: "1984",
            author: "George Orwell",
            releaseDate: "June 8, 1949",
            category: "Dystopian Fiction",
            description: "A haunting vision of a totalitarian future where Big Brother watches everything. Winston Smith works for the Ministry of Truth, rewriting history to match the Party's ever-changing version of reality. A powerful warning about the dangers of government overreach and the manipulation of truth."
        },
        3: {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            releaseDate: "January 28, 1813",
            category: "Romance",
            description: "The beloved story of Elizabeth Bennet and Mr. Darcy. Set in Georgian England, this witty novel explores themes of love, reputation, and class. Elizabeth must overcome her initial prejudice against the proud Mr. Darcy, while he must overcome his own pride to win her heart."
        },
        4: {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            releaseDate: "April 10, 1925",
            category: "Classic Fiction",
            description: "A portrait of the Jazz Age and the American Dream's corruption. Mysterious millionaire Jay Gatsby throws lavish parties at his Long Island mansion, all in hopes of reuniting with his lost love, Daisy Buchanan. A masterpiece exploring wealth, love, and the impossibility of recapturing the past."
        },
        5: {
            title: "One Hundred Years of Solitude",
            author: "Gabriel García Márquez",
            releaseDate: "May 30, 1967",
            category: "Magical Realism",
            description: "The epic tale of the Buendía family across seven generations in the mythical town of Macondo. Blending reality with fantasy, this Nobel Prize-winning novel explores themes of solitude, fate, and the cyclical nature of history. A cornerstone of magical realism literature."
        },
        6: {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            releaseDate: "July 16, 1951",
            category: "Coming-of-Age",
            description: "The story of Holden Caulfield, a teenage boy navigating the phoniness of the adult world after being expelled from prep school. Wandering through New York City, Holden grapples with alienation, identity, and the loss of innocence. A defining novel of teenage rebellion and angst."
        },
        7: {
            title: "Brave New World",
            author: "Aldous Huxley",
            releaseDate: "1932",
            category: "Science Fiction",
            description: "A chilling vision of a future society where humans are genetically modified and socially conditioned for predetermined roles. In this world of instant gratification and engineered happiness, Bernard Marx begins to question whether true freedom has been sacrificed for stability."
        },
        8: {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            releaseDate: "September 21, 1937",
            category: "Fantasy",
            description: "Bilbo Baggins, a comfort-loving hobbit, is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Along the way, he discovers courage he never knew he had and finds a mysterious ring that will shape the fate of Middle-earth."
        }
    },
    ar: {
        1: {
            title: "أن تقتل طائراً بريئاً",
            author: "هاربر لي",
            releaseDate: "١١ يوليو ١٩٦٠",
            category: "أدب كلاسيكي",
            description: "قصة مؤثرة عن الظلم العنصري وبراءة الطفولة في جنوب أمريكا. من خلال عيون الطفلة سكاوت فينش، نشهد دفاع والدها أتيكوس عن رجل أسود متهم بجريمة لم يرتكبها. تستكشف هذه الرواية الحائزة على جائزة بوليتزر موضوعات الأخلاق والرحمة وتدمير البراءة."
        },
        2: {
            title: "١٩٨٤",
            author: "جورج أورويل",
            releaseDate: "٨ يونيو ١٩٤٩",
            category: "أدب ديستوبي",
            description: "رؤية مخيفة لمستقبل شمولي حيث يراقب الأخ الأكبر كل شيء. يعمل وينستون سميث في وزارة الحقيقة، يعيد كتابة التاريخ ليتوافق مع نسخة الحزب المتغيرة باستمرار من الواقع. تحذير قوي من مخاطر تجاوز الحكومة والتلاعب بالحقيقة."
        },
        3: {
            title: "كبرياء وتحامل",
            author: "جين أوستن",
            releaseDate: "٢٨ يناير ١٨١٣",
            category: "رومانسية",
            description: "القصة المحبوبة لإليزابيث بينيت والسيد دارسي. تدور أحداثها في إنجلترا الجورجية، تستكشف هذه الرواية الذكية موضوعات الحب والسمعة والطبقة الاجتماعية. يجب على إليزابيث التغلب على تحاملها الأولي ضد السيد دارسي المتكبر، بينما يجب عليه التغلب على كبريائه ليفوز بقلبها."
        },
        4: {
            title: "غاتسبي العظيم",
            author: "ف. سكوت فيتزجيرالد",
            releaseDate: "١٠ أبريل ١٩٢٥",
            category: "أدب كلاسيكي",
            description: "صورة لعصر الجاز وفساد الحلم الأمريكي. المليونير الغامض جاي غاتسبي يقيم حفلات فاخرة في قصره في لونغ آيلاند، كل ذلك على أمل لم الشمل مع حبه المفقود، ديزي بوكانان. تحفة فنية تستكشف الثروة والحب واستحالة استعادة الماضي."
        },
        5: {
            title: "مئة عام من العزلة",
            author: "غابرييل غارسيا ماركيز",
            releaseDate: "٣٠ مايو ١٩٦٧",
            category: "الواقعية السحرية",
            description: "الملحمة الأسطورية لعائلة بوينديا عبر سبعة أجيال في بلدة ماكوندو الأسطورية. تمزج الواقع بالخيال، تستكشف هذه الرواية الحائزة على جائزة نوبل موضوعات العزلة والقدر والطبيعة الدورية للتاريخ. حجر الزاوية في أدب الواقعية السحرية."
        },
        6: {
            title: "الحارس في حقل الشوفان",
            author: "ج. د. سالينجر",
            releaseDate: "١٦ يوليو ١٩٥١",
            category: "أدب النضج",
            description: "قصة هولدن كولفيلد، الفتى المراهق الذي يتنقل في زيف عالم الكبار بعد طرده من المدرسة الإعدادية. يتجول في مدينة نيويورك، يصارع هولدن الاغتراب والهوية وفقدان البراءة. رواية محددة للتمرد المراهق والقلق."
        },
        7: {
            title: "عالم جديد شجاع",
            author: "ألدوس هكسلي",
            releaseDate: "١٩٣٢",
            category: "خيال علمي",
            description: "رؤية مخيفة لمجتمع مستقبلي حيث يتم تعديل البشر وراثياً وتكييفهم اجتماعياً لأدوار محددة مسبقاً. في هذا العالم من الإشباع الفوري والسعادة المهندسة، يبدأ برنارد ماركس في التساؤل عما إذا كانت الحرية الحقيقية قد ضُحي بها من أجل الاستقرار."
        },
        8: {
            title: "الهوبيت",
            author: "ج. ر. ر. تولكين",
            releaseDate: "٢١ سبتمبر ١٩٣٧",
            category: "فانتازيا",
            description: "بيلبو باغينز، الهوبيت المحب للراحة، ينجرف في مهمة ملحمية لاستعادة مملكة الأقزام المفقودة إريبور من التنين المخيف سماوغ. في طريقه، يكتشف شجاعة لم يكن يعلم أنه يمتلكها ويجد خاتماً غامضاً سيشكل مصير الأرض الوسطى."
        }
    }
};

/**
 * Get translated book data
 * @param {number} bookId - The book ID
 * @param {string} lang - The language code ('en' or 'ar')
 * @returns {Object} - The translated book data
 */
function getTranslatedBook(bookId, lang) {
    return booksTranslations[lang][bookId];
}

/**
 * Get translation by key
 * @param {string} key - The translation key
 * @param {string} lang - The language code ('en' or 'ar')
 * @returns {string} - The translated text
 */
function getTranslation(key, lang) {
    return translations[lang][key] || key;
}

