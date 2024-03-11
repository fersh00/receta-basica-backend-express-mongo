import express from "express";
import {
  createItem,
  getAllItems,
  getItemById,
  roughDeleteItem,
  softDeleteItem,
  updateItem,
} from "../controllers/itemController.js";

const itemRoutes = express.Router();

itemRoutes.post("/items", createItem);
itemRoutes.get("/items", getAllItems);
itemRoutes.get("/items/:itemId", getItemById);
itemRoutes.put("/items/:itemId", updateItem);
itemRoutes.put("/item/:itemId", softDeleteItem);
itemRoutes.delete("/item/:itemId", roughDeleteItem);

export { itemRoutes };
