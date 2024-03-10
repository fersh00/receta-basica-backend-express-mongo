import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = () => {
  mongoose.connect(process.env.DB_URI);
  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("Conexion a db exitosa");
  });

  connection.once("error", () => {
    console.error("Error de conexion a db");
  });
};

export { connect };
