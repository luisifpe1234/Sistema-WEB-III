const express = require ("express");
const app = express();

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://lemos13:5ERokIWe9hHPTKey@cluster0.smjc98x.mongodb.net/banco?retryWrites=true&w=majority")




const PessoaModel = require("./models/PessoaModel");
const DiscModel = require("./models/DiscModel");
const UsuarioModel = require("./models/UsuarioModel");


const session = require("express-session");
app.use(session({
    secret: 'ifpe',
    saveUninitialized:false,
    resave: false
    
}));


const pessoaRoutes = require("./routes/pessoaRoutes");
app.use(pessoaRoutes);

const discRoutes = require("./routes/discRoutes")
app.use(discRoutes);

const usuarioRoutes = require("./routes/usuarioRoutes")
app.use(usuarioRoutes);


const pessoa = require("./pessoa");
const disc = require("./disc")
const p1 = new pessoa(1, "Daniel", 4)

lista = []
lista.push(p1)

app.get("/", function(req, res) {
    res.render("index", {pessoa});
});



app.post("/pessoas", async function(req, res){
    const p = req.body;
    const novaPessoa = new PessoaModel({


       codigo: p.codigo,
        nome: p.nome,
        idade: p.idade
        
    });
        await novaPessoa.save();
    res.redirect("/pessoas")
});

app.post("/listar_dis", async function(req, res){
    const d = req.body;
    const novaDisc = new DiscModel({

        codigod: d.codigod,
        nd: d.nd,
        cargah: d.cargah
        
        });
        await novaDisc.save();
    res.redirect("/listar_dis")
});

app.post("/login", async function(req, res){
    const l = req.body;
    const novaUsuario = new UsuarioModel({

        email: l.email,
        nm: l.nm,
        senhaUser: l.senhaUser,
        id: l.id
        
        });
        await novaUsuario.save();
    res.redirect("/login")
});





app.use(function(req, res) {
    res.status(404).render("404");
});


app.listen(999,function(){
  console.log("servidor iniciado");
});

