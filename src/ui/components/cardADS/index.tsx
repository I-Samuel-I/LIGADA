import { card } from "./data";
import "./style.scss";

export default function CardAds() {
  return (
    <>
      <div className="cardAds-container">
        {card.map((card, index) => (
          <div key={index} className="each-card">
           <i className={card.icon}/>
            <h1>{card.title}</h1>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
