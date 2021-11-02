import logo from './Sheep-logo.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="head-content">
        <h1>
          MI PEQUEÑA MARGOT
        </h1>
        </div>
        <h4>
          ECOMMERCE DE ROPA PARA BEBES
        </h4>
        <a
          className="App-link"
          href="https://instagram.com/mipequenamargot?utm_medium=copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISITANOS EN INSTAGRAM
        </a>
      </header>
    </div>
  );
}

export default App;
