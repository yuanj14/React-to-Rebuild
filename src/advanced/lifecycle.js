
import { Component } from 'react';


class children extends Component {
    state = {
        title: 'tg'
    }
    render() {
        return (
            <>
                git hello
            </>
        )
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", this.props.text);

    }
}


export default class lifecycle extends Component {

    state = {
        name: "hello"
    }
    UNSAFE_componentWillMount() {
        console.log("here will mount");
        // 第一次上树发生 最后一次修改状态机会
        this.setState({
            name: "Constructor"
        })
    }

    render() {
        console.log("here render");
        return (
            <div>
                <children text={this.state.name} />
                <button onClick={() => {
                    this.setState({
                        name: "💗新名字"
                    })
                }}>
                    掉完
                </button>
                <span id='myname'>
                    {this.state.name}
                </span>
            </div>
        )
    }

    componentDidMount() {
        console.log("Didmount");
        // axios subscribe 第一次渲染结束发生 真实Dom

    }

    shouldComponentUpdate(nextProps, nextState) {
        //是否应该更新进行判断 避免性能浪费

        // if(this.state.name !== nextState.name){
        //     return true
        // }
        // return false
        // JSON API 字符串解析 stringify parse
        if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
            return true
        }
        return false
    }
    UNSAFE_componentWillUpdate() {
        // 已渲染存在DOM值 未render 旧
        console.log("WILLUPDATE", document.getElementById("myname"));

    }

    componentDidUpdate(preProps, preState) {
        // 已渲染 new
        // console.log("DIDUPDATE", document.getElementById("myname").innerHTML);
        console.log(preProps, preState);

    }

}
