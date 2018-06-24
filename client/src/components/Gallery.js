import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Gallery extends React.Component {
  componentDidMount() {
    this.props.fetchPics();
  }
  renderContent() {
    let arr = this.props.game;
    switch (arr) {
      case null:
        return;
      default:
        return (
          <div>
            {arr.picList.map(item => {
              const path = "/public/images/origin/" + item.picName + ".png";
              return <img key={item.picName} src={path} alt="" height="300" />;
            })}
          </div>
        );
    }
  }
  render() {
    return <div>
        <h1>Gallery part</h1>
        <img src={"/public/images/test.png"} alt="" height="300" />
        {this.renderContent()}
      </div>;
  }
}

const mapStateToProps = state => {
  console.log("state is " + JSON.stringify(state));

  return state;
};

export default connect(
  mapStateToProps,
  actions
)(Gallery);
