import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const getBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBlogPost = (blogPost) => async (dispatch) => {
  try {
    const { data } = await api.createBlogPost(blogPost);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateBlogPost = (id, blogPost) => async (dispatch) => {
  try {
    const { data } = await api.updateBlogPost(id, blogPost);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlogPost = (id) => async (dispatch) => {
  try {
    await api.deleteBlogPost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeBlogPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeBlogPost(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
