import React from 'react'; // Make sure to import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import ContactUs from './pages/contact-us';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Add a catch-all route or a 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
