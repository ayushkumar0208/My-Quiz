const mongoose = require('mongoose')
const Feedback = new mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    email :{
        type : String,
        required: true
    },
    message : {
        type :String,
        required: true
    }
});
const Feed = mongoose.model('Feed',Feedback);
module.exports = Feed;