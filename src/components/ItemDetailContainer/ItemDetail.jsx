import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss'; // Asegúrate de importar el archivo SCSS

const ItemDetail = ({ product, addProduct }) => {
  return (
    <div className="item-detail-container">
      <div className="card shadow-sm">
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-price">${product.price}</p>
          <div className="description-container">
            <h3 className="description-title">Descripción del Producto:</h3>
            <p className="card-text">{product.description}</p>
          </div>
          <ItemCount stock={product.stock} addProduct={addProduct}/>
          <button className="btn btn-primary add-to-cart">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
