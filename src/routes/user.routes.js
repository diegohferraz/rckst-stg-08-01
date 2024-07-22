const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.get("/:name", (request, response) => {
  const { page, limit } = request.query;

  response.send(
    `Hello ${request.params.name}. Page = ${page}, Limit = ${limit}`
  );
});

usersRoutes.get("/:name/:surname", (request, response) => {
  const { name, surname } = request.params;
  response.send(`Hello ${name} ${surname}`);
});

usersRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body;
  response.json({ name, email, password });
});

module.exports = usersRoutes;
