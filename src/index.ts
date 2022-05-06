import { axiosInstance } from "./axios";

type Event = {
  data: string;
};

export async function triggerApi(event: Event) {
  const hasInvalidMessage = !event.data;

  if (hasInvalidMessage) {
    throw new Error("Can't get event message");
  }

  const message = Buffer.from(event.data, "base64").toString();

  try {
    await axiosInstance.post("/users", JSON.parse(message));
    console.log("Sucesso ao enviar request");
  } catch (error) {
    console.error("Falha ao enviar request");
  }
}
