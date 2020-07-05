const mongoose = require('mongoose');
const comment = require('./comment');

const { Schema } = mogoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        ref: comment,
    }
});