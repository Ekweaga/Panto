const express = require('express')
const router = express.Router()
const {createCart,removeFromCart,getCart} = require("../../controllers/cart/index")
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






/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: CART
 * /cart/create:
 *   post:
 *     summary: Create user cart
 *     tags: [Cart]
 *     parameters:
 *       - in: body
 *         name: userCart
 *         schema: 
 *           type: Object
 *         required: true 
 *         description:  quantity,productId
 
 *     responses:
 *       200:
 *         description: Cart created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Some server error
 *
 */






/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: CART
 * /cart/get:
 *   get:
 *     summary: Get User cart
 *     tags: [Cart]
 *    
 
 *     responses:
 *       200:
 *         description: User Cart
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Some server error
 *
 */



/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: CART
 * /cart/delete/{productId}:
 *   delete:
 *     summary: Create user cart
 *     tags: [Cart]
 *     parameters:
 *       - in: body
 *         name: userCart
 *         schema: 
 *           type: String
 *         required: true 
 *         description:  productId
 
 *     responses:
 *       200:
 *         description: Cart item deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Some server error
 *
 */

router.post("/create",validateToken,createCart)
router.post("/delete",validateToken,removeFromCart)
router.get("/get",validateToken,getCart)


module.exports=router