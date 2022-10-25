const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("Not authorized");
  }
  const user_token = req.headers.authorization;
  // console.log('user_token:', user_token);

  jwt.verify(user_token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) {
      return res.send("Please login again");
    }

    req.body.email = decoded.email;
    req.body.userId = decoded.UserId;
    // console.log(decoded)

    next();
  });
};

module.exports = authentication;
