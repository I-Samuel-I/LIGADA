import "./style.scss";
import CardAbout from "../ui/components/cardAbout";
import CardAds from "../ui/components/cardADS";
import Tools from "../ui/components/tools";

export default function HomePage() {
  return (
    <>
      <main>
        <section className="home-container">
          <div className="initial-text">
            <p>Liga Acadêmica Feminia de ADS</p>
          </div>
          <h1>
            Conectando Mulheres <br />
            na <span>Tecnologia</span>
          </h1>
          <h2>
            A LIGADA é uma comunidade colaborativa que empodera mulheres no
            <br />
            curso de Análise e Desenvolvimento de Sistemas através de
            <br />
            networking, aprendizado e crescimento profissional.
          </h2>
          <div className="button-home">
            <a>Junte-se a Nós</a>
            <a>Saiba Mais</a>
          </div>
          <div className="journey-container">
            <h3>Jornada</h3>
            <ul>
              <li>Entrada e acolhimento</li>
              <li>Desenvolvimento em Hard/Soft skills</li>
              <li>Projetos colaborativos</li>
              <li>Inserção no mercado</li>
            </ul>
          </div>
        </section>
        {/* =============================================================== */}
        <section className="about-container">
          <h2>
            Sobre a <span>LIGADA</span>
          </h2>
          <p className="about-text">
            Somos uma liga acadêmica dedicada a fortalecer a presença feminina
            na
            <br />
            tecnologia, criando um espaço seguro e colaborativo paracrescimento
            profissional
            <br />e pessoal.
          </p>
          <div>
            <CardAbout />
          </div>
          <aside>
            <h3>Nossa Missão</h3>
            <p>
              Incentivar e empoderar mulheres no curso de Análise
              eDesenvolvimento de Sistemas,
              <br />
              promovendo igualdade de oportunidades, desenvolvimento técnico e
              criando uma <br />
              comunidadecolaborativa que transforma desafios em conquistas
              coletivas.
            </p>
          </aside>
        </section>
        {/* =============================================================== */}
        <section className="ads-container">
          <h2>
            Sobre o Curso de <span>ADS</span>
          </h2>
          <p className="ads-text">
            Análise e Desenvolvimento de Sistemas é um curso tecnólogo focado em
            formar <br />
            profissionais capacitados para desenvolver, implementar e gerenciar
            sistemas <br />
            de informação.
          </p>
          <CardAds />
          <Tools />
        </section>
        <section className="projectEvent-container">

        </section>
      </main>
    </>
  );
}
