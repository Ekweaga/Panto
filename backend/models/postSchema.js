
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BlogSchema = new Schema({

title:{
    type:String
},
   author:{
    type:String
}
,
image:{
    type:String
},
content:{
    type:String
},
    comments:{
        type:[String],
        default:[]
    },
    category:{
            type:String,
            required:false
    },
})



module.exports =  mongoose.models.Blog || mongoose.model("Blog",BlogSchema)