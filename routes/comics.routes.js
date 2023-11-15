const { Router } = require("express");
const {
  getComics,
  getHero,
  getHeroComics,
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

module.exports = comicsRouter;
