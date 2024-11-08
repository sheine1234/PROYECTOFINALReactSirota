import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore";
import db from "../../db/db.js";
import "./checkout.scss";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  });

  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.now(new Date()),
      total: totalPrice()
    };
    uploadOrder(order);
  };

  // Subir la orden a Firestore
  const uploadOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, newOrder)
      .then((response) => {
        setOrderId(response.id);
      })
      .finally(() => {
        updateStock();
      });
  };

  // Actualizar stock después de la compra
  const updateStock = () => {
    cart.map(({ quantity, id, ...productCart }) => {
      const productRef = doc(db, "menu", id);
      setDoc(productRef, { ...productCart, stock: productCart.stock - quantity });
    });
    // Vaciar el carrito
    deleteCart();
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="order-success">
          <h2>¡Gracias por su compra!</h2>
          <h2>Orden enviada correctamente</h2>
          <p>Guarde su número de seguimiento: {orderId}</p>
          <Link to="/" className="button-link">Volver al inicio</Link>
        </div>
      ) : (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
