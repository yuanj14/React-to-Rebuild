import React, { Component } from "react";

export default class event_bind extends Component {
  render() {
    return (
      <div>
        <input></input>
        <button
          onMouseOver={(evt) => {
            console.log("button2 Hovered");
            console.log(evt.target);
          }}
        >
          hover触发事件
        </button>
        <button onClick={this.sayhello.bind(this)}>点我出发事件</button>
      </div>
    );
  }

  sayhello() {
    console.log("hello");
  }
  //   this 指向
}

var obj1 = {
  name: "obj1",
  run() {
    console.log(this.name);
  },
};
var obj2 = {
  name: "obj2",
  run() {
    console.log(this.name);
  },
};
obj1.run.call(obj2); // call 改变this指向
obj1.run.bind(obj2); // bind 改变this指向
