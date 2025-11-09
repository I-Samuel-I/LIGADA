import "./style.scss";
import Logo from "../../../assets/images/LogoWithOutbg.png";
import NavBar from "../navbar";
export default function Header() {
  return (
    <>
      <header className="header">
        <figure>
          <div className="Image-Logo">
            <img src={Logo} alt="Logo" />
          </div>

          <h1>LIGADA</h1>
        </figure>

        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#ads">Curso</a>
          </li>
          <li>
            <a href="#voice">Depoimento</a>
          </li>
          <li>
            <a href="#event">Eventos</a>
          </li>
          <li>
            <a >Contato</a>
          </li>
        </ul>
        <div className="navbar">
          <NavBar/>
        </div>
        
      </header>
    </>
  );
}
