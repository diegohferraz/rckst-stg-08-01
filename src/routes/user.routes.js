const { Router } = require("express");

const UsersController = require("../controllers/usersController");
const usersController = new UsersController();
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
  usersController.create(request, response);
});

module.exports = usersRoutes;
