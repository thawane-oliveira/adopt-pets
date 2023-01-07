// import DogCard from '../components/DogCard';
import Header from '../components/Header';
import '../styles/Home.css';
import cat from '../images/cat-icon.png';
import dog from '../images/dog-icon.png';
import { useContext } from 'react';
import PetContext from '../context/PetContext';
// import CatCard from '../components/CatCard';
import PetContainer from '../components/PetContainer';

function Home() {

  const { setIsCat } = useContext(PetContext);

  const showCats = () => {
    setIsCat(true);
  }

  const showDogs = () => {
    setIsCat(false);
  }

  return (
    <main>
      <Header />
      {/* {isCat ? <CatCard /> : <DogCard />} */}
      <PetContainer />
      <aside className='type-container'>
        <button className='type-button' onClick={showCats} title="quero gatitchu!">
          <img
            className='cat-icon'
            src={cat}
            alt="quero gatitchu!"
          />
        </button>
        <button className='type-button' onClick={showDogs} title="quero doggo!">
          <img
            className='dog-icon'
            src={dog}
            alt="quero doggo!"
          />
        </button>
      </aside>
    </main>
  );
}

export default Home;
