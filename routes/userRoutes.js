//1-require express to import express router
const express = require('express')
const router = express.Router()

//2-require mongoose model
const User = require('../models/User')

//3-require bcrypt to crypt the password
const bcrypt = require('bcryptjs')

//require jsonwebtoken to generate the token
const jwt = require('jsonwebtoken')

//require auth middleware to check access
const auth = require('../middlewares/auth')


// router.post("/create-user", (req, res) => {
//     const {name, bio, age} = req.body
//     const user = new User({name, age, bio})
//     user.save()
//     .then((result) => res.status(200).send(result))
//     .catch((error) => res.status(500).send(error))
// })

// router.post('/create-user', async (req, res) => {
//     const {name, age, bio} = req.body
//     try {
//         const user = await new User ({name, age, bio})
//         await user.save()
//         return res.status(200).send(user)
//     } catch (error) {
//         return res.status(500).send({msg: "Server error"})
//     }
// })


//API: "/api/users/register"
//desc: create new user
//access: public
router.post('/register', async (req, res) => {
    const {name, age, bio, email, password} = req.body //body of the request
    try {
        //check if all fields are not empty
        if ( !name || !age || !bio || !email || !password) {
            return res.status(404).send({msg: "Please enter your credentials"})
        }

        // check if user already exists
        let user = await User.findOne({email})

        if (user) {
            return res.status(400).send({msg: "User already exists"})
        }

        //create user in DB
        user = await new User(req.body) 


        //1.crypt the pass 
        // 1.1 create the salt
        const salt = 10

        //1.2 hash the pass
        const hashedPass = await bcrypt.hash(password, salt)

        //1.3 replace the password with hashedPass
        user.password = hashedPass

        //2.generate a token
        //2.1 create the payload
        const payload = {
            id: user._id
        }

        //2.2 sign the token
        const token = await jwt.sign(payload, process.env.secretOrKey, {expiresIn: "1 day"})

        //save the user in db
        await user.save()

        return res.status(200).send({msg: "User created successfully", user, token})
    } catch (error) {
        return res.status(500).send({msg: "Server error"})
    }
})


//API: "/api/users/login"
//desc: login the user 
//access: public
router.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {
        //check if all fields are not empty
        if ( !email || !password) {
            return res.status(404).send({msg: "Please enter your credentials"})
        }

        // check if user already exists
        const user = await User.findOne({email})


        if (!user) {
            return res.status(400).send({msg: "bad credentials"})
        }

        //check password
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).send({msg:"bad credentials"})
        }

        //2.generate a token
        //2.1 create the payload
        const payload = {
            id: user._id
        }

        //2.2 sign the token
        const token = await jwt.sign(payload, process.env.secretOrKey, {expiresIn: "1 day"})


        return res.status(200).send({msg: "User logged-in successfully", user, token})
    } catch (error) {
        return res.status(500).send({msg: "Server error"})
    }
})


//API: "/api/users/"
//desc: get all users
//access: public
router.get("/", (req, res) => {
    User.find({})
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error))
})

// //API: "/api/users/profile"
// //desc: get personal profile
// //access: private
router.get("/profile", auth, async (req, res) => {
    try {
        return res.status(200).send({user: req.user})
    } catch (error) {
        return res.status(500).send({msg:"Server error"})
    }
})


//API: "/api/users/edit/:id"
//desc: find user by id and update
//access: public
router.put("/edit/:id", (req, res) => {
    const {id} = req.params
    const {name, age, bio} = req.body
    User.findOneAndUpdate({id}, {$set:{name, age, bio}}, {new: true}) //{new :true} to get the updated version
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error))
})



//API: "/api/users/remove/:userId"
//desc: find user by id and delete it
//access: public
router.delete("/remove/:userId" ,(req, res) => {
    const {userId} = req.params
    User.findOneAndDelete({userId})
    .then((result) => res.status(200).send({msg:"user deleted"}))
    .catch((error) => res.status(500).send(error))
})




module.exports = router
