import React from 'react'
import './ListProducts.css';

const Item = (prod) => {
console.log("llego")
    return (
        <div className="container">
            <div key={prod.detalle.id} className="card w-50 mt-5" style={{ display: 'inline-block' }} >
                <div className="title-products" style={{ color: '#e7b097', borderBottom: '2px solid' }}>
                    {prod.detalle.name}

                </div>
                <div className="card-body">
                    <img src={prod.detalle.foto} alt="foto" style={{ height: prod.detalle.height, width: prod.detalle.width }} />

                    <h1 style={{ color: '#e4b59a' }}> $ {prod.detalle.price}</h1>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">
                        COMPRAR
                    </button>

                </div>
            </div>
        </div>
    )
}



export default Item;