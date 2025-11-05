// CardNextEvents.tsx
import { nextEventsData } from "./data";
import "./style.scss";

export default function CardNextEvents() {
  return (
    <div className="next-events-container">
      <div className="header">
        <i className="fa-solid fa-calendar-alt" />
        <h3>Próximos Eventos</h3>
      </div>

      <div className="events-grid">
        {nextEventsData.map((event, index) => (
          <div key={index} className="next-event-detail-card">
            <span className="month-day">{event.monthDay}</span>

            <span className="title">{event.title}</span>

            <span className="time-place">
              {event.time}
              <br />
              {event.place}
            </span>
          </div>
        ))}
      </div>
      <div className="calendar-container">
        <a href="/calendario" target="_blank" className="calendar-button">
          Ver Calendário Completo{" "}
          <i className="fa-solid fa-external-link-alt" />
        </a>
      </div>
    </div>
  );
}
