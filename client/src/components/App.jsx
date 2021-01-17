/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Theme from "../Theme";
import { Heading, Button } from "theme-ui";
import { TiSpiral } from "react-icons/ti";
import ToggleTheme from "../ToggleTheme";
import { getBlogPosts } from "../actions/blogPosts";
import Info from "../components/Info";
import BlogPosts from "../components/blogposts/BlogPosts";
import PostForm from "../components/forms/PostForm";
import LoginForm from "../components/forms/LoginForm";
import SignUpForm from "../components/forms/SignUpForm";
import Footer from "./Footer";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { user: currentUser } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [currentId, dispatch]);

  const toggleLogin = () => {
    const hideWhenVisible = { display: login ? "none" : "" };
    const showWhenVisible = { display: login ? "" : "none" };

    return (
      <div>
        <div style={hideWhenVisible}>
          <Button onClick={() => setLogin(true)}>Login</Button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            user={user}
            currentUser={currentUser}
          />
          <Button onClick={() => setLogin(false)}>Cancel</Button>
        </div>
      </div>
    );
  };

  const toggleSignup = () => {
    const hideWhenVisible = { display: signup ? "none" : "" };
    const showWhenVisible = { display: signup ? "" : "none" };

    return (
      <div>
        <div style={hideWhenVisible}>
          <Button onClick={() => setSignup(true)}>Sign up</Button>
        </div>
        <div style={showWhenVisible}>
          <SignUpForm />
          <Button onClick={() => setSignup(false)}>Cancel</Button>
        </div>
      </div>
    );
  };

  return (
    <Theme>
      <ToggleTheme />
      <div>
        <Heading sx={{ color: "mainTitle", margin: 2 }} as="h2">
          Secret Blog app
          <TiSpiral sx={{ color: "title", fontSize: 5, margin: 2 }} />
        </Heading>
        <Heading as="h5" sx={{ color: "text", margin: 2 }}>
          A place where you can post your thoughts anonymously
        </Heading>
        {currentUser ? (
          <div
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <Info user={user} currentUser={currentUser} />
            <PostForm currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        ) : (
          <div
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {toggleLogin()}
            {toggleSignup()}
          </div>
        )}
        <BlogPosts
          setCurrentId={setCurrentId}
          user={user}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
        />
      </div>
      <Footer />
    </Theme>
  );
};

export default App;
