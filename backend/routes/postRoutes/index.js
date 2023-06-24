const express = require('express')
const router = express.Router()
const createPost = require("../../controllers/postContent/index")
const verifyUser = require("../../controllers/verifyUser/index")

router.post("/create",verifyUser,createPost)
// user can only delete his/her post


router.post("/delete/:id",verifyUser,deletePost)
router.post("like/:userid")

module.exports = router