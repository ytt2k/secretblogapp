/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSelector } from "react-redux";
import { Container, Divider, Heading } from "theme-ui";
import BlogPost from "./blogpost/BlogPost";

const BlogPosts = ({ setCurrentId, user, currentUser, isLoggedIn }) => {
  const blogPosts = useSelector((state) => state.blogPosts);
  return (
    <div>
      {!blogPosts.length ? (
        <Heading
          as="h4"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "2em"
          }}
        >
          No posts yet
        </Heading>
      ) : (
        <div>
          <Heading
            as="h4"
            sx={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "6em",
              marginTop: "1em"
            }}
          >
            {blogPosts.length} posts
          </Heading>
          <Divider
            sx={{ marginLeft: "5em", marginRight: "5em", marginTop: "1em" }}
          />
          <Container
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {blogPosts.map((blogPost) => {
              return (
                <BlogPost
                  key={blogPost._id}
                  blogPost={blogPost}
                  setCurrentId={setCurrentId}
                  user={user}
                  currentUser={currentUser}
                  isLoggedIn={isLoggedIn}
                />
              );
            })}
          </Container>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
