import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req,res) => {  // get request
    try{
        const transactions = await Transaction.find().limit(50).sort({createdOn: -1});  // showing only 50 and sorting by latest
        res.status(200).json(transactions); 
    }catch(error){
        res.status(404).json({message: error.message});
    }
})

export default router;