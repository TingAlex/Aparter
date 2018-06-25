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
              const path = "/images/origin/" + item.picName + ".png";
              return (
                <img
                  key={item.picName}
                  src={path}
                  alt=""
                  height="300"
                  onClick={() => {
                    this.props.setPlayPic(item.picName);
                  }}
                />
              );
            })}
          </div>
        );
    }
  }
  render() {
    return (
      <div>
        <h1>Gallery part</h1>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actions
)(Gallery);
