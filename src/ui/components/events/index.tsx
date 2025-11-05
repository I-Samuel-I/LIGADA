import "./style.scss";
import { event } from "./data";

export default function EventCard() {
  return (
    <div className="projects-grid">
      {event.map((card) => (
        <div key={card.id} className="project-card">
          <i className={card.icon} />
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          {card.examples && card.examples.length > 0 && (
            <div className="examples-container">
              <h4>Exemplos:</h4>
              <ul>
                {card.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
