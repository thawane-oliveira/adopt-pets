import { useContext } from 'react';
import PetContext from '../context/PetContext';
import Loading from './Loading';
import '../styles/PetCard.css';
import '../styles/mobile/MobilePetCard.css';
import PetCard from './PetCard';

function PetContainer() {
  const { cat, dog, loading, isCat } = useContext(PetContext);

  const catNames = ['Speedwagon', 'Caesar', 'Kakyoin', 'Okuyasu', 'Bruno', 'Ermes', 'Gyro', 'Yasuho', 'Dragona'];

  const dogNames = ['Jonathan', 'Joseph', 'Jotaro', 'Josuke', 'Giorno', 'Jolyne', 'Johnny', 'Gappy', 'JoDio'];

  // if(loading) {
  //   return <Loading />
  // }

  return (
  loading ? <Loading /> :  isCat ? 
  (
    <div className='pet-container'>
      {cat.map((it, index) => (<PetCard key={it} it={it} names={catNames[index]} alt='gatitchu' />))}
    </div>
  ) : (
    <div className='pet-container'>
      {dog.map((it, index) => (<PetCard key={it} it={it} names={dogNames[index]} alt='doggo' />))}
    </div>
  ))
}

export default PetContainer;