import React, { Component } from "react";

export default class state_demo extends Component {
  state = {
    show: true,
    text: "收藏",
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}
        >
          {this.state.show ? "显示" : "隐藏"}
        </button>
      </div>
    );
  }
}
