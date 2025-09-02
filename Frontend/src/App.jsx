

import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import NewArrivals from './components/NewArrivals';
import Testimonials from './components/Testimonials';
import BookTopics from './components/BookTopics';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import BookCards from './components/BookCards';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RefreshHandler from './RefrshHandler';

const App = () => {

  const[isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element}) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 200,
      duration: 1500,
      easing: 'ease-in-sine',
      once: true,
    });
    AOS.refresh();
  }, []);

 return (
  <Router>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
    <Navbar />
    <Routes>
      {/* ✅ Home Page */}
      <Route 
        path="/" 
        element={
          <>
            <Hero />
            <BookCards />
            <AboutSection />
            <NewArrivals />
            <Testimonials />
            <BookTopics />
            <CategorySection />
            <Footer />
          </>
        } 
      />

      {/* ✅ Signup Page */}
      <Route path="/signup" element={<Signup />} />

      {/* ✅ Login Page */}
      <Route path="/login" element={<Login />} />

      {/* ✅ Private Route for Home */}
      <Route path='/home' element={<PrivateRoute element={<Home/>}/>}/>
    </Routes>
  </Router>
);

}

export default App;
