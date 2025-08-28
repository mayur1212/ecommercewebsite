import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout"; // You'll need to create this

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevItems, product];
    });
  };

  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar 
          onBagClick={() => setIsCartOpen(true)} 
          cartItemsCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        />
        
        <ShoppingCart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <div style={{ padding: "1rem", flex: 1 }}>
                <ProductList addToCart={addToCart} />
              </div>
            </>
          } />
          <Route path="/product/:productId" element={
            <ProductDetail addToCart={addToCart} />
          } />
          <Route path="/checkout" element={
            <Checkout cartItems={cartItems} />
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;