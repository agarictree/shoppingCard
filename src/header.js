import React from "react";
import { Link } from "react-router-dom";
import getImg from "./getItems";
import logo from "./img/logo-cupcake.png";

function Header() {
    
    return (
        <header className="navbar bg-light">
            <h1 className="navbar-brand">
                <img src={logo} alt="logo" width="70px" height="auto"/>
                Homemade cakes in Fairytown
            </h1>
            <nav className="nav">
                    <Link to="/" className="nav-link active link">Home</Link>
                    <Link to="/shop" className="nav-link link">Shop</Link>
                    <Link to="/card" className="nav-link link">
                        <span className="shopping-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 20 20">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                        </svg>
                        </span>
                    Shopping Card
                    <span className="card-count">{getImg().length}</span>
                    </Link>
            </nav>
        </header>
    )
}
export default Header;
