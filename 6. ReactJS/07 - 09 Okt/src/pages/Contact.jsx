function Contact() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Hubungi Kami</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Nama Lengkap</label>
                  <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Alamat Email</label>
                  <input type="email" className="form-control" placeholder="nama@email.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Pesan Anda</label>
                  <textarea className="form-control" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;