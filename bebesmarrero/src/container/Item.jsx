import React from 'react'
import SideBar from '../components/SideBar';
import './ListProducts.css';
import { Link } from "react-router-dom";
const Item = (prod) => {
    return (

        <div  className="columna container" style={{ marginBottom: 6 }}>
            
                <div >
                    <div key={prod.detalle.id} className="card w-50 mt-5" style={{ display: 'inline-block', marginLeft: 100 }} >
                        <div className="title-products" style={{ color: '#e7b097', borderBottom: '2px solid' }}>
                            {prod.detalle.name}

                        </div>
                        <Link to={`/product/${prod.detalle.id}`}>
                        <div className="card-body">
                            <img src={prod.detalle.foto} alt="foto" style={{ height: prod.detalle.height, width: prod.detalle.width }} />

                            <h1 style={{ color: '#e4b59a' }}> $ {prod.detalle.price}</h1>
                        </div>
                        </Link>
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
    )
}



export default Item;