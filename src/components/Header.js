import { Link } from 'react-router-dom';
import { useState } from "react";
import '../styles/Header.css';
import '../styles/mobile/MobileHeader.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="flex items-center justify-around py-8">
        <h1 className="page-title" data-testid="page-title">Adote um pet</h1>

        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} id='teste'>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <Link className="border-b border-gray-400 my-8 uppercase" to="/">Página Inicial
                </Link>
                <Link className="border-b border-gray-400 my-8 uppercase" to="/sobre">Quem somos
                </Link>
                <Link className="border-b border-gray-400 my-8 uppercase" to="/doacao">Faça uma doação
                </Link>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <Link to="/">Página Inicial
            </Link>
            <Link to="/sobre">Quem somos
            </Link>
            <Link to="/doacao">Faça uma doação
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

// consultado sobre menu hamburguer com tailwind em:
//https://www.locofy.ai/blog/build-a-responsive-navbar-with-tailwindcss
//https://www.codementor.io/@giorgiasambrotta/hamburger-menu-with-react-and-tailwind-css-1qx6sruvua