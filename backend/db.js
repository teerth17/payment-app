const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://teerth17:1704003d@cluster0.8scez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


const UserTableSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    }
})



const User = new mongoose.model('User',UserTableSchema)
const Account = new mongoose.model('Account',accountSchema)

module.exports = {User,Account};