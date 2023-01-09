import React from 'react';
import '../src/App.css';
import { Routes, Route } from "react-router-dom";
import PetProvider from './context/PetProvider';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Donation from './pages/Donation';

function App() {
  return (
    <PetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/doacao" element={<Donation />} />
      </Routes>
    </PetProvider>
  );
}

export default App;