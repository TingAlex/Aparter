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
          <li>
            <Link to="/rankList">Rank List</Link>
          </li>,
          <li>
            <a href="/api/login">Login</a>
          </li>,
          <li>
            <a href="/api/signup">Sign up</a>
          </li>
        ];
        default:
        return[
        <li>
            <Link to="/rankList">Rank List</Link>
          </li>,
          <li>
            <a href="/api/credit">Credit</a>
          </li>,
          <li>
            <a href="/api/solved">Solved</a>
          </li>,
          <li>
            <a href="#">{this.props.auth.user.userName}</a>
          </li>,
          <li>
            <a href="/api/logout">Logout</a>
          </li>,
        ]
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
// const Header = () => (
//   <header>
//     <h1>Aparter</h1>
//     <NavLink exact to="/gallery" activeClassName="is-active">
//       Gallery
//     </NavLink>
//     <NavLink exact to="/dashboard" activeClassName="is-active">
//       Dashboard
//     </NavLink>
//   </header>
// );

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
