import React from 'react';
import { ChevronDown, Apple } from 'lucide-react';
import PhoneCarousel from './components/PhoneCarousel';

function App() {
  return (
    <>
      <header className="header container">
        <div className="logo">
          <span>🥑live</span>
        </div>
        
        <nav className="nav-links">
          <a href="#" className="nav-item">Solutions <ChevronDown size={14} /></a>
          <a href="#" className="nav-item">Features</a>
          <a href="#" className="nav-item">Pricing</a>
          <a href="#" className="nav-item">Blog <ChevronDown size={14} /></a>
          <a href="#" className="nav-item">Restaurants</a>
          <a href="#" className="nav-item">Food <ChevronDown size={14} /></a>
        </nav>

        <div className="auth-actions">
          <a href="#" className="sign-in">Sign in</a>
          <a href="#" className="btn-primary">Get Olive →</a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="social-proof">
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/100?img=33" alt="User" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=11" alt="User" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=44" alt="User" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=5" alt="User" className="avatar" />
            </div>
            <span className="social-proof-text">Trusted by thousands of healthy families</span>
          </div>

          <h1>The Safest Way to<br />Shop for Groceries</h1>
          
          <p className="hero-subtitle">
            Use the Olive Food Scanner App to Instantly Eliminate<br />
            Harmful Ingredients from Your Family's Diet and Get<br />
            Expert-Backed Food Insights
          </p>

          <a href="#" className="btn-apple">
            <Apple size={20} fill="currentColor" /> Download for iOS
          </a>

          <PhoneCarousel />
        </section>
      </main>
    </>
  );
}

export default App;
