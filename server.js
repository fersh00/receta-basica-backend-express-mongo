import express from "express";
import { connect } from "./config.js";
import { itemRoutes } from './routes/itemRoutes.js'
import { createItem } from "./controllers/itemController.js";

connect();

const api = express();
api.use(express.json());

api.listen(8001, () => {
  console.log("Escuchando puerto 8001");
});

// api.get("/test", (req, res) => {
//   res.send("Hola, esta es una prueba");
// });

api.use( itemRoutes );
