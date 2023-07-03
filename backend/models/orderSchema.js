
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId:{
        type:String
    },

    items:[

{
    productName:{
        type:String,
    },
    
        productId:{
            type:String,
            required:true
        },
    
    quantity:{
        type:Number,
        required:true,
        min:1,
        default:1,
    },
    price:{
        type:Number
    }

}
    ],

    shippingAddress:{
        name:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        }

    },
    isPaid:{
        type:Boolean,
        default:false
    },
    isDelivered:{
        type:Boolean,
        default:false
    },
    totalPrice:{
        type:Number
    }



})



module.exports =  mongoose.models.Order || mongoose.model("Order",OrderSchema)