import React, { useState, useEffect } from "react";

import { useCartContext } from '../context/cartContext';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1);
    const { cartList, agregarProducto } = useCartContext()

    function onAdd(cant) {
        setCount(cant)
        console.log(cant)
        agregarProducto( { producto: item, cantidad: cant} )
        
    }
    console.log(cartList)



    return (

        <div>
            <div className="container" style={{ marginBottom: 50}}>
                <div key={item.id} className="card w-60 " style={{ display: 'inline-block', marginLeft: 40 , marginTop:50}} >

                    <div className="title-products" style={{ color: '#e7b097', borderBottom: '2px solid' }}>
                        {item.name}

                    </div>
                    <div className="card-body" >
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="card-body" style={{ textAlign: "left", marginLeft: 45 , width:300}}>
                            <img src={item.foto} alt="foto" style={{ height: item.height, width: item.width }} />
                        </div>
                        <div className="card-body" style={{  marginLeft: 45 , width:300}}>
                            <h1 className="title-products" style={{color:'#dc8a6559'}}>{item.descripcion}</h1>
                        </div>
                        </div>
                        <h1 style={{ color: '#e4b59a' }}> $ {item.price}</h1>
                    </div>
                    <div className="card-footer" style={{ textAlign: '-webkit-center', height:64 }}>

                        {/* <div className="stepper " style={{ marginBottom: 15 }} >
                            <button className="stepper__button" onClick={()=>onAdd(item.stock)} >-</button>
                            <div className="stepper__content">
                                <input type="text" className="stepper__input"  />
                            </div>
                            <button onClick={()=>onAdd(item.stock)}  className="stepper__button">+</button>
                        </div> */}
                        <button style={{cursor:'pointer'}} onClick={()=>onAdd(item.stock)} className="btn2 btn-outline-primary btn-block">
                           AGREGAR AL CARRITO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
