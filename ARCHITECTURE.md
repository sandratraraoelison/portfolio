/\*\*

- Guide de structure du projet
-
- Architecture recommandée pour ce portfolio
  \*/

# Structure du Projet

## 📁 Hiérarchie des dossiers

```
src/
├── components/          # Composants réutilisables
│   ├── common/         # Composants basiques (Button, Input, etc.)
│   └── layout/         # Composants de mise en page (Header, Footer, etc.)
├── pages/              # Pages de l'application
├── features/           # Fonctionnalités métier isolées
├── hooks/              # Hooks personnalisés réutilisables
├── services/           # Services API et logique métier
├── types/              # Définitions TypeScript
├── utils/              # Fonctions utilitaires
├── constants/          # Constantes globales
├── styles/             # Styles globaux
└── App.tsx             # Composant racine
```

## 🎯 Conventions de naming

### Composants

- PascalCase: \`Button.tsx\`, \`UserCard.tsx\`
- Fichiers CSS Module: \`Button.module.css\`
- Dossiers: kebab-case si plusieurs fichiers liés

### Hooks

- Préfixe \`use\`: \`useAsync.ts\`, \`useFetch.ts\`
- Exporter via \`index.ts\`

### Types

- Interfaces en PascalCase: \`User\`, \`ApiResponse\`
- Types utilitaires: \`RequestStatus\`

### Services

- Noms clairs: \`api.ts\`, \`storage.ts\`, \`auth.ts\`

## 📋 Bonnes pratiques

### 1. Types TypeScript

- Toujours typer les props des composants
- Utiliser des interfaces pour les objets
- Réexporter via \`index.ts\`

### 2. Composants

- Composants fonctionnels uniquement
- Props destructurées avec types
- Éviter le state global inutile

### 3. Hooks

- Respecter les règles des hooks React
- Créer des hooks réutilisables
- Documenter avec JSDoc

### 4. Services

- Centraliser les appels API
- Gestion d'erreurs cohérente
- Singleton pattern pour les services

### 5. Styles

- CSS Module pour l'isolement
- Utiliser des variables CSS
- BEM pour la convention

## 🚀 Démarrage rapide

\`\`\`bash

# Installation

pnpm install

# Développement

pnpm run dev

# Build

pnpm run build

# Linting

pnpm run lint
\`\`\`

## 📚 Exemple d'utilisation

### Créer un composant

\`\`\`tsx
import type { FC } from 'react'
import styles from './MyComponent.module.css'

interface MyComponentProps {
title: string
onClick?: () => void
}

export const MyComponent: FC<MyComponentProps> = ({ title, onClick }) => {
return (
<div className={styles.container}>
<h1>{title}</h1>
</div>
)
}
\`\`\`

### Créer un hook

\`\`\`tsx
import { useState, useCallback } from 'react'

export const useCounter = (initial = 0) => {
const [count, setCount] = useState(initial)

const increment = useCallback(() => setCount(c => c + 1), [])
const decrement = useCallback(() => setCount(c => c - 1), [])

return { count, increment, decrement }
}
\`\`\`

### Utiliser l'API Service

\`\`\`tsx
import { apiService } from '../services/api'
import { useAsync } from '../hooks'

export const UserList = () => {
const { data: users, isLoading, error } = useAsync(() =>
apiService.get('/users')
)

if (isLoading) return <div>Chargement...</div>
if (error) return <div>Erreur</div>

return (
<ul>
{users?.map(user => (
<li key={user.id}>{user.name}</li>
))}
</ul>
)
}
\`\`\`
