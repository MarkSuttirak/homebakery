import React from 'react'; 
import Home from './pages/home';
import OurStory from './pages/our-story';
import Header from './components/header';
import Footer from './components/footer';
import "./App.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
