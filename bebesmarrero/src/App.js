
import './App.css';
import NavBar from './components/NavBar';
import Footer from './container/Footer';

import ItemListContainer from './container/ItemListContainer';
import { getFetch } from './helpers/Helpers';
import { useState, useEffect } from 'react'


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="App-body">
        <ItemListContainer />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
