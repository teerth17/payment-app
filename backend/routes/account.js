const express = require('express');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');
const authMiddleware = require('../middleware');

const accountRouter = express.Router();

accountRouter.get("/balance",authMiddleware,async (req,res) => {
    console.log(req.userId);
    // console.log(req);
    
    const account = await Account.findOne({
        userId: req.userId,
    });
    console.log(account);
    res.json({
        balance: account.balance,
    })
})

accountRouter.post("/transfer",authMiddleware,async (req,res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount,to} = req.body;
    console.log("from and amount and to",req.userId,amount,to)
    const account = await Account.findOne({
        userId:req.userId,
    }).session(session);

    if(!account || account.balace < amount){
        console.log("Not valid from")
        await session.abortTransaction();
        res.status(400).json({
          message: "Insufficient Balance",
        });
    }

    console.log("from account",account);
    const toAccount = await Account.findOne({
        userId: to,
    }).session(session);

    console.log("to account",toAccount);
    if (!toAccount) {
        console.log("Not valid to");
       await session.abortTransaction();
       res
       .status(400)
       .json({
         message: "Invalid Account",
       })
       .session(session);
    }

    await Account.updateOne({
        userId: req.userId,
    },{
        $inc: {
            balance:  -amount,
        }
    }).session(session);

    await Account.updateOne({
        userId: to,
    },{
        $inc: {
            balance:  amount,
        }
    }).session(session);


    await session.commitTransaction();

    res.json({
        message: "Transfer successful",
    })
})

module.exports = accountRouter