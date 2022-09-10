import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import cookie from "cookie";

export default function Nav(props) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Business
          </Typography>
          <ul>
            <li>
              <Link to="/Listing">listings</Link>
            </li>
            <li>
              {!props.loggedIn ? (
                <Link to="/">Login</Link>
              ) : (
                <Link
                  to="/"
                  onClick={() => {
                    document.cookie = cookie.serialize("loggedIn", null, {
                      maxAge: 0,
                    });
                    props.logout(false);
                    
                  }}
                >
                  Logout
                </Link>
              )}
            </li>
            <li>{props.loggedIn && <Link to="/AddListing">Add</Link>}</li>
          </ul>
        </Toolbar>
      </AppBar>
      
    </Box>
    <div>{props.loggedIn && (
      <h3>{props.username}</h3>
    )}</div>
    </div>
    
  );
}
