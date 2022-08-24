const asyncHandler = require('express-async-handler')

const User = require('../Models/User.model.js')


const registerUser = asyncHandler (req,res) => {
    const {name, email, password, pic} = req.body;

 
  const userExists = await User.findOne({email})


    res.json({
        name,
        email,

    });
};

module.exports = {registerUser}