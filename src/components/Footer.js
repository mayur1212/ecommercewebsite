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

  const styles = {
    footer: {
      background: "linear-gradient(135deg, #b71c1c, #d32f2f)",
      color: "white",
      fontFamily: "'Poppins', sans-serif",
      width: "100%",
      boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.15)",
      marginTop: "40px",
    },
    footerContent: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "50px 6%",
      maxWidth: "1400px",
      margin: "0 auto",
      gap: "30px",
      animation: "fadeIn 1s ease-in-out",
    },
    footerSection: {
      flex: "1",
      minWidth: "250px",
      animation: "slideUp 1s ease-in-out",
    },
    footerHeading: {
      fontSize: "2rem",
      marginBottom: "20px",
      fontWeight: "800",
      letterSpacing: "2px",
    },
    sectionHeading: {
      fontSize: "1.3rem",
      marginBottom: "20px",
      fontWeight: "600",
      color: "white",
      position: "relative",
      paddingBottom: "10px",
    },
    headingUnderline: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "60px",
      height: "3px",
      backgroundColor: "#ffeb3b",
      borderRadius: "2px",
    },
    text: {
      lineHeight: "1.6",
      marginBottom: "15px",
      color: "rgba(255, 255, 255, 0.85)",
      fontSize: "0.95rem",
    },
    list: {
      listStyle: "none",
      padding: "0",
    },
    listItem: {
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
    },
    listIcon: {
      marginRight: "10px",
      color: "#ffeb3b",
    },
    link: {
      color: "white",
      textDecoration: "none",
      opacity: "0.9",
      transition: "all 0.3s ease",
      display: "block",
      padding: "5px 0",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
      marginTop: "20px",
    },
    socialIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "42px",
      height: "42px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: "50%",
      color: "white",
      fontSize: "1.2rem",
      transition: "all 0.3s ease",
      textDecoration: "none",
    },
    newsletterForm: {
      display: "flex",
      flexDirection: "column",
      marginTop: "15px",
    },
    input: {
      padding: "12px 15px",
      border: "none",
      borderRadius: "6px",
      outline: "none",
      marginBottom: "12px",
      fontSize: "1rem",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#333",
      transition: "0.3s",
    },
    button: {
      background: "#ffeb3b",
      color: "#b71c1c",
      border: "none",
      padding: "12px 20px",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "600",
      fontSize: "1rem",
    },
    footerBottom: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#a31616",
      margin: "0",
      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    },
    bottomText: {
      margin: "0",
      color: "rgba(255, 255, 255, 0.9)",
      fontSize: "0.9rem",
    },
    successMessage: {
      backgroundColor: "#fff",
      color: "#388e3c",
      padding: "10px",
      borderRadius: "4px",
      marginTop: "10px",
      textAlign: "center",
      fontWeight: "500",
    },
    icon: {
      marginRight: "8px",
    },
  };

  // Hover handlers
  const handleHover = (e) => {
    e.target.style.backgroundColor = "#ffeb3b";
    e.target.style.color = "#b71c1c";
    e.target.style.transform = "scale(1.1)";
  };
  const handleLeave = (e) => {
    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    e.target.style.color = "white";
    e.target.style.transform = "scale(1)";
  };
  const handleLinkHover = (e) => {
    e.target.style.opacity = "1";
    e.target.style.transform = "translateX(6px)";
  };
  const handleLinkLeave = (e) => {
    e.target.style.opacity = "0.9";
    e.target.style.transform = "translateX(0)";
  };
  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = "#fff176";
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  };
  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = "#ffeb3b";
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "none";
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        {/* Brand */}
        <div style={styles.footerSection}>
          <h3 style={styles.footerHeading}>MAYURA</h3>
          <p style={styles.text}>
            Fashion meets comfort. Explore premium collections designed for
            every occasion. We bring style closer to you.
          </p>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.socialIcon} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" style={styles.socialIcon} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" style={styles.socialIcon} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={styles.socialIcon} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.footerSection}>
          <h4 style={styles.sectionHeading}>
            Quick Links
            <div style={styles.headingUnderline}></div>
          </h4>
          <ul style={styles.list}>
            {["Home", "Shop", "About Us", "Contact", "FAQs"].map((link, idx) => (
              <li style={styles.listItem} key={idx}>
                <i className="fas fa-chevron-right" style={styles.listIcon}></i>
                <a
                  href="/"
                  style={styles.link}
                  onMouseEnter={handleLinkHover}
                  onMouseLeave={handleLinkLeave}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.footerSection}>
          <h4 style={styles.sectionHeading}>
            Contact Info
            <div style={styles.headingUnderline}></div>
          </h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <i className="fas fa-map-marker-alt" style={styles.listIcon}></i>
              <span style={styles.text}>123 Fashion Street, New York, USA</span>
            </li>
            <li style={styles.listItem}>
              <i className="fas fa-phone" style={styles.listIcon}></i>
              <span style={styles.text}>+1 234 567 8900</span>
            </li>
            <li style={styles.listItem}>
              <i className="fas fa-envelope" style={styles.listIcon}></i>
              <span style={styles.text}>support@mayura.com</span>
            </li>
            <li style={styles.listItem}>
              <i className="fas fa-clock" style={styles.listIcon}></i>
              <span style={styles.text}>Mon-Sat: 9AM - 6PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div style={styles.footerSection}>
          <h4 style={styles.sectionHeading}>
            Newsletter
            <div style={styles.headingUnderline}></div>
          </h4>
          <p style={styles.text}>Join our mailing list for style tips & offers</p>
          <form style={styles.newsletterForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
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
          &copy; {new Date().getFullYear()} MAYURA. All rights reserved. | Built
          with <i className="fas fa-heart" style={{ color: "#ffeb3b" }}></i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
