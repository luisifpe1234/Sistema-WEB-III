const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = Schema({

    email: String,
    nm: String,
    senhaUser: String
    
    });
    module.exports = mongoose.model("Usuario", usuarioSchema);