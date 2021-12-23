import React from 'react'
import { useState } from 'react'
import { useCartContext } from "../context/cartContext"
import firebase from 'firebase'
import 'firebase/firestore'
import getFirestore from "../service/getFirestore"
import Ppl from './Ppl';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

function Checkout() {
    const { cartList, eliminarItem, precioTotal } = useCartContext()


    const [data, setData] = useState({
        name: '',
        lastname: '',
        ci: '',
        email: '',
        emailDoble: '',
        phone: '',
        address: '',
    })

    const [idOrder, setIdOrder] = useState('')



    const generateOrder = () => {
        const order = {};
        order.date = firebase.firestore.Timestamp.fromDate(new Date());


        order.buyer = data;
        order.total = precioTotal();


        order.items = cartList.map(cartItem => {
            const id = cartItem.producto.id
            const name = cartItem.producto.name
            const price = cartItem.producto.price * cartItem.quantity

            return { id, name, price }
        })



        const dbQuery = getFirestore();

        dbQuery.collection('orders').add(order)
            .then(resp => setIdOrder(resp.id))
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const payMethod = (e) => {
        let timerInterval
        Swal.fire({
            title: 'AVISO',
            html: 'Se está procesando su pedido, por favor espere',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
            willClose: () => {
                generateOrder()
                finishPay()
                clearInterval(timerInterval)
            }
        })

    }


    const finishPay = (e) => {
        Swal.fire({
            icon: 'success',
            title: 'Su pedido fue realizado con éxito',
            showConfirmButton: true,

        }).then((result) => {
            if (result.isConfirmed) {

            }

        })
    }

    const authentication = () => {
        let nombre = data.name;
        let apellido = data.lastname;
        let ci = data.ci;
        let email = data.email;
        let emailDoble = data.emailDoble;
        if (nombre === '' || apellido === '' || ci === '') {
            problemAuthentication()
        } else {
            if (email === emailDoble) {
                payMethod()
            } else {
                problemEmail()
            }
        }
    }

    const problemEmail = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Los emails deben coinicidir para continuar el pedido',
            showConfirmButton: true,
        })
    }

    const problemAuthentication = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Debe completar todos los datos obligatorios',
            showConfirmButton: true,
        })
    }

    return (
        <div className="container" style={{ marginBottom: 50, background: 'white', marginTop: 50 }}>
            <div className="title-products w-602" style={{ color: '#e7b097', float: 'left' }}>
                <div>
                    <h1 className="title-products" style={{ color: '#0000009e', float: 'left', marginTop: 15, borderBottom: '2px solid #0000009e' }} >DETALLE DE FACUTACIÓN</h1>
                    <div >
                        <form onChange={handleChange}>
                            <table>
                                <tr>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Nombre*</label>
                                    </td>
                                    <td>
                                        <input type="text" name="name" value={data.name} />
                                    </td>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Apellido*</label>
                                    </td>
                                    <td>
                                        <input type="text" name="lastname" value={data.lastname} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Cedula*</label>
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
                                </tr>
                                <tr>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Email*</label>
                                    </td>
                                    <td>
                                        <input type="text" name="email" value={data.email} />
                                    </td>
                                    <td>
                                        <label className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>Repetir Email*</label>
                                    </td>
                                    <td>
                                        <input type="text" name="emailDoble" value={data.emailDoble} />
                                    </td>
                                </tr>
                            </table>
                        </form>
                        <div style={{ marginTop: 30, width: 600 }}>
                            <label className="title-products" style={{ color: '#0000009e', fontSize: 15, float: 'left', marginBottom: 40 }}>NOTAS DEL ENVÍO

                            </label>
                            <textarea type="text" style={{ width: 350, height: 50, }} name="name" />
                        </div>
                        <button style={{ cursor: 'pointer', color: 'white', height: 20, width: 400, float: 'left', marginLeft: -40, marginTop: 30 }} onClick={() => authentication()} className="btn3  btn-block">REALIZAR PEDIDO</button>
                    </div>

                </div>
            </div>

            <div className="title-products" style={{ color: '#e7b097', float: 'right', width: 470, height: 350, marginTop: 20, backgroundColor: '#f7f7f7' }}>
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
                    <h1 className="title-products" style={{ width: 250, color: '#0000009e', fontSize: 20, borderTop: '2px solid #0000009e' }}> TOTAL :  ${precioTotal()} </h1>
                </div>

            </div>
            <div>

            </div>

        </div>

    )
}

export default Checkout;