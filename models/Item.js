import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: Number,
  stock: Number,
  depto: String,
  description: String,
});

export default mongoose.model("Item", itemSchema);
