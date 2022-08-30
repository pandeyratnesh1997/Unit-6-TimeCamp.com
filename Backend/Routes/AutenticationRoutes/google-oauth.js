const GoogleStrategy = require('passport-google-oauth20').Strategy
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const passport = require('passport');
const UserModel = require('../../Models/User.model');
;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/google/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
        let email = profile._json.email;
        const user = new UserModel({
            email,
            password: uuidv4(),
        })
        await user.save();
        return cb(null,user)
  }
));

module.exports = passport;