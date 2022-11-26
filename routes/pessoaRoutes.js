const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");
const pessoaController = require("../controllers/pessoaController");

routes.get("/pessoas", auth, pessoaController.listar);

routes.get("/pessoas/cadastrar", auth,  pessoaController.cadastro)

routes.get("/pessoas/cadastrar/:codigo?", auth, pessoaController.atualizarPost)

routes.get("/pessoas", auth ,pessoaController.atualizar)

routes.get("/pessoas/remover/:codigo", auth, pessoaController.apagar)

routes.get("/pessoa/:codigo", auth, pessoaController.detalhes)


module.exports = routes;