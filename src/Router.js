import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import cookie from "cookie";
import Listing from "./containers/Listings";
import Login from "./containers/Login";
import AddListing from "./containers/AddListing";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component } = props;

  return checkAuth() === true ? <Component /> : <Navigate to="/" />;
};

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/Listing" element={<Listing />} />
      <Route
        path="/AddListing"
        element={<ProtectedRoute component={AddListing} />}
      />
    </Routes>
  );
};

export default Router;
