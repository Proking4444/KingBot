const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
        default: 0
    }
});

const Count = mongoose.model('Count', countSchema);
module.exports = Count;