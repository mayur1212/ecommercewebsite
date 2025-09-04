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
        background: "#fff",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "none",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
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
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "26px",
            fontWeight: "900",
            color: "#dc2626",
            cursor: "pointer",
            letterSpacing: "2px",
          }}
          onClick={() => (window.location.href = "/")}
        >
          MAYURA
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "36px" }}>
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
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#dc2626";
                  e.target.style.borderBottom = "2px solid #dc2626";
                  e.target.style.paddingBottom = "4px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#374151";
                  e.target.style.borderBottom = "none";
                  e.target.style.paddingBottom = "0";
                }}
              >
                {cat}
              </a>
            ))}
          </div>
        )}

        {/* Actions + Mobile Menu Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
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
                placeholder="Search for products..."
                style={{
                  padding: "10px 14px 10px 38px",
                  borderRadius: "9999px",
                  border: "1px solid #e5e7eb",
                  outline: "none",
                  fontSize: "14px",
                  width: "240px",
                  transition: "all 0.3s",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 6px rgba(220,38,38,0.3)")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>
          )}

          {/* Icons */}
          <User
            style={{
              cursor: "pointer",
              color: "#374151",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#dc2626")}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          />
          <Heart
            style={{
              cursor: "pointer",
              color: "#374151",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#dc2626")}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          />
          <ShoppingBag
            style={{
              cursor: "pointer",
              color: "#374151",
              transition: "0.3s",
            }}
            onClick={onBagClick}
            onMouseEnter={(e) => (e.target.style.color = "#dc2626")}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
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
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
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
                padding: "10px 0",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#dc2626")}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              {cat}
            </a>
          ))}

          {/* Mobile Search */}
          <div style={{ position: "relative", marginTop: "8px" }}>
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
                padding: "10px 14px 10px 38px",
                borderRadius: "9999px",
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
