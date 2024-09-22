const express = require('express')
const zod = require("zod");
const {User, Account} = require("../db");
const JWT_SECRET= require("../config")
console.log(JWT_SECRET)
const jwt = require("jsonwebtoken")

const userRouter = express.Router();

const signupSchema = zod.object({
    username: zod.string(),
    password:zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),

})

userRouter.post('/signup', async(req,res) => {
    const body = req.body;
    console.log(body);
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.json({
            message: "Email already taken/ incorrect inputs",
        })
    }

    const user = await User.findOne({
        username: body.username,
    })
    
    console.log(body.username);
    if(user){
        return res.json({
            message: "Email Already taken",
        })
    }

    const dbUser = await User.create(body);
    const userId = dbUser._id;

    await Account.create({
        userId,
        balance: 1+ Math.random() * 1000,
    })

    const token = jwt.sign({
        userId,
    },JWT_SECRET)
    res.json({
        message: "User created successfully",
        token: token,
    })
})

module.exports = userRouter