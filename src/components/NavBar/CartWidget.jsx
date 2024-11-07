import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const total = totalQuantity()

    return (
        <Link to="/cart" className={ total > 0 ? "icon-cartwidget" : "empty-cartwidget"}>
            <FaShoppingCart size={20}/>
            <p className="ms-2">{ total >= 1 && total }</p>
        </Link>
    );
};

export default CartWidget;
