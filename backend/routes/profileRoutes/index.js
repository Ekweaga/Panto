const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../../models/userSchema")
const nodemailer = require("nodemailer")



// user management routes

// edit, update and post user profile pic

router.post("/userPic",validateToken,upload.single('image'),userPic)
