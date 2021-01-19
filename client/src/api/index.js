import axios from "axios";

const blogPostsUrl = "https://secretblogapp.herokuapp.com/api/blogposts";

const loginUrl = "https://secretblogapp.herokuapp.com/api/login";

const signUpUrl = "https://secretblogapp.herokuapp.com/api/signup";

const authHeader = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    return { Authorization: "Bearer " + currentUser };
  } else {
    return {};
  }
};

export const fetchBlogPosts = () => axios.get(blogPostsUrl);
export const createBlogPost = (newBlogPost) =>
  axios.post(blogPostsUrl, newBlogPost, { headers: authHeader() });
export const updateBlogPost = (id, updatedBlogPost) =>
  axios.patch(`${blogPostsUrl}/${id}`, updatedBlogPost);
export const deleteBlogPost = (id) => axios.delete(`${blogPostsUrl}/${id}`);
export const likeBlogPost = (id) =>
  axios.patch(`${blogPostsUrl}/${id}/likeBlogPost`);

export const loginUser = (credentials) => axios.post(loginUrl, credentials);
export const logoutUser = () => window.localStorage.removeItem("user");
export const signUpUser = (newUser) => axios.post(signUpUrl, newUser);
