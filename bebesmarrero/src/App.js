
import './App.css';
import NavBar from './components/NavBar';
import Footer from './container/Footer';
import foto1 from './P1.jpeg';
import foto2 from './P2.jpeg';
import foto3 from './P3.jpeg';
import foto4 from './P4.jpeg';
import foto5 from './P5.jpeg';
import foto6 from './P6.jpeg';
import foto7 from './P7.jpeg';
import ItemListContainer from './container/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="App-body">
        <ItemListContainer bodyPhoto={foto3} bodyPhoto2={foto5} title={'BODY - ESTOCOLMO'} width={300} height={300} />
        <ItemListContainer bodyPhoto={foto6} bodyPhoto2={foto4} title={'CUBREPAÑALES'} width={300} height={300} />
        <ItemListContainer bodyPhoto={foto7} bodyPhoto2={foto1} title={'CONJUNTOS'} width={300} height={300} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
