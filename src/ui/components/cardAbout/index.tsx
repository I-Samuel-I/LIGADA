import { card } from "./data";
export default function CardAbout() {
  return (
    <>
      {card.map((card, index) => (
        <div key={index}>
            <h1>{card.title}</h1>
            <p>{card.text}</p>
        </div>
      ))}
    </>
  );
}
