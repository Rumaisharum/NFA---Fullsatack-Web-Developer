import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Book from './pages/Book';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />   {/* Navbar HANYA di sini */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />   {/* Footer HANYA di sini */}
      </div>
    </BrowserRouter>
  );
}

export default App;