import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {

  return (
    <header className="header-container">
      <h1 className="page-title" data-testid="page-title">Adote um pet</h1>
        <Link
          to="/sobre"
          className="about-button"
        >
          Quem somos
        </Link>

        <Link
          to="/doe"
          className="donation-button"
        >
          Faça uma doação
        </Link>

        <Link
          to="/divulgue"
          className="share-button"
        >
          Divulgue um pet
        </Link>

        <Link
          to="/login"
          className="login-button"
        >
          Entrar
        </Link>
    </header>
  );
}

export default Header;
