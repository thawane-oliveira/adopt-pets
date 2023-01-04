import '../styles/Header.css';

function Header() {

  return (
      <header className="header-container">
        <h1 className="page-title" data-testid="page-title">Adote um doguineo</h1>
        <button
          className="about-button"
          type="button"
        >
          Quem somos
        </button>

          <button
            className="donation-button"
            type="button"
          >
            Faça uma doação
          </button>

          <button
            className="share-button"
            type="button"
          >
            Divulgue um doguineo
          </button>

          <button
            className="login-button"
            type="button"
          >
            Entrar
          </button>
      </header>
  );
}

export default Header;
