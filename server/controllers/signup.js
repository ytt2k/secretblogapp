import User from "../models/user.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUpRouter = express.Router();

export const signUp = async (req, res) => {
  try {
    const body = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash
    });
    const userForToken = {
      username: user.username,
      id: user._id
    };
    const token = jwt.sign(userForToken, process.env.SECRET);
      const savedUser = await user.save();
    res.status(200).send({ token, username: user.username, name: user.name });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default signUpRouter;
