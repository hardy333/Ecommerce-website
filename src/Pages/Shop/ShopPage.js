import ProductCard from "../../components/Products/ProductCard";

const ProductCardData = [
    {
        name: "Orange Chocolate",
        price: "1.55",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Orange-Dark-Chocolate-Macaron-Web.jpg"

    },
    { 
        name: "Key Lime",
        price: "2.15",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Key-Lime-Macaron-Web.jpg"
    },
    { 
        name: "Strawberry Banana",
        price: "1.75",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Strawberry-Banana-Macaron-Web.jpg"
    },
    { 
        name: "Blueberry Lemon",
        price: "1.99",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Blueberry-Lemon-Macaron-Web.jpg"
    },
    { 
        name: "Lemon Poppyseed",
        price: "1.50",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Lemon-Poppyseed-Macaron-Web.jpg"
    },
    { 
        name: "Black Currant",
        price: "1.45",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Black-Currant-Macaron-Web.jpg"
    },
    { 
        name: "chocolate Coffee",
        price: "2.25",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Chocolate-Coffee-Macaron-We.jpg"
    },
    { 
        name: "Cherry Chocolate",
        price: "1.67",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Cherry-Chocolate-Macaron-Web.jpg"
    },
    { 
        name: "Raspberry Chocolate",
        price: "1.35",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Raspberry-Chocolate-Macaron-Web.jpg"
    },
    { 
        name: "Pistachio Strawberry",
        price: "1.75",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Pistachio-Strawberry-Macaron-Web.jpg"
    },
    { 
        name: "Vanilla Blackberry",
        price: "1.99",
        image:"https://ghyslain.com/wp-content/uploads/2020/09/Vanilla-Blackberry-Macaron-Web.jpg"
    },
]

function ShopPage({setCartCount, cartItems={cartItems}, setCartItems}) {
    return (
        <section>
            <div className="card-grid">
                {ProductCardData.map((obj, index) => (
                    <ProductCard key={obj.name} name={obj.name} price={obj.price} image={obj.image} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} />
                ))}
            </div>
        </section>
    );
}

export default ShopPage;
