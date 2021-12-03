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
          <div style={{display:'grid'}}>
          <div className="navbar">
          <Link to="/">
          <h1 className="title-products" style={{fontSize:16}}>HOME</h1>
          </Link>
          <Link to="/sobreNosotros">
          <h1 className="title-products" style={{fontSize:16}}> SOBRE NOSOTROS</h1>
          </Link>
          <Link to="/productos/Conjuntos">
          <h1 className="title-products" style={{fontSize:16}}> CONJUNTOS</h1>
          </Link>
          <Link to="/productos/Bodys">
          <h1 className="title-products" style={{fontSize:16}}> BODYS</h1>
          </Link>
          <Link to="/productos/Accesorios">
          <h1 className="title-products" style={{fontSize:16}}> ACCESORIOS</h1>
          </Link>
          </div>
          <Link to="/Cart">
          <h1 className="title-products" style={{fontSize:16, float:'right'}} >  <CartWidget></CartWidget></h1>
          </Link>
          </div>
         
         

          {/* </Link> */}
        </nav>
        </div>
    )
}

export default NavBar

