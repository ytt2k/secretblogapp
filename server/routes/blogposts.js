import express from "express";
import {
  getBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  likeBlogPost
} from "../controllers/blogposts.js";

const blogPostsRouter = express.Router();

blogPostsRouter.get("/", getBlogPosts);
blogPostsRouter.post("/", createBlogPost);
blogPostsRouter.patch("/:id", updateBlogPost);
blogPostsRouter.delete("/:id", deleteBlogPost);
blogPostsRouter.patch("/:id/likeBlogPost", likeBlogPost);

export default blogPostsRouter;
