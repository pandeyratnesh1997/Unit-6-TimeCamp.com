// write login signup route here

const {Router} = require('express');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const UserModel = require('../Models/User.model');


const router = Router();

router.post('/signup', async(req,res)=>{
    const {email,password,name,age} = req.body;
   await bcrypt.hash(password, 10, async function(err, hash) {
        // Store hash in your password DB.
        if(err){
            return res.send("please try again later");

        }
     const user = new UserModel({
            email,
            password : hash,
            name,
            age
        })
        await user.save();
        res.send("signuup Successfull");
    });

   
    
})


router.post('/login', async(req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});
    // console.log(user);
    if(!user){
        return res.send("invalid credentials")
    }
    const hash = user.password;
    const user_id = user._id
   await bcrypt.compare(password, hash,  function(err, result) {
        // Store hash in your password DB.
       if(result){
            const token =  jwt.sign({email, user_id}, 'secret');
            if(token){
                return res.send({message : "login successful", "token" : token})
            }
        }
        else{
            return res.send("please login again")
        }
     
    });
    
   
    
})

module.exports = router
