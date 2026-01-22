import { PROFILE_INFO, COLORS } from '../config';

/**
 * Composant Header
 * Affiche le banneau en haut avec:
 * - Image de fond (bannière)
 * - Nom et titre
 * - Coordonnées de contact
 */
function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${PROFILE_INFO.bannerImage})` }}>
      {/* Overlay sombre pour améliorer la lisibilité du texte sur l'image */}
      <div className="header-overlay"></div>
      
      {/* Contenu du header */}
      <div className="header-content">
        <h1 className="header-name">{PROFILE_INFO.name}</h1>
        <p className="header-title">{PROFILE_INFO.title}</p>
        
        {/* Section coordonnées */}
        {/* <div className="header-contact">
          <a href={`mailto:${PROFILE_INFO.email}`} className="contact-link">
            {PROFILE_INFO.email}
          </a>
        </div> */}
        
        {/* Lien CV en bas */}
        <a href="/resources/Vincent Gaston Gamedev Resume.pdf" target="_blank" rel="noopener noreferrer" className="cv-link-bottom">
          View Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
