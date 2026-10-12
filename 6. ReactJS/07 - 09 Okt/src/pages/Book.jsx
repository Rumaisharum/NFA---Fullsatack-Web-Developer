import { useState } from 'react';
import booksData from '../utils/books';

export default function Book() {
  const [booksList, setBooksList] = useState(booksData);
  const [filterCategory, setFilterCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  // Ambil daftar kategori unik dari data
  const categories = ['Semua', ...new Set(booksData.map(book => book.category))];

  // Filter buku berdasarkan kategori dan search
  const filteredBooks = booksList.filter(book => {
    const matchCategory = filterCategory === 'Semua' || book.category === filterCategory;
    const matchSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddBook = () => {
    const newBook = {
      id: booksList.length + 1,
      title: "Buku Baru - " + new Date().toLocaleTimeString(),
      author: "Rumaisha",
      year: 2026,
      price: "Rp 100.000",
      category: "New Arrival",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop"
    };
    setBooksList([...booksList, newBook]);
    alert("Buku baru berhasil ditambahkan!");
  };

  return (
    <>
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#333' }}>
              Daftar Buku Tersedia
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
              Jelajahi koleksi buku kami yang lengkap dari berbagai kategori
            </p>
            <button className="btn btn-success btn-lg" onClick={handleAddBook} style={{
              padding: '15px 40px',
              borderRadius: '50px',
              fontWeight: '600'
            }}>
              <i className="fa-solid fa-plus me-2"></i>Tambah Buku Baru
            </button>
          </div>

          {/* Search Bar */}
          <div className="row mb-4">
            <div className="col-md-6 mx-auto">
              <div className="input-group" style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.1)', borderRadius: '50px' }}>
                <span className="input-group-text border-0" style={{ borderRadius: '50px 0 0 50px', background: 'white' }}>
                  <i className="fa-solid fa-search text-muted"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control border-0" 
                  placeholder="Cari judul atau penulis..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderRadius: '0', padding: '15px 20px' }}
                />
              </div>
            </div>
          </div>

          {/* Filter Buttons - Scrollable */}
          <div className="mb-5">
            <div className="d-flex gap-2 overflow-auto pb-2" style={{ scrollBehavior: 'smooth' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`btn ${filterCategory === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => setFilterCategory(cat)}
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '10px 20px',
                    borderRadius: '50px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="mb-0" style={{ fontSize: '1.1rem' }}>
              Menampilkan <strong style={{ color: '#667eea' }}>{filteredBooks.length}</strong> buku
              {filterCategory !== 'Semua' && <span> dari kategori <strong style={{ color: '#667eea' }}>{filterCategory}</strong></span>}
            </p>
          </div>

          {/* Books Grid */}
          {filteredBooks.length > 0 ? (
            <div className="row">
              {filteredBooks.map((book) => (
                <div className="col-md-3 mb-4" key={book.id}>
                  <div className="card h-100 border-0" style={{
                    borderRadius: '15px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                  }}
                  >
                    <img src={book.image} className="card-img-top" alt={book.title} style={{ 
                      height: '300px', 
                      objectFit: 'cover',
                      borderTopLeftRadius: '15px',
                      borderTopRightRadius: '15px'
                    }} />
                    <div className="card-body" style={{ padding: '20px' }}>
                      <span className="badge mb-2" style={{
                        background: '#667eea',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
                        {book.category}
                      </span>
                      <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1.1rem' }}>{book.title}</h5>
                      <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                        <i className="fa-solid fa-pen me-1"></i>{book.author} • {book.year}
                      </p>
                      <h4 className="text-primary fw-bold mb-0" style={{ fontSize: '1.3rem' }}>{book.price}</h4>
                    </div>
                    <div className="card-footer bg-white border-0 pb-3 px-3">
                      <button className="btn btn-primary w-100" style={{
                        borderRadius: '10px',
                        fontWeight: '600',
                        padding: '10px'
                      }}>
                        <i className="fa-solid fa-cart-plus me-1"></i>Tambah ke Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <i className="fa-solid fa-book" style={{ fontSize: '5rem', color: '#ddd', marginBottom: '20px' }}></i>
              <h3 className="text-muted">Tidak ada buku yang ditemukan</h3>
              <p className="text-muted">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}