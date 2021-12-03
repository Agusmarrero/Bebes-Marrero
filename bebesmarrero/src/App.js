import { getFetch } from './helpers/GetFetch';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './container/ItemListContainer';
import CartWidget from './components/CartWidget';
import Ppl from './components/Ppl';
import AboutAs from './components/AboutAs';
import ItemDetailContainer from './container/ItemDetailContainer';
import CartContextProvider from './context/cartContext';
import Cart from './components/Cart';

function App() {


  return (
    <CartContextProvider >
    <BrowserRouter value={{}}>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="App-body">
          <div>
            <Routes>
              <Route exact path='/' element={<Ppl />} />
              <Route exact path='/sobreNosotros' element={<AboutAs />} />
              <Route exact path='/productos/:idCategoria' element={<ItemListContainer />} />
              <Route exact path='/product/:id' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
    </CartContextProvider >
  );
}

export default App;
