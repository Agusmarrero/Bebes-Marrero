import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


import { useCartContext } from '../context/cartContext';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1);
    const { cartList, agregarProducto } = useCartContext()
    const [stock, setStock] = useState(0);
    function onAdd(cant, id) {

        setCount(cant)
        if(stock >=  1){
            swal({
                title: "Aviso",
                text: "¡No hay más stock disponible!",
                icon: "info",
                showCancelButton: true, 
                confirmButtonColor: "#DD6B55", 
      
              })
        }else{
            setStock(stock+1)
        }
      
        console.log(stock)
        // cartList.find(id)
        agregarProducto({ producto: item, cantidad: cant, id: id })
      
    }


    function rest(){
        setStock(stock-1)
    }




    return (

        <div>
            <div className="container" style={{ marginBottom: 50 }}>
                <div key={item.id} className="card w-60 " style={{ display: 'inline-block', marginLeft: 40, marginTop: 50 }} >

                    <div className="title-products" style={{ color: '#e7b097', borderBottom: '2px solid' }}>
                        {item.name}

                    </div>
                    <div className="card-body" >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="card-body" style={{ textAlign: "left", marginLeft: 45, width: 300 }}>
                                <img src={item.foto} alt="foto" style={{ height: item.height, width: item.width }} />
                            </div>
                            <div className="card-body" style={{ marginLeft: 45, width: 300 }}>
                                <h1 className="title-products" style={{ color: '#dc8a6559' }}>{item.descripcion}</h1>
                                <div className="stepper " style={{ marginBottom: 15 , marginLeft:100, marginTop:50}} >
                                    <button className="stepper__button" onClick={() => rest()}>-</button>
                                    <div className="stepper__content">
                                        <input type="text" value={stock} className="stepper__input" />
                                    </div>
                                    <button onClick={() => onAdd(item.stock, item.id)} className="stepper__button">+</button>
                                </div>
                            </div>

                        </div>

                        <h1 style={{ color: '#e4b59a' }}> $ {item.price}</h1>
                    </div>
                    <div className="card-footer" style={{ textAlign: '-webkit-center', height: 55 }}>
                    <Link to="/Cart">
                        <button style={{ cursor: 'pointer' }} className="btn2 btn-outline-primary btn-block">
                            TERMINAR COMPRA
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
