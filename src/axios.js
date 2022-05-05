import axios from "axios";

import * as Constants from "./constants.js";

export const axiosInstance = axios.create({
  baseURL: Constants.API_URL,
});
