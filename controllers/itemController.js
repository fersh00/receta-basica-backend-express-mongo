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

const getAllItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

const getItemById = async (req, res) => {
  const item = await Item.findById(req.params.itemId);
  res.json(item);
};

const updateItem = async (req, res) => {
  const { itemId } = req.params;
  const updatedItem = await Item.updateOne(
    {
      _id: itemId,
    },
    req.body
  );
  res.json(updatedItem);
};

const softDeleteItem = async (req, res) => {
  const deletedItem = await Item.findByIdAndUpdate(
    req.params.itemId,
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );
  res.json(deletedItem);
};

const roughDeleteItem = async (req, res) => {
  const deletedItem = await Item.findByIdAndDelete(req.params.itemId);
  res.json(deletedItem);
};

export {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  softDeleteItem,
  roughDeleteItem,
};
