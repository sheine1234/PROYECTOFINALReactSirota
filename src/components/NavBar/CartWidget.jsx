import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to="/cart" className="cartwidget d-flex align-items-center">
            <FaShoppingCart size={20}/>
            <p className="ms-2">{ totalQuantity() }</p>
        </Link>
    );
};

export default CartWidget;
