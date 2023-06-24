
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BlogSchema = new Schema({


   postTitle:{
    type:String
}
,
postDesc:{
    type:String
},
    comments:{
        type:[String],
        default:[]
    },
    postImage:{
            type:String
    },
})



module.exports =  mongoose.models.Blog || mongoose.model("Blog",BlogSchema)