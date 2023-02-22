import Header from '../components/Header';
import pets from '../images/pets-footer.png';
import '../styles/AboutUs.css';

function AboutUs() {

  return (
    <>
    <Header />
      <article className='about-container'>
      <h2 className='about-title'>Sobre nós</h2>
      <p className='about-text'>
      A adote um pet nasceu do sonho de um grupo de amigos apaixonados por animais e com o sentimento mútuo de que era necessário fazer justiça por aqueles que eram vítimas de maus tratos ou abandono.
      Queremos incentivar o ato de adoção, divulgar informações sobre posse responsável e também particiar da redução no índice de animais abandonados.
      </p>
      <h2 className='about-values'>Nossos valores</h2>
    <ul className='about-list'>
      <li className='about-li'>Honestidade</li>
      <li className='about-li'>Compromisso</li>
      <li className='about-li'>Responsabilidade</li>
      <li className='about-li'>Honestidade</li>
      <li className='about-li'>Relações</li>
    </ul>
      <img src={pets} alt="gato cinza e cachorro caramelo deitados juntos" className='about-img'/>
      </article>
    </>
  );
}

export default AboutUs;
