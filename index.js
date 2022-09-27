"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
console.log(process.env.FIREBASE_CONECTION);
app.get("/hola", function (req, res) {
    res.json({ message: "hola soy el servidor" });
});
app.listen(3002, function () {
    console.log("hola soy express");
});
