import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';

/**
 * Composant principal de l'application
 * Affiche le header et la grille de projets
 */
function App() {
  return (
    <div className="app">
      <Header />
      <ProjectGrid />
    </div>
  );
}

export default App;
