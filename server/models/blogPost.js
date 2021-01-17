import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
