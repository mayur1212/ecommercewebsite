import React, { useState, useEffect } from "react";
import banner1 from '../assets/banner7.jpg';
import banner2 from '../assets/banner8.jpg';
import banner3 from '../assets/banner9.jpg';
import banner4 from '../assets/banner7.jpg';

const Banner = () => {
  const images = [banner1, banner2, banner3, banner4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate responsive values
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  // Responsive container style - Increased size
  const containerStyle = {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    marginBottom: "2rem",
    height: isMobile ? "300px" : isTablet ? "450px" : "550px", // Increased height
    borderRadius: "8px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
  };

  // Slider style
  const sliderStyle = {
    display: "flex",
    height: "100%",
    transition: "transform 0.5s ease-in-out",
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  // Slide style
  const slideStyle = {
    position: "relative",
    minWidth: "100%",
    height: "100%",
  };

  // Image style
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  // Content style
  const contentStyle = {
    position: "absolute",
    bottom: isMobile ? "15%" : "20%",
    left: isMobile ? "5%" : "10%",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    maxWidth: isMobile ? "90%" : "600px", // Increased max width
  };

  // Title style - Larger text
  const titleStyle = {
    fontSize: isMobile ? "2rem" : isTablet ? "3rem" : "3.5rem", // Increased font size
    marginBottom: "0.5rem",
    fontWeight: "800", // Bolder font
    margin: "0",
    lineHeight: "1.1",
  };

  // Text style - Larger text
  const textStyle = {
    fontSize: isMobile ? "1.1rem" : isTablet ? "1.4rem" : "1.6rem", // Increased font size
    marginBottom: "1.5rem",
    margin: "0 0 1.5rem 0",
    fontWeight: "500",
  };

  // Button style - Larger button
  const buttonStyle = {
    backgroundColor: "#ff6b6b",
    color: "white",
    border: "none",
    padding: isMobile ? "12px 24px" : "16px 32px", // Increased padding
    fontSize: isMobile ? "1.1rem" : "1.3rem", // Increased font size
    fontWeight: "700",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  // Arrow style - Larger arrows
  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    border: "none",
    width: isMobile ? "40px" : "60px", // Increased size
    height: isMobile ? "40px" : "60px", // Increased size
    borderRadius: "50%",
    fontSize: isMobile ? "1.5rem" : "2rem", // Increased font size
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
    zIndex: "10",
  };

  // Prev arrow style
  const prevArrowStyle = {
    ...arrowStyle,
    left: "20px",
  };

  // Next arrow style
  const nextArrowStyle = {
    ...arrowStyle,
    right: "20px",
  };

  // Indicators container style
  const indicatorsStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "12px",
    zIndex: "10",
  };

  // Indicator style - Larger indicators
  const indicatorStyle = {
    width: isMobile ? "14px" : "16px", // Increased size
    height: isMobile ? "14px" : "16px", // Increased size
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  // Active indicator style
  const activeIndicatorStyle = {
    ...indicatorStyle,
    backgroundColor: "white",
    transform: "scale(1.2)",
  };

  return (
    <div 
      style={containerStyle}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={sliderStyle}>
        {images.map((img, idx) => (
          <div key={idx} style={slideStyle}>
            <img src={img} alt={`Banner ${idx + 1}`} style={imageStyle} />
            <div style={contentStyle}>
              <h2 style={titleStyle}>Special Offer {idx + 1}</h2>
              <p style={textStyle}>Get up to 50% off on selected items</p>
              <button 
                style={buttonStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ff5252";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#ff6b6b";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        style={prevArrowStyle}
        onClick={goToPrev}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
          e.target.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
          e.target.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        &#10094;
      </button>
      <button 
        style={nextArrowStyle}
        onClick={goToNext}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
          e.target.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
          e.target.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        &#10095;
      </button>
      
      {/* Indicator dots */}
      <div style={indicatorsStyle}>
        {images.map((_, idx) => (
          <button
            key={idx}
            style={idx === currentIndex ? activeIndicatorStyle : indicatorStyle}
            onClick={() => goToSlide(idx)}
            onMouseOver={(e) => {
              if (idx !== currentIndex) {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                e.target.style.transform = "scale(1.2)";
              }
            }}
            onMouseOut={(e) => {
              if (idx !== currentIndex) {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                e.target.style.transform = "scale(1)";
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;