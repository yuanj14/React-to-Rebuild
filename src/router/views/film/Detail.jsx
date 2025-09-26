import React from 'react'

export default function Detail(props) {
    console.log(props);
    const filmId = props.match.params.filmId
    console.log(filmId,"动态路由");
    
  return (
    <div>Detail</div>
  )
}
