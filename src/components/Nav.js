import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import cookie from "cookie";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div>
      <Box className="box" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="navbar">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Austin Small Business
            </Typography>
            <ul className="navlist">
              <li className="navitem">
                <Link className="link" to="/Listing">
                  Listings
                </Link>
              </li>
              {props.loggedIn && (
                <li className="navitem">
                  <Link className="link" to="/AddListing">
                    Add
                  </Link>
                </li>
              )}

              <li className="navitem">
                {!props.loggedIn ? (
                  <Link className="link" to="/">
                    Login
                  </Link>
                ) : (
                  <Link
                    className="link"
                    to="/"
                    onClick={() => {
                      document.cookie = cookie.serialize("loggedIn", null, {
                        maxAge: 0,
                      });
                      props.logout(false);
                    }}
                  >
                    LOGOUT
                  </Link>
                )}
              </li>
            </ul>
          </Toolbar>
        </AppBar>
        {props.loggedIn && (
          <div className="username">
            <div>Logged in as: {props.username}</div>
          </div>
        )}
      </Box>
    </div>
  );
}
