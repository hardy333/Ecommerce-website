import "./Counter.css";
import { useState } from "react";

const Counter = ({setCartCount, cartItems, setCartItems, name}) => {
    const [itemCount, setItemCount] = useState(cartItems.find((item) => item.name === name ).qty)

    // click subtracts 1 qty, < 1 removes cartItem from Sidebar, < 0 does nothing
    const minusOne = () => {
        if (itemCount <= 0) {
            return
        } 
        else if ( itemCount === 1 ) {
            setCartCount(currentCartCount => currentCartCount - 1)
            // setItemCount(itemCount - 1)
        } 

        setItemCount((currentItemCount) => currentItemCount - 1)
        setCartItems(
            currItems => currItems.map(currItem => {
                if(currItem.name === name){
                    return {...currItem, qty: currItem.qty - 1}
                }
                return currItem
            })
        )
        
    };
    
    // click add 1 qty, qty equal to 1 adds cartItem to Sidebar
    const plusOne = () => {

        if(itemCount === 0) {
            setCartCount(currentCartCount => currentCartCount + 1)
            // code to add to sidebar here
            // setCartItems( cartItems => [...cartItems, ])
        }
            setItemCount((currentItemCount) => currentItemCount + 1)
            setCartItems(
                currItems => currItems.map(currItem => {
                    if(currItem.name === name){
                        return {...currItem, qty: currItem.qty + 1}
                    }
                    return currItem
                })
            )

    };

    // if(currItem.name !== name){
    //     return currItem
    // }else{
    //     return {name, qty: currItem.qty +
    // }

    const x = true ? "A" : "B"
    console.log(x)

    return (
        <div className="item-counter">
            <button className="add-subtract" onClick={minusOne}>-</button>
            <div className="number">{itemCount}</div>
            <button className="add-subtract" onClick={plusOne}>+</button>
        </div>
    )
}

export default Counter