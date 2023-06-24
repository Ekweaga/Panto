const express = require('express')
const router = express.Router()
const {addToCart,removeFromCart} = require("../../controllers/cart/index")
const validateToken = require("../../controllers/verifyUser/index")





/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       required:
 *         - userId
 *         - price
 *         
 *       properties:
 *         
 *         items:
 *           type: array
 *           description: Differents products inside cart
 *        
 *         
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         
 *         userId: user authorization token
 *         items: [{{productName:"",},{productId:""}}]
 *         password: xxxxxxx
 *        
 */

router.post("/add",validateToken,addToCart)
router.post("delete",validateToken,removeFromCart)


module.exports=router