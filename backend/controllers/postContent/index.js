const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Post = require("../../models/postSchema")


const createPost = asyncHandler(async(req,res)=>{
    // cloudinary image link comes from front end


    const {image, title, desc} = req.body
    const {id} = req.user

    if(req.method == "POST"){
        const post = Post.create({
            userId:id,
            postTitle:title || "",
            postImage: image || ""


        })
        post.save()

        if(post){
            res.status(201).json({message:"..."})
        }
        else{
            res.status(500).json({message:"Server Error"})
        }
    }

})

const deletePost = asyncHandler(async(req,res)=>{
    const postId = req.params.id;
    const {id} = req.user
     const post = Post.findOne({_id:postId})

     if(post.userId !== id){
        res.status(500).json({message:"Unauthorized User"})
     }
else{
    const deletePost = Post.findByIdAndDelete(postId)
    if(deletePost){
        res.status(200).json({message:"Post deleted successfully"})
    }
}
})


const likePost = asyncHandler(async(req,res)=>{
    
})

module.export = {createPost,deletePost}