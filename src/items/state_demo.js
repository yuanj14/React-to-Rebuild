import { Component } from "react";

export default class state_demo extends Component {
    constructor() {
        super()
        this.state = {
            show: true,
            text: "收藏",
            name: "小红"
        };
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({
                            show: !this.state.show,
                            name: "name",
                        });
                        console.log(this.state.name);

                    }}
                >
                    {this.state.show ? "显示" : "隐藏"}
                </button>
            </div>
        );
    }
}
