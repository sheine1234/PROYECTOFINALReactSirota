import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { ToastContainer } from 'react-toastify'; // Importar ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Estilos de Toastify
import './App.css'

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          
          {/* Contenedor de notificaciones de Toastify */}
          <ToastContainer />

          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenido a Aieka Take Away"} />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

