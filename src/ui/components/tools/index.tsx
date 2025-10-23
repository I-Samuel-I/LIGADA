import { tool } from "./data";

export default function Tools() {
  return (
    <>
      <div>
        <h2>Recursos e Ferramentas</h2>
        {tool.map((tool, index) => (
          <div key={index}>
            <a href={tool.link}>
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
