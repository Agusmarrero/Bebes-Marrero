import logo from './Sheep-logo.png';

import './App.css';
import NavBar from './components/NavBar';
import BodyPhoto from './container/BodyPhoto';
import Footer from './container/Footer';
import foto1 from './P1.jpeg';
import foto2 from './P2.jpeg';
import foto3 from './P3.jpeg';
import foto4 from './P4.jpeg';
import foto5 from './P5.jpeg';
import foto6 from './P6.jpeg';
import foto7 from './P7.jpeg';
import ListProducts from './container/ListProducts';

function App() {
  
  return (
    <div className="App">
      <div style={{ width: 200, height: 100, display: 'flex' }}>
        <img id="logoOveja" src={logo} className="App-logo" alt="logo" style={{ height: 90 }} />
        <h1>
          MI PEQUEÑA MARGOT
        </h1>
        <NavBar/>
      </div>
      <header className="App-header" >
        <h1 className="title-products" style={{borderBottom:'2px solid white', marginBottom:15}}>BODY - ESTOCOLMO</h1>
        <div style={{display:'flex'}}>
        <BodyPhoto bodyPhoto={foto3} />
        <BodyPhoto bodyPhoto={foto5} /> 
        </div>
        <h1 className="title-products" style={{borderBottom:'2px solid white', marginBottom:15, marginTop:20}}>CUBREPAÑALES</h1>
        <div style={{display:'flex'}}>
        <BodyPhoto bodyPhoto={foto6} />
        <BodyPhoto bodyPhoto={foto4} /> 
        </div>
        <h1 className="title-products" style={{borderBottom:'2px solid white', marginBottom:15, marginTop:20}}>CONJUNTOS</h1>
        <div style={{display:'flex'}}>
        <BodyPhoto bodyPhoto={foto7} />
        <BodyPhoto bodyPhoto={foto1} />
        </div>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
