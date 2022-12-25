const { default: axios } = require("axios");
require("dotenv").config();
const { PRODUCT_TIMEOUT, PRODUCT_URL } = process.env;

const apiUser = axios.create({
  baseURL: PRODUCT_URL,
  timeout: +PRODUCT_TIMEOUT,
});

module.exports = apiUser;
