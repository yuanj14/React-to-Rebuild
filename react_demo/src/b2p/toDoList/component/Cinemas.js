
import axios from 'axios';
import { Component } from 'react';

export default class Cinemas extends Component {

    constructor() {
        super()
        this.state = {
            cinemalist: []
        }

        // 接口请求 ajax axios
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=7050138',
            headers: {
                'x-host': 'mall.film-ticket.cinema.list',
                'x-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1757755540104964705746945"}'
            },
        }).then((res) => {
            // console.log(res);
            this.setState({
                cinemalist: res.data.data.cinemas
            })
            console.log(res.data.data.cinemas);
        }).catch(err => {
            console.log(err);
        })



    }

    render() {
        // console.log(this.state.cinemalist.map((item) => {
        //                     return <li key={item.cinemaId}>
        //                         {item.name}
        //                         {item.addrress}
        //                     </li>
        //                 }));


        return (
            <div>
                <input onInput={this.handleInput.bind(this)} />

                {
                    this.state.cinemalist.map((item) => (
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                    ))
                }

            </div>
        )
    }

    handleInput(event) {
        console.log('input', event.target.value);

    }




}
