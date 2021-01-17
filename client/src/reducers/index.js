import { combineReducers } from "redux";
import blogPosts from "./blogPosts";
import user from "./user";

export default combineReducers({ blogPosts, user });
