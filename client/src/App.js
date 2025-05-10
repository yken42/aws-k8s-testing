import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Premium Silicone",
      price: 49.99,
      image: "https://via.placeholder.com/200x200",
      description: "High-quality silicone product with premium finish"
    },
    {
      id: 2,
      name: "Deluxe Collection",
      price: 69.99,
      image: "https://via.placeholder.com/200x200",
      description: "Deluxe edition with enhanced features"
    },
    {
      id: 3,
      name: "Classic Series",
      price: 39.99,
      image: "https://via.placeholder.com/200x200",
      description: "Timeless design with modern comfort"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Intimate Essentials</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <div className="cart-icon">
            🛒 <span className="cart-count">{cart.length}</span>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <h1>Welcome to Intimate Essentials</h1>
          <p>Discover our premium collection of intimate products</p>
        </section>

        <section className="products" id="products">
          <h2>Our Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
                <button 
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h2>About Us</h2>
          <p>We are committed to providing high-quality intimate products with discretion and excellent customer service.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Intimate Essentials. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
