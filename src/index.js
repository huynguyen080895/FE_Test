import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

export default renderApp();
