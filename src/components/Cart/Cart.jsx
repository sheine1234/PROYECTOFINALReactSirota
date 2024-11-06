import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, clear} = useContext(CartContext)
  return (
    <div>
        {
            cart.map( (productCart) => (
                <div key={productCart.id}>
                    <img src={productCart.image} width={100} alt="" />
                    <p>{productCart.name}</p>
                    <p>precio c/u: {productCart.price}</p>
                    <p>cantidad: {productCart.quantity}</p>
                    <p>precio parcial: { productCart.price * productCart.quantity }</p>
                    <button onClick={ ()=> deleteProductInCart(productCart.id) }>Borrar producto</button>
                </div>
            ) )
        }
        <div>
            <p>Precio Total: { totalPrice() }</p>
            <button onClick={clear}>Vaciar Carrito</button>
        </div>
    </div>
  )
}

export default Cart