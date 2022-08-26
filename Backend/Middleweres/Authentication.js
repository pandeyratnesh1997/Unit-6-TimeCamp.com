// write authentication middlewere here
// create a seperate file for each middlewere eg. Validator.js , Autorisation.js etc

const jwt = require('jsonwebtoken');


const authentication = (req, res, next) => {
    if(!req.headers.authorization){
        return res.send("Not authorized")
    }
    const user_token = req.headers.authorization;
    // console.log('user_token:', user_token);
    
    jwt.verify(user_token, "secret", function(err, decoded) {
        if(err){
            return res.send("Please login again")
        }
        // console.log(decoded)
        req.body.email = decoded.email
        req.body.userId = decoded.userId
        next()
    });
}

module.exports = authentication

