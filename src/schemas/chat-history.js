import { Schema, model } from "mongoose";

const chatHistorySchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ChatHistory = model("ChatHistory", chatHistorySchema);
export default ChatHistory;