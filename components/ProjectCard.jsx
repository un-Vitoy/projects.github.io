/**
 * Composant ProjectCard
 * Carte individuelle pour un projet
 * Affiche:
 * - Image du projet
 * - Titre
 * - Short description (toujours visible)
 * - Lien cliquable vers Itch.io
 * 
 * Feedback au survol: 
 * - Image floutée
 * - longDescription apparaît sur l'image
 */
function ProjectCard({ project }) {
  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-card"
    >
      {/* Image du projet */}
      <div className="card-image-wrapper">
        <img 
          src={project.image} 
          alt={project.title}
          className="card-image"
        />
        
        {/* Description longue au hover (apparaît sur l'image) */}
        {project.longDescription && (
          <div className="card-image-overlay">
            <p className="card-long-description">{project.longDescription}</p>
          </div>
        )}
      </div>
      
      {/* Contenu textuel de la carte */}
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.shortDescription}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
