import React from 'react';
import "./ProductCard.css";
import Counter from "../../components/Counter/Counter";

function ProductCard({name, price, image, setCartCount, cartItems, setCartItems}) {

    return (
        <div className="card">
            <div className="product-image" style={{backgroundImage: `url(${image})`}}></div>
            <div className="product-info">
                <div className="product-title">{name}</div>
                <div className="product-price">${price} each</div>
                <Counter name={name} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} />
            </div>
        </div>
    );
}

export default ProductCard;