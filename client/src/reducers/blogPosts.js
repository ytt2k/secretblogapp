import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (blogPosts = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL:
      return payload;
    case CREATE:
      return [...blogPosts, payload];
    case UPDATE:
      return blogPosts.map((blogPost) =>
        blogPost._id === payload._id ? payload : blogPost
      );
    case DELETE:
      return blogPosts.filter((blogPost) => blogPost._id !== payload);
    default:
      return blogPosts;
  }
};
