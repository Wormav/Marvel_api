const { axios } = require("../config/axios.config");

const getComics = async (req, res) => {
  try {
    const title = req.query.title || "";
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;

    const response = await axios.get(
      `/comics?apiKey=${process.env.API_KEY}&title=${title}&limit=${limit}&skip=${skip}`
    );

    const comics = response.data;

    return res.status(200).json(comics);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Une erreur est survenue", err: err.message });
  }
};

const getHero = async (req, res) => {
  try {
    const name = req.query.name || "";
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;

    const response = await axios.get(
      `/characters?apiKey=${process.env.API_KEY}&name=${name}&limit=${limit}&skip=${skip}`
    );

    const heros = response.data;

    res.status(200).json(heros);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Une erreur est survenue", err: err });
  }
};

const getComicsById = async (req, res) => {
  try {
    const response = await axios.get(
      `/comic/${req.params.id}?apiKey=${process.env.API_KEY}`
    );
    const comics = response.data;

    res.status(200).json(comics);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Une erreur est survenue", err: err });
  }
};

const getHeroById = async (req, res) => {
  try {
    const response = await axios.get(
      `/character/${req.params.id}?apiKey=${process.env.API_KEY}`
    );
    const hero = response.data;

    res.status(200).json(hero);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Une erreur est survenue", err: err });
  }
};

const getHeroComics = async (req, res) => {
  const limit = req.query.limit || 100;
  const skip = req.query.skip || 0;
  try {
    const response = await axios.get(
      `/comics/${req.params.characterId}?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}`
    );
    const comicsOfHero = response.data;

    res.status(200).json(comicsOfHero);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Une erreur est survenue", err: err });
  }
};

module.exports = {
  getComics,
  getHero,
  getHeroComics,
  getComicsById,
  getHeroById,
};
