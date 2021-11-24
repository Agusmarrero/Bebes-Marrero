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
             <div className="" style={{ marginBottom: 6 }}>
            <div key={item.id} className="card w-50 mt-5" style={{ display: 'inline-block', marginLeft: 100 }} >

                <div className="title-products" style={{ color: '#e7b097', borderBottom: '2px solid' }}>
                    {item.name}

                </div>
                <div className="card-body">
                    <img src={item.foto} alt="foto" style={{ height: item.height, width: item.width }} />

                    <h1 style={{ color: '#e4b59a' }}> $ {item.price}</h1>
                </div>
                <div className="card-footer" style={{ textAlign: '-webkit-center' }}>

                    <div class="stepper " style={{ marginBottom: 15 }} >

                        <button class="stepper__button">-</button>


                        <div class="stepper__content">
                            <input type="text" class="stepper__input" />
                        </div>


                        <button class="stepper__button">+</button>
                    </div>
                    <button className="btn btn-outline-primary btn-block">
                        COMPRAR
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ItemDetail;
