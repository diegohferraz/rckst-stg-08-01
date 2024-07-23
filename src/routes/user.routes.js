const { Router } = require("express");

const UsersController = require("../controllers/usersController");
const usersController = new UsersController();
const usersRoutes = Router();

function myMiddleware(request, response, next) {
  console.log("Você passou pelo middleware");
  console.log(request.body);

  if (!request.body.isAdmin) {
    return response.status(401).json({ message: "user unauthorized" });
  }
  next();
}

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

usersRoutes.post("/", myMiddleware, usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;
