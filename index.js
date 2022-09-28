"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
// import "dotenv/config";
console.log(process.env.NODE_ENV);
app.get("/env", function (req, res) {
    res.json({
        environment: process.env.NODE_ENV
    });
});
app.get("/hola", function (req, res) {
    res.json({
        message: "hola soy el servidor,heroku SOY AXELe Y ASDHAGOAAOGADSDASFGFD Y VAS A FUNCIONAAAAAAAARRRRRRR????????"
    });
});
app.listen(port, function () {
    console.log("hola soy express y estoy corriendo en el puerto" + port);
});
