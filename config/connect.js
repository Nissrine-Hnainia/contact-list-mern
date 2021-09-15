//1-require mongoose to connect the db
const mongoose = require('mongoose')

//2-require dotenv for the configuration
require('dotenv').config({path: "./config/.env"})

//3-create the connect function
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database is connected to the application")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect