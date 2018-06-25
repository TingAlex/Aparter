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
              return <div key={item.picName} className="col s6 m3">
                  <div className="card">
                    <div className="card-image">
                      <img src={path} alt="" onClick={() => {
                          this.props.setPlayPic(item.picName);
                        }} />
                      <div className="btn btn-floating halfway-fab waves-effect waves-light" onClick={() => {
                          this.props.setPlayPic(item.picName);
                        }}>
                        <i className="material-icons">
                          {item.picName !== arr.picName
                            ? "+"
                            : "✓"}
                        </i>
                      </div>
                    </div>
                    <div className="card-content">
                      <p>{item.picName}</p>
                    </div>
                  </div>
                </div>;
            })}
          </div>
        );
    }
  }
  render() {
    return (
      <div>
        <h1>Gallery part</h1>
        <div className="row">{this.renderContent()}</div>
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
