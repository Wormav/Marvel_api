const { Router } = require("express");
const {
  signup,
  login,
  updateHeroToFavories,
  updateComicToFavories,
} = require("../controller/user.controllers");
const isAuthenticated = require("../middlewares/isAuthenticated.middleware");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  signup(req, res);
});

userRouter.post("/login", (req, res) => {
  login(req, res);
});

userRouter.put("/update/heros/:id", isAuthenticated, (req, res) => {
  updateHeroToFavories(req, res);
});

userRouter.put("/update/comics/:id", isAuthenticated, (req, res) => {
  updateComicToFavories(req, res);
});

module.exports = userRouter;
