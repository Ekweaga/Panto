const asyncHandler = require("express-async-handler")
const Products = require("../../models/productSchema")



const getProducts = (asyncHandler(async(req,res)=>{

    const allProducts = await Products.find({})

    if(allProducts){
        res.status(200).json({Products:allProducts})
    }
    else{
        res.status(500),json({errorMessage:"Server Error"})
    }


}))

const getProduct = (asyncHandler((req,res)=>{

    const {productId}= req.params.productId

    const product = Products.findOne({_id:productId})
    if(product){
        res.status(200).json({product:product})
    }
    else{
        res.status(500).json({errorMessage:"Product not found"})
    }

}))


const deleteProduct = (asyncHandler((req,res)=>{
    const{productId} = req.params>productId

    const deletedProduct=Products.findOneAndDelete({_id:productId})

    if(deleteProduct){
        res.status(200).json({message:"Product deleted from store"})
    }

    else{
        res.status(500).json({errorMessage:"Server Error"})
    }

}))

const updateProduct = ((()=>{

}))

module.exports = {getProducts,getProduct,deleteProduct,updateProduct}