import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
//console.log(process.env.FIREBASE_CONECTION);

app.get("/hola", (req, res) => {
  res.json({
    message:
      "hola soy el servidor,heroku SOY AXELe Y ASDHAGOAAOGADSDASFGFD Y VAS A FUNCIONAAAAAAAARRRRRRR????????",
  });
});

app.listen(3000, () => {
  console.log("hola soy express y estoy corriendo en el puerto" + port);
});
