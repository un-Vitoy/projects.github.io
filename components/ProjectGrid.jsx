import ProjectCard from './ProjectCard';
import { PROJECTS } from '../config';

/**
 * Composant ProjectGrid
 * Affiche une grille de 2 colonnes avec les cartes de projets
 * Utilise CSS Grid pour la mise en page
 */
function ProjectGrid() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Grille de cartes - 2 colonnes sur desktop */}
        <div className="projects-grid">
          {/* Boucle sur tous les projets et crée une carte pour chacun */}
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;
