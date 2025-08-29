import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";




function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: product.quantity || 1 }];
    });
  };

  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* ✅ Navbar with cart count */}
        <Navbar
          onBagClick={() => setIsCartOpen(true)}
          cartItemsCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        />

        {/* ✅ Shopping cart sidebar */}
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />

        <Routes>
          {/* ✅ Home */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <div style={{ padding: "1rem", flex: 1 }}>
                  <ProductList addToCart={addToCart} />
                </div>
              </>
            }
          />

          {/* ✅ Product detail page */}
          <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} />} />

          {/* ✅ Checkout now receives cartItems */}
          <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
