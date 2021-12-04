import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) {
    //Guardo los productos del carrito
    const [cartList, setCartList] = useState([])

    
    //Agregar un producto al listado
    const agregarProducto = (item, id) => {
        if(isInCart(item.producto.id)){
            let index = cartList.findIndex((obj => obj.producto.id === item.producto.id));
            let cartItem = cartList[index];
          
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, item])
        }

    }
    const isInCart = (id) => {
        return cartList.some(obj => obj.producto.id === id)
    }
    const varciarCarrtio = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarProducto,
            varciarCarrtio
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
