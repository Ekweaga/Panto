
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
    useerId:{
        type:String,
        unique:[true,"Please provide unique username"]
      

    }
,

    email:{
        type:String,
        unique:[true,"Email must be unique"]
        
        
    },
password:{
        type:String,
        
      
        
    },

    userImage:{
        type:String
    },

    likes:{
        type:[String],
        default:[]
    },

    dislikes:{
        type:[String],
        default:[]
    }
   
   
})



module.exports =  mongoose.models.Post || mongoose.model("Post",UserSchema)