import "dotenv/config";

import { axios } from "./axios";

export function triggerApi(event) {
  if (event || !event.data) {
    throw new Error("Can't get event message");
  }

  const message = Buffer.from(event.data, "base64").toString();

  try {
    await axios.post("/users", JSON.parse(message))
    console.log("Sucesso ao enviar request")
  } catch (error) {
    console.error("Falha ao enviar request", error)
  }
}
