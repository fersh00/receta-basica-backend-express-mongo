import express from "express";
import { connect } from "./config.js";

connect();

const api = express();

api.listen(8001, () => {
  console.log("Escuchando puerto 8001");
});

api.get("/test", (req, res) => {
  res.send("Hola esta es una prueba...");
});
