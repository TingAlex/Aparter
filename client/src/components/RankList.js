import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class RankList extends React.Component {
  componentDidMount() {
    this.props.fetchWinlist();
  }

  renderContent() {
    let arr = this.props.winlist;
    switch (arr) {
      case null:
        return;
      default:
        return (
          <div>
            {arr.winList.map((item, index) => {
              return (
                <div key={item.userName} className="col s12">
                  <div className="col s3">Rank:&nbsp;{index+1}</div>
                  <div className="col s3">Name:&nbsp;{item.userName}</div>
                  <div className="col s3">Credit:&nbsp;{item.credit}</div>
                </div>
              );
            })}
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <h1>RankList part</h1>
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
)(RankList);
