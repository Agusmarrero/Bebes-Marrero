const productos = [
    { id: 1 , foto: "https://i.ibb.co/Byj0qVH/Whats-App-Image-2021-11-09-at-11-26-27.jpg" , name: "SACO + SHORT", price: 1200 , width: 300, height:200, categoria: "Conjuntos" , descripcion: "Prenda 100% hecha a mano. Talles para niños de entre 0-2 años" , stock: 12},
    { id: 2,foto: "https://i.ibb.co/p2nYcsh/P6.jpg" , name: "CUBREPAÑALES", price: 800 , width: 300, height:200, categoria: "Cubrepañales", descripcion:  "Prenda 100% hecha a mano. Talles para niños de entre 0-2 años"  , stock: 11},
    { id: 3,foto: "https://i.ibb.co/9T5FKSW/P3.jpg" , name: "BODYS - RANITA", price: 750 , width: 250, height:200, categoria: "Bodys" , descripcion: "Prenda 100% hecha a mano. Talles para niños de entre 0-2 años"  , stock: 4},
    { id: 4,foto: "https://i.ibb.co/NVLMGLr/Whats-App-Image-2021-11-18-at-12-14-41-1.jpg" , name: "SACO + PELELE", price: 750 , width: 300, height:200, categoria: "Conjuntos", descripcion:  "Prenda 100% hecha a mano. Talles para niños de entre 0-2 años"  , stock: 10},
    { id: 5,foto: "https://i.ibb.co/19X9hDs/BODY-CRETA.jpg" , name: "BODYS - CRETA", price: 750 , width: 250, height:200, categoria: "Bodys" , descripcion:  "Prenda 100% hecha a mano. Talles para niños de entre 0-2 años"  , stock: 3},
    { id: 6,foto: "https://i.ibb.co/1QH8kZd/ACCESORIOS-1.jpg" , name: "MANTA", price: 1200 , width: 300, height:200, categoria: "Accesorios" , descripcion: "Prenda 100% hecha a mano. Talles para niños de entre 0-2 años"  , stock: 12},
    { id: 6,foto: "https://i.ibb.co/p3GZdCq/ACCESORIOS-2.jpg" , name: "MANTA", price: 1200 , width: 300, height:200, categoria: "Accesorios", descripcion:  "Prenda 100% hecha a mano. Talles para niños de entre 0-2 años"  , stock: 5},
 ];


export const getFetch = new Promise((resolve, reject)=>{
    // tareas asincronicas acciones
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
    //reject('400 not found')
})

export const itemPromise = new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 3000);
 
  });

  
export default itemPromise;