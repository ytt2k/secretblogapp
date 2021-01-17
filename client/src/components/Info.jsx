/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useDispatch } from "react-redux";
import { logout } from "../actions/user";
import { Button, Box, Text, Heading, Card, Container } from "theme-ui";

const Info = ({ user, currentUser }) => {
  const dispatch = useDispatch();

  if (!currentUser) {
    return null;
  }

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    window.localStorage.removeItem("currentUser");
  };
  console.log(user);
  console.log(currentUser);
  // set token in localstorage
  window.localStorage.setItem("currentUser", JSON.stringify(currentUser.token));

  return (
    <div sx={{ display: "flex" }}>
      <Box
        bg="content"
        sx={{
          width: "300px",
          maxHeight: "200px",
          boxShadow: "0 0 5px #cccccc",
          border: "1px solid #ee94c6",
          borderRadius: "3px"
        }}
        p={4}
        m={4}
      >
        <Card sx={{ boxShadow: "none" }}>
          {user ? (
            <div sx={{marginTop: "2em"}}>
              <Text>
                logged in as
                <Heading as="h4" color="label" sx={{ display: "inline" }}>
                  &nbsp;{currentUser.username}
                </Heading>
              </Text>
              <Text>
                Welcome
                <Heading as="h4" color="title" sx={{ display: "inline" }}>
                  &nbsp;{currentUser.name}
                </Heading>
                !
              </Text>
              <Button
                sx={{ float: "right", marginTop: "2em" }}
                onClick={logOut}
              >
                Log out
              </Button>
            </div>
          ) : null}
        </Card>
      </Box>
    </div>
  );
};

export default Info;
