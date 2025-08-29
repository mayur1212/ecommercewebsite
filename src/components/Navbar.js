import React, { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";

const Navbar = ({ onBagClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Tablet + mobile
      if (window.innerWidth > 1024) setIsMenuOpen(false);
    };

    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navCategories = ["MEN", "WOMEN", "KIDS", "STUDIO"];

  return (
    <nav
      style={{
        background: scrolled ? "#fff" : "#fff",
        borderBottom: "1px solid #f1f1f1",
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <div
  style={{
    fontSize: "24px",
    fontWeight: "900",
    color: "#dc2626",
    cursor: "pointer",
  }}
  onClick={() => window.location.href = '/'}
>
  MAYURA
</div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "32px" }}>
            {navCategories.map((cat) => (
              <a
                key={cat}
                href="#"
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  color: "#374151",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#dc2626")}
                onMouseLeave={(e) => (e.target.style.color = "#374151")}
              >
                {cat}
              </a>
            ))}
          </div>
        )}

        {/* Actions + Mobile Menu Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Search */}
          {!isMobile && (
            <div style={{ position: "relative" }}>
              <Search
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "12px",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                style={{
                  padding: "8px 12px 8px 36px",
                  borderRadius: "20px",
                  border: "1px solid #e5e7eb",
                  outline: "none",
                  fontSize: "14px",
                  width: "220px",
                }}
              />
            </div>
          )}

          {/* Icons */}
          <User style={{ cursor: "pointer", color: "#374151" }} />
          <Heart style={{ cursor: "pointer", color: "#374151" }} />
          <ShoppingBag
            style={{ cursor: "pointer", color: "#374151" }}
            onClick={onBagClick}
          />

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#374151",
              }}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #e5e7eb",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            animation: "slideDown 0.3s ease",
          }}
        >
          {navCategories.map((cat) => (
            <a
              key={cat}
              href="#"
              style={{
                fontWeight: "600",
                fontSize: "16px",
                color: "#374151",
                textDecoration: "none",
                padding: "8px 0",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#dc2626")}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              {cat}
            </a>
          ))}

          {/* Mobile Search */}
          <div style={{ position: "relative" }}>
            <Search
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                color: "#9ca3af",
              }}
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              style={{
                padding: "8px 12px 8px 36px",
                borderRadius: "20px",
                border: "1px solid #e5e7eb",
                outline: "none",
                fontSize: "14px",
                width: "100%",
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
