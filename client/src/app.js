import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { BrowserRouter, Router } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "materialize-css/dist/css/materialize.min.css";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
