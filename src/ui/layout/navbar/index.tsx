import { useState } from "react";
import "./style.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Botão hamburguer */}
      <div
        className={`menu-wrapper ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </div>

      {/* Menu lateral */}
      <div className={`nav-wrapper ${open ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#ads">Curso</a>
            </li>
            <li>
              <a href="#voice">Depoimentos</a>
            </li>
            <li>
              <a href="#event">Eventos</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
