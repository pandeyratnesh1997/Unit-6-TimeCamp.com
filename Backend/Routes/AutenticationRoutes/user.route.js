// write login signup route here

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../../Models/User.model");
require("dotenv").config();

const validator = require("email-validator");

const UserController = express.Router();

UserController.post("/register", async (req, res) => {
  const { email, password, phoneno } = req.body;

  if (!validator.validate(email)) {
    return res.status(404).send("Enter correct Email id !");
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
  // console.log(req.body);

  const user = await UserModel.findOne({ email });
  // console.log("user:", user);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const hashed_password = user.password;

  const UserId = user._id;

  bcrypt.compare(password, hashed_password, (err, result) => {
    if (!result) {
      console.log(err);
      return res.status(401).send({ message: "Invalid email or password!" });
    }

    // console.log(result);
    // console.log(err)
    const token = jwt.sign({ email, UserId }, process.env.SECRET_KEY);

    return res
      .status(200)
      .send({ message: "User has signed in successfully!", token: token });
  });
});

module.exports = {
  UserController,
};
