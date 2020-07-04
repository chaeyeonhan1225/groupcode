const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true,
    },
    nick: {
        type: String,
        required: true,
        unique: true,
    },
    posts: {
        type: String,
    },
    comment: {
        type: String,
    },
    group: {
        type: String,
        default: "none",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('User',userSchema);