import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    discordId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
    lastDailyCollected: {
      type: Date,
      default: null,
    },
    lastClaimCollected: {
      type: Date,
      default: null,
    },
    lastVoteTimestamp: {
      type: Date,
      default: null,
    },
    currencies: {
      type: Map,
      of: Number,
      default: {},
    },
    stocks: {
      type: [
        {
          symbol: String,
          amount: Number,
          purchasePrice: Number,
          purchaseDate: Date,
          currentPrice: Number,
          currentTotalValue: Number,
          profit: Number,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
