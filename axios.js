const axios = require("axios");

const Constants = require("./constants.js");

exports.axiosInstance = axios.create({
  baseURL: Constants.API_URL,
});
