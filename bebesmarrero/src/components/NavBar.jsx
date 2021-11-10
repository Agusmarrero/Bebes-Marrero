import React from 'react'
import './NavBar.css';
import logo from '../Sheep-logo.png';
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
      <div>
      <div style={{ width: 200, height: 100, display: 'flex' }}>
      <img id="logoOveja" src={logo} className="App-logo" alt="logo" style={{ height: 90 }} />
      <h1>MI PEQUEÑA MARGOT</h1>
      </div>
        <nav style={{left: 292,width:1000}}>
          <div stlye={{display:'flex'}}>
          <div className="navbar">
          <a href="#">HOME</a>
          <a href="#">SOBRE NOSOTROS</a>
          <a href="#">PRODUCTOS</a>
          <a href="#">CONTACTO</a>
          </div>
          </div>
          <CartWidget></CartWidget>
        </nav>
        </div>
    )
}

export default NavBar

