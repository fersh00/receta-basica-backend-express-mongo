import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    default: 'Great Value',
  },
  price: Number,
  stock: Number,
  depto: String,
  description: String,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Item", itemSchema);
