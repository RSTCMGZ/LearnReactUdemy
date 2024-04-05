import "./HeaderCartButton.css"
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../../context/cartProvider";
import { useContext } from "react";

const HeaderCartButton = ({ showCartHandler }) => {
    const cartCtx = useContext(CartContext)

    const totalItemsInCart = cartCtx.items.reduce((acc, currentItem) => {
        return acc + currentItem.amount
    }, 0)

    return (
        <button className="button" onClick={showCartHandler}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Sepetim</span>
            <span className="badge">{totalItemsInCart}</span>
        </button>
    )
}

export default HeaderCartButton