const express = require('express')
const zod = require("zod");
const {User, Account} = require("../db");
const JWT_SECRET= require("../config")
console.log(JWT_SECRET)
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middleware');

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
    console.log(userId);

    await Account.create({
        userId,
        balance: 1+ Math.random() * 1000,
    })

    const token = jwt.sign({
        userId,
    },JWT_SECRET)
    res.json({
        userId: userId,
        message: "User created successfully",
        token: token,
    })
})

userRouter.post('/signin', async(req,res) => {
    const body = req.body;
    const user = await User.findOne({
        username:body.username,
        password: body.password
    })

    if(!user){
        return res.json({
            message: "Invalid username/password",
        })
    }
    const token = jwt.sign({
        userId:user._id
    },JWT_SECRET)
    res.json({
        userId: user._id,
        message: "User signed in successfully",
        token: token,
    })
})

const updateBody = zod.object({
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
    password: zod.string().optional(),
})

userRouter.put('/',authMiddleware, async(req,res) => {
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        return res.json({
            message: "Error while updating the info",
        })
    }

    await User.updateOne({_id: req.userId},req.body);
    res.json({
        message: "User updated successfully",
    })    
    
})

userRouter.get('/bulk',authMiddleware,async(req,res) => {
    const parameter = req.query.filter || "";
    const users = await User.find({
        $or:[{firstname:parameter}, {lastname:parameter}]
    })


    console.log("users" , users);

    if(!users){
        return res.json({
            message: "No users found",
        })
    }

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id,
        }))
    })
    
})
module.exports = userRouter