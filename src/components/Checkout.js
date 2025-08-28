// src/components/Checkout.js
import React, { useState } from "react";

const Checkout = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const handleDonationSelect = (amount) => {
    setSelectedDonation(amount);
  };

  const handleCouponApply = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`);
      setShowCouponInput(false);
      setCouponCode("");
    }
  };

  // Inline styles
  const styles = {
    container: {
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    header: {
      backgroundColor: "#fff",
      padding: "15px 0",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      width: "100%"
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#ff3f6c",
      textAlign: "center"
    },
    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      display: "flex",
      flexWrap: "wrap",
      gap: "20px"
    },
    mainSection: {
      flex: 2,
      background: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      padding: "20px"
    },
    sidebar: {
      flex: 1,
      background: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      padding: "20px"
    },
    h1: {
      fontSize: "20px",
      marginBottom: "15px",
      color: "#333"
    },
    h2: {
      fontSize: "18px",
      margin: "15px 0",
      color: "#333"
    },
    h3: {
      fontSize: "16px",
      margin: "10px 0",
      color: "#333"
    },
    offerBox: {
      backgroundColor: "#f5f5f5",
      padding: "12px",
      borderRadius: "4px",
      marginBottom: "20px"
    },
    showMore: {
      color: "#ff3f6c",
      fontWeight: "500",
      cursor: "pointer"
    },
    divider: {
      height: "1px",
      backgroundColor: "#e0e0e0",
      margin: "20px 0"
    },
    itemsSelected: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "15px"
    },
    cartItem: {
      display: "flex",
      marginBottom: "20px",
      paddingBottom: "20px",
      borderBottom: "1px solid #e0e0e0"
    },
    itemImage: {
      width: "80px",
      height: "80px",
      backgroundColor: "#f5f5f5",
      marginRight: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#999"
    },
    itemBrand: {
      fontWeight: "bold",
      marginBottom: "5px"
    },
    itemDesc: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "8px"
    },
    itemSize: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "5px"
    },
    itemPrice: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "5px"
    },
    priceSpan: {
      color: "#ff3f6c",
      fontWeight: "bold"
    },
    itemReturn: {
      fontSize: "12px",
      color: "#666",
      marginBottom: "5px"
    },
    itemActions: {
      display: "flex",
      gap: "15px",
      marginTop: "10px"
    },
    actionBtn: {
      color: "#ff3f6c",
      background: "none",
      border: "none",
      fontWeight: "500",
      cursor: "pointer",
      padding: "0"
    },
    loginPromo: {
      backgroundColor: "#f0f8ff",
      padding: "15px",
      borderRadius: "4px",
      margin: "20px 0",
      textAlign: "center"
    },
    giftSection: {
      margin: "20px 0"
    },
    donationSection: {
      margin: "20px 0"
    },
    giftOption: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0"
    },
    addGift: {
      background: "none",
      border: "1px solid #ff3f6c",
      color: "#ff3f6c",
      padding: "8px 15px",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "500"
    },
    donationOptions: {
      display: "flex",
      gap: "10px",
      margin: "15px 0"
    },
    donationAmount: {
      flex: 1,
      textAlign: "center",
      padding: "10px",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      cursor: "pointer"
    },
    donationAmountSelected: {
      flex: 1,
      textAlign: "center",
      padding: "10px",
      border: "1px solid #ff3f6c",
      borderRadius: "4px",
      cursor: "pointer",
      backgroundColor: "#fff0f5"
    },
    knowMore: {
      color: "#ff3f6c",
      fontWeight: "500",
      cursor: "pointer"
    },
    priceDetails: {
      width: "100%"
    },
    priceRow: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px 0"
    },
    totalAmount: {
      fontWeight: "bold",
      borderTop: "1px solid #e0e0e0",
      paddingTop: "10px",
      marginTop: "10px"
    },
    applyCoupon: {
      color: "#ff3f6c",
      fontWeight: "500",
      cursor: "pointer"
    },
    couponInputContainer: {
      display: "flex",
      gap: "10px",
      margin: "10px 0"
    },
    couponInput: {
      flex: 1,
      padding: "8px",
      border: "1px solid #e0e0e0",
      borderRadius: "4px"
    },
    couponButton: {
      backgroundColor: "#ff3f6c",
      color: "white",
      border: "none",
      padding: "8px 15px",
      borderRadius: "4px",
      cursor: "pointer"
    },
    placeOrder: {
      backgroundColor: "#ff3f6c",
      color: "white",
      border: "none",
      padding: "15px",
      borderRadius: "4px",
      width: "100%",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "20px"
    },
    loginBtn: {
      backgroundColor: "white",
      color: "#ff3f6c",
      border: "1px solid #ff3f6c",
      padding: "15px",
      borderRadius: "4px",
      width: "100%",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "10px"
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>FashionStore</div>
      </header>

      <div style={styles.content}>
        <div style={styles.mainSection}>
          <h1 style={styles.h1}>Check delivery time & services</h1>
          
          <div style={styles.offerBox}>
            <p><strong>Available Offers</strong></p>
            <p>10% Instant Discount on PNB Credit Card on a min spend of ₹3,000. TCA</p>
            <p style={styles.showMore}>Show More <i className="fas fa-chevron-down"></i></p>
          </div>
          
          <div style={styles.divider}></div>
          
          <div style={styles.itemsSelected}>1/2 ITEMS SELECTED</div>
          
          <div style={styles.cartItem}>
            <div style={styles.itemImage}>
              <i className="fas fa-image fa-2x"></i>
            </div>
            <div>
              <div style={styles.itemBrand}>Tommy Hilfiger</div>
              <div style={styles.itemDesc}>Men Blue Solid Leather Two Fold Wallet Sold by Flashtech Retail</div>
              <div style={styles.itemSize}>Size: Onesize - Qty: 1 -</div>
              <div style={styles.itemPrice}>₹474 <span style={styles.priceSpan}>₹1,499</span> 68% OFF</div>
              <div style={styles.itemReturn}>14 days return available</div>
              <div style={styles.itemActions}>
                <button style={styles.actionBtn}>REMOVE</button>
                <button style={styles.actionBtn}>MOVE TO WISHLIST</button>
              </div>
            </div>
          </div>
          
          <div style={styles.cartItem}>
            <div style={styles.itemImage}>
              <i className="fas fa-image fa-2x"></i>
            </div>
            <div>
              <div style={styles.itemBrand}>U.S. Polo Assn.</div>
              <div style={styles.itemDesc}>Men TOP UN Printed Sliders Sold by Bulproom Net</div>
              <div style={styles.itemSize}>Size: 7 - Qty: 1 -</div>
              <div style={styles.itemPrice}>₹121 <span style={styles.priceSpan}>₹799</span> 85% OFF</div>
              <div style={styles.itemReturn}>7 days return available</div>
              <div style={styles.itemActions}>
                <button style={styles.actionBtn}>REMOVE</button>
                <button style={styles.actionBtn}>MOVE TO WISHLIST</button>
              </div>
            </div>
          </div>
          
          <div style={styles.loginPromo}>
            <p>Login to see items from your existing bag and wishlist.</p>
          </div>
          
          <div style={styles.loginPromo}>
            <h3 style={styles.h3}>Login to get upto ₹200 OFF on first order</h3>
          </div>
          
          <div style={styles.giftSection}>
            <h2 style={styles.h2}>GIFTING & PERSONALISATION</h2>
            <div style={styles.giftOption}>
              <div>
                <p>Buying for a loved one?</p>
                <p>Gift Packaging and personalised message on card. Only for ₹35</p>
              </div>
              <button style={styles.addGift}>ADD GIFT PACKAGE</button>
            </div>
          </div>
          
          <div style={styles.donationSection}>
            <h2 style={styles.h2}>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</h2>
            <p>Donate and make a difference</p>
            
            <div style={styles.donationOptions}>
              <div 
                style={selectedDonation === 10 ? styles.donationAmountSelected : styles.donationAmount}
                onClick={() => handleDonationSelect(10)}
              >
                ₹10
              </div>
              <div 
                style={selectedDonation === 20 ? styles.donationAmountSelected : styles.donationAmount}
                onClick={() => handleDonationSelect(20)}
              >
                ₹20
              </div>
              <div 
                style={selectedDonation === 50 ? styles.donationAmountSelected : styles.donationAmount}
                onClick={() => handleDonationSelect(50)}
              >
                ₹50
              </div>
              <div 
                style={selectedDonation === 100 ? styles.donationAmountSelected : styles.donationAmount}
                onClick={() => handleDonationSelect(100)}
              >
                ₹100
              </div>
            </div>
            
            <p style={styles.knowMore}>Know More</p>
          </div>
        </div>
        
        <div style={styles.sidebar}>
          <h2 style={styles.h2}>PRICE DETAILS (2 Items)</h2>
          
          <div style={styles.priceDetails}>
            <div style={styles.priceRow}>
              <div>Total MRP</div>
              <div>₹2,298</div>
            </div>
            <div style={styles.priceRow}>
              <div>Discount on MRP</div>
              <div>-₹1,704</div>
            </div>
            <div style={styles.priceRow}>
              <div>Coupon Discount</div>
              <div 
                style={styles.applyCoupon} 
                onClick={() => setShowCouponInput(!showCouponInput)}
              >
                Apply Coupon
              </div>
            </div>
            
            {showCouponInput && (
              <div style={styles.couponInputContainer}>
                <input 
                  type="text" 
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={styles.couponInput}
                />
                <button onClick={handleCouponApply} style={styles.couponButton}>Apply</button>
              </div>
            )}
            
            <div style={styles.priceRow}>
              <div>Platform Fee</div>
              <div>₹20</div>
            </div>
            <div style={{...styles.priceRow, ...styles.totalAmount}}>
              <div>Total Amount</div>
              <div>₹614</div>
            </div>
          </div>
          
          <button style={styles.placeOrder}>PLACE ORDER</button>
          <button style={styles.loginBtn}>LOGIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;