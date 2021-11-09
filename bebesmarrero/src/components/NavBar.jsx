import React from 'react'
import carro from '../Super.png';
import './NavBar.css';
const NavBar = () => {
    return (
 
        <nav style={{left: 292,width:1000}}>
          <div stlye={{display:'flex'}}>
          <div className="navbar">
          <a href="#">HOME</a>
          <a href="#">SOBRE NOSOTROS</a>
          <a href="#">PRODUCTOS</a>
          <a href="#">CONTACTO</a>
          </div>
          </div>
          <a style={{display:'block',float:'right',width:0,bottom:40}}><div>
            <img src={carro}  style={{width:50, height:50, display:'flex'}} alt=""/>
          </div></a>
        </nav>
        
    )
}

export default NavBar

