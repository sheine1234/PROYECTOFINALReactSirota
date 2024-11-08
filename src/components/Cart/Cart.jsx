import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import emptyCartImage from "../../assets/empty-cart.png"; 
import "./cart.scss"

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, clear } = useContext(CartContext);

  // Early Return
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <img src={emptyCartImage} alt="Carrito vacío" className="empty-cart-image" />
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega productos para comenzar tu compra!</p>
        <Link to="/" className="button-link">Volver al Inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map((productCart) => (
        <div key={productCart.id} className="cart-item">
          <img src={productCart.image} width={100} alt="" className="cart-item-image" />
          <div className="cart-item-details">
            <p className="cart-item-name">{productCart.name}</p>
            <p className="cart-item-price">Precio c/u: ${productCart.price}</p>
            <p className="cart-item-quantity">Cantidad: {productCart.quantity}</p>
            <p className="cart-item-total">Precio parcial: ${productCart.price * productCart.quantity}</p>
          </div>
          <button onClick={() => deleteProductInCart(productCart.id)} className="button-link">
            Borrar producto
          </button>
        </div>
      ))}
      <div className="cart-total">
        <p className="total-price">Precio Total: ${totalPrice()}</p>
        <Link to="/checkout" className="button-link">Continuar con mi compra</Link>
        <button onClick={clear} className="button-link">Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;
