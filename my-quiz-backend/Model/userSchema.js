const mongoose = require('mongoose')
const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    correct: {
        type: Number,
        required: true,
        min: 0
    },
    wrong: {
        type: Number,
        required: true,
        min: 0
    },
    attempt: {
        type: Number,
        required: true,
        min: 0
    },
    score:{
        type: Number,
        required: true,
    },
    time: {
        type :String,
        required: true
    }
});
const Qdata = mongoose.model('Qdata', DataSchema);
module.exports = Qdata;