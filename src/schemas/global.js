import { Schema, model } from "mongoose";

const countSchema = new Schema({
  value: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Count = model("Count", countSchema);

export default Count;
