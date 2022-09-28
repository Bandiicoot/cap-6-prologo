import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
// import "dotenv/config";

console.log(process.env.NODE_ENV);

app.get("/env", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
  });
});

app.get("/hola", (req, res) => {
  res.json({
    message:
      "hola soy el servidor,heroku SOY AXELe Y ASDHAGOAAOGADSDASFGFD Y VAS A FUNCIONAAAAAAAARRRRRRR????????",
  });
});

app.listen(port, () => {
  console.log("hola soy express y estoy corriendo en el puerto" + port);
});
