const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");
const discController = require("../controllers/discController");

routes.get("/listar_dis", auth, discController.listardisc)

routes.get("/disciplina", auth,discController.disciplinas)

routes.get("/disc/:codigod", auth,discController.detalhesD)

routes.get("/listar_dis/remover/:codigod", auth, discController.apagar)

module.exports = routes;

