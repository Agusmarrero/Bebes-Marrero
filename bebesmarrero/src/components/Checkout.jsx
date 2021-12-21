import React from 'react'
import { useState } from 'react'
import { useCartContext } from "../context/cartContext"
import firebase from 'firebase'
import 'firebase/firestore'
import getFirestore from "../service/getFirestore"

import Swal from 'sweetalert2'


function Checkout ()  {
    const { cartList, eliminarItem, precioTotal } = useCartContext()
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    }
    const [data, setData] = useState({
        name:'',
        lastname:'',
        ci: '',
        email: '',
        phone:'',
        address:'',
    })
    const [idOrBool, setIdOrBool] = useState(true);
    const [idOrder, setIdOrder] = useState('')
    const generateOrder = (e) => {

        e.preventDefault();

        
        const order = {};
        order.date = firebase.firestore.Timestamp.fromDate(new Date());  

        
        order.buyer = data;
        order.total = precioTotal();

    
        order.items = cartList.map(cartItem => {
            const id = cartItem.product.id
            const name = cartItem.product.categoria
            const price = cartItem.product.price * cartItem.quantity

            return {id,name, price} 
        })

    

        const dbQuery = getFirestore();  

        dbQuery.collection('orders').add(order)
        .then(resp => setIdOrder(resp.id))
        .catch(err=> console.log(err))

    
    
    
}

const handleChange=(e)=>{
    setData({
         ...data, 
         [e.target.name]: e.target.value
     })
 }

    const payMethod = (e) => {
        let timerInterval
        Swal.fire({
          title: 'AVISO',
          html: 'Esta siendo redireccionando para terminar el pago',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
          },
          willClose: () => {
              //window.open('https://www.mercadopago.com.uy/link-de-pago-plugins-y-plataformas-checkout?matt_tool=82562736&matt_word=MLU_SEARCH_BRAND_GRAL&gclid=CjwKCAiAh_GNBhAHEiwAjOh3ZEstwIH5zweeSsaPI54Yq2Ir-WPf7G9D3AFt1dJl1D_3VOtpo6NH0xoCtxMQAvD_BwE', "_blank")
              generateOrder()
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
    
          }
        })
    }

    return (
        <div className="container" style={{ marginBottom: 50, background: 'white', marginTop: 50 }}>
            <div className="title-products w-602" style={{ color: '#e7b097', float: 'left' }}>
                <div>
                    <h1 className="title-products" style={{ color: '#0000009e', float: 'left', marginTop: 15, borderBottom: '2px solid #0000009e' }} >DETALLE DE FACUTACIÓN</h1>
                    <div >
                        <form  onSubmit={generateOrder} onChange={handleChange}>
                            <table>
                                <tr>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Nombre</label>
                                    </td>
                                    <td>
                                        <input type="text" name="name" value={data.name} />
                                    </td>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Apellido</label>
                                    </td>
                                    <td>
                                        <input type="text" name="lastname" value={data.lastname} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Cedula</label>
                                    </td>
                                    <td>
                                        <input type="text" name="ci" value={data.ci} />
                                    </td>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Celular</label>
                                    </td>
                                    <td>
                                        <input type="text" name="phone" value={data.phone} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Direccion</label>
                                    </td>
                                    <td>
                                        <input type="text" name="address" value={data.address} />
                                    </td>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Email</label>
                                    </td>
                                    <td>
                                        <input type="text" name="email" value={data.email} />
                                    </td>
                                </tr>
                            </table>
                        </form>
                        <div style={{ marginTop: 30, width: 600 }}>
                            <label className="title-products" style={{ color: '#0000009e', fontSize: 15, float: 'left', marginBottom: 40 }}>NOTAS DEL ENVÍO

                            </label>
                            <textarea type="text" style={{ width: 350, height: 50, }} name="name" />
                        </div>
                        <button style={{ cursor: 'pointer', color: 'white', height: 20, width: 400, float: 'left', marginLeft: -40, marginTop: 30 }}  onClick={() => payMethod()} className="btn3  btn-block">REALIZAR PEDIDO</button>
                    </div>

                </div>
            </div>

            <div className="title-products" style={{ color: '#e7b097', float: 'right', width: 470, height: 350,  marginTop: 20, backgroundColor:'#f7f7f7' }}>
                <h1 className="title-products" style={{ width: 250, color: '#0000009e', fontSize: 20 }}>PRODUCTOS</h1>
                <div >
                    <ul style={{ display: 'grid', }}>
                        {
                            cartList.map(prod =>
                                <div style={{ display: 'flex' }}> <li className="title-products" style={{ color: '#0000009e', fontSize: 20 }}>{prod.quantity} | {prod.producto.name}</li>
                                </div>
                            )
                        }

                    </ul>
                </div>
                <div style={{ marginTop: 160 }}>
                    <h1 className="title-products" style={{ width: 250, color: '#0000009e', fontSize: 20 , borderTop:'2px solid #0000009e'}}> TOTAL :  ${precioTotal()} </h1>
                </div>

            </div>
            <div>

            </div>

        </div>

    )
}

export default Checkout;