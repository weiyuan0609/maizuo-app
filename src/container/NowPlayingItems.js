import React from 'react'

export default props => {
  const items = props.items

  return (
  <div>
    {
      items.map((item,index) =>
      (
        <div className="now-playing" key={index}>
          <img src={item.cover.origin}/>
          <div className="movice-msg">
            <span>{item.name}</span><br/>
            <span>{item.cinemaCount}家影院上映 {item.watchCount}人购票</span>
            <span style={{float: 'right'}}>{item.grade}</span>
          </div>
        </div>
      ))
    }
  </div>
  )
}