import { useContext } from 'react';
import PetContext from '../context/PetContext';
import Loading from './Loading';
import '../styles/DogCard.css';

function DogCard() {
  const { pet, loading } = useContext(PetContext);

  return loading ? <Loading/> : (
    <div className='dog-container'>
      {
      pet.map((it) => (
        <div className='card-container'>
        <img src={it} key={it} alt='doggo' className='dog-img'/>
        <div className='dog-name'>
          <p className='dog-p'>nome do doggo</p>
          </div>
        </div>
      ))
    }
    </div>
  );
}

export default DogCard;