import { useEffect, useState } from "react";
import Data from "./Data";
import "./Style.css";
import Cart from "./Cart";

const Shop = () => {
  const [mycart, setMycart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart1")) || [];
    setMycart(storedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart1", JSON.stringify(mycart));
  }, [mycart]);

  const addProduct = (product) => {
    const exists = mycart.find((item) => item.id === product.id);

    if (exists) {
      setMycart(
        mycart.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + 1,
                price: item.price + product.price
              }
            : item
        )
      );
    } else {
      setMycart([...mycart, { ...product, count: 1, price: product.price }]);
    }

    setCartOpen(true);
  };

  const removeProduct = (index) => {
    setMycart(mycart.filter((item, i) => i !== index));
  };

  return (
    <>
      <section className="shop">
        <div className="container">
          <h1>This is My shop</h1>

          <div className="shop">
            {Data.map((item, key) => (
              <div className="item" key={key}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <span>Price: {item.price}</span>
                <br />
                <button
                  className="block border-2"
                  onClick={() => addProduct(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {cartOpen && (
        <Cart mycart={mycart} removeProduct={removeProduct} />
      )}
    </>
  );
};

export default Shop;