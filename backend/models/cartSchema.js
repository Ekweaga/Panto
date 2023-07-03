
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CartSchema = new Schema({


  userId:{
    type:String,
    required:true
  },
  items:[{
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

}],
bill:{
    type:Number,
    required:true,
    default:0
}
   
   
})



module.exports =  mongoose.models.Cart || mongoose.model("Cart",CartSchema)