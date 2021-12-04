import { useCartContext } from "../context/cartContext"
import swal from 'sweetalert';

function Cart(item) {

    const { cartList, varciarCarrtio } = useCartContext()
    
    function payMethod(){
        swal({
            title: "Aviso",
            text: "Sera redireccionado a la página de su banco para continuar el pago",
            icon: "info",
            showCancelButton: true, 
            confirmButtonColor: "#DD6B55", 
  
          })
    }

    return (
        <>
            <div className="container" style={{ marginBottom: 50 }}>

                <div className="card w-602" style={{ display: 'inline-block', marginLeft: 40, marginTop: 50 }} >
                    <div className="card-footer" style={{ textAlign: '-webkit-center', height: 64 }}>
                        <h1 className="title-products" style={{ float: 'left' }}>DETALLE DE COMPRA</h1>
                    </div>
                    <div className="title-products w-602" style={{ color: '#e7b097', float: 'left', borderRight: '2px solid #0000009e' }}>
                        <h1 className="title-products" style={{ color: '#0000009e', float: 'left', marginTop: 15 }} >PRODUCTOS:</h1>
                        <div>
                            <ul style={{ display: 'grid' }}>
                                {
                                    cartList.map(prod =>
                                        <li className="title-products" style={{ color: '#0000009e', fontSize: 15 }}>{prod.producto.name}</li>
                                    )
                                }
                            </ul>
                        </div>
                        <div>
                            <h1 style={{ borderBottom: '2px solid #0000009e', width: 250, float: 'right', marginRight: 20 }}></h1>
                            <h1 className="title-products" style={{ width: 250, float: 'left', marginRight: 20, color: '#0000009e' }}> $ TOTAL</h1>
                        </div>

                    </div>
                    <div className="title-products  " style={{ color: '#e7b097', float: 'left' }}>
                        <h1 className="title-products" style={{ color: '#0000009e', marginTop: 15 }} > MÉTODO DE PAGO</h1>
                        <div>
                            <ul style={{ display: 'grid' }}>
                                <div><input type="radio" /><a><img src="https://i.ibb.co/BfMv7X7/1.png" style={{ height: 20 }} alt="1" border="0"></img></a></div>
                                <div><input type="radio" /><a><img src="https://i.ibb.co/Jr4TvwH/2.png" style={{ height: 20 }} alt="1" border="0"></img></a></div>
                                <div><input type="radio" /><a><img src="https://i.ibb.co/fMNN6K6/3.png" style={{ height: 20 }} alt="1" border="0"></img></a></div>
                                <button style={{ cursor: 'pointer', color: 'white' }} onClick={() => payMethod()} className="btn3  btn-block">IR A PAGAR</button>
                            </ul>
                        </div>
                    </div>

                    <div className="card-body" >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="card-body" style={{ textAlign: "left", marginLeft: 45, width: 300 }}>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )

    // <div className="container" style={{height:450}}>
    //     { cartList.map(prod => <li key={prod.id}> {prod.name} { prod.cantidad}</li>)  }
    //     <button onClick={()=> varciarCarrtio()}>vaciar carrito</button>
    // </div>

}


export default Cart
