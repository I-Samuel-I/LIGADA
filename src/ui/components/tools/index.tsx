import { tool, work } from "./data";
import "./style.scss";
export default function Tools() {
  return (
    <>
      <div className="cardWork-container">
        <div className="each-card">
          <div className="title-works">
            <i className="fa-solid fa-briefcase" />
            <h2>Áreas de Atuação</h2>
          </div>

          {work.map((work, index) => (
            <div key={index} className="work-container">
              <div className="divider"/>
              <a href={work.link} target="_blank">
                <h3>{work.title}</h3>
                <p>{work.text}</p>
              </a>
            </div>
          ))}
        </div>
        <div className="each-card">
          <div className="title-tools">
            <i className="fa-solid fa-arrow-up-right-from-square" />
            <h2>Recursos e Ferramentas</h2>
          </div>

          {tool.map((tool, index) => (
            <div key={index} className="tool-container">
              <a href={tool.link} target="_blank">
                <i className={tool.icon} />
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
