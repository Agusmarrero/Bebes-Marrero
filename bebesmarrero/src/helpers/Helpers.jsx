import foto1 from '../P1.jpeg';
import foto2 from '../P2.jpeg';
import foto3 from '../P3.jpeg';
import foto4 from '../P4.jpeg';
import foto5 from '../P5.jpeg';
import foto6 from '../P6.jpeg';
import foto7 from '../P7.jpeg';
const producto = { id: 1,foto: foto1 , name: "juan", price: 37 }

 export const getFetchUnProducto = new Promise((resolve, reject)=>{
    // tareas asincronicas acciones
    setTimeout(()=>{
        resolve(producto)
    }, 2000)
    //reject('400 not found')
})

const productos = [
    { id: 1 , foto: "https://drive.google.com/file/d/1-NY_7gC4z-rCIoiaovJXCb8bSExA_YkK/view?usp=sharing" , name: "CONJUNTOS", price: 37 , weight: 300, height:300,},
    { id: 2,foto: "https://drive.google.com/file/d/1BI0U2ymSZalVyjTNklN5tIdCyHxyHwSq/view?usp=sharing" , name: "CUBREPAÑALES", price: 37 , weight: 300, height:300},
    { id: 3,foto: "https://drive.google.com/file/d/1eUNDme4E59nLmg4K1uqHj4dOsnVhGzPi/view?usp=sharing" , name: "BODYS", price: 37 , weight: 300, height:300},
    // { id: 4,foto: foto4 , name: "Conjuntos", price: 37 , weight: 300, height:300},
    // { id: 5,foto: foto5 , name: "Conjuntos", price: 37 , weight: 300, height:300},
   
  ];


export const getFetch = new Promise((resolve, reject)=>{
    // tareas asincronicas acciones
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
    //reject('400 not found')
})
