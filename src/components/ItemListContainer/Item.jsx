import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="col-md-4 menu-item">
            <Link to={`/detail/${product.id}`} className="card shadow-sm text-decoration-none">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-primary add-to-cart">
                        Ver detalle
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Item;
