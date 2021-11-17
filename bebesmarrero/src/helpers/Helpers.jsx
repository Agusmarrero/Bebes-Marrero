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
    { id: 1 , foto: "https://i.ibb.co/dJrCf3g/P1.jpg" , name: "CONJUNTOS", price: 1200 , width: 400, height:300,},
    { id: 2,foto: "https://i.ibb.co/p2nYcsh/P6.jpg" , name: "CUBREPAÑALES", price: 800 , width: 400, height:300},
    { id: 3,foto: "https://i.ibb.co/9T5FKSW/P3.jpg" , name: "BODYS", price: 750 , width: 300, height:300},
 ];


export const getFetch = new Promise((resolve, reject)=>{
    // tareas asincronicas acciones
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
    //reject('400 not found')
})
