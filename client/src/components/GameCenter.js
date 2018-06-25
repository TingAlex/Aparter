import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class GameCenter extends React.Component {
  componentDidMount() {
    this.props.fetchPics();
  }

  renderNewContent() {
    switch (this.props.game) {
      case null:
        return;
      default:
        let picName = this.props.game.picName;
        let arrange = this.props.game.arrange;
        let index = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        let hideIndex = this.props.game.hideIndex;
        return index.map(ind => {
          if (hideIndex !== ind) {
            return (
              <img
                src={"/images/pieces/" + picName + "/" + arrange[ind] + ".png"}
                key={ind}
                className="pic"
                alt=""
                onClick={() => {
                  this.props.reArrange(ind);
                }}
              />
            );
          } else {
            return <div key={ind} className="pic_empty" />;
          }
        });
    }
  }
  render() {
    return (
      <div>
        <h1>GameCenter part</h1>
        <button className="btn waves-effect" onClick={this.props.readyPlay}>
          Play
        </button>
        <div className="container">
          <div className="row">
            <div className="col s6 offset-s3">{this.renderNewContent()}</div>
          </div>
        </div>
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
)(GameCenter);
