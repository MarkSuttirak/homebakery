import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
