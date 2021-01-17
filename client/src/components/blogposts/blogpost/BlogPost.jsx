/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Text, Button, Heading, Card, Divider, Container } from "theme-ui";
import moment from "moment";
import { TiTrash, TiHeartFullOutline, TiEdit } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteBlogPost, likeBlogPost } from "../../../actions/blogPosts";

const BlogPost = ({ blogPost, setCurrentId, currentUser, isLoggedIn }) => {
  const dispatch = useDispatch();

  const EditButton = () => {
    if (blogPost.user._id === currentUser.id) {
      return (
        <div>
          <Button
            sx={{ float: "left", marginRight: "1.5em" }}
            title="edit"
            onClick={() => setCurrentId(blogPost._id)}
          >
            <TiEdit />
          </Button>
        </div>
      );
    } else {
      return null;
    }
  };

  const DeleteButton = () => {
    if (blogPost.user._id === currentUser.id) {
      return (
        <div>
          <Button
            sx={{ float: "right" }}
            title="delete"
            size="small"
            onClick={() => dispatch(deleteBlogPost(blogPost._id))}
          >
            <TiTrash />
          </Button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div sx={{ overflowWrap: "break-word" }}>
      <Box sx={{ display: "flex" }}>
        <Card bg="content" sx={{ borderRadius: 4, width: "350px" }} p={4} m={3}>
          {currentUser ? <EditButton /> : null}
          <Container>
            <Text>
              <i>{moment(blogPost.createdAt).fromNow()}</i>
            </Text>
          </Container>
          <Divider />
          <Container sx={{ marginLeft: "4.2em", marginBottom: "1em" }}>
            <Heading
              as="h4"
              sx={{
                fontSize: "1.1em",
                width: "180px",
                marginBottom: "1em",
                marginTop: "1em",
                color: "heading"
              }}
            >
              {blogPost.title}
            </Heading>
            <Text sx={{ width: "220px" }}>{blogPost.content}</Text>
          </Container>
          {currentUser ? <DeleteButton /> : null}
          <Container>
            {isLoggedIn &&
            currentUser.username !== blogPost.user.username &&
            currentUser ? (
              <Button
                sx={{ float: "right" }}
                title="heart"
                size="small"
                onClick={() => dispatch(likeBlogPost(blogPost._id))}
              >
                <TiHeartFullOutline />
                &nbsp;
                {blogPost.likeCount}
              </Button>
            ) : null}
            {!isLoggedIn ? (
              <Button
                sx={{ float: "right", bg: "#f2f2f2" }}
                onClick={() => window.alert("Please login first")}
              >
                <TiHeartFullOutline />
                &nbsp;
                {blogPost.likeCount}
              </Button>
            ) : null}
          </Container>
        </Card>
      </Box>
    </div>
  );
};

export default BlogPost;
