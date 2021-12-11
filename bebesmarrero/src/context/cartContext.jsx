import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) {
    //Guardo los productos del carrito
    const [cartList, setCartList] = useState([])

    //Agregar un producto al listado
    const agregarProducto = (item) => {
        totalCarrito()
   
        if(isInCart(item.producto.id)){
            let index = cartList.findIndex((obj => obj.producto.id === item.producto.id));
            let cartItem = cartList[index];
            cartItem.quantity = cartItem.quantity + item.quantity
            cartList.splice(index, 1, cartItem);
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, item])
        }

    }

    const eliminarItem = (itemID) =>{
      let producto = cartList.filter(item=>item.producto.id!==itemID)
    
        setCartList(producto)
        totalCarrito()
        
    }
    const isInCart = (id) => {
        return cartList.some(obj => obj.producto.id === id)
    }
    const varciarCarrtio = () => {
        setCartList([])
    }

    const precioTotal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.producto.price)), 0) 
    }

    const totalCarrito = () =>{
        return cartList.reduce((acum, valor)=> acum = acum + valor.quantity, 0) 
    }

    const menosCarrito = () =>{
     
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarProducto,
            varciarCarrtio,
            eliminarItem,
            precioTotal,
            totalCarrito,
            menosCarrito,
        
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
