import React, { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X, Sparkles, Star } from "lucide-react";

const Navbar = ({ onBagClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navCategories = [
    { name: "MEN", items: ["🏆 Trending", "👕 Topwear", "👖 Bottomwear", "👟 Footwear", "🎒 Accessories"], emoji: "👨" },
    { name: "WOMEN", items: ["✨ New Arrivals", "👗 Ethnic Wear", "👚 Western Wear", "👠 Footwear", "💍 Jewelry"], emoji: "👩" },
    { name: "KIDS", items: ["🌟 Featured", "👦 Boys", "👧 Girls", "👶 Infants", "🧸 Toys"], emoji: "👶" },
    
  ];

  const navStyle = {
    background: scrolled ? 
      "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)" :
      "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    backdropFilter: "blur(20px)",
    boxShadow: scrolled ? 
      "0 8px 32px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)" : 
      "0 4px 20px rgba(0,0,0,0.08)",
    borderBottom: scrolled ? "1px solid rgba(226,232,240,0.8)" : "1px solid #e2e8f0",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
  };

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px"
  };

  const navInnerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "72px",
    transition: "height 0.3s ease"
  };

  const logoStyle = {
    fontSize: "32px",
    fontWeight: "900",
    cursor: "pointer",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
  };

  const logoHoverStyle = {
    transform: "scale(1.05) rotate(-1deg)"
  };

  const sparkleStyle = {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    color: "#fbbf24",
    animation: "sparkle 2s infinite"
  };

  const desktopNavStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: "40px",
    flex: "1",
    justifyContent: "center"
  };

  const categoryStyle = {
    position: "relative"
  };

  const categoryButtonStyle = {
    color: "#1f2937",
    fontWeight: "600",
    fontSize: "15px",
    letterSpacing: "0.5px",
    padding: "12px 16px",
    background: hoveredCategory ? "linear-gradient(135deg, #ec4899 0%, #f97316 100%)" : "transparent",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    transform: hoveredCategory ? "translateY(-2px)" : "translateY(0)",
    boxShadow: hoveredCategory ? "0 8px 25px rgba(236, 72, 153, 0.3)" : "none",
    color: hoveredCategory ? "#ffffff" : "#1f2937",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "8px",
    width: "280px",
    background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    borderRadius: "20px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255,255,255,0.8)",
    opacity: hoveredCategory ? "1" : "0",
    visibility: hoveredCategory ? "visible" : "hidden",
    transform: hoveredCategory ? "translateX(-50%) translateY(0) scale(1)" : "translateX(-50%) translateY(-10px) scale(0.95)",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    zIndex: "50",
    backdropFilter: "blur(20px)"
  };

  const dropdownInnerStyle = {
    padding: "24px"
  };

  const dropdownItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#4b5563",
    padding: "12px 16px",
    fontSize: "14px",
    textDecoration: "none",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    marginBottom: "4px"
  };

  const searchContainerStyle = {
    flex: "1",
    maxWidth: "500px",
    margin: "0 32px",
    position: "relative"
  };

  const searchWrapperStyle = {
    position: "relative",
    background: searchFocused ? 
      "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)" :
      "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
    borderRadius: "50px",
    padding: "4px",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    boxShadow: searchFocused ? 
      "0 20px 40px rgba(59, 130, 246, 0.15), 0 0 0 3px rgba(59, 130, 246, 0.1)" :
      "0 8px 20px rgba(0, 0, 0, 0.08)",
    transform: searchFocused ? "scale(1.02)" : "scale(1)"
  };

  const searchInputStyle = {
    width: "100%",
    paddingLeft: "56px",
    paddingRight: "20px",
    paddingTop: "16px",
    paddingBottom: "16px",
    border: "none",
    borderRadius: "46px",
    outline: "none",
    fontSize: "15px",
    backgroundColor: "transparent",
    fontWeight: "500",
    color: "#1f2937"
  };

  const searchIconStyle = {
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    color: searchFocused ? "#3b82f6" : "#6b7280",
    width: "20px",
    height: "20px",
    transition: "all 0.3s ease"
  };

  const userActionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  };

  const desktopActionsStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: "24px"
  };

  const actionItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#374151",
    cursor: "pointer",
    padding: "12px",
    borderRadius: "20px",
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    position: "relative",
    background: "transparent"
  };

  const actionItemHoverStyle = {
    ...actionItemStyle,
    color: "#ec4899",
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
    transform: "translateY(-3px)",
    boxShadow: "0 12px 24px rgba(236, 72, 153, 0.2)"
  };

  const actionTextStyle = {
    fontSize: "12px",
    marginTop: "6px",
    fontWeight: "600",
    letterSpacing: "0.5px"
  };

  const notificationBadgeStyle = {
    position: "absolute",
    top: "8px",
    right: "8px",
    width: "20px",
    height: "20px",
    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: "white",
    fontWeight: "bold",
    animation: "pulse 2s infinite"
  };

  const mobileMenuButtonStyle = {
    display: isMobile ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    color: "#374151",
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    border: "none",
    borderRadius: "15px",
    width: "48px",
    height: "48px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  };

  const mobileMenuStyle = {
    display: isMobile && isMenuOpen ? "block" : "none",
    background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    borderTop: "1px solid #e2e8f0",
    backdropFilter: "blur(20px)"
  };

  const mobileMenuInnerStyle = {
    padding: "24px 20px"
  };

  const mobileCategoryStyle = {
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
    border: "1px solid rgba(226, 232, 240, 0.8)"
  };

  const studioButtonStyle = {
    ...categoryButtonStyle,
    background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    color: "white",
    animation: "glow 3s ease-in-out infinite alternate"
  };

  const newBadgeStyle = {
    background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    color: "#1f2937",
    padding: "4px 8px",
    borderRadius: "8px",
    fontSize: "10px",
    fontWeight: "800",
    marginLeft: "8px",
    animation: "bounce 2s infinite"
  };

  // Add CSS animations via style injection
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes sparkle {
        0%, 100% { opacity: 1; transform: rotate(0deg) scale(1); }
        50% { opacity: 0.5; transform: rotate(180deg) scale(1.2); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      @keyframes glow {
        0% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
        100% { box-shadow: 0 0 30px rgba(236, 72, 153, 0.4), 0 0 40px rgba(139, 92, 246, 0.2); }
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-4px); }
        60% { transform: translateY(-2px); }
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const [logoHovered, setLogoHovered] = useState(false);
  const [actionHovered, setActionHovered] = useState({});

  // Handle Bag click
  const handleBagClick = () => {
    if (onBagClick) {
      onBagClick();
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Main Navigation */}
      <nav style={navStyle}>
        <div style={containerStyle}>
          <div style={navInnerStyle}>
            
            {/* Logo */}
            <div 
              style={logoHovered ? {...logoStyle, ...logoHoverStyle} : logoStyle}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <Sparkles style={sparkleStyle} size={16} />
              <span style={{ color: "#ec4899", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>M</span>
              <span style={{ color: "#f59e0b", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>a</span>
              <span style={{ color: "#ec4899", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>Y</span>
              <span style={{ color: "#f59e0b", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>U</span>
              <span style={{ color: "#ec4899", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>r</span>
              <span style={{ color: "#f59e0b", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>a</span>
            </div>

            {/* Desktop Navigation */}
            <div style={desktopNavStyle}>
              {navCategories.map((category) => (
                <div 
                  key={category.name} 
                  style={categoryStyle}
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button 
                    style={{
                      ...categoryButtonStyle,
                      background: hoveredCategory === category.name ? 
                        "linear-gradient(135deg, #ec4899 0%, #f97316 100%)" : 
                        "transparent",
                      color: hoveredCategory === category.name ? "#ffffff" : "#1f2937",
                      transform: hoveredCategory === category.name ? "translateY(-2px)" : "translateY(0)",
                      boxShadow: hoveredCategory === category.name ? "0 8px 25px rgba(236, 72, 153, 0.3)" : "none"
                    }}
                  >
                    <span>{category.emoji}</span>
                    {category.name}
                  </button>
                  
                  {/* Enhanced Dropdown Menu */}
                  <div style={{
                    ...dropdownStyle,
                    opacity: hoveredCategory === category.name ? "1" : "0",
                    visibility: hoveredCategory === category.name ? "visible" : "hidden",
                    transform: hoveredCategory === category.name ? 
                      "translateX(-50%) translateY(0) scale(1)" : 
                      "translateX(-50%) translateY(-10px) scale(0.95)"
                  }}>
                    <div style={dropdownInnerStyle}>
                      {category.items.map((item, index) => (
                        <a
                          key={item}
                          href="#"
                          style={dropdownItemStyle}
                          onMouseEnter={(e) => {
                            e.target.style.background = "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)";
                            e.target.style.color = "#ec4899";
                            e.target.style.transform = "translateX(8px)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = "transparent";
                            e.target.style.color = "#4b5563";
                            e.target.style.transform = "translateX(0)";
                          }}
                        >
                          {index === 0 && <Star size={14} style={{ color: "#fbbf24" }} />}
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              <div style={categoryStyle}>
                <button style={studioButtonStyle}>
                  <Sparkles size={16} />
                  STUDIO
                  <span style={newBadgeStyle}>NEW</span>
                </button>
              </div>
            </div>

            {/* Enhanced Search Bar */}
            <div style={searchContainerStyle}>
              <div style={searchWrapperStyle}>
                <Search style={searchIconStyle} />
                <input
                  type="text"
                  placeholder="✨ Discover products and more..."
                  style={searchInputStyle}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
            </div>

            {/* Enhanced User Actions */}
            <div style={userActionsStyle}>
              <div style={desktopActionsStyle}>
                <div 
                  style={actionHovered.profile ? actionItemHoverStyle : actionItemStyle}
                  onMouseEnter={() => setActionHovered({...actionHovered, profile: true})}
                  onMouseLeave={() => setActionHovered({...actionHovered, profile: false})}
                >
                  <User style={{ width: "22px", height: "22px" }} />
                  <span style={actionTextStyle}>Profile</span>
                </div>
                
                <div 
                  style={actionHovered.wishlist ? actionItemHoverStyle : actionItemStyle}
                  onMouseEnter={() => setActionHovered({...actionHovered, wishlist: true})}
                  onMouseLeave={() => setActionHovered({...actionHovered, wishlist: false})}
                >
                  <Heart style={{ width: "22px", height: "22px" }} />
                  <span style={actionTextStyle}>Wishlist</span>
                  <div style={notificationBadgeStyle}>3</div>
                </div>
                
                <div 
                  style={actionHovered.bag ? actionItemHoverStyle : actionItemStyle}
                  onMouseEnter={() => setActionHovered({...actionHovered, bag: true})}
                  onMouseLeave={() => setActionHovered({...actionHovered, bag: false})}
                  onClick={handleBagClick}
                >
                  <ShoppingBag style={{ width: "22px", height: "22px" }} />
                  <span style={actionTextStyle}>Bag</span>
                  <div style={notificationBadgeStyle}>2</div>
                </div>
              </div>

              {/* Enhanced Mobile Menu Button */}
              <button
                style={{
                  ...mobileMenuButtonStyle,
                  transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                  background: isMenuOpen ? 
                    "linear-gradient(135deg, #ec4899 0%, #f97316 100%)" :
                    "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                  color: isMenuOpen ? "white" : "#374151"
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div style={mobileMenuStyle}>
          <div style={mobileMenuInnerStyle}>
            {navCategories.map((category) => (
              <div key={category.name} style={mobileCategoryStyle}>
                <button style={{
                  color: "#1f2937",
                  fontWeight: "600",
                  fontSize: "16px",
                  marginBottom: "12px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span>{category.emoji}</span>
                  {category.name}
                </button>
                <div style={{ paddingLeft: "24px" }}>
                  {category.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      style={{
                        display: "block",
                        color: "#6b7280",
                        fontSize: "14px",
                        padding: "8px 0",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#ec4899";
                        e.target.style.paddingLeft = "8px";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#6b7280";
                        e.target.style.paddingLeft = "0px";
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile User Actions */}
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: "24px",
              borderTop: "1px solid #e2e8f0",
              marginTop: "20px"
            }}>
              {['Profile', 'Wishlist', 'Bag'].map((action) => (
                <div 
                  key={action} 
                  style={actionItemStyle}
                  onClick={action === 'Bag' ? handleBagClick : undefined}
                >
                  {action === 'Profile' && <User style={{ width: "22px", height: "22px" }} />}
                  {action === 'Wishlist' && <Heart style={{ width: "22px", height: "22px" }} />}
                  {action === 'Bag' && <ShoppingBag style={{ width: "22px", height: "22px" }} />}
                  <span style={actionTextStyle}>{action}</span>
                  {action !== 'Profile' && <div style={notificationBadgeStyle}>{action === 'Wishlist' ? '3' : '2'}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;