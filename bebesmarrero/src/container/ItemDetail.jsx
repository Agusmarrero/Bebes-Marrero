import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const [irCart, setIrCart] = useState(false);


    const onAdd = (contador) => {
        console.log("Udselecciono ", contador);
        setIrCart(true);
    };

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

                        {/* <div class="stepper " style={{ marginBottom: 15 }} >
                            <button class="stepper__button">-</button>
                            <div class="stepper__content">
                                <input type="text" class="stepper__input" />
                            </div>
                            <button class="stepper__button">+</button>
                        </div> */}
                        <button className="btn2 btn-outline-primary btn-block">
                            COMPRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
