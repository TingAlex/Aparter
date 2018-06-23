import React from "react";
import { connect } from "react-redux";
import { Route, NavLink, Link } from "react-router-dom";
class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <Link to="/rankList">Rank List</Link>
          </li>,
          <li key="2">
            <Link to="/gallery">Gallery</Link>
          </li>,
          <li key="3">
            <Link to="/login">Login</Link>
          </li>,
          <li key="4">
            <Link to="/signup">Sign up</Link>
          </li>
        ];
      default:
        return [
          <li key="1">
            <Link to="/rankList">Rank List</Link>
          </li>,
          <li key="2">
            <Link to="/gallery">Gallery</Link>
          </li>,
          <li key="3">
            <Link to="/credit">Credit</Link>
          </li>,
          <li key="4">
            <Link to="/solved">Solved</Link>
          </li>,
          <li key="5">{this.props.auth.userName}</li>,
          <li key="6">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-warpper">
          <Link to="/" className="left brand-logo">
            Aparter
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
