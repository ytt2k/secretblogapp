/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import { Heading, Label, Button, Box, Textarea, Input, Text } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
import { createBlogPost, updateBlogPost } from "../../actions/blogPosts";
import { useForm } from "react-hook-form";

const PostForm = ({ currentId, setCurrentId }) => {
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    content: ""
  });
  const { register, handleSubmit, errors } = useForm();

  const blogPost = useSelector((state) =>
    currentId
      ? state.blogPosts.find((blogPost) => blogPost._id === currentId)
      : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (blogPost) setBlogPostData(blogPost);
  }, [blogPost]);

  const handleCreatePost = () => {
    if (currentId) {
      dispatch(updateBlogPost(currentId, blogPostData));
    } else {
      dispatch(createBlogPost(blogPostData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setBlogPostData({
      title: "",
      content: ""
    });
  };
  return (
    <div>
      <Box
        as="form"
        bg="content"
        sx={{ borderRadius: 4, width: "350px", boxShadow: "0 0 5px #cccccc" }}
        p={4}
        m={1}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(handleCreatePost)}
      >
        <Heading as="h3" color="form">
          {currentId ? "Edit" : "New"} post
        </Heading>
        <Label>Title</Label>
        <Input
          name="title"
          rows="1"
          mb={3}
          value={blogPostData.title}
          onChange={(e) =>
            setBlogPostData({ ...blogPostData, title: e.target.value })
          }
          ref={register({
            required: "Please choose a title",
            minLength: {
              value: 1,
              message: "Please choose a title"
            }
          })}
        />
        <Text>{errors.title && errors.title.message}</Text>
        <Label>Content</Label>
        <Textarea
          name="content"
          rows="2"
          mb={3}
          value={blogPostData.content}
          onChange={(e) =>
            setBlogPostData({ ...blogPostData, content: e.target.value })
          }
          ref={register({
            required: "Please write some content",
            minLength: {
              value: 1,
              message: "Please write some content"
            }
          })}
        />
        <Text>{errors.content && errors.content.message}</Text>
        <Button type="submit">Post</Button>
      </Box>
    </div>
  );
};

export default PostForm;