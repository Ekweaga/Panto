const express = require("express")
const router = express.Router();
const{getProducts,getProduct,deleteProduct,updateProduct,createProduct} = require("../../controllers/products/index")

const validateToken = require("../../controllers/verifyUser/index")
//const {userPic} = require("../controllers/userManagement")



/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - productName
 *         - productDesc
 *         - countInStock
 *         - rating
 *         - numReviews
 *         - category
 *         - brand
 *         - price
 *         - productImage
 *       properties:
 *         
 *         productName:
 *           type: string
 *           description: Name of product
 *         productImage:
 *           type: string
 *           description: Product Image
 *         countInStock:
 *           type: number
 *           description: Number of Available Product
 *         rating:
 *           type: number
 *           description: Product rating
 *         numReviews:
 *           type: number
 *           description: Product reviews
 *         category:
 *           type: string
 *         brand:
 *           type: string
 *         price:
 *           type: number
 *         
 *           
 *        
 *  
 *       
 *        
 */







/**
 * @swagger
 * tags:
 *   name: Product
 *   description: PRODUCTS
 * /product/getProducts:
 *   get:
 *     summary: Get all products
 *     tags: [Product]
 
 *     responses:
 *       200:
 *         description: List of all Products.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 *
 */





/**
 * @swagger
 * tags:
 *   name: Product
 *   description: PRODUCTS
 * /product/getProduct/{productId}:
 *   get:
 *     summary: Get product details
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema: 
 *           type: string
 *         required: true 
 *         description: Id of a product
 
 *     responses:
 *       200:
 *         description: Product Details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 *
 */



/**
 * @swagger
 * tags:
 *   name: Product
 *   description: PRODUCTS
 * /product/deleteProduct/{productId}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema: 
 *           type: string
 *         required: true 
 *         description: Id of a product
 
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
               
 *       500:
 *         description: Some server error
 *
 */


/**
 * @swagger
 * tags:
 *   name: Product
 *   description: PRODUCTS
 * /product/updateProduct/{productId}:
 *   put:
 *     summary: Update a product Info
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema: 
 *           type: string
 *         required: true 
 *         description: Id of a product
 
 *     responses:
 *       200:
 *         description: Product Info updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 *
 */


/**
 * @swagger
 * tags:
 *   name: Product
 *   description: PRODUCTS
 * /product/createProduct:
 *   post:
 *     summary: Create a new Product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: New product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 *
 */
































router.get("/getProducts",getProducts)
router.get("/getProduct/:productId",getProduct)
router.put("/updateProduct/:productId",updateProduct)
router.delete("/deleteProduct/:productId",deleteProduct)
router.post("/createProduct",createProduct)


module.exports = router