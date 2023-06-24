import connectDb from "../../app/Database/dbConnection"
import User from "../../app/Database/models/userSchema"


//cd

export default async function handler(req,res){

    await connectDb();
  

   // const hashedPassword = bcrypt.hash(password,10)


    if(req.method == "POST"){
     const {username,email,password} = req.body

     console.log(username)

    

    if(!username || !email || !password){
        return res.status(422).json({message:"Fields cannot be empty, Unprocesseable entities available"})
    }

    else{
        try{
                const existEmail = await User.findOne({email:email}) || await User.findOne({username:username}) 
                if(existEmail){
                    return res.status(400).json({message:"Email or Username already exist"})
                }

                else{

                    const newPost = {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
    
                    let user
                    user = new User( newPost)

                    let createUser =  await user.save()
                    if(createUser){
                      res.status(201).json({message:"Account created successfully", blog:newPost})
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
}