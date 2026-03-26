# Samuel Sean Portfolio

Portfolio personnel développé avec Next.js pour présenter le profil, les compétences, les projets, les expériences et les certifications de Samuel Sean Fotsing Tagatsing.

L'interface met l'accent sur une direction visuelle moderne, avec des animations fluides, des effets néon, des sections immersives et une expérience responsive.

## Aperçu

- Hero animé avec effet de frappe
- Navigation fixe avec barre de progression au défilement
- Section profil et parcours académique
- Section compétences avec cartes animées
- Section certifications avec visuels intégrés
- Section projets alimentée par une API locale
- Formulaire de contact connecté à une API interne
- Fond particulaire et curseur personnalisé

## Stack technique

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Structure du projet

```text
src/
  app/
    api/
      contact/route.ts
      projects/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    Hero.tsx
    About.tsx
    Skills.tsx
    Certifications.tsx
    Projects.tsx
    Experiences.tsx
    ContactForm.tsx
    Navbar.tsx
    Footer.tsx
  lib/
    data/
      projects.json
      contacts.json
    utils.ts
public/
```

## Fonctionnement

### Données des projets

Les projets affichés dans la section `Projects` proviennent du fichier :

`src/lib/data/projects.json`

Ils sont exposés côté application via :

`GET /api/projects`

### Formulaire de contact

Le formulaire envoie les données vers :

`POST /api/contact`

Les messages sont actuellement enregistrés localement dans :

`src/lib/data/contacts.json`

Cela est pratique en développement, mais peu adapté à une production réelle sans base de données ou service de messagerie.

## Installation

### Prérequis

- Node.js 20+ recommandé
- npm

### Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir :

[http://localhost:3000](http://localhost:3000)

### Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Personnalisation

### Modifier les informations affichées

- Hero : `src/components/Hero.tsx`
- À propos : `src/components/About.tsx`
- Compétences : `src/components/Skills.tsx`
- Certifications : `src/components/Certifications.tsx`
- Expériences : `src/components/Experiences.tsx`
- Projets : `src/lib/data/projects.json`
- Métadonnées SEO : `src/app/layout.tsx`

### Modifier le style global

Les couleurs, les polices et les classes utilitaires principales se trouvent dans :

`src/app/globals.css`

### Images

Les images locales du portfolio sont stockées dans `public/`.

Le projet autorise aussi les images distantes provenant de `images.unsplash.com` via la configuration Next.js.

## Points d'attention

- Le bouton de téléchargement du CV pointe vers `/cv.pdf`. Il faut ajouter ce fichier dans `public/` si vous voulez que le lien fonctionne.
- Les icônes sociales du footer pointent actuellement vers `#` et peuvent être remplacées par les vrais profils.
- Les messages du formulaire sont écrits dans un fichier JSON local, ce qui peut poser des limites en hébergement serverless ou multi-utilisateur.

## Déploiement

Le projet peut être déployé sur Vercel ou toute autre plateforme compatible avec Next.js.

Pour une mise en production plus robuste, il est conseillé de :

- brancher le formulaire à une base de données ou à un service d'email
- ajouter les vrais liens sociaux
- ajouter le CV dans `public/cv.pdf`
- compléter éventuellement les métadonnées Open Graph

## Auteur

Samuel Sean Fotsing Tagatsing

Portfolio orienté Software Engineering, Full Stack et Intelligence Artificielle.
