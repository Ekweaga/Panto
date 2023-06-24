const express = require("express")
const router = express.Router();
const{getProducts,getProduct,deleteProduct,updateProduct} = require("../../controllers/products/index")

const validateToken = require("../../controllers/verifyUser/index")
//const {userPic} = require("../controllers/userManagement")



/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         
 *         username:
 *           type: string
 *           description: User name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: 
 *         
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         
 *         username: Charles
 *         email: hikay133@gmail.com
 *         password: xxxxxxx
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
 * /product/getProduct:
 *   get:
 *     summary: Get product details
 *     tags: [Product]
 
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







































router.get("/getProducts",getProducts)
router.post("/getProduct",getProduct)
router.post("/updateProduct",updateProduct)
router.post("/deleteProduct",deleteProduct)


module.exports = router