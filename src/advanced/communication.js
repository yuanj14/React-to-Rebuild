import { Component } from 'react';


class Navbar extends Component {
    render() {
        let { solve } = this.props
        console.log(solve);

        return (
            <div style={{ background: "red" }}>
                <button onClick={this.props.solve}>
                    抽屉组件
                </button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{ background: "yellow", width: "30%" }}>
                <ul>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                </ul>
            </div>
        )
    }
}

export default class communication extends Component {

    state = {
        isShow: true
    }

    render() {
        return (
            <div>
                <Navbar solve={this.solve} />

                {this.state.isShow && <Sidebar />}
            </div>
        )
    }

    solve = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

}
