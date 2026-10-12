function Team() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Tim Kurator Buku Kami</h2>
        <p className="text-center text-muted mb-5">Orang-orang hebat yang memilihkan bacaan terbaik untuk Anda.</p>
        
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Rumaisha</h5>
                <p className="card-text text-primary">Head of Curator</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" className="card-img-top" alt="Member 2" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Budi Santoso</h5>
                <p className="card-text text-primary">Academic Expert</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" className="card-img-top" alt="Member 3" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Siti Aminah</h5>
                <p className="card-text text-primary">Children Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;