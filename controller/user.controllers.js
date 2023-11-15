const User = require("../models/User.model");
const uid2 = require("uid2");
const { SHA256 } = require("crypto-js");
const encBase64 = require("crypto-js/enc-base64");

const signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "Missing parameters" });
    }

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email déjà utilisé" });

    const salt = uid2(16);
    const hash = SHA256(password + salt).toString(encBase64);
    const token = uid2(16);

    const newUser = new User({
      email,
      account: { username },
      token,
      hash,
      salt,
    });

    await newUser.save();

    return res.status(200).json({
      _id: newUser._id,
      token: newUser.token,
      account: newUser.account,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Une erreur est survenue", err: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing parameters" });
    }

    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ message: "Cet email n'a pas était trouvé !" });

    const hashToCompare = SHA256(password + user.salt).toString(encBase64);
    if (user.hash === hashToCompare) {
      return res.status(200).json({
        _id: user._id,
        token: user.token,
        account: user.account,
      });
    } else {
      return res.status(401).json({ message: "Mots de passe invalide !" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Une erreur est survenue", err });
  }
};

const updateHeroToFavories = async (req, res) => {
  try {
    const { id } = req.params;
    const { method } = req.query;

    if (!id || !(method === "add" || method === "delete")) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const index = user.account.favorites_hero.indexOf(id);

    if (method === "add") {
      if (index === -1) {
        user.account.favorites_hero.push(id);
      }
    } else if (method === "delete") {
      if (index !== -1) {
        user.account.favorites_hero.splice(index, 1);
      }
    }

    await user.save();

    return res
      .status(200)
      .json({ message: "Favorites updated successfully", user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Une erreur est survenue", err });
  }
};

const updateComicToFavories = async (req, res) => {
  try {
    const { id } = req.params;
    const { method } = req.query;

    if (!id || !(method === "add" || method === "delete")) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const index = user.account.favorites_comics.indexOf(id);

    if (method === "add") {
      if (index === -1) {
        user.account.favorites_comics.push(id);
      }
    } else if (method === "delete") {
      if (index !== -1) {
        user.account.favorites_comics.splice(index, 1);
      }
    }

    await user.save();

    return res
      .status(200)
      .json({ message: "Favorites updated successfully", user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Une erreur est survenue", err });
  }
};

module.exports = { signup, login, updateComicToFavories, updateHeroToFavories };
