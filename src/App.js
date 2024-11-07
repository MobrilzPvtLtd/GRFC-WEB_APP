import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/UI/Navbar/Navbar';  // Adjust import paths as needed
import Home from './Components/UI/Home/Home';      // Adjust import paths as needed
import SliderBanner from './Components/UI/Home/SliderBanner';
import Footer from './Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LoginRegister from './Components/UI/Login/LoginRegister';
import Otp from './Components/UI/Otp/Otp';
import AboutUs from './Components/UI/Pages/About-us/AboutUs';
import Services from './Components/UI/Pages/Services/Services';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-Register" element={<LoginRegister />} />
          <Route path="/otp" element={<Otp/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
        {/* <SliderBanner/> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
