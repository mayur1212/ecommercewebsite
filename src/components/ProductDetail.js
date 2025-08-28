import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const product = products.find(p => p.id === parseInt(productId));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!product) {
    return (
      <div style={{ 
        padding: "40px", 
        textAlign: "center", 
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
      }}>
        <h2>Product not found</h2>
        <button 
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#e3342f",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  // Calculate discounted price
  const discountedPrice = product.price - (product.price * (product.discountPercentage / 100));
  const savings = product.price - discountedPrice;
  
  // Calculate total based on quantity
  const totalPrice = discountedPrice * quantity;
  const totalSavings = savings * quantity;

  // Handle quantity change
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      quantity: quantity
    };
    addToCart(productToAdd);
    alert(`${quantity} ${product.title} added to cart!`);
  };

  // Handle Buy Now
  const handleBuyNow = () => {
    const productToAdd = {
      ...product,
      quantity: quantity
    };
    addToCart(productToAdd);
    // Redirect to checkout
    navigate("/checkout");
  };

  // Inline styles - keeping your original styles with responsive updates
  const styles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh"
    },
    breadcrumb: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      fontSize: "14px",
      color: "#666",
      cursor: "pointer"
    },
    productContainer: {
      display: "flex",
      flexDirection: window.innerWidth < 992 ? "column" : "row",
      gap: window.innerWidth < 768 ? "20px" : "40px",
      marginBottom: "40px",
      backgroundColor: "white",
      borderRadius: "12px",
      padding: window.innerWidth < 768 ? "15px" : "30px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
    },
    imageSection: {
      flex: "1",
      maxWidth: window.innerWidth < 992 ? "100%" : "500px"
    },
    mainImage: {
      width: "100%",
      borderRadius: "12px",
      marginBottom: "15px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      objectFit: "cover",
      height: window.innerWidth < 768 ? "300px" : "400px"
    },
    thumbnailContainer: {
      display: "flex",
      gap: "10px",
      overflowX: "auto",
      paddingBottom: "10px"
    },
    thumbnail: {
      width: window.innerWidth < 768 ? "60px" : "80px",
      height: window.innerWidth < 768 ? "60px" : "80px",
      borderRadius: "8px",
      cursor: "pointer",
      objectFit: "cover",
      border: "2px solid transparent",
      opacity: "0.7",
      transition: "all 0.2s ease"
    },
    infoSection: {
      flex: "1",
      padding: window.innerWidth < 768 ? "0" : "0 10px"
    },
    title: {
      fontSize: window.innerWidth < 768 ? "22px" : "28px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#333"
    },
    category: {
      fontSize: window.innerWidth < 768 ? "14px" : "16px",
      color: "#666",
      marginBottom: "15px",
      textTransform: "capitalize"
    },
    rating: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
      fontSize: window.innerWidth < 768 ? "14px" : "16px",
      color: "#666"
    },
    priceContainer: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "20px",
      gap: "10px"
    },
    originalPrice: {
      fontSize: window.innerWidth < 768 ? "18px" : "22px",
      textDecoration: "line-through",
      color: "#999",
    },
    discountedPrice: {
      fontSize: window.innerWidth < 768 ? "26px" : "32px",
      fontWeight: "bold",
      color: "#e3342f",
    },
    discountPercentage: {
      fontSize: window.innerWidth < 768 ? "14px" : "18px",
      color: "#388e3c",
      fontWeight: "500",
      backgroundColor: "#e6f4ea",
      padding: "4px 8px",
      borderRadius: "4px"
    },
    savings: {
      fontSize: window.innerWidth < 768 ? "14px" : "16px",
      color: "#666"
    },
    totalPriceContainer: {
      backgroundColor: "#f0f9ff",
      padding: "12px",
      borderRadius: "8px",
      marginBottom: "15px",
      border: "1px solid #e0f2fe"
    },
    totalPriceText: {
      fontSize: window.innerWidth < 768 ? "14px" : "16px",
      fontWeight: "600",
      color: "#0369a1",
      margin: 0
    },
    stock: {
      fontSize: window.innerWidth < 768 ? "14px" : "16px",
      color: "#388e3c",
      fontWeight: "500",
      marginBottom: "15px"
    },
    deliveryInfo: {
      backgroundColor: "#f8f9fa",
      padding: window.innerWidth < 768 ? "10px" : "15px",
      borderRadius: "8px",
      marginBottom: "20px",
      border: "1px solid #eaeaea"
    },
    deliveryText: {
      margin: "5px 0",
      fontSize: window.innerWidth < 768 ? "13px" : "14px",
      color: "#333",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap"
    },
    highlight: {
      color: "#388e3c",
      fontWeight: "500",
      marginRight: "5px"
    },
    icon: {
      marginRight: "8px",
      width: "16px",
      textAlign: "center"
    },
    quantityContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      gap: "10px"
    },
    quantityButton: {
      width: window.innerWidth < 768 ? "32px" : "36px",
      height: window.innerWidth < 768 ? "32px" : "36px",
      borderRadius: "50%",
      border: "1px solid #ddd",
      backgroundColor: "white",
      fontSize: window.innerWidth < 768 ? "16px" : "18px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    quantityInput: {
      width: window.innerWidth < 768 ? "50px" : "60px",
      height: window.innerWidth < 768 ? "32px" : "36px",
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: window.innerWidth < 768 ? "14px" : "16px"
    },
    buttonGroup: {
      display: "flex",
      flexDirection: window.innerWidth < 480 ? "column" : "row",
      gap: "15px",
      marginBottom: "30px"
    },
    addToCartBtn: {
      flex: "1",
      padding: window.innerWidth < 768 ? "12px 16px" : "15px 20px",
      backgroundColor: "#ff9f00",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: window.innerWidth < 768 ? "14px" : "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.2s ease"
    },
    buyNowBtn: {
      flex: "1",
      padding: window.innerWidth < 768 ? "12px 16px" : "15px 20px",
      backgroundColor: "#fb641b",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: window.innerWidth < 768 ? "14px" : "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.2s ease"
    },
    detailsSection: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: window.innerWidth < 768 ? "20px" : "30px",
      marginBottom: "30px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
    },
    tabs: {
      display: "flex",
      flexDirection: window.innerWidth < 480 ? "column" : "row",
      borderBottom: window.innerWidth < 480 ? "none" : "1px solid #ddd",
      marginBottom: "20px"
    },
    tab: {
      padding: window.innerWidth < 480 ? "12px 15px" : "10px 20px",
      cursor: "pointer",
      borderBottom: window.innerWidth < 480 ? "none" : "2px solid transparent",
      fontWeight: "500",
      borderLeft: window.innerWidth < 480 ? "4px solid transparent" : "none",
      marginBottom: window.innerWidth < 480 ? "5px" : "0"
    },
    activeTab: {
      borderBottom: window.innerWidth < 480 ? "none" : "2px solid #e3342f",
      borderLeft: window.innerWidth < 480 ? "4px solid #e3342f" : "none",
      color: "#e3342f",
      backgroundColor: window.innerWidth < 480 ? "#f8f8f8" : "transparent"
    },
    tabContent: {
      lineHeight: "1.6"
    },
    specGrid: {
      display: "grid",
      gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "15px"
    },
    specItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #f0f0f0",
      flexDirection: window.innerWidth < 480 ? "column" : "row",
      gap: window.innerWidth < 480 ? "5px" : "0"
    },
    specLabel: {
      fontWeight: "500",
      color: "#666",
      fontSize: window.innerWidth < 480 ? "14px" : "inherit"
    },
    specValue: {
      fontWeight: "400",
      color: "#333",
      fontSize: window.innerWidth < 480 ? "14px" : "inherit"
    },
    reviewContainer: {
      marginBottom: "20px",
      paddingBottom: "20px",
      borderBottom: "1px solid #f0f0f0"
    },
    reviewHeader: {
      display: "flex",
      flexDirection: window.innerWidth < 480 ? "column" : "row",
      justifyContent: "space-between",
      alignItems: window.innerWidth < 480 ? "flex-start" : "center",
      marginBottom: "10px",
      gap: window.innerWidth < 480 ? "5px" : "0"
    },
    reviewerName: {
      fontWeight: "500",
      fontSize: window.innerWidth < 480 ? "14px" : "inherit"
    },
    reviewDate: {
      color: "#666",
      fontSize: window.innerWidth < 480 ? "12px" : "14px"
    },
    reviewComment: {
      color: "#444",
      lineHeight: "1.5",
      fontSize: window.innerWidth < 480 ? "14px" : "inherit"
    }
  };

  return (
    <div style={styles.container}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb} onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left" style={{marginRight: "8px"}}></i>
        Back to Products
      </div>

      <div style={styles.productContainer}>
        {/* Image Gallery */}
        <div style={styles.imageSection}>
          <img 
            src={product.images[selectedImage]} 
            alt={product.title}
            style={styles.mainImage}
          />
          <div style={styles.thumbnailContainer}>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} view ${index + 1}`}
                style={{
                  ...styles.thumbnail,
                  borderColor: selectedImage === index ? "#e3342f" : "transparent",
                  opacity: selectedImage === index ? 1 : 0.7
                }}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div style={styles.infoSection}>
          <h1 style={styles.title}>{product.title}</h1>
          <div style={styles.category}>{product.category}</div>
          
          <div style={styles.rating}>
            <div style={{color: "#ffa500", marginRight: "5px"}}>
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </div>
            <span style={{marginLeft: "5px"}}>{product.rating} ({product.reviews.length} reviews)</span>
          </div>

          <div style={styles.priceContainer}>
            <span style={styles.originalPrice}>${product.price.toFixed(2)}</span>
            <span style={styles.discountedPrice}>${discountedPrice.toFixed(2)}</span>
            <span style={styles.discountPercentage}>{product.discountPercentage}% off</span>
          </div>
          <div style={styles.savings}>You save: ${savings.toFixed(2)} per item</div>

          {/* Total Price Display */}
          <div style={styles.totalPriceContainer}>
            <p style={styles.totalPriceText}>
              Total for {quantity} item{quantity > 1 ? 's' : ''}: <strong>${totalPrice.toFixed(2)}</strong>
            </p>
            {quantity > 1 && (
              <p style={{...styles.savings, margin: "5px 0 0 0", fontSize: "14px"}}>
                Total savings: ${totalSavings.toFixed(2)}
              </p>
            )}
          </div>

          <div style={styles.stock}>
            {product.availabilityStatus} • {product.stock} left in stock
          </div>

          <div style={styles.deliveryInfo}>
            <p style={styles.deliveryText}>
              <i className="fas fa-truck" style={styles.icon}></i>
              <span style={styles.highlight}>FREE delivery</span> {product.shippingInformation}
            </p>
            <p style={styles.deliveryText}>
              <i className="fas fa-shield-alt" style={styles.icon}></i>
              <span style={styles.highlight}>Warranty:</span> {product.warrantyInformation}
            </p>
            <p style={styles.deliveryText}>
              <i className="fas fa-undo" style={styles.icon}></i>
              <span style={styles.highlight}>Return Policy:</span> {product.returnPolicy}
            </p>
            <p style={styles.deliveryText}>
              <i className="fas fa-barcode" style={styles.icon}></i>
              <span style={styles.highlight}>SKU:</span> {product.sku}
            </p>
            <p style={styles.deliveryText}>
              <i className="fas fa-weight-hanging" style={styles.icon}></i>
              <span style={styles.highlight}>Weight:</span> {product.weight} kg
            </p>
          </div>

          <div style={styles.quantityContainer}>
            <span>Quantity:</span>
            <button 
              style={styles.quantityButton}
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >-</button>
            <input 
              type="number" 
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
              min="1"
              max={product.stock}
              style={styles.quantityInput}
            />
            <button 
              style={styles.quantityButton}
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= product.stock}
            >+</button>
          </div>

          <div style={styles.buttonGroup}>
            <button 
              style={styles.addToCartBtn}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button 
              style={styles.buyNowBtn}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          <div style={styles.deliveryInfo}>
            <p style={styles.deliveryText}>
              <i className="fas fa-info-circle" style={styles.icon}></i>
              <span style={styles.highlight}>Minimum Order Quantity:</span> {product.minimumOrderQuantity}
            </p>
            <p style={styles.deliveryText}>
              <i className="fas fa-tags" style={styles.icon}></i>
              <span style={styles.highlight}>Tags:</span> {product.tags.join(", ")}
            </p>
            <p style={styles.deliveryText}>
              <i className="fas fa-cube" style={styles.icon}></i>
              <span style={styles.highlight}>Dimensions:</span> {product.dimensions.width}"W × {product.dimensions.height}"H × {product.dimensions.depth}"D
            </p>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div style={styles.detailsSection}>
        <div style={styles.tabs}>
          <div 
            style={{...styles.tab, ...(activeTab === "description" ? styles.activeTab : {})}}
            onClick={() => setActiveTab("description")}
          >
            Description
          </div>
          <div 
            style={{...styles.tab, ...(activeTab === "specifications" ? styles.activeTab : {})}}
            onClick={() => setActiveTab("specifications")}
          >
            Specifications
          </div>
          <div 
            style={{...styles.tab, ...(activeTab === "reviews" ? styles.activeTab : {})}}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.reviews.length})
          </div>
        </div>

        <div style={styles.tabContent}>
          {activeTab === "description" && (
            <div>
              <p style={{marginBottom: "15px", lineHeight: "1.6"}}>{product.description}</p>
              <p style={{fontStyle: "italic", color: "#666"}}>Brand: {product.brand}</p>
            </div>
          )}

          {activeTab === "specifications" && (
            <div style={styles.specGrid}>
              <div style={styles.specItem}>
                <span style={styles.specLabel}>Category</span>
                <span style={styles.specValue}>{product.category}</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specLabel}>Brand</span>
                <span style={styles.specValue}>{product.brand}</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specLabel}>SKU</span>
                <span style={styles.specValue}>{product.sku}</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specLabel}>Weight</span>
                <span style={styles.specValue}>{product.weight} kg</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specLabel}>Dimensions</span>
                <span style={styles.specValue}>{product.dimensions.width}"W × {product.dimensions.height}"H × {product.dimensions.depth}"D</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specLabel}>Warranty</span>
                <span style={styles.specValue}>{product.warrantyInformation}</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specLabel}>Return Policy</span>
                <span style={styles.specValue}>{product.returnPolicy}</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specLabel}>Minimum Order</span>
                <span style={styles.specValue}>{product.minimumOrderQuantity}</span>
              </div>
              <div style={styles.specItem}>
                <span style={styles.specLabel}>Barcode</span>
                <span style={styles.specValue}>{product.meta.barcode}</span>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              {product.reviews.map((review, index) => (
                <div key={index} style={styles.reviewContainer}>
                  <div style={styles.reviewHeader}>
                    <div>
                      <span style={styles.reviewerName}>{review.reviewerName}</span>
                      <div style={{color: "#ffa500", marginTop: "5px"}}>
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </div>
                    </div>
                    <span style={styles.reviewDate}>{formatDate(review.date)}</span>
                  </div>
                  <p style={styles.reviewComment}>{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;