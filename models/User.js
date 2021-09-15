//1-require mongoose to create the schema
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const User = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model('User', User)