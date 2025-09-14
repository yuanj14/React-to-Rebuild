import React, { Component } from 'react'




export default class controll_component extends Component {
    // usernameref = React.createRef()
    state = {
        username : ''
    }

    render() {
        //console 
        return (
            <div>
                <h1>登录页</h1>
                <input type="text" value={this.state.username}
                    onChange={
                        (event) => {
                            // console.log(event.target.value)
                            this.setState({username: event.target.value})
                        }
                    } />
                <button onClick={() => {
                    console.log(this.state.username);
                }}>登录</button>
                <button onClick={() => {
                    this.setState({username : ''})
                }}>重置</button>
            </div>
        )
    }
}
