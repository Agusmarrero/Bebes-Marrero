import carro from '../Super.png';
import { useCartContext } from "../context/cartContext"
const CartWidget = () => {
    return (
        <div>
            <a style={{ display: 'block', float: 'right', width: 0, bottom: 40 }}><div>
                <img src={carro} style={{ width: 50, height: 50, display: 'flex' }} alt="" />
            </div></a>
        </div>
    )
}

export default CartWidget