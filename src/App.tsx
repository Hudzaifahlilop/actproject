
// import NavbarComponent from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Kontak from './pages/kontak';
import NavigationBar from './components/NavigationBar';
import FooterComponent from './components/Footer';
import About from './pages/about';
import ProdukPage from './components/ProdukPage';
import Flowmeter from './pages/flowmeter';
import Watermeter from './pages/watermeter';
import Nozzlegun from './pages/nozzlegun';
import Pump from './pages/pump';
import Aksesoris from './pages/aksesoris';
import ScrollToTop from './components/ScrollToTop';
import WhatsappFloat from './components/WhatsappFloat';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kontak' element={<Kontak />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/semuaproduk' element={<ProdukPage />} />
        <Route path='/flowmeter' element={<Flowmeter />} />
        <Route path='/watermeter' element={<Watermeter />} />
        <Route path='/nozzlegun' element={<Nozzlegun />} />
        <Route path='/pump' element={<Pump />} />
        <Route path='/aksesoris' element={<Aksesoris />} />
      </Routes>
      <WhatsappFloat />
      <FooterComponent />
    </Router>
    
  )
}



export default App


