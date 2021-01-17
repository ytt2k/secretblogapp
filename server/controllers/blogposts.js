import BlogPost from "../models/blogPost.js";
import User from "../models/user.js";
import mongoose from "mongoose";
import express from "express";
import jwt from "jsonwebtoken";

const blogPostsRouter = express.Router();

export const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find({}).populate("user", {
      username: 1,
      name: 1,
      id: 1
    });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const getTokenFrom = (req) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

export const createBlogPost = async (req, res) => {
  const body = req.body;
  const token = getTokenFrom(req);

  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "Token is missing or invalid." });
  }
  const user = await User.findById(decodedToken.id);

  const blogPost = new BlogPost({
    title: body.title,
    likeCount: body.likeCount,
    content: body.content,
    createdAt: body.createdAt,
    user: user._id
  });
  try {
    const savedBlogPost = await blogPost.save();
    user.blogposts = user.blogposts.concat(savedBlogPost._id);
    await user.save();
    res.json(savedBlogPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const updateBlogPost = async (req, res) => {
  const { id: _id } = req.params;
  const blogPost = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No blogpost found with that id.");

  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    _id,
    { ...blogPost, _id },
    { new: true }
  );
  res.json(updatedBlogPost);
};

export const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No blogpost found with that id.");

    await BlogPost.findByIdAndRemove(id);

    res.json({ message: "Blogpost deleted successfully." });

    // 👇 change above to the below one when using auth, still needs work

    // const token = getTokenFrom(req);

    // const decodedToken = jwt.verify(token, process.env.SECRET);
    // if (!token || !decodedToken.id) {
    //   return res.status(401).json({ error: "Token is missing or invalid." });
    // }
    // const userFromToken = await User.findById(decodedToken.id);
    // const blogPost = await BlogPost.findById(id);

    // if (userFromToken._id.toString() === blogPost.user.toString()) {
    //   await BlogPost.findByIdAndRemove(id);
    //   res.json({ message: "Blogpost deleted successfully." });
    //   res.status(204).end();
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const likeBlogPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No blogpost found with that id.");

  const blogPost = await BlogPost.findById(id);
  const updatedBlogPost = await BlogPost.findByIdAndUpdate(
    id,
    { likeCount: blogPost.likeCount + 1 },
    { new: true }
  );

  res.json(updatedBlogPost);
};

export default blogPostsRouter;
