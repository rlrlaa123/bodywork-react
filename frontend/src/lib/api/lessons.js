import client from "./client";

export const writeLesson = ({ title, body }) =>
  client.post("/api/lessons", { title, body });
