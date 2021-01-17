import dotenv from "dotenv";
dotenv.config();
import BodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import blogPostRoutes from "./routes/blogposts.js";
import loginRoutes from "./routes/login.js";
import signUpRoutes from "./routes/signup.js";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogposts", blogPostRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/signup", signUpRoutes);
app.use("/api/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("server is running ✨");
});

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
