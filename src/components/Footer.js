import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Inline CSS styles
  const styles = {
    footer: {
      backgroundColor: "#d32f2f", // Red
      color: "white",
      padding: "0",
      margin: "0",
      width: "100%",
      fontFamily: "'Poppins', sans-serif",
      boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.1)"
    },
    footerContent: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "40px 5%",
      maxWidth: "1200px",
      margin: "0 auto"
    },
    footerSection: {
      flex: "1",
      minWidth: "250px",
      margin: "15px 20px"
    },
    footerHeading: {
      fontSize: "1.8rem",
      marginBottom: "20px",
      fontWeight: "700",
      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"
    },
    sectionHeading: {
      fontSize: "1.3rem",
      marginBottom: "20px",
      fontWeight: "600",
      color: "white",
      position: "relative",
      paddingBottom: "10px"
    },
    headingUnderline: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "50px",
      height: "3px",
      backgroundColor: "white"
    },
    text: {
      lineHeight: "1.6",
      marginBottom: "15px",
      color: "rgba(255, 255, 255, 0.9)"
    },
    list: {
      listStyle: "none",
      padding: "0"
    },
    listItem: {
      marginBottom: "12px",
      display: "flex",
      alignItems: "center"
    },
    listIcon: {
      marginRight: "10px",
      color: "white"
    },
    link: {
      color: "white",
      textDecoration: "none",
      opacity: "0.9",
      transition: "all 0.3s ease",
      display: "block",
      padding: "5px 0"
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
      marginTop: "20px"
    },
    socialIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "50%",
      color: "white",
      fontSize: "1.2rem",
      transition: "all 0.3s ease",
      textDecoration: "none"
    },
    newsletterForm: {
      display: "flex",
      flexDirection: "column",
      marginTop: "15px"
    },
    input: {
      padding: "12px 15px",
      border: "none",
      borderRadius: "4px",
      outline: "none",
      marginBottom: "12px",
      fontSize: "1rem",
      backgroundColor: "rgba(255, 255, 255, 0.9)"
    },
    button: {
      background: "white",
      color: "#d32f2f",
      border: "none",
      padding: "12px 20px",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "600",
      fontSize: "1rem"
    },
    footerBottom: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#b71c1c", // Darker red
      margin: "0",
      borderTop: "2px solid rgba(255, 255, 255, 0.1)"
    },
    bottomText: {
      margin: "0",
      color: "white",
      opacity: "0.9"
    },
    successMessage: {
      backgroundColor: "white",
      color: "#388e3c",
      padding: "10px",
      borderRadius: "4px",
      marginTop: "10px",
      textAlign: "center",
      fontWeight: "500"
    },
    icon: {
      marginRight: "8px"
    }
  };

  // Handle hover effects with JavaScript
  const handleHover = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "#d32f2f";
  };

  const handleLeave = (e) => {
    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    e.target.style.color = "white";
  };

  const handleLinkHover = (e) => {
    e.target.style.opacity = "1";
    e.target.style.paddingLeft = "8px";
  };

  const handleLinkLeave = (e) => {
    e.target.style.opacity = "0.9";
    e.target.style.paddingLeft = "0";
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = "#f5f5f5";
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "none";
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>M a Y U r a</h3>
          <p style={styles.text}>
            Discover the latest trends and exclusive products for your lifestyle. 
            Quality and style delivered to your doorstep.
          </p>
          <div style={styles.socialIcons}>
            <a 
              href="#" 
              style={styles.socialIcon}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="#" 
              style={styles.socialIcon}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="#" 
              style={styles.socialIcon}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a 
              href="#" 
              style={styles.socialIcon}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.sectionHeading}>
            Quick Links
            <div style={styles.headingUnderline}></div>
          </h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <i className="fas fa-chevron-right" style={styles.listIcon}></i>
              <a 
                href="/" 
                style={styles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                Home
              </a>
            </li>
            <li style={styles.listItem}>
              <i className="fas fa-chevron-right" style={styles.listIcon}></i>
              <a 
                href="/products" 
                style={styles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                Products
              </a>
            </li>
            <li style={styles.listItem}>
              <i className="fas fa-chevron-right" style={styles.listIcon}></i>
              <a 
                href="/about" 
                style={styles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                About Us
              </a>
            </li>
            <li style={styles.listItem}>
              <i className="fas fa-chevron-right" style={styles.listIcon}></i>
              <a 
                href="/contact" 
                style={styles.link}
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.sectionHeading}>
            Contact Info
            <div style={styles.headingUnderline}></div>
          </h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <i className="fas fa-map-marker-alt" style={styles.listIcon}></i>
              <span style={styles.text}>123 Fashion Street, City</span>
            </li>
            <li style={styles.listItem}>
              <i className="fas fa-phone" style={styles.listIcon}></i>
              <span style={styles.text}>+1 234 567 8900</span>
            </li>
            <li style={styles.listItem}>
              <i className="fas fa-envelope" style={styles.listIcon}></i>
              <span style={styles.text}>info@mayura.com</span>
            </li>
            <li style={styles.listItem}>
              <i className="fas fa-clock" style={styles.listIcon}></i>
              <span style={styles.text}>Mon-Sat: 9AM - 6PM</span>
            </li>
          </ul>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.sectionHeading}>
            Newsletter
            <div style={styles.headingUnderline}></div>
          </h4>
          <p style={styles.text}>Subscribe for updates and exclusive offers</p>
          <form style={styles.newsletterForm} onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your email address" 
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              style={styles.button}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Subscribe
            </button>
            {subscribed && (
              <div style={styles.successMessage}>
                <i className="fas fa-check-circle" style={styles.icon}></i>
                Thank you for subscribing!
              </div>
            )}
          </form>
        </div>
      </div>
      
      <div style={styles.footerBottom}>
        <p style={styles.bottomText}>
          &copy; 2023 M a Y U r a. All rights reserved. | Designed with <i className="fas fa-heart" style={{color: "#ffeb3b"}}></i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;