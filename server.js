import express from "express";
import { connect } from "./config.js";

connect();

const api = express();

api.listen(8001, () => {
  console.log("Escuchando puerto 8001");
});


