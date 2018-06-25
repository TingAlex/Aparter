import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class GameCenter extends React.Component {
  componentDidMount() {
    this.props.fetchPics();
  }

  renderNewContent() {
    console.log("renderContent");
    if (this.props.game && this.props.game.success) {
      this.props.addCredit(this.props.game.credit);
    }
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
        <div className="container">
          <br />
          <div className="row">
            <div className="col m6">
              {this.renderNewContent()}
              <div className="row">
                <div className="col s12">&nbsp;</div>
              </div>
            </div>
            <div className="col m6">
              <div className="row">
                <div className="col s6 offset-s3">
                  {this.props.game &&
                    this.props.game.picName && (
                      <img
                        key={this.props.game.picName}
                        src={
                          "/images/origin/" + this.props.game.picName + ".png"
                        }
                        className="pic_gameCenter"
                        alt=""
                      />
                    )}
                </div>
              </div>
              <div className="row">
                <div className="col  s6 offset-s3">
                  <button
                    className="btn waves-effect"
                    onClick={this.props.readyPlay}
                  >
                    Play
                  </button>
                </div>
                <div className="col  s6 offset-s3">
                  Move:{this.props.game &&
                  this.props.game.move &&
                  this.props.game.move !== 0
                    ? this.props.game.move
                    : "0"}
                </div>
                <div className="col  s6 offset-s3">
                  Credit:{this.props.game &&
                  this.props.game.credit &&
                  this.props.game.credit !== 0
                    ? this.props.game.credit
                    : "Unknown"}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            亲爱的老朱~这是一个简单的教程：点击play按钮开始游戏，拼成功会加credit积分（当然前提是登陆了）点击Gallery进入选择图片页面，选择好图片后点击Aparter进入游戏页面，点击Rank
            List进入排行榜，还提供登陆注册功能~ 玩的开心~~
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
