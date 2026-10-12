const booksData = [
  // ==========================================
  // 9 DATA BUKU LAMA (TETAP DIPERTAHANKAN)
  // ==========================================
  { id: 1, title: "Atomic Habits", author: "James Clear", year: 2018, price: "Rp 98.000", category: "Self-Help & Motivasi", isbn: "9780735211292" },
  { id: 2, title: "The Psychology of Money", author: "Morgan Housel", year: 2020, price: "Rp 105.000", category: "Bisnis & Finansial", isbn: "9780857197689" },
  { id: 3, title: "Filosofi Teras", author: "Henry Manampiring", year: 2018, price: "Rp 89.000", category: "Filsafat & Sosial", isbn: "9786020619385" },
  { id: 4, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", year: 1997, price: "Rp 95.000", category: "Bisnis & Finansial", isbn: "9781612680194" },
  { id: 5, title: "Laskar Pelangi", author: "Andrea Hirata", year: 2005, price: "Rp 85.000", category: "Novel Indonesia", isbn: "9789791227001" },
  { id: 6, title: "Bumi Manusia", author: "Pramoedya A. Toer", year: 1980, price: "Rp 120.000", category: "Sastra & Klasik", isbn: "9789794330005" },
  { id: 7, title: "Sapiens", author: "Yuval Noah Harari", year: 2011, price: "Rp 135.000", category: "Sejarah & Politik", isbn: "9780062316097" },
  { id: 8, title: "The Alchemist", author: "Paulo Coelho", year: 1988, price: "Rp 79.000", category: "Spiritualitas Umum", isbn: "9780062315007" },
  { id: 9, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, price: "Rp 145.000", category: "Sains Populer", isbn: "9780374533557" },

  // ==========================================
  // AREA 1: FIKSI (NOVEL & SASTRA) - 10 BUKU
  // ==========================================
  { id: 10, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, price: "Rp 115.000", category: "Sastra & Klasik", isbn: "9780141439518" },
  { id: 11, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, price: "Rp 135.000", category: "Fantasi & Sci-Fi", isbn: "9780590353427" },
  { id: 12, title: "The Da Vinci Code", author: "Dan Brown", year: 2003, price: "Rp 125.000", category: "Misteri, Thriller & Detektif", isbn: "9780307474278" },
  { id: 13, title: "It", author: "Stephen King", year: 1986, price: "Rp 155.000", category: "Horor & Supranatural", isbn: "9781501142970" },
  { id: 14, title: "The Book Thief", author: "Markus Zusak", year: 2005, price: "Rp 125.000", category: "Historical Fiction", isbn: "9780375842207" },
  { id: 15, title: "1984", author: "George Orwell", year: 1949, price: "Rp 110.000", category: "Sastra & Klasik", isbn: "9780451524935" },
  { id: 16, title: "Dilan 1990", author: "Pidi Baiq", year: 2014, price: "Rp 75.000", category: "Teenlit & Chicklit", isbn: "9786020316284" },
  { id: 17, title: "The Fault in Our Stars", author: "John Green", year: 2012, price: "Rp 95.000", category: "Romance", isbn: "9780142424179" },
  { id: 18, title: "Dune", author: "Frank Herbert", year: 1965, price: "Rp 145.000", category: "Fantasi & Sci-Fi", isbn: "9780441172719" },
  { id: 19, title: "Gone Girl", author: "Gillian Flynn", year: 2012, price: "Rp 115.000", category: "Misteri, Thriller & Detektif", isbn: "9780307588371" },

  // ==========================================
  // AREA 2: KOMIK & NOVEL GRAFIS - 10 BUKU
  // ==========================================
  { id: 20, title: "Naruto Vol. 1", author: "Masashi Kishimoto", year: 1999, price: "Rp 45.000", category: "Shonen", isbn: "9781421500201" },
  { id: 21, title: "One Piece Vol. 1", author: "Eiichiro Oda", year: 1997, price: "Rp 45.000", category: "Shonen", isbn: "9781569319017" },
  { id: 22, title: "Attack on Titan Vol. 1", author: "Hajime Isayama", year: 2009, price: "Rp 50.000", category: "Shonen", isbn: "9781612620244" },
  { id: 23, title: "Fruits Basket Vol. 1", author: "Natsuki Takaya", year: 1998, price: "Rp 48.000", category: "Shojo", isbn: "9781569319192" },
  { id: 24, title: "Berserk Vol. 1", author: "Kentaro Miura", year: 1989, price: "Rp 65.000", category: "Seinen", isbn: "9781593070205" },
  { id: 25, title: "Tower of God Vol. 1", author: "SIU", year: 2014, price: "Rp 55.000", category: "Komik Lokal & Webtoon", isbn: "9781974719501" },
  { id: 26, title: "Solo Leveling Vol. 1", author: "Chugong", year: 2018, price: "Rp 60.000", category: "Komik Lokal & Webtoon", isbn: "9781974719525" },
  { id: 27, title: "Sailor Moon Vol. 1", author: "Naoko Takeuchi", year: 1991, price: "Rp 48.000", category: "Shojo", isbn: "9781935429647" },
  { id: 28, title: "Demon Slayer Vol. 1", author: "Koyoharu Gotouge", year: 2016, price: "Rp 48.000", category: "Shonen", isbn: "9781974700523" },
  { id: 29, title: "My Hero Academia Vol. 1", author: "Kohei Horikoshi", year: 2014, price: "Rp 45.000", category: "Shonen", isbn: "9781421582696" },

  // ==========================================
  // AREA 3: PENGEMBANGAN DIRI & BISNIS - 10 BUKU
  // ==========================================
  { id: 30, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", year: 1989, price: "Rp 125.000", category: "Manajemen & Kepemimpinan", isbn: "9781982137274" },
  { id: 31, title: "Think and Grow Rich", author: "Napoleon Hill", year: 1937, price: "Rp 85.000", category: "Bisnis & Finansial", isbn: "9781585424337" },
  { id: 32, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: 2016, price: "Rp 92.000", category: "Self-Help & Motivasi", isbn: "9780062457714" },
  { id: 33, title: "Man's Search for Meaning", author: "Viktor E. Frankl", year: 1946, price: "Rp 90.000", category: "Self-Help & Motivasi", isbn: "9780807014295" },
  { id: 34, title: "The Power of Habit", author: "Charles Duhigg", year: 2012, price: "Rp 110.000", category: "Self-Help & Motivasi", isbn: "9780812981605" },
  { id: 35, title: "Good to Great", author: "Jim Collins", year: 2001, price: "Rp 125.000", category: "Manajemen & Kepemimpinan", isbn: "9780066620992" },
  { id: 36, title: "How to Win Friends and Influence People", author: "Dale Carnegie", year: 1936, price: "Rp 95.000", category: "Self-Help & Motivasi", isbn: "9780671027032" },
  { id: 37, title: "Start with Why", author: "Simon Sinek", year: 2009, price: "Rp 115.000", category: "Bisnis & Finansial", isbn: "9781591846444" },
  { id: 38, title: "Deep Work", author: "Cal Newport", year: 2016, price: "Rp 105.000", category: "Self-Help & Motivasi", isbn: "9781455586691" },
  { id: 39, title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", year: 2006, price: "Rp 98.000", category: "Self-Help & Motivasi", isbn: "9780345472328" },

  // ==========================================
  // AREA 4: NON-FIKSI UMUM & HUMANIORA - 10 BUKU
  // ==========================================
  { id: 40, title: "Steve Jobs", author: "Walter Isaacson", year: 2011, price: "Rp 155.000", category: "Biografi & Otobiografi", isbn: "9781451648539" },
  { id: 41, title: "Becoming", author: "Michelle Obama", year: 2018, price: "Rp 145.000", category: "Biografi & Otobiografi", isbn: "9781524763138" },
  { id: 42, title: "Guns, Germs, and Steel", author: "Jared Diamond", year: 1997, price: "Rp 135.000", category: "Sejarah & Politik", isbn: "9780393354324" },
  { id: 43, title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, price: "Rp 125.000", category: "Sains Populer", isbn: "9780553380163" },
  { id: 44, title: "The Diary of a Young Girl", author: "Anne Frank", year: 1947, price: "Rp 85.000", category: "Biografi & Otobiografi", isbn: "9780553296983" },
  { id: 45, title: "Educated", author: "Tara Westover", year: 2018, price: "Rp 120.000", category: "Biografi & Otobiografi", isbn: "9780399590504" },
  { id: 46, title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", year: 2010, price: "Rp 115.000", category: "Sains Populer", isbn: "9781400052189" },
  { id: 47, title: "The Republic", author: "Plato", year: -375, price: "Rp 95.000", category: "Filsafat & Sosial", isbn: "9780140455113" },
  { id: 48, title: "The Selfish Gene", author: "Richard Dawkins", year: 1976, price: "Rp 110.000", category: "Sains Populer", isbn: "9780198788607" },
  { id: 49, title: "Homo Deus", author: "Yuval Noah Harari", year: 2015, price: "Rp 140.000", category: "Sejarah & Politik", isbn: "9780062464316" },

  // ==========================================
  // AREA 5: AGAMA & SPIRITUALITAS - 10 BUKU
  // ==========================================
  { id: 50, title: "The Sealed Nectar (Ar-Raheeq Al-Makhtum)", author: "Safiur Rahman Mubarakpuri", year: 1979, price: "Rp 125.000", category: "Religi Islam", isbn: "9780962978623" },
  { id: 51, title: "Mere Christianity", author: "C.S. Lewis", year: 1952, price: "Rp 95.000", category: "Religi Kristen & Katolik", isbn: "9780060652920" },
  { id: 52, title: "The Purpose Driven Life", author: "Rick Warren", year: 2002, price: "Rp 105.000", category: "Religi Kristen & Katolik", isbn: "9780310337270" },
  { id: 53, title: "The Power of Now", author: "Eckhart Tolle", year: 1997, price: "Rp 105.000", category: "Spiritualitas Umum", isbn: "9781577314806" },
  { id: 54, title: "Siddhartha", author: "Hermann Hesse", year: 1922, price: "Rp 85.000", category: "Spiritualitas Umum", isbn: "9780553208849" },
  { id: 55, title: "The Prophet", author: "Kahlil Gibran", year: 1923, price: "Rp 75.000", category: "Spiritualitas Umum", isbn: "9780394404288" },
  { id: 56, title: "The Four Agreements", author: "Don Miguel Ruiz", year: 1997, price: "Rp 90.000", category: "Spiritualitas Umum", isbn: "9781878424310" },
  { id: 57, title: "Don't Be Sad", author: "Aidh al-Qarni", year: 2003, price: "Rp 95.000", category: "Religi Islam", isbn: "9781934142127" },
  { id: 58, title: "Jesus Calling", author: "Sarah Young", year: 2004, price: "Rp 110.000", category: "Religi Kristen & Katolik", isbn: "9781591451884" },
  { id: 59, title: "The Book of Joy", author: "Dalai Lama & Desmond Tutu", year: 2016, price: "Rp 115.000", category: "Spiritualitas Umum", isbn: "9780399185045" },

  // ==========================================
  // AREA 6: BUKU ANAK & PARENTING - 10 BUKU
  // ==========================================
  { id: 60, title: "The Very Hungry Caterpillar", author: "Eric Carle", year: 1969, price: "Rp 85.000", category: "Buku Cerita Anak", isbn: "9780399226908" },
  { id: 61, title: "Where the Wild Things Are", author: "Maurice Sendak", year: 1963, price: "Rp 90.000", category: "Buku Cerita Anak", isbn: "9780064431781" },
  { id: 62, title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943, price: "Rp 80.000", category: "Buku Cerita Anak", isbn: "9780156012195" },
  { id: 63, title: "Charlotte's Web", author: "E.B. White", year: 1952, price: "Rp 85.000", category: "Buku Cerita Anak", isbn: "9780061124952" },
  { id: 64, title: "Matilda", author: "Roald Dahl", year: 1988, price: "Rp 88.000", category: "Buku Cerita Anak", isbn: "9780142410370" },
  { id: 65, title: "The Whole-Brain Child", author: "Daniel J. Siegel", year: 2011, price: "Rp 115.000", category: "Parenting", isbn: "9780553386691" },
  { id: 66, title: "How to Talk So Kids Will Listen & Listen So Kids Will Talk", author: "Adele Faber", year: 1980, price: "Rp 120.000", category: "Parenting", isbn: "9781451663884" },
  { id: 67, title: "The 5 Love Languages of Children", author: "Gary Chapman", year: 1995, price: "Rp 105.000", category: "Parenting", isbn: "9780802412850" },
  { id: 68, title: "The Montessori Toddler", author: "Simone Davies", year: 2019, price: "Rp 130.000", category: "Parenting", isbn: "9781943487028" },
  { id: 69, title: "Raising Good Humans", author: "Hunter Clarke-Fields", year: 2019, price: "Rp 110.000", category: "Parenting", isbn: "9781684033515" },

  // ==========================================
  // AREA 7: HOBI, GAYA HIDUP, & MASAKAN - 10 BUKU
  // ==========================================
  { id: 70, title: "Salt, Fat, Acid, Heat", author: "Samin Nosrat", year: 2017, price: "Rp 185.000", category: "Buku Resep & Memasak", isbn: "9781476753836" },
  { id: 71, title: "The Joy of Cooking", author: "Irma S. Rombauer", year: 1931, price: "Rp 165.000", category: "Buku Resep & Memasak", isbn: "9780743246262" },
  { id: 72, title: "Why We Sleep", author: "Matthew Walker", year: 2017, price: "Rp 125.000", category: "Kesehatan & Kebugaran", isbn: "9781501144318" },
  { id: 73, title: "The Photographer's Eye", author: "Michael Freeman", year: 2007, price: "Rp 195.000", category: "Desain, Fotografi, & Seni", isbn: "9780240809342" },
  { id: 74, title: "Steal Like an Artist", author: "Austin Kleon", year: 2012, price: "Rp 95.000", category: "Desain, Fotografi, & Seni", isbn: "9780761169253" },
  { id: 75, title: "Lonely Planet Indonesia", author: "Lonely Planet", year: 2020, price: "Rp 285.000", category: "Travel & Budaya", isbn: "9781787019911" },
  { id: 76, title: "The Art of Travel", author: "Alain de Botton", year: 2002, price: "Rp 110.000", category: "Travel & Budaya", isbn: "9780375725340" },
  { id: 77, title: "Mastering the Art of French Cooking", author: "Julia Child", year: 1961, price: "Rp 220.000", category: "Buku Resep & Memasak", isbn: "9780375413407" },
  { id: 78, title: "The Body Keeps the Score", author: "Bessel van der Kolk", year: 2014, price: "Rp 140.000", category: "Kesehatan & Kebugaran", isbn: "9780143127741" },
  { id: 79, title: "Ways of Seeing", author: "John Berger", year: 1972, price: "Rp 105.000", category: "Desain, Fotografi, & Seni", isbn: "9780140135152" },

  // ==========================================
  // AREA 8: EDUKASI & BUKU SEKOLAH - 10 BUKU
  // ==========================================
  { id: 80, title: "Campbell Biology", author: "Lisa A. Urry", year: 2020, price: "Rp 450.000", category: "Buku Pelajaran", isbn: "9780134093413" },
  { id: 81, title: "Calculus: Early Transcendentals", author: "James Stewart", year: 2015, price: "Rp 380.000", category: "Buku Pelajaran", isbn: "9781285741550" },
  { id: 82, title: "Barron's SAT Prep", author: "Barron's", year: 2021, price: "Rp 245.000", category: "Panduan Ujian & Tryout", isbn: "9781438011233" },
  { id: 83, title: "Oxford Advanced Learner's Dictionary", author: "Oxford", year: 2020, price: "Rp 325.000", category: "Kamus & Bahasa", isbn: "9780194799225" },
  { id: 84, title: "The Elements of Style", author: "William Strunk Jr.", year: 1999, price: "Rp 85.000", category: "Buku Pelajaran", isbn: "9780205309023" },
  { id: 85, title: "Introduction to Algorithms", author: "Thomas H. Cormen", year: 2009, price: "Rp 550.000", category: "Buku Pelajaran", isbn: "9780262033848" },
  { id: 86, title: "Physics for Scientists and Engineers", author: "Raymond A. Serway", year: 2018, price: "Rp 420.000", category: "Buku Pelajaran", isbn: "9781337553278" },
  { id: 87, title: "The Official Guide to the TOEFL Test", author: "ETS", year: 2018, price: "Rp 280.000", category: "Panduan Ujian & Tryout", isbn: "9781260441864" },
  { id: 88, title: "Merriam-Webster's Collegiate Dictionary", author: "Merriam-Webster", year: 2003, price: "Rp 295.000", category: "Kamus & Bahasa", isbn: "9780877798095" },
  { id: 89, title: "Organic Chemistry", author: "David R. Klein", year: 2017, price: "Rp 480.000", category: "Buku Pelajaran", isbn: "9781118875766" }
];

// Tambahkan URL gambar otomatis dari Open Library menggunakan ISBN
const booksDataWithImages = booksData.map(book => ({
  ...book,
  // Menggunakan Open Library Cover API untuk mengambil gambar sampul asli berdasarkan ISBN
  image: `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg` 
}));

export default booksDataWithImages;