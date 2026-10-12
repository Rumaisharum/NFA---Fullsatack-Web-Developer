import { useState } from 'react';
import booksData from '../utils/books';

export default function Home() {
  const [booksList, setBooksList] = useState(booksData);

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

  // Group books by category
  const categories = [...new Set(booksList.map(book => book.category))];

  return (
    <>
      {/* Hero Section dengan Gradient */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 0',
        marginBottom: '50px'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>
                Selamat Datang di Asacarum Bookstore
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '30px' }}>
                Temukan ribuan koleksi buku dari berbagai genre. Dari novel best-seller, buku akademik, hingga pengembangan diri.
              </p>
              <button className="btn btn-light btn-lg" onClick={handleAddBook} style={{
                padding: '15px 40px',
                fontWeight: '600',
                borderRadius: '50px'
              }}>
                <i className="fa-solid fa-plus me-2"></i>Tambah Buku Baru
              </button>
            </div>
            <div className="col-md-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=500&fit=crop" 
                className="img-fluid rounded shadow-lg" 
                alt="Bookstore" 
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 mb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="p-4" style={{
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: '700' }}>{booksList.length}</h3>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>Total Buku</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="p-4" style={{
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: '700' }}>{categories.length}</h3>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>Kategori</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="p-4" style={{
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: '700' }}>100+</h3>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>Penulis</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="p-4" style={{
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '2.5rem', color: '#667eea', fontWeight: '700' }}>4.9</h3>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books - Show first 12 books */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-2" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#333' }}>
            Koleksi Buku Kami
          </h2>
          <p className="text-center text-muted mb-5" style={{ fontSize: '1.1rem' }}>
            Menampilkan {booksList.length} buku dari berbagai kategori
          </p>
          
          <div className="row">
            {booksList.slice(0, 12).map((book) => (
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
                    <button className="btn btn-outline-primary w-100" style={{
                      borderRadius: '10px',
                      fontWeight: '600',
                      padding: '10px'
                    }}>
                      <i className="fa-solid fa-cart-plus me-1"></i>Beli Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <a href="/book" className="btn btn-primary btn-lg" style={{
              padding: '15px 50px',
              borderRadius: '50px',
              fontWeight: '600'
            }}>
              Lihat Semua Buku <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}