import React from 'react'
import './SideBar.css';
const SideBar = () => {

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: 280, backgroundColor: 'white' }}>
            <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            </a>

            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active title-products" style={{ color: '#dc8a6559', marginTop:20 }} aria-current="page">
                        <svg className="bi me-2" style={{ width: 16, height: 16 }} ></svg>
                        BODYS
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white title-products" style={{ color: '#dc8a6559', marginTop: 20 }}>
                        <svg className="bi me-2" style={{ width: 16, height: 16 }} ></svg>
                        CONJUNTOS
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white title-products" style={{ color: '#dc8a6559', marginTop:20 }}>
                        <svg className="bi me-2" style={{ width: 16, height: 16 }} ></svg>
                        SACOS
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white title-products" style={{ color: '#dc8a6559', marginTop:20}}>
                        <svg className="bi me-2" style={{ width: 16, height: 16 }} ></svg>
                        PANTALONES
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white title-products" style={{ color: '#dc8a6559', marginTop:20 }}>
                        <svg className="bi me-2" style={{ width: 16, height: 16 }} ></svg>
                        CUBREPAÑALES
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default SideBar;