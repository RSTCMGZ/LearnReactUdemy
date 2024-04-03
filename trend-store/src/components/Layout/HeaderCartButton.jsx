import "./HeaderCartButton.css"
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({ showCartHandler }) => {
    return (
        <button className="button" onClick={showCartHandler}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Sepetim</span>
            <span className="badge">0</span>
        </button>
    )
}

export default HeaderCartButton