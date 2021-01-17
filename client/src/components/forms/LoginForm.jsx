import React, { useState } from "react";
import { Heading, Label, Button, Box, Input, Text } from "theme-ui";
import { login } from "../../actions/user";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  user,
  currentUser
}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    dispatch(login({ username, password }));
    window.localStorage.setItem("user", JSON.stringify(user));
    setUsername("");
    setPassword("");
    if (!currentUser) {
      const showMessage = () => {
        setTimeout(() => {
          setMessage("Wrong username or password!");
        }, 1000);
      };
      showMessage();
    }
  };

  return (
    <div>
      <Box
        as="form"
        bg="content"
        sx={{ borderRadius: 4, boxShadow: "0 0 5px #cccccc" }}
        p={4}
        m={3}
        autoComplete="off"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Heading as="h3" color="form">
          Login
        </Heading>
        <Label>Username</Label>
        <Input
          name="username"
          mb={3}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={register({
            required: "Please enter your username"
          })}
        />
        <Text>{errors.username && errors.username.message}</Text>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          mb={3}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={register({
            required: "Please enter your password"
          })}
        />
        <Text>{errors.password && errors.password.message}</Text>
        <Text>{message}</Text>
        <Button type="submit">Log in</Button>
      </Box>
    </div>
  );
};

export default LoginForm;
