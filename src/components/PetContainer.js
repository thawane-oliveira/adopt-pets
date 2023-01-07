import { useContext } from 'react';
import PetContext from '../context/PetContext';
import Loading from './Loading';
import '../styles/DogCard.css';
import PetCard from './PetCard';

function PetContainer() {
  const { cat, dog, loading, isCat } = useContext(PetContext);

  const catNames = ['Speedwagon', 'Caesar', 'Kakyoin', 'Okuyasu', 'Bruno', 'Ermes', 'Gyro', 'Joshu', 'Yoshikage'];

  const dogNames = ['Jonathan', 'Joseph', 'Jotaro', 'Josuke', 'Giorno', 'Jolyne', 'Johnny', 'Gappy', 'Jojo'];

  // if(loading) {
  //   return <Loading />
  // }

  return (
  loading ? <Loading /> :  isCat ? 
  (
    <div className='dog-container'>
      {cat.map((it, index) => (<PetCard key={it} it={it} names={catNames[index]} alt='gatitchu' />))}
    </div>
  ) : (
    <div className='dog-container'>
      {dog.map((it, index) => (<PetCard key={it} it={it} names={dogNames[index]} alt='doggo' />))}
    </div>
  ))
}

export default PetContainer;