//1-require User model
const User = require('../models/User')

//2-require the jsonwebtoken
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        //pass token as request header
        const token = req.headers['authorization-token']
        
        //check token is valid
        if (!token) {
            return res.status(403).send({msg: "Access denied"})
        }
        //req.headers = kjlduhuebchjncjbehjbueb.jfnihijuihhih"i".ouheohoenh

        //decode the token to get the user payload
        const decodedToken = await jwt.verify(token, process.env.secretOrKey)

        //decodedToken = { email: "hhhh", id :hhhhh}

        //find the user by id 
        const user = await User.findById(decodedToken.id)

        if (!user) {
            return res.status(403).send({msg:"Access denied"})
        }

        req.user = user 
        next()
    } catch (error) {
        return res.status(500).send({msg:"Server error"})
    }
}

module.exports = auth