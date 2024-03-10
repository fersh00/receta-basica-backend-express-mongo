import Item from "../models/Item.js";

//Create

// Item.create({
//    "name": "leche",
//    "price": 1,
//    "stock": 20,
//    "depto": "Lacteos",
//    "description": "Leche de vaca, presentacion 1lt",
// });

const createItem = async (req, res) => {
  const newItem = await Item.create(req.body);
  res.json(newItem);
};

//Read
//Update
//Delete

export { createItem };
