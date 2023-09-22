import React from 'react'; 
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
