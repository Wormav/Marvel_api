const { Router } = require("express");
const {
  getComics,
  getHero,
  getHeroComics,
  getHeroById,
  getComicsById,
} = require("../controller/comics.controller");

const comicsRouter = Router();

comicsRouter.get("/comics", (req, res) => {
  getComics(req, res);
});

comicsRouter.get("/hero", (req, res) => {
  getHero(req, res);
});

comicsRouter.get("/comics/:characterId", (req, res) => {
  getHeroComics(req, res);
});

comicsRouter.get("/one/hero/:id", (req, res) => {
  getHeroById(req, res);
});

comicsRouter.get("/one/comics/:id", (req, res) => {
  getComicsById(req, res);
});

module.exports = comicsRouter;
