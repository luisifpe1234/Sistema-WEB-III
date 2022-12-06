const UsuarioModel = require("../models/UsuarioModel");


class UsuarioController{

    static async login(req, res){
        res.render("usuario/login")
    };


    static async loginPost(req,res){
        const usuario = req.body;
        const resultado = await UsuarioModel.findOne({email: usuario.email})
        if (resultado){
            if( usuario.senhaUser==resultado.senhaUser){
                req.session.usuario = resultado.email;
                console.log("confirmou senha")
                res.redirect("/");

            } else {
                res.send("usuarios/login?e=1")
            }
        } else {
            res.send("E-mail e/ou senha inválidos")
        }
    }
    static async cadastrarPost(req, res){
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
    

    static async cadastroUser(req, res){
        res.render("usuario/cadUser")
    };
    static async cadastroUserPost(req, res){
        const l = req.body;
        const resultado = await UsuarioModel.findOne({email: l.email})
        console.log(resultado)
        if(resultado == undefined){
            
        const novaUsuario = new UsuarioModel({
    
            email: l.email,
            nm: l.nm,
            senhaUser: l.senhaUser,
            id: l.id
            
            });
            await novaUsuario.save();
        res.redirect("/usuario/login")
        }else{
            res.redirect("/usuario/cadUser")
        }
    };

   

}

module.exports = UsuarioController;