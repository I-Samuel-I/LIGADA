import "./style.scss";
import { voices } from "./data";
export default function Voice() {
  return (
    <>
      <div className="voice-section-container">
        {voices.map((voice, index) => (
          <div key={index} className="voice-card">
            <div className="voice-header">
              <img src={voice.image} alt={voice.name} />
              <div>
                <h3>{voice.name}</h3>
                <p>{voice.role}</p>
              </div>
            </div>
            <blockquote>{voice.quote}</blockquote>
          </div>
        ))}
      </div>
    </>
  );
}
