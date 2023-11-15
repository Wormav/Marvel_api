const axios = require("axios");
require("dotenv").config();

const instance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
});

module.exports = { axios: instance };
