# Aieka Take Away

**Aieka Take Away** es una plataforma web diseñada para facilitar la compra de productos de Aieka, permitiendo a los usuarios seleccionar artículos, agregarlos al carrito y proceder al checkout de manera sencilla. La página se enfoca en una experiencia de compra eficiente, utilizando tecnologías modernas y una interfaz amigable.

## Descripción

Aieka Take Away es un proyecto web desarrollado para **Aieka**, un centro juvenil de Jabad Lubavitch Argentina. Los usuarios pueden explorar el catálogo de productos, agregarlos al carrito de compras y proceder al pago sin complicaciones. El sitio es completamente responsive y optimizado para dispositivos móviles.

## Tecnologías Usadas

Este proyecto fue desarrollado con las siguientes tecnologías:

- **Frontend:**
  - **HTML5**
  - **CSS3** (con **Sass**)
  - **JavaScript** (con **React.js**)
  - **Bootstrap** 5
  - **React Router** 6
  - **React Toastify** para notificaciones
  - **React Icons** para íconos interactivos
  - **Firebase** para la base de datos (Firestore)

## Estructura del Proyecto

La estructura de archivos del proyecto es la siguiente:

📦src
 ┣ 📂assets
 ┃ ┣ 📜empty-cart.png
 ┃ ┗ 📜logo.jpg
 ┣ 📂components
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ 📜Cart.jsx
 ┃ ┃ ┗ 📜cart.scss
 ┃ ┣ 📂Checkout
 ┃ ┃ ┣ 📜Checkout.jsx
 ┃ ┃ ┣ 📜checkout.scss
 ┃ ┃ ┗ 📜FormCheckout.jsx
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜footer.scss
 ┃ ┣ 📂ItemCount
 ┃ ┃ ┣ 📜ItemCount.jsx
 ┃ ┃ ┗ 📜itemcount.scss
 ┃ ┣ 📂ItemDetailContainer
 ┃ ┃ ┣ 📜ItemDetail.jsx
 ┃ ┃ ┣ 📜itemdetail.scss
 ┃ ┃ ┗ 📜ItemDetailContainer.jsx
 ┃ ┣ 📂ItemListContainer
 ┃ ┃ ┣ 📜Item.jsx
 ┃ ┃ ┣ 📜ItemList.jsx
 ┃ ┃ ┣ 📜ItemListContainer.jsx
 ┃ ┃ ┗ 📜itemlistcontainer.scss
 ┃ ┗ 📂NavBar
 ┃ ┃ ┣ 📜CartWidget.jsx
 ┃ ┃ ┣ 📜NavBar.jsx
 ┃ ┃ ┗ 📜navbar.scss
 ┣ 📂context
 ┃ ┗ 📜CartContext.jsx
 ┣ 📂db
 ┃ ┗ 📜db.js
 ┣ 📂utils
 ┃ ┗ 📜seedProducts.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx



## Características Principales

- **Catálogo de Productos:** Los usuarios pueden navegar por el catálogo de productos y ver sus detalles.
- **Carrito de Compras:** Los productos seleccionados se agregan al carrito, y los usuarios pueden ver el contenido en cualquier momento.
- **Notificaciones en Tiempo Real:** Utiliza **React Toastify** para mostrar notificaciones de  error si se excede el stock disponible.
- **Responsive Design:** La aplicación está optimizada para ser utilizada en dispositivos móviles y escritorios.
- **Integración con Firebase:** Los datos de los productos y el carrito de compras están almacenados en **Firestore** para una gestión rápida y eficiente.

## Funcionalidades

- **Agregar al carrito:** Los usuarios pueden agregar productos al carrito y ver el total de productos seleccionados.
- **Checkout:** Permite a los usuarios confirmar su compra (aunque el sistema de pago aún no está disponible).
- **Gestión de Stock:** Si un usuario intenta agregar más unidades de las disponibles en stock, se mostrará una notificación de error.
- **Responsive:** El diseño es adaptable a pantallas de diferentes tamaños para mejorar la experiencia del usuario.

## Notas Adicionales

- **Entrega y Pago:** Actualmente, no se ofrece servicio de entrega ni opciones de pago. Estas funcionalidades están planificadas para una futura actualización.

---

Si necesitas más información o tienes alguna pregunta, no dudes en contactarnos a través de **aieka.jtc@gmail.com**.

