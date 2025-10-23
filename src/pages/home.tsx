import CardAbout from "../ui/components/cardAbout";
import CardAds from "../ui/components/cardADS";

export default function HomePage() {
  return (
    <>
      <main>
        <section>
          <p>Liga Acadêmica Feminia de ADS</p>
          <h1>Conectando Mulheres na Tecnologia</h1>
          <h2>
            A LIGADA é uma comunidade colaborativa que empodera mulheres no
            curso de Análise e Desenvolvimento de Sistemas através de
            networking, aprendizado e crescimento profissional.
          </h2>
          <div>
            <a>Jnte-se a Nós</a>
            <a>Saiba Mais</a>
          </div>
        </section>

        <section>
          <h2>Sobre a LIGADA</h2>
          <p>
            Somos uma liga acadêmica dedicada a fortalecer a presença feminina
            na tecnologia, criando um espaço seguro e colaborativo para
            crescimento profissional e pessoal.
          </p>
          <div>
            <CardAbout />
          </div>
          <aside>
            <h3>Nossa Missão</h3>
            <p>
              Incentivar e empoderar mulheres no curso de Análise e
              Desenvolvimento de Sistemas, promovendo igualdade de
              oportunidades, desenvolvimento técnico e criando uma comunidade
              colaborativa que transforma desafios em conquistas coletivas.
            </p>
          </aside>
        </section>

        <section>
          <h2>Sobre o Curso de ADS</h2>
          <p>
            Análise e Desenvolvimento de Sistemas é um curso tecnólogo focado em
            formar profissionais capacitados para desenvolver, implementar e
            gerenciar sistemas de informação.
          </p>
          <CardAds />
        </section>
      </main>
    </>
  );
}
