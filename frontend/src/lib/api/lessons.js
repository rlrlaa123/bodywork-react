import client from "./client";

export const writeLesson = ({
  title,
  body,
  author,
  email,
  reply,
  view,
  password,
}) =>
  client.post("/api/lessons", {
    title,
    body,
    author,
    email,
    reply,
    view,
    password,
  });
