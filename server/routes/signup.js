import express from "express";
import { signUp } from "../controllers/signup.js";

const signUpRouter = express.Router();

signUpRouter.post("/", signUp);

export default signUpRouter;
