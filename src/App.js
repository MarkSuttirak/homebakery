import React from 'react'; // Make sure to import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ContactUs from './pages/contact-us';
import AboutUs from './pages/about-us';
import AfterSaleService from './pages/after-sale-service';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/บริการหลังการขาย" element={<AfterSaleService />} />

        {/* Add a catch-all route or a 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
