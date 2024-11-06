import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const[cart, setCart] = useState([])
    // Funcion para agregar productos al carrito de compras
    const addProductInCart = (newProduct) => {
        setCart( [ ...cart, newProduct ] )
    }
    // Funcion para detectar productos duplicados al carrito de compras
    const isInCart = () => {

    }
    // Funcion para eliminar productos del carrito de compras
    const deleteProductInCart = (idProduct) => {
        const productsFilter = cart.filter( (productCart) => productCart.id !== idProduct )
        setCart(productsFilter )
    }
    // Funcion para calcular cant de productos en carrito de compras
    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart)=> total + productCart.quantity, 0)
        return quantity
    }
    // Funcion para calcular precio total carrito
    const totalPrice= () => {
        const price = cart.reduce((total, productCart)=> total + (productCart.price * productCart.quantity), 0)
        return price 
    }
    // Funcion para vaciar carrito de compras
    const clear = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, clear } }>
        {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }