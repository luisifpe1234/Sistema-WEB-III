const DiscModel = require("../models/DiscModel")

class DiscController{

    

    static async listardisc (req, res){
        const listad = await DiscModel.find();
        res.render("disciplina/listar_dis", {listad});
    }

    static async disciplinas(req, res){
        res.render("disciplina/disc")
    };

    static async detalhesD(req,res){
        const codigod = req.params.codigod;    
        const resultadod = await DiscModel.findOne({codigod: codigod});
        res.render("disciplina/det_disc", {resultadod})

    };

    static async apagar(req, res){
      const cod = req.params.codigod
      await DiscModel.findOneAndDelete({ codigod: cod});
      res.redirect("/listar_dis?s=2")
  };
}

module.exports = DiscController;