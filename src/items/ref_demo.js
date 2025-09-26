import React, { Component } from "react";

export default class ref_demo extends Component {
  textref = React.createRef();
  render() {
    return (
      <div>
        <input ref= {this.textref} />
        <button
          onClick={() => {
            console.log(this.textref.current.value);
          }}
        >
          打印字符串 ref 输入值
        </button>
      </div>
    );
  }
}
