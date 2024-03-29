
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../../models/userSchema")
const nodemailer = require("nodemailer")

const login = asyncHandler(async (req,res)=>{

    if(req.method == "POST"){

        console.log(req.body.body)
     const {email,password} = req.body
     


    

    if(!email || !password){
        return res.status(422).json({message:"Unprocesseable entities available"})
    }

    else{
        try{
                const user = await User.findOne({email:email}) 
               console.log(user)
            const cmp = await bcrypt.compare(password,user.password)
                if(user){

                    if(user && cmp){
                        const tokenSecret = "qwertyuiopasdfgh12345"
                        const accessToken = jwt.sign({user:{username:user.username, email:user.email,id:user._id}},tokenSecret,{expiresIn:"3m"})
                        console.log(accessToken)
                        res.status(200).json({accessToken:accessToken})
                    }

                    else{
                        return res.status(404).json({message:` ${email} not found`})
                    }
                    
                }

                else{

                    return res.status(404).json({message:`user with ${email} do not exist`})

                }
        }

        catch(err){
                res.status(500).json({message:"Server Error"})
                console.log(err)
        }
    }

}

else{
    res.status(404).json({message:"request method is invalid for this resources"})
}

})



const signup = asyncHandler(async (req,res)=>{

    if(req.method == "POST"){

        
        const {username,email,password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)



    
        if(!username || !email || !password){
            return res.status(422).json({message:" Unprocesseable entities available"})
        }
        else{
            try{
                    const existEmail = await User.findOne({email:email}) || await User.findOne({username:username}) 
                    if(existEmail){
                        return res.status(400).json({message:"Email or Username already exist"})
                    }
    
                    else{
    
                        const newPost = {
            username:username,
            email:email,
            password:hashedPassword
        }
        
                        let user
                        user = new User( newPost)
    
                        let createUser =  await user.save()
                        if(createUser){
                          res.status(201).json({message:"Account created successfully", User:newPost})
                        }
                      else{
                        res.status(400).json({message:"User not created"})
                      }
                    }
            }
    
            catch(err){
                    res.status(500).json({message:"Server Error"})
            }
        }

}

else{
    res.status(404).json({message:"request method is invalid for this resources"})
}

})



const localVariables = asyncHandler(async(req,res,next)=>{
    req.locals = {
        otp:null,
        resetSession: true
    }

    next()
})


const generateOTP = asyncHandler( async(req,res,next)=>{
    
    const {email} = req.body
   
    

   if(req.method == "POST"){
    const user = await User.findOne({email:email}) 
    if(!user){
        res.status(404).json({message:`${email} do not exist`})
    }

    else{
        const {otp,resetSession} = req.locals
        let token =  otpGenerator.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false})
            otp = token
      


         var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'hikay133@gmail.com',
              pass: 'prykelcplvburatu'
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: `${email}`,
            subject: 'Password Recovery',
            text: `Your Token \n ${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
            
    return res.status(200).json({message:"OTP sent"})
    }
   }
next()
   
})


const confirmOTP = asyncHandler(async(req,res)=>{
    const {otpInput} = req.body
    const {otp,resetSession} = req.locals
    if(otp !== otpInput){
        return res.status(400).json({message:"Wrong OTP input, invalid otp"})
    }
    else{
        resetSession = false;
    return res.status(200).json({message:"...."});
    }
})


const resetLink = asyncHandler(async(req,res)=>{
    const {email} = req.body.body
    let token;
    let authUser = req.headers.Authorization || req.headers.authorization
    if(!authUser){
        return  res.status(400).json({message:"User is not authorized to access this resources"})
      }
  
      if(authUser && authUser.startsWith("Bearer")){

          token = authUser.split(" ")[1]
        
  
   
   } 

    if(req.method == "POST"){
        const user = await User.findOne({email:email}) 
        if(!user){
           return  res.status(404).json({message:`${email} do not exist`})
        }}
        
        else{
            const link = `http://locahost/5000/${user._id}/password-reset/${token}`

            const testAccount = ndemailer.createTestAccount()
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'hikay133@gmail.com',
                  pass: 'prykelcplvburatu'
                }
              });
              
              var mailOptions = {
                from: 'youremail@gmail.com',
                to: "hikay133@gmail.com",
                subject: 'Password Recovery',
                text: `Click the link to reset your password \n ${link}`
              };
              
            await  transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  return;
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
    
        return res.status(200).json({message:"Password reset link has been sent to your email"})
        }
})


const resetPassword = asyncHandler(async (req,res)=>{
    const {email,password} = req.body

    if(req.method == "POST"){
        const user = await User.findOne({email:email}) 
        if(!user){
            res.status(404).json({message:`${email} do not exist`})
        }}
        
        else{
                let userUpdate;
                const cmp = await bcrypt.hash(password,10)
                userUpdate = User.updateOne({email:email}, {$set:{password:cmp}})
                if(userUpdate){
                    res.status(200).json({message:"User Profile updated"})
                }
               
        }

})


module.exports = {login,signup,generateOTP,resetLink,resetPassword,localVariables,confirmOTP}