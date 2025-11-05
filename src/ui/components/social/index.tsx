// SocialContact.tsx

import { socialItems } from './data';
import './style.scss'; 

export default function SocialContact() {
  return (
    <div className="contact-card social-card-wrapper">
      <h2>Nossas Redes Sociais</h2>
      
      <div className="social-list">
        {socialItems.map((item) => (
          
          <a 
            key={item.id} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-item"
          >
            <div className="icon-wrapper">
              <i className={item.icon} />
            </div>
            <div className="text-content">
              <span>{item.title}</span>
              <p>{item.detail}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}