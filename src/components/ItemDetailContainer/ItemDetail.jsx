import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './itemdetail.scss'; 

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
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
          
          {
            hideItemCount === true ? (
              <Link to="/cart" className="button-link">Terminar mi compra</Link>
            ) : (
              <ItemCount stock={product.stock} addProduct={addProduct} />
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
