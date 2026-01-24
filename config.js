/**
 * CONFIGURATION DU PORTFOLIO
 * Modifiez ces valeurs pour personnaliser votre portfolio
 */

// Informations personnelles affichées dans le header
export const PROFILE_INFO = {
  name: 'Vincent Gaston',
  title: 'Game Developer & Full Stack Developer',
  email: 'vincent.gaston@epitech.eu',
  //phone: '+33 6 12 34 56 78',
  // URL de l'image de bannière (remplacez par votre propre image)
  bannerImage: '/projects/resources/elden-ring-liurnia.jpg',
};

// Liste des projets affichés dans la grille
// Modifiez cette liste pour ajouter/supprimer vos projets
export const PROJECTS = [
  {
    id: 1,
    title: 'Our Land',
    shortDescription: 'Turn-based strategy game inspired by permaculture',
    longDescription: 'Unity indie game prototype, made from 2019 to 2020. I was the lead programmer in a team of 2 to 4 members',
    // URL de l'image de la carte (remplacez par vos images)
    image: '/projects/resources/ourland title.png',
    // Lien Itch.io ou votre lien personnalisé
    link: 'https://melolon.itch.io/our-land',
  },
  {
    id: 2,
    title: 'Martyr',
    shortDescription: 'Weird parkour prototype',
    longDescription: 'Solo Unity project made in 2024, I made everything from programming to 3D modeling, textures and shaders',
    image: '/projects/resources/martyr title.png',
    link: 'https://vitoy.itch.io/martyr-demo',
  },
  {
    id: 3,
    title: 'CVLT',
    shortDescription: 'Cult management simulator',
    longDescription: 'Unity project made in a week for a game jam in 2021, I was one of the two devs on the project',
    image: '/projects/resources/cvlt title.png',
    link: 'https://melolon.itch.io/cvlt',
  },
  {
    id: 4,
    title: 'Megaflight (No release yet)',
    shortDescription: 'Online arcade wingsuit flying game',
    longDescription: 'Solo Unity project inspired by Superflight. Backend architecture made from scratch in C# .Net',
    image: '/projects/resources/megaflight title.png',
    link: '',
  },
  /*{
    id: 5,
    title: 'Projet 5',
    description: 'Votre 5e projet',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&h=300&fit=crop',
    link: 'https://vincentgaston.itch.io/project5',
  },
  {
    id: 6,
    title: 'Projet 6',
    description: 'Votre 6e projet',
    image: 'https://images.unsplash.com/photo-1538012118570-cdbb766a5f21?w=500&h=300&fit=crop',
    link: 'https://vincentgaston.itch.io/project6',
  },*/
];

// Palette de couleurs minimaliste
// Modifiez ces couleurs pour adapter le style
export const COLORS = {
  // Couleur de fond principale (très claire pour un design sobre)
  background: '#fafaf9',
  // Couleur de texte principale (très foncée pour le contraste)
  text: '#1f2937',
  // Couleur d'accent (couleur secondaire subtile)
  accent: '#6b7280',
  // Couleur pour les éléments interactifs (hover)
  hover: '#374151',
  // Couleur des bordures (très subtile)
  border: '#e5e7eb',
};
