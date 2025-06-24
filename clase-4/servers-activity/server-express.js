const express = require("express");
const { users } = require("./utils.js");

const server = express();

server.get("/", (request, response) => {
  response.send("Hola mundo desde el backend");
});

server.get("/welcome", (request, response) => {
  const elemntHtml = `<h2 style="color: blue"> Bienvenido usuario </h2>`;
  response.send(elemntHtml);
});

//   localhost:8000/users?gender=m&email=user@mail.co
//   { gender: "m",  email: user@mail.co }
server.get("/users", (request, response) => {
  const { gender } = request.query;
  let usersResponse;

  if (gender) {
    if (gender === "m")
      usersResponse = users.filter((u) => u.gender === "Masculino");
    else if (gender === "f")
      usersResponse = users.filter((u) => u.gender === "Femenino");
    else usersResponse = users;
    return response.json(usersResponse);
  } else {
    response.json(users);
  }
});

server.get("/users/:id", (request, response) => {
  const { id } = request.params;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return response.json({ status: "error", message: "User not found" });
  }
  response.json({ status: "success", response: user });
});

server.listen(8000, () => console.log(`listening on port 8000`));
