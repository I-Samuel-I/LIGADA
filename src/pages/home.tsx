import "./style.scss";
import CardAbout from "../ui/components/cardAbout";
import CardAds from "../ui/components/cardADS";
import Tools from "../ui/components/tools";
import EventCard from "../ui/components/events";
import CardNextEvents from "../ui/components/nextEvents";
import ContactForm from "../ui/components/contact";
import SocialContact from "../ui/components/social";
import Voice from "../ui/components/voice";

export default function HomePage() {
  return (
    <>
      <main>
        <section id="ligada" className="home-container">
          <div className="initial-text">
            <p>Liga Acadêmica Feminia de ADS</p>
          </div>
          <h1>
            Conectando Mulheres na <span>Tecnologia</span>
          </h1>
          <h2>
            A LIGADA é uma comunidade colaborativa que empodera mulheres no
            curso de Análise e Desenvolvimento de Sistemas através de
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
        <section id="about" className="about-container">
          <h2>
            Sobre a <span>LIGADA</span>
          </h2>
          <p className="about-text">
            Somos uma liga acadêmica dedicada a fortalecer a presença feminina
            na tecnologia, criando um espaço seguro e colaborativo
            paracrescimento profissional e pessoal.
          </p>
          <div>
            <CardAbout />
          </div>
          <aside>
            <h3>Nossa Missão</h3>
            <p>
              Incentivar e empoderar mulheres no curso de Análise
              eDesenvolvimento de Sistemas, promovendo igualdade de
              oportunidades, desenvolvimento técnico e criando uma
              comunidadecolaborativa que transforma desafios em conquistas
              coletivas.
            </p>
          </aside>
        </section>
        {/* =============================================================== */}

        <section id="ads" className="title-section">
          <h2>
            Sobre o Curso de <span>ADS</span>
          </h2>
          <p className="text-title">
            Análise e Desenvolvimento de Sistemas é um curso tecnólogo focado em
            formar profissionais capacitados para desenvolver, implementar e
            gerenciar sistemas de informação.
          </p>
          <CardAds />
          <Tools />
        </section>
        {/* =============================================================== */}
        <section id="voice" className="title-section ">
          <h2>
            Vozes <span>Femininas</span>
          </h2>
          <p className="text-title">
            Conheça as histórias de mulheres que fazem parte da nossa comunidade
            e descobriram seu potencial na tecnologia.
          </p>
          <Voice />

          <aside className="container-voice">
            <h3>Faça Parte Dessa História</h3>
            <p className="text-voice">
              Junte-se a centenas de mulheres que estão construindo suas
              carreiras na tecnologia com o apoio de uma comunidade incrível.
            </p>
          </aside>
        </section>
        {/* =============================================================== */}
        <section id="event" className="title-section">
          <h2>
            Projetos e <span>Eventos</span>
          </h2>
          <p className="text-title">
            Participe de a tividades que vão impulsionar sua carreira e expandir
            suas habilidades técnicas.
          </p>
          <EventCard />
          <CardNextEvents />
        </section>
        {/* =============================================================== */}
        <section id="contact" className="title-section ">
          <h2>
            Entre em <span>Contato</span>
          </h2>
          <p className="text-title">
            Tem dúvidas ou sugestões? Estamos aqui para ajudar! Entre em contato
            através das nossas redes sociais ou envie uma mensagem.
          </p>
          <article className="contact-content">
            <ContactForm />
            <SocialContact />
          </article>
        </section>
      </main>
    </>
  );
}
