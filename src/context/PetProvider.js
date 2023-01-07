import { useState, useEffect } from 'react';
import { searchCat, searchDog } from '../services/searchPet';
import PropTypes from 'prop-types';
import PetContext from './PetContext';

function PetProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState([]);
  const [cat, setCat] = useState([]);
  const [isCat, setIsCat] = useState(false);
  // const [meQuieres, setMeQuieres] = useState(false);

  const fetchDogApi = async () => {
      const result = await searchDog();
      setDog(result);
      setLoading(false);
  }

  const fetchCatApi = async () => {
    const result = await searchCat();
    setCat(result);
    setLoading(false);
}

  useEffect(() => {
    fetchDogApi();
    fetchCatApi();
  }, []);

  const info = {
    dog,
    setDog,
    cat,
    setCat,
    isCat,
    setIsCat,
    // meQuieres,
    // setMeQuieres,
    loading,
    setLoading,
  };

  return (
    <PetContext.Provider value={ info }>
      {children}
    </PetContext.Provider>
  );
}

PetProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PetProvider;
