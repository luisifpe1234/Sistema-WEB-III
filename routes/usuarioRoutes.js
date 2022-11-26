const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");
const usuarioController = require("../controllers/usuarioController");

routes.get("/usuario/login", usuarioController.login)
routes.post("/usuario/login", usuarioController.loginPost)

routes.get("/usuario/cadUser", usuarioController.cadastroUser)
routes.post("/usuario/cadUser", usuarioController.cadastroUserPost)


module.exports = routes;
