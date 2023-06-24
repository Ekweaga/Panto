
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ProductSchema = new Schema({


   productName:{
    type:String
   }
,
productDesc:{
    type:String
},
    price:{
       type:Number
    },
    productImage:{
            type:String
    },

    productPhotos:{
        type:[String],
        default:[]
    },
    countInstock:{
        type:Number
    },
    rating:{
        type:Number
    },
    numReviews:{
        type:Number
    },
    category:{
        type:String
    },
    brand:{
        type:String
    }
   
   
})



module.exports =  mongoose.models.Product || mongoose.model("Product",ProductSchema)