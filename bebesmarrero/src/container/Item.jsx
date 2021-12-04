import React from 'react'
import SideBar from '../components/SideBar';
import './ListProducts.css';
import { Link } from "react-router-dom";
const Item = (prod) => {
    return (

        <div  className="columna container" style={{ marginBottom: 6 }}>
            
                <div >
                <Link to={`/product/${prod.detalle.id}`}>
                    <div key={prod.detalle.id} className="card w-50 mt-5" style={{ display: 'inline-block', marginLeft: 100 }} >
                        <div className="title-products" style={{ color: '#e7b097', borderBottom: '2px solid' }}>
                            {prod.detalle.name}

                        </div>
                        
                        <div className="card-body">
                            <img src={prod.detalle.foto} alt="foto" style={{ height: prod.detalle.height, width: prod.detalle.width }} />

                            <h1 style={{ color: '#e4b59a' }}> $ {prod.detalle.price}</h1>
                        </div>
                      
                        <div className="card-footer" style={{ textAlign: '-webkit-center' }}>
                            <button style={{cursor:'pointer'}}className="btn btn-outline-primary btn-block">
                               DETALLE
                            </button>
                        </div>
                    </div>
                    </Link> 
                </div>
              
        </div>
    )
}



export default Item;