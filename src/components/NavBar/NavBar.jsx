import CartWidget from "./CartWidget";
import logo from "../../assets/logo.jpg";
import "./navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to="/">
                    <img src={logo} alt="Logo" width={80} />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Menú</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Fast Food">Fast Food</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Saludable">Saludable</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Especialidades">Especialidades</Link>
                        </li>
                        <li className="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

