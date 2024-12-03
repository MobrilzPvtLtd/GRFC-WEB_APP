import React, { useState } from 'react';
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
import OurProduct from './Components/UI/Pages/Our product/OurProduct';
import Contact from './Components/UI/Pages/Contact/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SIdebarCart from './Components/UI/Sidebar cart/SIdebarCart';
import ShopCart from './Components/UI/Pages/Shop-cart/ShopCart';
import VetServicesSection from './Components/UI/Services/Vet service section/VetServiceSection';
import Descr_Page from './Components/UI/Services/Vet service section/Descr_Page';
import Prescription_Form from './Components/UI/Services/Vet service section/Prescription_Form';
import Pet_Form from './Components/UI/Petform/Pet_Form';
import SubProduct from './Components/UI/Our product/SubProduct';
import Forgotpassword from './Components/UI/Forgot/Forgotpassword';
import User_Profile from './Components/UI/UserProfile/User_Profile';


function App() {
  const [visible , setVisible] = useState(false);
  const getVisibity =(state)=>{
setVisible(state);
  }
  
  return (
    <Router>
      <div className="App">
       
        <Navbar getVisibity = {getVisibity} />
        <SIdebarCart visible = {visible}/>
        
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-Register" element={<LoginRegister />} />
          <Route path="/otp" element={<Otp/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/our-products" element={<OurProduct/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/view-cart" element={<ShopCart/>} />
          <Route path="/services/:servicename" element={<VetServicesSection/>} />
          <Route path="/services/:servicename/:subservicename" element={<Descr_Page/>} />
          <Route path="/services/:servicename/:subservicename/:prescription" element={<Prescription_Form/>} />
          <Route path="/petform" element={<Pet_Form/>} />
          <Route path="/our-products/:id" element={<SubProduct/>} />
          <Route path="/forget" element={<Forgotpassword/>} />
          <Route path="/userprofile" element={<User_Profile/>} />
        </Routes>
        {/* <SliderBanner/> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
