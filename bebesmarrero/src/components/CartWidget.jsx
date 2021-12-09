import carro from '../Super.png';
import { useCartContext } from "../context/cartContext"
import React, { useState, useEffect } from "react";
const CartWidget = () => {
    const { totalCarrito } = useCartContext()
    const [total, setTotal] = useState(true)

    return (
        <>

            <div>
                <a style={{ display: 'block', float: 'right', width: 0, bottom: 40 }}>
                    {
                        totalCarrito() === 0 ?
                            <div style={{ display: 'flex' }}>

                            </div>

                            :
                            <div style={{ display: 'flex' }}>
                                <img src={carro} style={{ width: 50, height: 50, display: 'flex' }} alt="" />
                                <h1 style={{ width: 50, height: 50, display: 'flex', marginTop:30 }}>{totalCarrito() !== 0 && totalCarrito()}</h1>
                            </div>

                    }
                </a>
            </div>
        </>
    )
}

export default CartWidget