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
                Empoderando mulheres na tecnologia através de networking,
                colaboração e desenvolvimento profissional.
              </p>
            </li>
            <li className="each-info">
              <h3>Links Rápidos</h3>
              <ul className="link-container">
                <li>Sobre</li>
                <li>Curso</li>
                <li>Depoimento</li>
                <li>Eventos</li>
              </ul>
            </li>
            <li className="each-info">
              <h3>Contato</h3>
              <ul className="link-container">
                <li>contato@ligada</li>
                <li>instagram</li>
                <li>grupo do zap</li>
              </ul>
            </li>
          </ul>
          <div className="divider" />
          <p className="text-credits">
            Feito compela LIGADA • © 2025 LIGADA - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
