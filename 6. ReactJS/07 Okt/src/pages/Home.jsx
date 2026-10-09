function Home() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-primary">Temukan Dunia Baru di Setiap Halaman</h1>
            <p className="lead text-muted mt-3">
              BookSales menyediakan ribuan koleksi buku dari berbagai genre. Dari novel best-seller, buku akademik, hingga pengembangan diri.
            </p>
            <button className="btn btn-primary btn-lg mt-3"><i className="fa-solid fa-cart-shopping me-2"></i>Belanja Sekarang</button>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop" 
              className="img-fluid rounded shadow-lg" 
              alt="Koleksi Buku" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;