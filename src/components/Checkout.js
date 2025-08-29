// src/pages/Checkout.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../app/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // ✅ Navigate to payment without clearing the cart
  const handleOrderNow = () => {
    navigate("/payment");
  };

  if (cartItems.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
          color: "#555",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          style={{ width: "100px", opacity: 0.7, marginBottom: "16px" }}
        />
        <h2 style={{ fontSize: "22px", fontWeight: "600" }}>
          Your cart is empty
        </h2>
        <p style={{ marginTop: "8px", fontSize: "14px" }}>
          Add products to proceed with checkout.
        </p>
      </div>
    );
  }

  const isMobile = windowWidth < 768;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
        gap: "20px",
        maxWidth: "1100px",
        margin: "20px auto",
        padding: isMobile ? "10px" : "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Cart Items */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: isMobile ? "15px" : "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "18px" : "22px",
            fontWeight: "700",
            marginBottom: "16px",
            borderBottom: "1px solid #eee",
            paddingBottom: "10px",
          }}
        >
          🛒 Your Items
        </h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #f0f0f0",
              padding: "12px 0",
              flexWrap: "wrap",
            }}
          >
            <img
              src={item.image || item.images?.[0]}
              alt={item.name || item.title}
              style={{
                width: isMobile ? "50px" : "60px",
                height: isMobile ? "50px" : "60px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            />

            <div
              style={{
                flex: 1,
                marginLeft: "12px",
                minWidth: isMobile ? "150px" : "200px",
              }}
            >
              <h3 style={{ fontSize: isMobile ? "14px" : "16px", margin: "0 0 4px" }}>
                {item.name || item.title}
              </h3>
              <p style={{ margin: "0", color: "#666", fontSize: isMobile ? "13px" : "14px" }}>
                ₹{item.price.toFixed(2)}
              </p>
              <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#999" }}>
                Qty: {item.quantity || 1}
              </p>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{
                background: "none",
                border: "none",
                color: "#e63946",
                cursor: "pointer",
                fontSize: isMobile ? "16px" : "18px",
                padding: "4px 8px",
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div
        style={{
          background: "#fafafa",
          borderRadius: "12px",
          padding: isMobile ? "15px" : "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          height: "fit-content",
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? "18px" : "20px",
            fontWeight: "700",
            marginBottom: "16px",
            borderBottom: "1px solid #eee",
            paddingBottom: "10px",
          }}
        >
          📦 Order Summary
        </h3>

        <div style={{ fontSize: isMobile ? "14px" : "15px", color: "#444" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>Tax (10%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              paddingTop: "8px",
              borderTop: "1px solid #ddd",
              fontWeight: "700",
              fontSize: isMobile ? "15px" : "17px",
            }}
          >
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handleOrderNow} // ✅ No clearing cart
          style={{
            marginTop: "20px",
            width: "100%",
            padding: isMobile ? "10px" : "12px",
            background: "linear-gradient(90deg, #2563eb, #4338ca)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: isMobile ? "14px" : "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          🚀 Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
