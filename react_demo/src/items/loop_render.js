import { Component } from 'react'

export default class loop_render extends Component {
    state = {
        list: [
            {
                id: 1,
                text: `111`
            }, {
                id: 2,
                text: `121`
            }, {
                id: 3,
                text: `131`
            }
        ]
    }

    // list_show = this.state.list.map(item => <li key={item.id}>{item.text}</li>)
    list_show = this.state.list.map((item, index) => <li key={index}>{item.text}--{index}</li>)

    render() {
        console.log(this.list_show);
        console.log(this.state.list.map((item, index) => <li key={index}>{item.text}--{index}</li>));
        
        return (
            <div>
                <ul>
                    {this.list_show}
                </ul>
            </div>
        )
    }
}
// ======== Debug ==========

// var list = ['11', '22', '33']


// const tag_list = list.map((item) => `<li>${item}</li>`)

// console.log(tag_list);




