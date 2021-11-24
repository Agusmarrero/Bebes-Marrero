import { Link } from 'react-router-dom';
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
          <Link to="/">
          <a href="#">HOME</a>
          </Link>
          <Link to="/sobreNosotros">
          <a href="#">SOBRE NOSOTROS</a>
          </Link>
          <Link to="/productos/Conjuntos">
          <a href="#">CONJUNTOS</a>
          </Link>
          <Link to="/productos/Bodys">
          <a href="#">BODYS</a>
          </Link>
          <Link to="/productos/Accesorios">
          <a href="#">ACCESORIOS</a>
          </Link>
          </div>
          </div>
          {/* <Link to="/categoria/cA"> */}
          <CartWidget></CartWidget>
          {/* </Link> */}
        </nav>
        </div>
    )
}

export default NavBar

