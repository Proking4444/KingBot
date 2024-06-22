const { Schema, model } = require('mongoose');

const globalSchema = new Schema({
    count: Number,
},
);

module.exports = model('Global', globalSchema)