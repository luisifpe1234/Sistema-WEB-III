const PessoaModel = require("../models/PessoaModel");
    class PessoaController{

    static async listar (req, res){
        const lista = await PessoaModel.find();
        res.render("pessoa/listar", {lista});
    }
//projeto daniel

    static async cadastro(req, res){
        res.render("pessoa/cadastrar")
    };

    
    static async atualizarPost(req, res){
        const cod = req.params.codigo;
        let pessoa = {};
        let escondido = "";
        if(cod){
            pessoa = await PessoaModel.findOne({codigo: cod});
            escondido = "hidden";
        };
        res.render("pessoa/cadastrar", {pessoa, escondido});
    };

    static async atualizar(req, res){
        const pessoa = req.body;
        if (pessoa.id){
            await PessoaModel.findOneAndUpdate({codigo: pessoa.codigo}, {

                nome: pessoa.nome,
                idade: pessoa.idade
            })
            res.redirect("/pessoas?s=3")
        } else {
        const novaPessoa = new PessoaModel({
            codigo: pessoa.codigo,
            nome: pessoa.nome,
            idade: pessoa.idade
            
            });
            await novaPessoa.save();
        res.redirect("/pessoas?s=1")
        }
    };

    static async apagar(req, res){
        const cod = req.params.codigo
        await PessoaModel.findOneAndDelete({ codigo: cod});
        res.redirect("/pessoas?s=2")
    };

    static async detalhes(req,res){
        const codigo = req.params.codigo;    
        const resultado = await PessoaModel.findOne({codigo: codigo});
        res.render("pessoa/detalhar", {resultado});
    };

    
}
    module.exports = PessoaController