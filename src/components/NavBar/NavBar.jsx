import CartWidget from "./CartWidget";
import logo from "../../assets/logo.jpg";
import "./navbar.scss";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <img src={logo} alt="Logo" width={80} />
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
                            <a className="nav-link " aria-current="page" href="#">Menú</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Iniciar Sesión</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
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

