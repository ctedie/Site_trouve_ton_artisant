# 🔎 Trouve ton artisan

Plateforme web permettant aux particuliers de trouver facilement un artisan dans la région **Auvergne-Rhône-Alpes** et de le contacter via un formulaire.

Ce projet a été réalisé dans le cadre d'une formation **Développeur Web / Web Mobile**.

---

## 📌 Objectif du projet

L'objectif est de créer une plateforme permettant de :

- rechercher des artisans par **catégorie**
- consulter une **liste d’artisans**
- afficher la **fiche détaillée d’un artisan**
- contacter un artisan via un **formulaire de contact**

Les données sont récupérées dynamiquement depuis une **API Node.js** connectée à une base de données **MySQL**.

---

## 🛠 Technologies utilisées

### Frontend

- React.js
- Bootstrap
- Sass
- React Router

### Backend

- Node.js
- Express
- Sequelize
- MySQL / MariaDB

### Outils

- Git / GitHub
- Figma
- Visual Studio Code

---

## 📁 Structure du projet

```text
trouve-ton-artisan/
├── frontend/        # Application React
├── backend/         # API Node.js / Express
├── database/
│   ├── create.sql   # Script création base de données
│   └── seed.sql     # Script insertion des données
└── README.md
```

---

## ⚙️ Prérequis

Avant d’installer le projet, vous devez disposer de :

- Node.js (version 18 ou supérieure)
- npm
- MySQL ou MariaDB
- Git

---

## 🚀 Installation du projet

### 1. Cloner le repository

```bash
git clone https://github.com/VOTRE-USERNAME/trouve-ton-artisan.git
cd trouve-ton-artisan
```

---

## 🗄 Configuration de la base de données

Créer une base de données MySQL :

```sql
CREATE DATABASE trouve_ton_artisan;
```

Puis exécuter les scripts suivants :

- `database/create.sql`
- `database/seed.sql`

---

## 🔧 Installation et lancement du backend

Se placer dans le dossier backend :

```bash
cd backend
```

Installer les dépendances :

```bash
npm install
```

Créer un fichier `.env` à la racine du dossier `backend` avec le contenu suivant :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=motdepasse
DB_NAME=trouve_ton_artisan
PORT=3000
```

Lancer l’API :

```bash
npm run dev
```

Le serveur démarre sur :

`http://localhost:3000`

---

## 💻 Installation et lancement du frontend

Se placer dans le dossier frontend :

```bash
cd frontend
```

Installer les dépendances :

```bash
npm install
```

Lancer l’application :

```bash
npm run dev
```

Le site est accessible sur :

`http://localhost:5173`

---

## ✨ Fonctionnalités

Le site permet de :

- afficher les **catégories d’artisans**
- rechercher un artisan
- afficher une **liste d’artisans**
- consulter la **fiche détaillée d’un artisan**
- contacter un artisan via un **formulaire**
- gérer les erreurs avec une **page 404**
- améliorer le référencement avec des balises **SEO** (`title` et `meta description`)

---

## ♿ Accessibilité

Le site a été conçu en respectant les principes **WCAG 2.1** :

- navigation claire
- structure HTML sémantique
- contraste des couleurs
- responsive design en **mobile first**

---

## 🔒 Sécurité

Les bonnes pratiques suivantes ont été mises en place :

- validation des entrées utilisateur
- requêtes sécurisées via **Sequelize**
- variables sensibles stockées dans un fichier `.env`
- API accessible uniquement par l’application

---

## 🎨 Maquettes

Les maquettes ont été réalisées avec **Figma**.

Lien vers le prototype :  
`(Ajouter ici le lien Figma)`

---

## 🌍 Déploiement

Lien vers le site en ligne :  
`(Ajouter ici l’URL du site déployé)`

---

## 👨‍💻 Auteur

Projet réalisé par **Cédric TEDIE**  
dans le cadre de la formation **Développeur Web / Web Mobile**.
