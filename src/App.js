import React from 'react';
import '../src/App.css';
import { Routes, Route } from "react-router-dom";
import PetProvider from './context/PetProvider';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <PetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutUs />} />
      </Routes>
    </PetProvider>
  );
}

export default App;