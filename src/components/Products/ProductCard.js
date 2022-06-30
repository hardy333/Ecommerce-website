import React, { useState } from 'react';
import "./ProductCard.css";
import Counter from "../../components/Counter/Counter";

function ProductCard({name, price, image, setCartCount}) {

    /*
    const [buttonText, setButtonText] = useState("add to cart");

    const toggleText = () => {
        setButtonText((state) => (state === "remove" ? "add to cart" : "remove"));
        if(buttonText === "remove"){
            setCartCount(currCount => currCount - num)
        }else {
            setCartCount(currCount => currCount + num)
        }

    };
    */

    return (
        <div className="card">
            <div className="product-image" style={{backgroundImage: `url(${image})`}}></div>
            <div className="product-info">
                <div className="product-title">{name}</div>
                <div className="product-price">${price} each</div>
                <Counter />
            </div>
        </div>
    );
}

export default ProductCard;