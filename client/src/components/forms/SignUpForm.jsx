import React, { useState } from "react";
import { Heading, Label, Button, Box, Input, Text } from "theme-ui";
import { signUp } from "../../actions/user";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    name: "",
    password: ""
  });
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState("");

  const handleSignUp = () => {
    // e.preventDefault();
    dispatch(signUp(signUpData));
    setSignUpData({
      username: "",
      name: "",
      password: ""
    });
    setMessage("Successfully signed up!");
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
        noValidate
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Heading as="h3" color="form">
          New user
        </Heading>
        <Label>Username</Label>
        <Input
          name="username"
          mb={3}
          value={signUpData.username}
          onChange={(e) =>
            setSignUpData({ ...signUpData, username: e.target.value })
          }
          ref={register({
            required: "This is required",
            minLength: {
              value: 3,
              message: "Username must be at least of 3 characters"
            }
          })}
        />
        <Text>{errors.username && errors.username.message}</Text>
        <Label>Nickname</Label>
        <Input
          name="name"
          mb={3}
          value={signUpData.name}
          onChange={(e) =>
            setSignUpData({ ...signUpData, name: e.target.value })
          }
        />
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          mb={3}
          value={signUpData.password}
          onChange={(e) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
          ref={register({
            required: "This is required",
            minLength: {
              value: 3,
              message: "Password must be at least of 3 characters"
            }
          })}
        />
        <Text>{errors.password && errors.password.message}</Text>
        <Text>{message}</Text>
        <br />
        <Button type="submit">Sign up</Button>
      </Box>
    </div>
  );
};

export default SignUpForm;
