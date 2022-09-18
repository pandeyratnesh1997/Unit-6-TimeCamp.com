// write login signup route here

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../../Models/User.model");
require("dotenv").config();
const passport = require("./google-oauth");
const validator = require("email-validator");



const UserController = express.Router();
const GoogleController = express.Router();

if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

GoogleController.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

GoogleController.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
   async (req, res) => {
    // Successful authentication, redirect home.
    console.log(req.user);
    const email = req.user.email;
    const UserId = req.user._id;
    const token = jwt.sign({email, UserId}, process.env.SECRET_KEY)
    console.log('token:', token)
    localStorage.setItem("googleToken", token);
    console.log('localStorage:', localStorage.getItem("googleToken", token))
    res.redirect("https://timecamp-nu.vercel.app/project")
  }
);

UserController.post("/register", async (req, res) => {
  const { email, password, phoneno } = req.body;

  if(!validator.validate(email)){
    return res.status(404).send("Entered Email does not exist!");
  }

  const user = await UserModel.findOne({ email });

  if (user) {
    return res.status(409).send("user already registered");
  }

  if (!email && !password) {
    alert("Please fill in the required fields to register");
  }
  await bcrypt.hash(password, 10, async (err, hash) => {
    if (err) {
      res.status(500).send("Something went wrong, Please try again");
    } else {
      const new_user = new UserModel({
        email,
        password: hash,
        phoneno,
      });

      await new_user.save();

      res
        .status(200)
        .send({ message: "User has successfully registered", new_user });
    }
  });
});

UserController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  const user = await UserModel.findOne({ email });
  console.log("user:", user);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const hashed_password = user.password;
  console.log("hashed_password:", hashed_password);
  const UserId = user._id;

  bcrypt.compare(password, hashed_password, (err, result) => {
    if (result) {
      console.log(result);
      const token = jwt.sign({ email, UserId }, process.env.SECRET_KEY);

      return res
        .status(200)
        .send({ message: "User has signed in successfully!", token: token });
    } else if (err) {
      console.log(err);
      return res.status(404).send({ message: "Invalid email or password!" });
    }
  });
});

module.exports = {
  UserController,
  GoogleController,
};
