import { getFetch } from './helpers/GetFetch';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import ItemListContainer from './container/ItemListContainer';
import CartWidget from './components/CartWidget';
import SideBar from './components/SideBar';
import Ppl from './components/Ppl';
import AboutAs from './components/AboutAs';
import ItemDetail from './container/ItemDetail';
import ItemDetailContainer from './container/ItemDetailContainer';

function App() {


  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="App-body">
          <div style={{ display: 'flex' }}>
            {/* <SideBar></SideBar> */}
            <Routes>
              <Route exact path='/' element={<Ppl />} />
              <Route exact path='/sobreNosotros' element={<AboutAs />} />
              <Route exact path='/productos/:idCategoria' element={<ItemListContainer />} />
              <Route exact path='/product/:id' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<CartWidget />} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
