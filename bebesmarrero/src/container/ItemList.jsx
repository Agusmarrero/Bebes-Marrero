import React from 'react'
import './ListProducts.css';

const ItemList = (props) => {
    return (
        props.products.map(prod => {
            <div className="container">
                <div key={prod.id} className="card w-50 mt-5" style={{ display: 'inline-block' }} >
                    <div className="title-products" style={{ color: '#e7b097', borderBottom: '2px solid' }}>
                        {prod.name}
                    </div>
                    <div className="card-body">
                        <img src={prod.foto} alt="foto" style={{ height: prod.height, width: prod.width }} />
                        <h1 style={{ color: '#e4b59a' }}> $ {prod.price}</h1>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-block">
                            COMPRAR
                        </button>

                    </div>

                </div>
            </div>
        })
    )
}

export default ItemList;