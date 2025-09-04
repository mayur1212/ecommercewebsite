// src/components/PaymentPage.js
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PaymentPage = () => {
  const cartItems = useSelector((state) => state.cart.items || []);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.totalPrice || item.price * (item.quantity || 1)),
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleOrder = () => {
    let validationErrors = {};
    if (!name) validationErrors.name = "Name is required";
    if (!address) validationErrors.address = "Address is required";
    if (!phone) validationErrors.phone = "Phone is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setShowSuccess(true);

    setName("");
    setAddress("");
    setPhone("");
    setPaymentMethod("cod");

    setTimeout(() => setShowSuccess(false), 15000);
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#9d0208" }}>
        <h2>No products to pay for!</h2>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: "900px",
      margin: "30px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#9d0208",
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#e63946" }}>Checkout</h2>

      {/* Product List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #e63946",
              borderRadius: "10px",
              backgroundColor: "#fff5f5",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src={item.image || item.images?.[0]}
                alt={item.name || item.title}
                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
              />
              <div>
                <h3 style={{ margin: 0, color: "#9d0208" }}>{item.name || item.title}</h3>
                <p style={{ margin: "5px 0", color: "#6a040f" }}>Qty: {item.quantity || 1}</p>
              </div>
            </div>
            <div style={{ fontWeight: "bold", marginTop: "10px", color: "#9d0208" }}>
              ₹{(item.totalPrice || item.price * (item.quantity || 1)).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #e63946",
        borderRadius: "10px",
        backgroundColor: "#fff5f5",
      }}>
        <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
        <p>Tax (10%): ₹{tax.toFixed(2)}</p>
        <p style={{ fontWeight: "bold", color: "#9d0208" }}>Total: ₹{total.toFixed(2)}</p>
      </div>

      {/* Payment Options */}
      <div style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #e63946",
        borderRadius: "10px",
        backgroundColor: "#fff5f5",
      }}>
        <h3 style={{ color: "#e63946" }}>Payment Method:</h3>
        <label style={{ display: "block", marginBottom: "5px" }}>
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{ marginRight: "8px" }}
          />
          Cash on Delivery
        </label>
        <label style={{ display: "block" }}>
          <input
            type="radio"
            value="online"
            checked={paymentMethod === "online"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{ marginRight: "8px" }}
          />
          Online Payment (Card)
        </label>
      </div>

      {/* User Info */}
      <div
  style={{
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #e63946",
    borderRadius: "10px",
    backgroundColor: "#fff5f5",
    maxWidth: "500px",   // keeps it neat on large screens
    margin: "20px auto", // centers it
  }}
>
  <h3 style={{ color: "#e63946", marginBottom: "15px" }}>Shipping Details:</h3>

  <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #e63946",
      boxSizing: "border-box",   // ✅ Fixes overflow
    }}
  />
  {errors.name && <p style={{ color: "#9d0208", margin: "0 0 10px 0" }}>{errors.name}</p>}

  <input
    type="text"
    placeholder="Address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #e63946",
      boxSizing: "border-box",
    }}
  />
  {errors.address && <p style={{ color: "#9d0208", margin: "0 0 10px 0" }}>{errors.address}</p>}

  <input
    type="text"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #e63946",
      boxSizing: "border-box",
    }}
  />
  {errors.phone && <p style={{ color: "#9d0208", margin: "0" }}>{errors.phone}</p>}
</div>


      {/* Order Button */}
      <button
        onClick={handleOrder}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "15px",
          backgroundColor: "#e63946",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#9d0208"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#e63946"}
      >
        Place Order
      </button>

      {/* Success popup */}
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#9d0208",
            color: "#fff",
            padding: "15px 25px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          Your order has been placed successfully!
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
