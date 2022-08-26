// write authentication middlewere here
// create a seperate file for each middlewere eg. Validator.js , Autorisation.js etc

const jwt = require("jsonwebtoken");


const authentication = (req,res,next)=>{
    if(!req.headers.authorization){

        return res.send("please signup or login ")
    }
        // console.log(req.headers)
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token)
        jwt.verify(token, 'secret', function(err, decoded) {
            if(err){
                return res.send("please login again")
            }
            req.body.user_id = decoded.user_id;
            next()
        });
    
    
        
    }
  

    

module.exports = authentication