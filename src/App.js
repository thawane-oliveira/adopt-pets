import React from 'react';
import PetProvider from './context/PetProvider';
// import Header from './components/Header';
// import DogCard from './components/DogCard';
import Home from './pages/Home';

function App() {
  return (
    <PetProvider>
      <Home />
    </PetProvider>
  );
}

export default App;