import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Gallery from "../components/Gallery";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
