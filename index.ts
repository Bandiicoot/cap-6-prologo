import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
console.log(process.env.FIREBASE_CONECTION);

app.get("/hola", (req, res) => {
  res.json({ message: "hola soy el servidor,heroku" });
});

app.listen(3002, () => {
  console.log("hola soy express");
});