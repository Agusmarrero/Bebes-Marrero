import { useState, createContext, useContext } from 'react'

const CartContext= createContext([])
 
export const  useCartContext =()=> useContext(CartContext)


function CartContextProvider({ children }) {
    //Guardo los productos del carrito
    const [cartList, setCartList] = useState([])

    //Agregar un producto al listado
    const agregarProducto =(item)=>{
        if(!cartList.includes(item)){
            setCartList( [...cartList, item] )
        }
     
    }

    const varciarCarrtio=()=>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList, 
            agregarProducto,
            varciarCarrtio
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
