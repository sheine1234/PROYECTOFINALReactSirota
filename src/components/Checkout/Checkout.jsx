import { useState } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore"
import db from "../../db/db.js"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [orderId, setOrderId] = useState(null)
    const { cart, totalPrice, deleteCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.now(new Date()),
            total: totalPrice()
        }
        uploadOrder(order)
        }

    //Funcion para subir ordenes a Firestore
    const uploadOrder = (newOrder) => {
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, newOrder)
        .then((response)=>{
         setOrderId(response.id)  
        })
        .finally(()=>{
            updateStock()
        })
    }

    //Funcion para actualizar stock de productos despues de compra
    const updateStock = () =>{
        cart.map(( {quantity, id, ...productCart} )=>{
          const productRef = doc(db, "menu", id)
          setDoc(productRef, {...productCart, stock: productCart.stock - quantity})
        })

        //vaciar carrito
        deleteCart()
    }

  return (
    <div>
        {
          orderId ? (
            <div>
                <h2>Orden enviada correctamente</h2>
                <p>Guarde su número de sseguimiento: {orderId} </p>
                <Link to="/">Volver al inicio</Link>
            </div>
          ) : (
            <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}  />
          ) 
        }
    </div>
  )
}

export default Checkout