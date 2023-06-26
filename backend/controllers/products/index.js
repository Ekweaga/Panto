const asyncHandler = require("express-async-handler")
const Products = require("../../models/productSchema")



const createProduct = (asyncHandler(async(req,res)=>{
    const createProducts = await Products.create(req.body)
    if(createProducts){
        createProducts.save()
        res.status(201).json({createProduct:createProducts})
    }
    else{
        res.status(500).json({errorMessage:"Server Error"})
    }
}))

const getProducts = (asyncHandler(async(req,res)=>{

    const allProducts = await Products.find({})

    if(allProducts){
        res.status(200).json({TotalItems:allProducts.length,Products:allProducts})
    }
    else{
        res.status(500),json({errorMessage:"Server Error"})
    }


}))

const getProduct = (asyncHandler(async(req,res)=>{

    const {productId}= req.params

    const product = await Products.findById(req.params.productId)
    if(product){
      return  res.status(200).json({product})
    }
    else{
        res.status(500).json({errorMessage:"Product not found"})
    }

}))


const deleteProduct = (asyncHandler(async(req,res)=>{
    const {productId} = JSON.stringify(req.params)

    const deletedProduct= await Products.findByIdAndDelete(req.params.productId)

    if(deletedProduct){
        res.status(201).json({message:"Product deleted from store",deletedProduct})
    }

    else{
        res.status(500).json({errorMessage:"Server Error"})
    }

}))

const updateProduct = (asyncHandler(async(req,res)=>{
    const updateProducts = await Products.updateOne({_id:req.params.productId},{$set:req.body})
    if(updateProducts){
     
        res.status(201).json({message:"Product updated successfully",updateProducts})
    }
    else{
        res.status(500).json({errorMessage:"Server Error"})
    }

}))

module.exports = {getProducts,getProduct,deleteProduct,updateProduct,createProduct}