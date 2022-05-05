import axios from "axios";

import * as Constants from "./constants";

export const axios = axios.create({
  baseURL: Constants.API_URL,
});
