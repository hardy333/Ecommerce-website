import ProductCard from "../../components/Products/ProductCard";
import productCardData from "../../components/Products/productCardData";

function ShopPage({setCartCount,  cartItems, setCartItems}) {
    return (
        <section>
            <div className="card-grid">
                {productCardData.map((obj, index) => (
                    <ProductCard 
                        key={obj.name} 
                        name={obj.name} 
                        price={obj.price}
                        qty={obj.qty}
                        image={obj.image} 
                        setCartCount={setCartCount} 
                        cartItems={cartItems} 
                        setCartItems={setCartItems} />
                ))}
            </div>
        </section>
    );
}

export default ShopPage;
