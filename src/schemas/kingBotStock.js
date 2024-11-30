import mongoose from "mongoose";

const kingBotStockSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  stocksInCirculation: { type: Number, required: true },
  volume: { type: Number, required: true },
});

export default mongoose.model("KingBotStock", kingBotStockSchema);