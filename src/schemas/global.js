import { Schema, model } from "mongoose";

const countSchema = new Schema({
  value: {
    type: Number,
    required: true,
    default: 0,
  },
});

const chatHistorySchema = new Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ChatHistory = model("ChatHistory", chatHistorySchema);
const Count = model("Count", countSchema);

export { ChatHistory, Count };
