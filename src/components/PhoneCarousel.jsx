import React, { useState, useEffect } from 'react';
import { Heart, Share, ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Fig and Olive Crackers, Fig and Olive",
    brand: "Lesley Stowe",
    image: "/images/crackers.png",
    score: 46,
    scoreLabel: "Avoid",
    scoreColor: "red",
    oliverSays: "This product's low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family's health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren't ideal for your goal of avoiding processed foods, making this a choice to consider more carefully.",
    breakdown: [
      { label: "Seed Oils", status: "None", statusColor: "green" }
    ]
  },
  {
    id: 2,
    name: "Cacao-nectar Bar, Oregon Peppermint",
    brand: "Honey Mama's",
    image: "/images/honey_mamas.png",
    score: 85,
    scoreLabel: "Excellent",
    scoreColor: "green",
    oliverSays: "This treat scored well mainly because it uses wholesome ingredients like raw local honey and organic coconut, but it still has processed sugars from the honey, which can be a concern when looking to avoid processed foods for your family. It's a nice option for an occasional treat, but just keep in mind the sugar content when considering it for your kids!",
    breakdown: [
      { label: "Seed Oils", status: "None", statusColor: "green" }
    ]
  },
  {
    id: 3,
    name: "Strawberry Vanilla Sparkling Tonic",
    brand: "Olipop",
    image: "/images/olipop.png",
    score: 100,
    scoreLabel: "Excellent",
    scoreColor: "green",
    oliverSays: "This drink's high score is thanks to its simple and wholesome ingredients like strawberry juice and natural fibers, with no harmful additives or processed sugars, making it a great choice for your kids while still feeling like a treat!",
    breakdown: [
      { label: "Seed Oils", status: "None", statusColor: "green" }
    ]
  }
];

const extendedProducts = [
  ...products.map(p => ({ ...p, uniqueId: p.id + '-1' })),
  ...products.map(p => ({ ...p, uniqueId: p.id + '-2' }))
];

export default function PhoneCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % extendedProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = extendedProducts[activeIndex];

  const getPositionClass = (index) => {
    const len = extendedProducts.length;
    if (index === activeIndex) return 'active';
    if (index === (activeIndex - 1 + len) % len) return 'prev';
    if (index === (activeIndex - 2 + len) % len) return 'far-prev';
    if (index === (activeIndex + 1) % len) return 'next';
    if (index === (activeIndex + 2) % len) return 'far-next';
    return 'hidden';
  };

  return (
    <div className="phone-container">
      <div className="phone-frame">
        <div className="dynamic-island"></div>
        
        {/* Top Carousel sliding right to left */}
        <div className="carousel-viewport">
          <div className="carousel-track">
            {extendedProducts.map((product, index) => (
              <div 
                key={product.uniqueId} 
                className={`carousel-item ${getPositionClass(index)}`}
              >
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>
          <div className="carousel-indicator"></div>
        </div>

        {/* Product Info sliding bottom to up on change */}
        <div className="product-info-wrapper">
          <div className="product-info" key={currentProduct.uniqueId}>
            <div className="product-header">
              <img src={currentProduct.image} alt="thumbnail" className="product-thumbnail" />
              <div>
                <h2 className="product-title">{currentProduct.name}</h2>
                <span className="product-brand">{currentProduct.brand}</span>
              </div>
            </div>

            <div className="score-row">
              <div className="score-badge">
                <div className={`score-dot ${currentProduct.scoreColor}`}></div>
                <div>
                  <div className="score-value">{currentProduct.score}/100</div>
                  <span className="score-label">{currentProduct.scoreLabel}</span>
                </div>
              </div>
              <div className="action-icons">
                <Heart size={18} />
                <Share size={18} />
              </div>
            </div>

            <div className="oliver-card">
              <div className="oliver-header">
                <span>🥑</span> Oliver Says:
              </div>
              <p className="oliver-text">"{currentProduct.oliverSays}"</p>
            </div>

            <div>
              <h3 className="breakdown-title">Breakdown</h3>
              {currentProduct.breakdown.map((item, i) => (
                <div className="breakdown-item" key={i}>
                  <div className="breakdown-label">
                    <span style={{color: '#a0a0a0'}}>🌾</span> {item.label}
                  </div>
                  <span className={`badge ${item.status.toLowerCase()}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
