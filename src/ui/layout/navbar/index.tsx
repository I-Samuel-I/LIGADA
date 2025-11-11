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
            <li onClick={() => setOpen(!open)}>
              <a href="#about">SOBRE</a>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#ads">CURSO</a>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#voice">DEPOIMENTOS</a>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#event">EVENTOS</a>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#contact">CONTATO</a>
            </li>
          </ul>
          <ul className="nav-socials">
            <li>
              <a href="https://www.instagram.com/adalovelace_unifip" target="_blank">Instagram</a>
            </li>
            <li>
              <a href="https://chat.whatsapp.com/L7W9rRBcfz3COBKJKodBZb?mode=wwt" target="_blank">Whatsapp</a>
            </li>
            <li>
              <a href="mailto:ligada.ads@gmail.com" target="_blank">Email</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
