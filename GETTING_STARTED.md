# Structure et conventions de projet React + TypeScript

## 📦 Installation des dépendances (si besoin)

Si vous voulez ajouter d'autres dépendances courantes:

\`\`\`bash

# State management (optionnel)

pnpm add zustand # ou Redux, Jotai, etc.

# HTTP Client (si préféré à fetch)

pnpm add axios

# Routing

pnpm add react-router-dom

# UI Components (optionnel)

pnpm add @radix-ui/react-dialog

# Testing

pnpm add -D vitest @testing-library/react @testing-library/jest-dom
\`\`\`

## 🎯 Prochaines étapes

1. **Définir vos pages**: Créer les pages dans \`src/pages\`
2. **Composer des composants**: Assembler les composants réutilisables
3. **Créer des hooks**: Extraire la logique dans des hooks personnalisés
4. **Organiser les features**: Regrouper les fonctionnalités métier
5. **Ajouter le routing**: Si besoin, installer react-router-dom
6. **Configurer TypeScript**: Ajuster \`tsconfig.json\` selon vos besoins

## 📝 Notes importantes

- **Toujours typer** vos props et variables
- **Utiliser des modules CSS** pour éviter les conflits
- **Exporter via index.ts** pour des imports propres
- **Suivre les conventions de naming** pour la cohérence
- **Documenter les fonctions publiques** avec JSDoc
