const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../../models/userSchema")
const nodemailer = require("nodemailer")
const Cart = require("../../models/cartSchema")

const createCart = (asyncHandler(async(req,res)=>{
    const {id} = req.user

}))




const removeFromCart = ()=>{

}

const getCart = (asyncHandler(async(req,res)=>{
    const {id} = req.user
    
    const userCart = Cart.findOne({userId:id})
    if(userCart){
        res.status(200).json({userCart})
    }
}))


module.exports={removeFromCart,createCart,getCart}