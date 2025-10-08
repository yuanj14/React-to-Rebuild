import { Component } from 'react';

export default class subscribe extends Component {
    render() {
        return (
            <div>subscribe</div>
        )
    }
}


var bus = {
    list: [],
    subscribe(callback) {
        console.log(callback);
        this.list.push(callback)
    },
    publish(text) {
        this.list.forEach((callback) => {
            callback && callback(text)
        })
    }

}


bus.subscribe((value) => {
    console.log('1111', value);
})

bus.subscribe((value) => {
    console.log('2222', value);
})


setTimeout(() => {
    bus.publish("herea a a a ")
}, 1000)

setTimeout(() => {
    bus.publish("herea a a a ")
}, 2000)

