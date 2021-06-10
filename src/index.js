import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux";
// import Login from "./components/Login";
// import AboutPage from "./components/AboutPage";
import Main from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
