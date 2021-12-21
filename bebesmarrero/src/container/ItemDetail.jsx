import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import swal from 'sweetalert';





const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(1);
    const { agregarProducto, eliminarItem, menosCarrito} = useCartContext()

    const [stock, setStock] = useState(0);
    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
        onAdd(1)
    }

    const InputCount = () => {

        return <button style={{ cursor: 'pointer' }} className="btn2 btn-outline-primary btn-block"> TERMINAR COMPRA</button>
    }
    


    const ButtonCount = ({ handleInter }) => {
        return <button style={{ cursor: 'pointer' }} className="btn2 btn-outline-primary btn-block" onClick={handleInter}> COMPRAR </button>

    }
    function onAdd(cant) {
       
        setCount(cant)
     
        if (item.stock === stock) {
            swal({
                title: "Aviso",
                text: "¡No hay más stock disponible!",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",

            })
        }else{
            setStock(stock + 1)
            agregarProducto({ producto: item, quantity: cant })
        
        }
    

    }


    function rest(cant) {
        setStock(stock - 1)
        eliminarItem({ id: item.id, quantity: cant })
        menosCarrito()
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
                                <div className="stepper " style={{ marginBottom: 15, marginLeft: 100, marginTop: 50 }} >
                                    <button className="stepper__button" onClick={() => rest()}>-</button>
                                    <div className="stepper__content">
                                        <input type="text" value={stock} className="stepper__input" />
                                    </div>
                                    <button onClick={() => onAdd(1)} className="stepper__button">+</button>
                                </div>
                            </div>

                        </div>

                        <h1 style={{ color: '#e4b59a' }}> $ {item.price}</h1>
                    </div>
                    <div className="card-footer" style={{ textAlign: '-webkit-center', height: 55 }}>


                        {
                            inputType === 'button' ?
                                <ButtonCount handleInter={handleInter} />
                                :
                                <Link to="/Cart">
                                    <InputCount />
                                </Link>

                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
