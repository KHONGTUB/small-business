import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Nav from "./containers/Nav";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
