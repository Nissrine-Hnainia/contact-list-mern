//1-require express to import express router
const express = require('express')
const router = express.Router()

//2-require mongoose model
const User = require('../models/User')

//API: "/api/users/create-user"
//desc: create new user
//access: public

// router.post("/create-user", (req, res) => {
//     const {name, bio, age} = req.body
//     const user = new User({name, age, bio})
//     user.save()
//     .then((result) => res.status(200).send(result))
//     .catch((error) => res.status(500).send(error))
// })

router.post('/create-user', async (req, res) => {
    const {name, age, bio} = req.body
    try {
        const user = await new User ({name, age, bio})
        await user.save()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({msg: "Server error"})
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


//API: "/api/users/"
//desc: get all users
//access: public
router.get("/", (req, res) => {
    User.find({})
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error))
})


module.exports = router
