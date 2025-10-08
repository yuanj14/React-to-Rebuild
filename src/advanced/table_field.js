import { Component } from 'react';
// 子组件控制父组件
class Field extends Component {
    render() {
        let { label, type, solve } = this.props
        return <div style={{ background: "yellow" }}>
            <label>{label}</label>
            <input type={type} onChange={
                (evt) => {
                    // console.log(evt.target.value);
                    let index = (type === 'text' ? 1 : 2)
                    solve(evt.target.value, index)
                }
            } value={this.props.value} />
        </div>
    }
}


export default class table_field extends Component {

    state = {
        username: localStorage.getItem('username'),
        password: ''
    }
    //   const s = localStorage.getItem("userName");
    //     localStorage.removeItem("passWord");
    //  // 或者清除所有 localStorage 数据
    // localStorage.clear();
    render() {

        return (
            <div>
                <h1>登录页面</h1>
                {/* {this.username} 未声明的对象属性为underfined 不报错 */}
                <Field label="用户名" type="text" solve={this.solve}
                    value={this.state.username} />
                <Field label="密码" type="password" solve={this.solve} />
            </div>
        )
    }

    solve = (evt, index) => {
        if (index == 1) {
            localStorage.setItem("username", evt);
            this.setState({
                username: evt
            })
            console.log(evt);

        } else {
            this.setState({
                password: evt
            })
        }
    }


}
