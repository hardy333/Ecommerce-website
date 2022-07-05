import "./Counter.css";
import { useState } from "react";

const Counter = ({setCartCount, cartItems, setCartItems}) => {
    const [itemCount, setItemCount] = useState(0)

    // click subtracts 1 qty, < 1 removes cartItem from Sidebar, < 0 does nothing
    const minusOne = () => {
        if (itemCount <= 0) {

            return
        } 
        else if ( itemCount === 1 ) {
            setCartCount(currentCartCount => currentCartCount - 1)
            setItemCount(itemCount - 1)
        } else {
            setItemCount((currentItemCount) => currentItemCount - 1)
        }
    };
    
    // click add 1 qty, qty equal 1 adds cartItem to Sidebar
    const plusOne = () => {
        if(itemCount === 0) {
            setCartCount(currentCartCount => currentCartCount + 1)
            setCartItems(cartItems => [...cartItems, "new item"])
        }
            setItemCount((currentItemCount) => currentItemCount + 1)
    };

    return (
        <div className="item-counter">
            <button className="add-subtract" onClick={minusOne}>-</button>
            <div className="number">{itemCount}</div>
            <button className="add-subtract" onClick={plusOne}>+</button>
        </div>
    )
}

export default Counter