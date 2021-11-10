import React from 'react'
import './ListProducts.css';
const ListProducts = (props) => {
  return (
    <div className="container">
        <div className="photoInit">
            <h1 className="title-products" style={{ borderBottom: '2px solid white', marginBottom: 12 }}>{props.title}</h1>
            <div style={{ display: 'flex' }} > 
                <img src={props.bodyPhoto}  style={{ width: props.width, height: props.height }}alt="" />
                <img src={props.bodyPhoto2} style={{ width: props.width, height: props.height }} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ListProducts