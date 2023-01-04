import { useState, useEffect } from 'react';
import searchPet from '../services/searchPet';
import PropTypes from 'prop-types';
import PetContext from './PetContext';

function PetProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [pet, setPet] = useState([]);

  const fetchApi = async () => {
      const result = await searchPet();
      setPet(result);
      setLoading(false);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const info = {
    pet,
    setPet,
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
