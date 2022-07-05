import "./NavComp.css";
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

function NavComp({cartCount}) {
    
    return (
        <div className="navbar">
            <div className="promo-bar">
                Free deliveries for all US orders over $50
            </div>
            <ul className="nav-list">
                <li className="nav-item brand">
                    <Link to="/"><i className="bi bi-hearts"></i> Sweet Treats</Link>
                </li>
                <li className="nav-item">
                    <a href="#"><i className="bi bi-search" alt="search"></i></a>
                </li>
                <li className="nav-item">
                    <Link to="/ShopPage"><i className="bi bi-handbag-fill" alt="shop"></i></Link>
                </li>
                <li className="nav-item" >
                    { /* if cartCount < 1 display count, else display nothing */
                    cartCount ? <div className="cart-counter">{cartCount}</div> : ""}
                    <Link to="#"><i className="bi bi-cart-check-fill" alt="cart"></i></Link>
                </li>
            </ul>
        </div>
    );
}

export default NavComp;