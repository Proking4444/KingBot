const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    discordId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    lastDailyCollected: {
        type: Date,
        default: null
    },
    lastClaimCollected: {
        type: Date,
        default: null
    },
    lastVoteTimestamp: {
        type: Date,
        default: null
    },
    stocks: {
        type: [{
            symbol: String,
            amount: Number,
            purchasePrice: Number,
            purchaseDate: Date,
            currentPrice: Number,
            currentTotalValue: Number,
            profit: Number
        }],
        default: function () {
            return [];
        }
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;