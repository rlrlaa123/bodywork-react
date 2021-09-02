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

export const readLesson = (id) => client.get(`/api/lessons/${id}`);

export const listLessons = ({ page }) =>
  client.get(`/api/lessons?page=${page}`);
