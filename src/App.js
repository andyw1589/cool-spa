import './App.css';
import { Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Packages from './pages/Packages';
import Products from './pages/Products';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <div className="App">
      <div className="mb-5">
        <Header />
      </div>
      <div className="mainContent container-fluid">
        <Routes>
          <Route exact path="/cool-spa" element={<Home />} />
          <Route exact path="/cool-spa/packages" element={<Packages />} />
          <Route exact path="/cool-spa/products" element={<Products />} />
          <Route exact path="/cool-spa/appointment" element={<BookAppointment />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
