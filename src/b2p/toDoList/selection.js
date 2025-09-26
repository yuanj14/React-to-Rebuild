import { Component } from 'react'
import '../../csshub/buttombar.css'
import Moives from './component/Moives'
import Cinemas from './component/Cinemas'
import MyCenter from './component/MyCenter'


export default class selection extends Component {
    name = 'todolist_advance'
    state = {
        list: [
            {
                id: 1,
                text: `Movies`
            }, {
                id: 2,
                text: `Cinemas`
            }, {
                id: 3,
                text: `MyCenter`
            }
        ],
        current: 0
    }
    render() {
        // console here

        return (
            <div>
                {this.current_view(this.state.current)}
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key={item.id}
                                className={this.state.current === index ? 'active' : null}
                                onClick={() => {
                                    this.switch_bar(index)
                                }}>
                                {item.text}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    switch_bar(index) {
        this.setState({ current: index })
    }

    current_view(index){
        switch (index) {
            case 0:
                return <Moives></Moives>
                break;
            case 1:
                return <Cinemas></Cinemas>
                break;
            case 2:
                return <MyCenter></MyCenter>
            default:
                console.log("invailed position");
                break;
        }
    }    


}
