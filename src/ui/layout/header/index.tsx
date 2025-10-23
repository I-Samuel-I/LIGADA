import "./style.scss";
import Logo from "../../../assets/images/LogoWithOutbg.png";
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
            <a>Sobre</a>
          </li>
          <li>
            <a>Curso</a>
          </li>
          <li>
            <a>Depoimento</a>
          </li>
          <li>
            <a>Eventos</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </header>
    </>
  );
}
