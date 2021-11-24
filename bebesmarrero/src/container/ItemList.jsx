import React from 'react'
import './ListProducts.css';
import Item from './Item';
const ItemList = (props) => {
    
    return (
     
        props.products.map(prod => {
            return (
                <Item detalle={prod} />
        )})
    )
}

export default ItemList;