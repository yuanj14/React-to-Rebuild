import React, { Component } from 'react';
import '../../csshub/demo.css'
export default class evt extends Component {

    createName = `P2012`

    state = {
        list: [
            {
                id: 1,
                text: `aaa`
            }, {
                id: 2,
                text: `bbb`
            }, {
                id: 3,
                text: `ccc`
            }
        ]
    }

    textref = React.createRef();

    render() {
        // console.log()
        console.log(this.state.list.map((item, index) => {
            return <li key={index}>{item.text}</li>
        }));
        return (
            <div>
                <input ref={this.textref}></input>
                <button onClick={() => {
                    this.handle_add()
                }}
                >add2</button>
                <hr />
                <ul>
                    {
                        //this.handle.bind(this,index)
                        //代码注入 富文本
                        this.state.list.map((item, index) => (
                            <li key={index}>
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: item.text
                                    }
                                }></span>
                                
                                <button onClick={() => {
                                    this.handle_delete(index)
                                }
                                }>delete</button>
                            </li>
                        ))
                    }
                    {/* 临界条件 */}
                    {this.state.list.length === 0 && <div>✅暂无待办事项</div>}
                </ul>
                {/* <div className={this.state.list.length !== 0? 'hidden' : null}></div> */}
            </div>
        )
    }
    handle_add() {
        let temp = this.state.list.concat()
        temp.push({ id: Math.random * 1000, text: this.textref.current.value })
        //清空input  
        this.textref.current.value = ``
        this.setState({ list: temp })
    }
    handle_delete(index) {
        let temp = this.state.list.slice()
        temp.splice(index, 1)
        this.setState({ list: temp })
    }


}



