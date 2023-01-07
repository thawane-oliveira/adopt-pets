import { useContext } from 'react';
import PetContext from '../context/PetContext';
import Loading from './Loading';
import '../styles/DogCard.css';

function DogCard() {
  const { pet, loading } = useContext(PetContext);
  const names = ['Jonathan', 'Joseph', 'Jotaro', 'Josuke', 'Giorno', 'Jolyne', 'Johnny', 'Gappy', 'Jojo'];

  return loading ? <Loading /> : (
    <div className='dog-container'>
      {
        pet.map((it, index) => (
          <>
            <div className='card-container'>
              <img src={it} key={it} alt='doggo' className='dog-img' />
              <div className='dog-name'>
                <p className='dog-p'>{names[index]}</p>
              </div>
            </div>
            {/* <div className='back-container'>
              <h2>Back Side</h2>
            </div> */}
          </>
        ))
      }
    </div>

  );
}

export default DogCard;