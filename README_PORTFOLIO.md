# 🚀 Portfolio Sandratra

Un portfolio professionnel moderne créé avec **React**, **TypeScript** et **CSS Modules**.

## 📋 Contenu

- ✅ **Hero Section** - Présentation avec statistiques
- ✅ **About Section** - À propos avec highlights
- ✅ **Skills Section** - Compétences par catégorie (Frontend, Backend, Tools)
- ✅ **Projects Section** - Projets en vedette avec technologies
- ✅ **Experience Section** - Timeline de l'expérience professionnelle
- ✅ **Contact Section** - Formulaire de contact
- ✅ **Header Navigation** - Navigation sticky responsive
- ✅ **Footer** - Liens et copyright

## 🎯 Fonctionnalités

- 📱 **Responsive Design** - Adapté pour tous les écrans
- ⚡ **Performance Optimisée** - Images lazy-loaded, CSS Modules
- 🎨 **Design moderne** - Dégradés, animations fluides
- ♿ **Accessible** - Sémantique HTML5, navigation au clavier
- 🔗 **Navigation fluide** - Scroll smooth avec ancres
- 📝 **Formulaire de contact** - Avec validation

## 🏗️ Structure du projet

```
src/
├── components/
│   ├── common/          # Button, etc.
│   ├── layout/          # Header, Footer
│   └── sections/        # Hero, About, Skills, Projects, Experience, Contact
├── pages/
│   └── HomePage.tsx     # Page principale
├── data/
│   ├── skills.ts
│   ├── projects.ts
│   └── experience.ts
├── types/
│   └── portfolio.ts     # Types TypeScript
├── App.tsx
└── main.tsx
```

## 🚀 Démarrage rapide

### Installation

\`\`\`bash

# Installer les dépendances

pnpm install
\`\`\`

### Développement

\`\`\`bash

# Démarrer le serveur de développement

pnpm run dev
\`\`\`

Le site sera accessible à [http://localhost:5173](http://localhost:5173)

### Build

\`\`\`bash

# Créer une version optimisée pour la production

pnpm run build

# Prévisualiser la build

pnpm run preview
\`\`\`

### Linting

\`\`\`bash

# Vérifier le code

pnpm run lint
\`\`\`

## 📝 Personnalisation

### 1. Mettre à jour les données personnelles

**src/data/skills.ts** - Modifier les compétences

```typescript
export const skills: Skill[] = [
  { id: "1", name: "React", category: "frontend", level: "advanced" },
  // ...
];
```

**src/data/projects.ts** - Ajouter vos projets

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Mon projet",
    description: "Description du projet",
    // ...
  },
];
```

**src/data/experience.ts** - Ajouter votre expérience

```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Mon entreprise",
    position: "Mon poste",
    // ...
  },
];
```

### 2. Personnaliser le Header

**src/components/layout/Header.tsx** - Modifier le logo et les liens de navigation

### 3. Modifier les couleurs

**src/index.css** - Personnaliser les variables CSS :

```css
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  /* ... */
}
```

### 4. Ajouter une image/avatar

Remplacer le placeholder dans **HeroSection** par une vraie image

### 5. Intégrer un backend

Utiliser `apiService` dans **src/services/api.ts** pour connecter à votre API

## 🔧 Technologies

- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **CSS Modules** - Styles isolés
- **React Hooks** - State management

## 📱 Responsive

Le site est entièrement responsive :

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1024px+)

## 🎨 Palette de couleurs

- **Primary**: Bleu (#3b82f6)
- **Secondary**: Gris (#6b7280)
- **Success**: Vert (#10b981)
- **Warning**: Ambre (#f59e0b)
- **Error**: Rouge (#ef4444)

## 📞 Contact & Liens

Modifier les liens dans :

- **src/components/layout/Header.tsx** - Navigation
- **src/components/layout/Footer.tsx** - Réseaux sociaux
- **src/components/sections/ContactSection.tsx** - Formulaire

## 📄 Licence

Ce projet est open source et libre d'utilisation.

## 👨‍💻 Développé par

Sandratra - Frontend/Fullstack Developer
