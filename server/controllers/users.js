import User from "../models/user.js";
import express from "express";

const usersRouter = express.Router();

export const getUsers = async (req, res) => {
  const users = await User.find({}).populate("blogposts", {
    title: 1,
    author: 1,
    content: 1,
    id: 1,
    likeCount: 1,
    createdAt: 1
  });
  res.json(users);
};

export default usersRouter;
