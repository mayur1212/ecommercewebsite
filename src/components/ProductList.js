import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Filter, X, ChevronDown, ChevronUp } from "lucide-react";

const ProductList = () => {
  const products = useSelector((state) => state.products.items);
  const navigate = useNavigate();
  
  // State for filters
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories.sort();
  }, [products]);

  // Get max price for range slider
  const maxPrice = useMemo(() => {
    return Math.max(...products.map(product => product.price), 0);
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Filter by price range
      const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Filter by categories (if any selected)
      const inSelectedCategories = selectedCategories.length === 0 || 
                                 selectedCategories.includes(product.category);
      
      return inPriceRange && inSelectedCategories;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Default sorting (no change)
        break;
    }

    return filtered;
  }, [products, priceRange, selectedCategories, sortBy]);

  // Handle category selection
  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Handle price range change
  const handlePriceRangeChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };

  // Reset all filters
  const resetFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedCategories([]);
    setSortBy("default");
  };

  // Check if any filters are active
  const hasActiveFilters = priceRange[0] > 0 || priceRange[1] < maxPrice || selectedCategories.length > 0 || sortBy !== "default";

  // Styles
  const styles = {
    container: {
      padding: "32px",
      backgroundColor: "#f9fafb",
      minHeight: "100vh",
      position: "relative"
    },
    header: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "40px"
    },
    filterContainer: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "20px",
      gap: "15px",
      alignItems: "center",
      flexWrap: "wrap"
    },
    filterButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 20px",
      backgroundColor: "#e3342f",
      color: "white",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s ease"
    },
    sortSelect: {
      padding: "10px 15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "white",
      cursor: "pointer",
      fontSize: "14px"
    },
    filterPanel: {
      position: "absolute",
      top: "100%",
      right: "32px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      padding: "20px",
      zIndex: 100,
      minWidth: "300px",
      marginTop: "10px",
      border: "1px solid #e2e8f0"
    },
    filterSection: {
      marginBottom: "20px"
    },
    filterTitle: {
      fontWeight: "600",
      marginBottom: "10px",
      color: "#2d3748",
      fontSize: "16px"
    },
    priceRange: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    },
    rangeInput: {
      width: "100%",
      margin: "10px 0"
    },
    priceDisplay: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      color: "#4a5568"
    },
    categoryList: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      maxHeight: "200px",
      overflowY: "auto"
    },
    categoryItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      padding: "5px 0",
      transition: "all 0.2s ease"
    },
    checkbox: {
      width: "18px",
      height: "18px",
      cursor: "pointer"
    },
    resetButton: {
      padding: "8px 15px",
      backgroundColor: "transparent",
      color: "#e3342f",
      border: "1px solid #e3342f",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "500",
      transition: "all 0.2s ease",
      width: "100%",
      marginTop: "10px"
    },
    resultsCount: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#4a5568",
      fontSize: "16px"
    },
    grid: {
      display: "grid",
      gap: "20px",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
    },
    card: {
      border: "1px solid #ccc",
      borderRadius: "20px",
      padding: "16px",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      transition: "all 0.3s ease",
      cursor: "pointer"
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "12px",
      transition: "transform 0.3s ease"
    },
    productTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "12px",
      textAlign: "center",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    cardFooter: {
      marginTop: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    price: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#e3342f"
    },
    viewButton: {
      backgroundColor: "#e3342f",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer"
    },
    noProducts: {
      textAlign: "center",
      padding: "40px",
      color: "#718096",
      fontSize: "18px",
      gridColumn: "1 / -1"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🛍️ Our Products</h2>

      {/* Filter Controls */}
      <div style={styles.filterContainer}>
        <div style={{position: "relative"}}>
          <button 
            style={{
              ...styles.filterButton,
              backgroundColor: hasActiveFilters ? "#2d3748" : "#e3342f"
            }}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            Filters
            {hasActiveFilters && (
              <span style={{
                backgroundColor: "white",
                color: "#e3342f",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "bold"
              }}>
                {selectedCategories.length + (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0) + (sortBy !== "default" ? 1 : 0)}
              </span>
            )}
            {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {showFilters && (
            <div style={styles.filterPanel}>
              {/* Price Range Filter */}
              <div style={styles.filterSection}>
                <h3 style={styles.filterTitle}>Price Range</h3>
                <div style={styles.priceRange}>
                  <input
                    type="range"
                    min="0"
                    max={maxPrice}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(e, 0)}
                    style={styles.rangeInput}
                  />
                  <input
                    type="range"
                    min="0"
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(e, 1)}
                    style={styles.rangeInput}
                  />
                  <div style={styles.priceDisplay}>
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div style={styles.filterSection}>
                <h3 style={styles.filterTitle}>Categories</h3>
                <div style={styles.categoryList}>
                  {categories.map(category => (
                    <label key={category} style={styles.categoryItem}>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        style={styles.checkbox}
                      />
                      <span style={{textTransform: "capitalize"}}>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div style={styles.filterSection}>
                <h3 style={styles.filterTitle}>Sort By</h3>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  style={styles.sortSelect}
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              {/* Reset Filters Button */}
              {hasActiveFilters && (
                <button 
                  style={styles.resetButton}
                  onClick={resetFilters}
                >
                  Reset All Filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Sort Dropdown (alternative placement) */}
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          style={styles.sortSelect}
        >
          <option value="default">Sort by</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      {/* Results Count */}
      <div style={styles.resultsCount}>
        Showing {filteredProducts.length} of {products.length} products
        {hasActiveFilters && (
          <button 
            onClick={resetFilters}
            style={{
              marginLeft: "10px",
              background: "none",
              border: "none",
              color: "#e3342f",
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Products Grid */}
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={styles.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={styles.image}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <h3 style={styles.productTitle}>
                {product.title}
              </h3>
              <div style={styles.cardFooter}>
                <span style={styles.price}>
                  ${product.price}
                </span>
                <button 
                  style={styles.viewButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.id}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div style={styles.noProducts}>
            <p>No products match your filters.</p>
            <button 
              onClick={resetFilters}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                backgroundColor: "#e3342f",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;