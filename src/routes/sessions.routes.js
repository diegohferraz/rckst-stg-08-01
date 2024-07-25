const { Router } = require("express");

const SessionController = require("../controllers/sessionController");

const sessionRoutes = Router();
const sessionController = new SessionController();

sessionRoutes.get("/", sessionController.create);

module.exports = sessionRoutes;
