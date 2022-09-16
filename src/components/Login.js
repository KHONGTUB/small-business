import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

const Login = (props) => {
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    const { value } = e.target;
    props.addUser(value);
  };

  const login = (e) => {
    e.preventDefault();

    document.cookie = "loggedIn=true;max-age=120";
    props.login(true);
    navigate("/Listing");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
