# Portfolio React Minimaliste

Un portfolio sobre et minimaliste créé avec React et Vite.

## 📋 Contenu

- **Header/Bannière** : Image de fond avec nom, titre et coordonnées
- **Grille de Projets** : 2 colonnes, 6 cartes cliquables (2 × 3)
- **Design Minimaliste** : 1 police, 1 palette de couleurs, feedback subtil au survol

## 🚀 Installation

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Accédez à `http://localhost:5173` dans votre navigateur

## 🎨 Personnalisation

### Configuration générale (`config.js`)

Modifiez les informations personnelles :
```javascript
export const PROFILE_INFO = {
  name: 'Votre Nom',
  title: 'Votre Titre',
  email: 'votre@email.com',
  phone: '+33 6 XX XX XX XX',
  bannerImage: 'URL_DE_VOTRE_IMAGE',
};
```

### Ajouter/Modifier des Projets

Dans `config.js`, modifiez le tableau `PROJECTS` :
```javascript
export const PROJECTS = [
  {
    id: 1,
    title: 'Nom du Projet',
    description: 'Description courte',
    image: 'URL_DE_LIMAGE',
    link: 'https://votre-lien-itch.io',
  },
  // Ajoutez d'autres projets ici
];
```

### Personnaliser les Couleurs

Dans `styles.css`, modifiez les variables CSS :
```css
:root {
  --color-bg: #fafaf9;        /* Fond */
  --color-text: #1f2937;      /* Texte principal */
  --color-accent: #6b7280;    /* Texte secondaire */
  --color-hover: #374151;     /* Hover */
  --color-border: #e5e7eb;    /* Bordures */
}
```

## 📁 Structure du Projet

```
.
├── index.html           # Point d'entrée HTML
├── main.jsx            # Fichier d'entrée React
├── App.jsx             # Composant principal
├── vite.config.js      # Configuration Vite
├── package.json        # Dépendances
├── config.js           # Configuration du portfolio
├── styles.css          # Styles minimalistes
└── components/
    ├── Header.jsx      # Bannière en haut
    ├── ProjectGrid.jsx # Grille de projets
    └── ProjectCard.jsx # Carte individuelle
```

## 🎯 Fonctionnalités

- ✅ Responsive (mobile, tablette, desktop)
- ✅ Feedback au survol (léger et subtil)
- ✅ Code largement commenté pour faciliter les modifications
- ✅ Design minimaliste et sobre
- ✅ Liens cliquables vers Itch.io (ouvre dans un nouvel onglet)
- ✅ Optimisé pour l'accessibilité

## 📦 Build pour Production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

## 💡 Conseils

- Utilisez des images de haute qualité (idéalement 500×300px pour les cartes)
- Gardez les descriptions de projets courtes (1-2 lignes)
- Testez le responsive en redimensionnant votre navigateur
- Les liens Itch.io doivent commencer par `https://`

---

**Bon portfolio ! 🎮**
