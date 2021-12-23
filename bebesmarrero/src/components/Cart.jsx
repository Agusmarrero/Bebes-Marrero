import { useCartContext } from "../context/cartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

function payMethod() {
    swal({
        title: "Aviso",
        text: "Sera redireccionado a la página de su banco para continuar el pago",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",

    })
}

function cupon() {
    swal({
        title: "Success",
        text: "Su codigo es correcto",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",

    })
}
function Cart() {

    const { cartList, eliminarItem, precioTotal } = useCartContext()


    if (cartList.length === 0) {
        return (
            <div className="container" style={{ marginBottom: 50 }}>
                <div className="card w-602" style={{ display: 'inline-block', marginLeft: 40, marginTop: 50 }} >
                    <div className="card-footer" style={{ textAlign: '-webkit-center', height: 64 }}>
                        <h1 className="title-products" style={{ float: 'left' }}>DETALLE DE COMPRA</h1>
                    </div>

                    <div className="title-products " style={{ color: '#e7b097' }}>
                        <h1 className="title-products" style={{ color: '#0000009e', marginTop: 15 }} >SU CARRITO ESTA VACÍO </h1>
                        <Link to="/">
                            <button style={{ cursor: 'pointer', color: 'white' }} className="btn3  btn-block">SEGUIR COMPRANDO</button>
                        </Link>
                    </div>

                </div>
            </div>

        )
    } else {
        return (
            <>
                <div className="container" style={{ marginBottom: 50, background: 'white', marginTop: 50 }}>
                    <div className="title-products w-602" style={{ color: '#e7b097', float: 'left' }}>
                        <div>
                            <h1 className="title-products" style={{ color: '#0000009e', float: 'left', marginTop: 15, borderBottom: '2px solid #0000009e' }} >DETALLE DE COMPRA</h1>

                            <div >
                                <ul style={{ display: 'grid', }}>

                                    {
                                        cartList.map(prod =>

                                            <div style={{ display: 'flex' }}><img style={{ height: 80, marginRight: 20, marginBottom: 10 }} src={prod.producto.foto} /> <FontAwesomeIcon icon={faTimes} onClick={() => eliminarItem(prod.producto.id)} style={{ color: '#0000009e', cursor: 'pointer', size: '2x' }} /> <li className="title-products" style={{ color: '#0000009e', fontSize: 20 }}>{prod.quantity} | {prod.producto.name}</li>
                                                <h1 className="title-products" style={{ color: '#0000009e', fontSize: 20 }}> $ {prod.producto.price}</h1>
                                            </div>

                                        )
                                    }

                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="title-products" style={{ color: '#e7b097', float: 'right', width: 400, height: 350, border: '2px solid #e7b097', marginTop:20 }}>
                        <h1 className="title-products" style={{ width: 250, color: '#0000009e', fontSize: 20 }}> RESUMEN DE COMPRA</h1>
                        <div style={{display:'flex'}}>  <button style={{ cursor: 'pointer', color: 'white', height:30 ,widht:150, marginRight:10, marginLeft:10  }} onClick={() => cupon()} className="btn3  btn-block">APLICAR CUPÓN</button><input placeholder="CUPÓN" style={{marginRight:4}}></input></div>
                        <h1 className="title-products" style={{ width: 250, color: '#0000009e', fontSize: 15 }}> RETIRO DEL PRODUCTO</h1>
                     
                                <div><input type="radio" /><h1 className="title-products" style={{ width: 120, color: '#0000009e', fontSize: 15 }}>SUCURSAL</h1></div>
                                <div><input type="radio" /><h1 className="title-products" style={{ width: 120, color: '#0000009e', fontSize: 15 }}> ENVÍO ($150)</h1></div>
                     
                        <div style={{marginTop:30}}>
                           
                            <h1 className="title-products" style={{ width: 250, color: '#0000009e', fontSize: 20 }}> TOTAL :  $ {precioTotal()}</h1>
                            <Link to="/checkout">
                            <button style={{ cursor: 'pointer', color: 'white', height: 20 }} className="btn3  btn-block">IR A PAGAR</button>
                            </Link>
                        </div>

                    </div>
                    <div>

                    </div>

                </div>

            </>
        )
    }
}


export default Cart
