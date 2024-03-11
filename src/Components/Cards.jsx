import React from 'react'
import "./Cards.css"
import { NavLink } from 'react-router-dom'

const Cards = (props) => {
  return (
    <div>
      <div className="card flex">
        <h1 className="title">{props.title}</h1>
        <h1 className="count">{props.count}</h1>
        <button><NavLink to={props.path}>{props.button_name}</NavLink></button>
      </div>
    </div>
  )
}

export default Cards
