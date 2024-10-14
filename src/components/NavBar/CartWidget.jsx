import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="cartwidget d-flex align-items-center">
            <FaShoppingCart size={20}/>
            <p className="ms-2">1</p>
        </div>
    );
};

export default CartWidget;
