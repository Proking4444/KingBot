const { Schema, model } = require('mongoose');

const globalSchema = new Schema({
    count: {
        type: Number,
        default: 0
    },
},
);

module.exports = model('Global', globalSchema)