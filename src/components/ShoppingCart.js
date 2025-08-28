import React, { useState } from "react";

const ShoppingCart = ({ isOpen, onClose }) => {
  // Using local state instead of Redux
  const [cartItems, setCartItems] = useState([
    // Sample cart items - in a real app, you would manage this state globally
    {
      id: 1,
      title: "Sony Dualsense Edge Wireless Controller",
      price: 16990,
      quantity: 1,
      thumbnail: "https://cdn.dummyjson.com/product-images/11/thumbnail.webp"
    },
    {
      id: 2,
      title: "Premium Headphones",
      price: 8999,
      quantity: 2,
      thumbnail: "https://cdn.dummyjson.com/product-images/12/thumbnail.webp"
    }
  ]);

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Handle checkout
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // In a real app, this would redirect to a payment gateway
    setTimeout(() => {
      alert("Redirecting to payment gateway...");
      // window.location.href = "https://payment-gateway.com";
    }, 1000);
  };

  // Handle clear cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Styles
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: isOpen ? "flex" : "none",
      justifyContent: "flex-end",
      zIndex: 1000,
    },
    cartContainer: {
      width: "400px",
      height: "100%",
      backgroundColor: "white",
      boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      padding: "20px",
      borderBottom: "1px solid #e2e8f0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: "20px",
      fontWeight: "600",
    },
    closeButton: {
      background: "none",
      border: "none",
      fontSize: "24px",
      cursor: "pointer",
    },
    content: {
      flex: 1,
      overflowY: "auto",
      padding: "20px",
    },
    emptyCart: {
      textAlign: "center",
      padding: "40px 0",
      color: "#718096",
    },
    cartItem: {
      display: "flex",
      marginBottom: "20px",
      paddingBottom: "20px",
      borderBottom: "1px solid #e2e8f0",
    },
    itemImage: {
      width: "80px",
      height: "80px",
      objectFit: "cover",
      borderRadius: "8px",
      marginRight: "15px",
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      fontSize: "16px",
      fontWeight: "500",
      marginBottom: "5px",
    },
    itemPrice: {
      color: "#e3342f",
      fontWeight: "600",
      marginBottom: "10px",
    },
    quantityControls: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    quantityButton: {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      border: "1px solid #ddd",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    quantityInput: {
      width: "40px",
      height: "28px",
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: "4px",
      margin: "0 8px",
    },
    removeButton: {
      color: "#e53e3e",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
    },
    footer: {
      padding: "20px",
      borderTop: "1px solid #e2e8f0",
    },
    summaryRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
    },
    totalRow: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
      paddingTop: "15px",
      borderTop: "1px solid #e2e8f0",
      fontWeight: "600",
      fontSize: "18px",
    },
    checkoutButton: {
      width: "100%",
      padding: "15px",
      backgroundColor: "#e3342f",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "20px",
    },
    clearButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "transparent",
      color: "#718096",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "14px",
      cursor: "pointer",
      marginTop: "10px",
    },
    checkingOut: {
      textAlign: "center",
      padding: "40px 0",
    },
  };

  if (isCheckingOut) {
    return (
      <div style={styles.overlay}>
        <div style={styles.cartContainer}>
          <div style={styles.header}>
            <h2 style={styles.title}>Checkout</h2>
            <button style={styles.closeButton} onClick={onClose}>×</button>
          </div>
          <div style={styles.checkingOut}>
            <h3>Redirecting to payment gateway...</h3>
            <p>Please wait while we transfer you to our secure payment processor.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.cartContainer}>
        <div style={styles.header}>
          <h2 style={styles.title}>Your Shopping Bag</h2>
          <button style={styles.closeButton} onClick={onClose}>×</button>
        </div>
        
        <div style={styles.content}>
          {cartItems.length === 0 ? (
            <div style={styles.emptyCart}>
              <h3>Your bag is empty</h3>
              <p>Start shopping to add items to your bag</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={styles.itemImage}
                />
                <div style={styles.itemDetails}>
                  <h3 style={styles.itemName}>{item.title}</h3>
                  <div style={styles.itemPrice}>₹{item.price.toFixed(2)}</div>
                  
                  <div style={styles.quantityControls}>
                    <button 
                      style={styles.quantityButton}
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                      style={styles.quantityInput}
                      min="1"
                    />
                    <button 
                      style={styles.quantityButton}
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                  
                  <button 
                    style={styles.removeButton}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div style={styles.footer}>
            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div style={styles.summaryRow}>
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div style={styles.summaryRow}>
              <span>Tax</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div style={styles.totalRow}>
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            
            <button 
              style={styles.checkoutButton}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
            
            <button 
              style={styles.clearButton}
              onClick={handleClearCart}
            >
              Clear All Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;