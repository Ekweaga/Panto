const express = require('express')
const router = express.Router()
const {getOrders,createOrder} = require("../../controllers/orders/index")
const validateToken = require("../../controllers/verifyUser/index")





/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - userId
 *         - price
 *         
 *       properties:
 *         
 *         items:
 *           type: array
 *           description: Users Order
 *        
 *         
 *         createdAt:
 *           type: string
 *           format: date
 *           description: Date order was created
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
 *   name: Order
 *   description: Order
 * /order/createOrder:
 *   post:
 *     summary: Create user order
 *     tags: [Order]
 *     parameters:
 *       - in: body
 *         name: userOrder
 *         schema: 
 *           type: String
 *         required: true 
 *         description:  productId
 
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Some server error
 *
 */


/**
 * @swagger
 * tags:
 *   name: Order
 *   description: Order
 * /order/getOrder/{orderId}:
 *   delete:
 *     summary: Get user order
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: userOrder
 *         schema: 
 *           type: String
 *         required: true 
 *         description:  productId
 
 *     responses:
 *       200:
 *         description: Order Item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Some server error
 *
 */

router.post("/createOrder",validateToken,createOrder)
router.get("/getOrder:id",validateToken,getOrders)



module.exports=router