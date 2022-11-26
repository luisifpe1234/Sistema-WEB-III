const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discSchema = Schema({

    codigod: Number,
    nd: String,
    cargah: Number
    
    });

module.exports = mongoose.model("Disc", discSchema);