import './Cart.css'
const Card = () => {
    return (
        <div className='offcanvas'>
            <div className="content">
                <div className="cart-head">
                    <h2>Sepetim</h2>
                    <a href="/" className=''>X</a>
                </div>
                cartItems
                <div className="total">
                    <span>Toplam Değer</span>
                    <span>10₺</span>
                </div>
                <div className="actions">
                    <button className='cart-border'>Sipariş ver</button>
                    <button className='cart-clear'>Temizle</button>
                </div>
            </div>
        </div>
    )
}

export default Card