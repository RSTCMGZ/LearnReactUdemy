import { useContext } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import Offcanvas from '../UI/Offcanvas'
const Card = (props) => {
    const { items, totalAmount } = useContext(CartContext)
    const cartItems = (
        <ul className='cart-items'>
            {items.map((product) =>
                <CartItem key={product.id} product={product} />
            )}
        </ul>
    )
    return (
        <Offcanvas onClose={props.onClose}>
            <div className="cart-head">
                <h2>Sepetim</h2>
                <a href="/" onClick={props.onClose} className='cart-close'>X</a>
            </div>
            {cartItems}
            <div className="total">
                <span>Toplam Değer</span>
                <span>{totalAmount.toFixed(2)}₺</span>
            </div>
            <div className="actions">
                <button className='cart-border'>Sipariş ver</button>
                <button className='cart-clear'>Temizle</button>
            </div>
        </Offcanvas>
    )
}

export default Card