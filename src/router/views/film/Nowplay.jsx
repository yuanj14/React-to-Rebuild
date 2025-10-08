import axios from 'axios';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';


export default function Nowplay(props) {
    // 路由histroty
    const [list, setlist] = useState([]);
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1008939",
            headers: {
                'x-host': "mall.film-ticket.film.list",
                'x-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1757755540104964705746945","bc":"310100"}'
            }
        }).then(res => {
            console.log(res.data.data.films);
            setlist(res.data.data.films)
        })
    }, [])
    
    const handleid = (id) => {
        props.history.push(`/detail/${id}`)
    }

    return (
        <div>
            {list.map(item => {
                return <Withf key = {item.filmId} {...item}/>
            })}
        </div>
    )
}


function Filmitem(props) {
    return (
        <li onClick={()=>{
            props.history.push(`/detail/${props.filmId}`)
        }}>{props.name}</li>
    )
}

const Withf = withRouter(Filmitem)
