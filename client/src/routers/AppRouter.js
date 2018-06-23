import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import GameCenter from "../components/GameCenter";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Login from "../components/Login";
import RankList from "../components/RankList";
import SignUp from "../components/SignUp";
import Solved from "../components/Solved";

class AppRouter extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={GameCenter} />
            <Route exact path="/rankList" component={RankList} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/solved" component={Solved} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(AppRouter);
