# Samuel Sean Portfolio

Portfolio personnel developpe avec Next.js pour presenter le profil, les competences, les projets, les experiences et les certifications de Samuel Sean Fotsing Tagatsing.

L'interface met l'accent sur une direction visuelle moderne avec animations fluides, effets neon, sections immersives et experience responsive.

## Apercu

- Hero anime avec effet typing
- Navigation fixe avec barre de progression au scroll
- Section profil et parcours academique
- Section competences avec cartes animees
- Section certifications avec visuels integres
- Section projets alimentee par une API locale
- Formulaire de contact connecte a une API interne
- Fond particulaire et curseur personnalise

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

### Donnees des projets

Les projets affiches dans la section `Projects` proviennent du fichier :

`src/lib/data/projects.json`

Ils sont exposes cote application via :

`GET /api/projects`

### Formulaire de contact

Le formulaire envoie les donnees vers :

`POST /api/contact`

Les messages sont actuellement enregistres localement dans :

`src/lib/data/contacts.json`

Cela est pratique en developpement, mais peu adapte a une production reelle sans base de donnees ou service de messagerie.

## Installation

### Prerequis

- Node.js 20+ recommande
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

### Modifier les informations affichees

- Hero : `src/components/Hero.tsx`
- A propos : `src/components/About.tsx`
- Competences : `src/components/Skills.tsx`
- Certifications : `src/components/Certifications.tsx`
- Experiences : `src/components/Experiences.tsx`
- Projets : `src/lib/data/projects.json`
- Metadonnees SEO : `src/app/layout.tsx`

### Modifier le style global

Les couleurs, polices et classes utilitaires principales se trouvent dans :

`src/app/globals.css`

### Images

Les images locales du portfolio sont stockees dans `public/`.

Le projet autorise aussi les images distantes provenant de `images.unsplash.com` via la configuration Next.js.

## Points d'attention

- Le bouton de telechargement du CV pointe vers `/cv.pdf`. Il faut ajouter ce fichier dans `public/` si vous voulez que le lien fonctionne.
- Les icones sociales du footer pointent actuellement vers `#` et peuvent etre remplacees par les vrais profils.
- Les messages du formulaire sont ecrits dans un fichier JSON local, ce qui peut poser des limites en hebergement serverless ou multi-utilisateur.

## Deploiement

Le projet peut etre deploye sur Vercel ou toute plateforme compatible avec Next.js.

Pour une mise en production plus robuste, il est conseille de :

- brancher le formulaire a une base de donnees ou un service email
- ajouter les vrais liens sociaux
- ajouter le CV dans `public/cv.pdf`
- completer eventuellement les metadonnees Open Graph

## Auteur

Samuel Sean Fotsing Tagatsing

Portfolio oriente Software Engineering, Full Stack et Intelligence Artificielle.
