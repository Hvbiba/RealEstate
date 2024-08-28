import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Rent from './components/Rent';
import Footer from './components/Footer';
import Property from './components/Property';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/buying' element={<Buy/>} />
        <Route  path='/selling' element={<Sell/>} />
        <Route  path='/renting' element={<Rent/>} />
        <Route  path='/property/:id' element={<Property />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
