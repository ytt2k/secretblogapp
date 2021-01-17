import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minlength: 3
  },
  name: String,
  passwordHash: {
    type: String,
    minlength: 3
  },
  blogposts: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogPost" }]
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

export default User;
