// O Objetivo desse arquivo é reunir todas as definições de rotas existentes
const { Router } = require("express");

const usersRouter = require("./user.routes");

const routes = Router();

//Toda vez que acessarem alguma coisa /users, vai usar o usersRouter
routes.use("/users", usersRouter);

module.exports = routes;