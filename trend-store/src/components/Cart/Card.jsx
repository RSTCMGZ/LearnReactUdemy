import products from '../../productData'
import Offcanvas from '../UI/Offcanvas'
import './Cart.css'
import CartItem from './CartItem'
const Card = (props) => {

    const cartItems = (
        <ul className='cart-items'>
            {products.map((product) =>
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
                <span>10₺</span>
            </div>
            <div className="actions">
                <button className='cart-border'>Sipariş ver</button>
                <button className='cart-clear'>Temizle</button>
            </div>
        </Offcanvas>
    )
}

export default Card