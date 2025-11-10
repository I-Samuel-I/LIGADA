import "./style.scss";
import Logo from "../../../assets/images/LogoWithOutbg.png";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <ul className="info-footer">
            <li className="each-info">
              <figure>
                <div className="Image-Logo">
                  <img src={Logo} alt="Logo" />
                </div>

                <h2>LIGADA</h2>
              </figure>
              <p>
                Empoderando mulheres na tecnologia através de
                networking,colaboração e desenvolvimento profissional.
              </p>
            </li>
            <li className="each-info">
              <h3>Links Rápidos</h3>
              <ul className="link-container">
                <li>
                  <a href="#ligada"> Sobre</a>
                </li>
                <li>
                  <a href="#ads">Curso</a>
                </li>
                <li>
                  <a href="#events">Eventos</a>
                </li>
                <li>
                  <a href="#voice">Depoimento</a>
                </li>
              </ul>
            </li>
            <li className="each-info">
              <h3>Contato</h3>
              <ul className="link-container">
                <li>
                  <a href="mailto:ligada.ads@gmail.com">ligada.ads@gmail.com</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/adalovelace_unifip">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/L7W9rRBcfz3COBKJKodBZb?mode=wwt">
                    Whatsapp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="divider" />
          <p className="text-credits">
            Feito pela LIGADA • © 2025 LIGADA - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
