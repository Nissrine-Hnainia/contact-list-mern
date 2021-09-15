console.clear()
//1-require express
const express = require('express')

//5-require the connection fn
const connect = require('./config/connect')

//8-require the routes
const router = require('./routes/userRoutes')

//2-init the app
const app = express()

//7-middleware to parse data 
app.use(express.json())

//9-call the routing middleware
app.use("/api/users", router)

//6-call the connect fn
connect()


//3-create the port
const port = 4020

//4-listen to the app on the given port
app.listen(port, err => err? console.log(err) : console.log(`the app is running on port: ${port}`))