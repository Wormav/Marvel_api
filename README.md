# Marvel api 🚀

![](https://img.shields.io/badge/Backend-Node.js-green)
![](https://img.shields.io/badge/Package-Express-orange)
![](https://img.shields.io/badge/Package-Mongoose-orange)
![](https://img.shields.io/badge/Package-Cors-orange)
![](https://img.shields.io/badge/Database-Mongodb-white)

Ce projet est une réalisation dans le cadre du bootcamp de développement web de [Le Réacteur](https://www.lereacteur.io/). Il s'agit d'un site répertoriant les comics et personnages de l'univers `Marvel`.

## Sommaire

- [🛠 Stack technologique](#-stack-technologique)
- [🌟 Fonctionnalités](#-fonctionnalités)
- [🚀 Installation](#-installation)
- [🚀 À propos du bootcamp Le Réacteur](#-à-propos-du-bootcamp-le-réacteur)

## 🛠 Stack technologique

- Node.js
- Express.js
- MongoDB

## 🌟 Fonctionnalités

- Trouver un comics
- Trouver un personnage
- Ajouter ou retirer un comics de ces favoris
- Ajouter ou retirer un personnage de ces favoris
- Trouver tous les comics où apparaît un personnage

## 🚀 Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/Wormav/Marvel_api.git
```

2. Installer les dépendances :

```bash
yarn
```

3. Créer un fichier `.env` à la racine du dosser `api` avec les variables d'environnement nécessaires :

```
DB_URL=your_mongo_db_uri
API_KEY=your_api_key
BASE_URL="https://lereacteur-marvel-api.herokuapp.com/"
PORT=3000
```

4. Lancer le serveur :

```bash
yarn start
```

## 🚀 À propos du bootcamp Le Réacteur

[Le Réacteur](https://www.lereacteur.io/) est un bootcamp de 10 semaines axé sur JavaScript, avec une spécialisation dans le stack MERN (MongoDB, Express.js, React, Node.js) ainsi que React Native. Le programme est intensif et couvre de nombreux aspects du développement web moderne.
