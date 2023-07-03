const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../../models/userSchema")
const nodemailer = require("nodemailer")
const Order = require("../../models/OrderSchema")

const createOrder = (asyncHandler(async(req,res)=>{
    const {id} = req.user

    const order = Order.create({
        userId:id,
        items:req.body.items,
        shippingAddress:{
            name:req.body.name,
            location:req.body.location,
            country:req.body.country,
            postalCode:req.body.postalcode
        },
        totalPrice:res.body.totalPrice
    })
    if(order){
        order.save()
        res.status(201).json({Order:order})
    }
}))
const getOrders = (asyncHandler(async(req,res)=>{
    const {id} = req.params
    
    const userOrders = Order.findOne({_id:id})
    if(userOrders){
        res.status(200).json({userOrders})
    }
}))


module.exports={getOrders,createOrder}