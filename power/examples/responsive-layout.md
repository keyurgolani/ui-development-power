# Example: Responsive Layout with Mobile-First Design

This example demonstrates a mobile-first responsive layout that adapts seamlessly across mobile, tablet, and desktop viewports.

## Overview

This layout includes:

- Mobile-first CSS approach
- Flexible grid system
- Responsive navigation
- Fluid typography with relative units
- Responsive images with srcset
- Breakpoint strategy for multiple devices

## Complete Implementation

```tsx
import React, { useState } from "react";

export default function ResponsiveLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="responsive-layout">
      {/* Header with responsive navigation */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>MyApp</h1>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* Navigation */}
            <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
              <ul className="nav-list">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero section with responsive image */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">Build Amazing Experiences</h2>
              <p className="hero-description">
                Create responsive, accessible, and performant web applications
                that work beautifully on any device.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                srcSet="
                  /images/hero-mobile.jpg 480w,
                  /images/hero-tablet.jpg 768w,
                  /images/hero-desktop.jpg 1200w
                "
                sizes="
                  (max-width: 480px) 100vw,
                  (max-width: 768px) 90vw,
                  1200px
                "
                src="/images/hero-desktop.jpg"
                alt="Modern web application interface"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Performance</h3>
              <p>
                Optimized for speed with lazy loading and efficient rendering.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile First</h3>
              <p>
                Designed for mobile devices and scales up to larger screens.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♿</div>
              <h3>Accessible</h3>
              <p>WCAG 2.2 Level AA compliant with full keyboard support.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Modern, clean interface with attention to detail.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Built with security best practices from the ground up.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-time</h3>
              <p>Live updates and instant synchronization across devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content section with sidebar */}
      <section className="content-section">
        <div className="container">
          <div className="content-layout">
            <main className="main-content">
              <article>
                <h2>Responsive Design Principles</h2>
                <p>
                  Mobile-first design starts with the smallest screen size and
                  progressively enhances the experience for larger viewports.
                  This approach ensures that the core content and functionality
                  are accessible to all users, regardless of device.
                </p>
                <p>
                  By using relative units like rem and em, fluid grids, and
                  flexible images, we create layouts that adapt naturally to
                  different screen sizes without breaking or requiring
                  horizontal scrolling.
                </p>
              </article>
            </main>
            <aside className="sidebar">
              <div className="sidebar-widget">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#docs">Documentation</a>
                  </li>
                  <li>
                    <a href="#examples">Examples</a>
                  </li>
                  <li>
                    <a href="#api">API Reference</a>
                  </li>
                  <li>
                    <a href="#support">Support</a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#tutorials">Tutorials</a>
                  </li>
                  <li>
                    <a href="#community">Community</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>About</h4>
              <p>Building the future of web development.</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: hello@myapp.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#twitter" aria-label="Twitter">
                  Twitter
                </a>
                <a href="#github" aria-label="GitHub">
                  GitHub
                </a>
                <a href="#linkedin" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 MyApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

## Mobile-First CSS

```css
/* Base styles (Mobile First - 320px+) */
:root {
  /* Fluid typography using clamp */
  --font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 1rem + 0.5vw, 1.5rem);
  --font-size-xl: clamp(1.5rem, 1.25rem + 1vw, 2.5rem);

  /* Spacing scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;

  /* Container width */
  --container-max: 1200px;
  --container-padding: 1rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: #333;
}

.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Header - Mobile */
.header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) 0;
}

.logo h1 {
  font-size: var(--font-size-lg);
  color: #2563eb;
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hamburger-icon span {
  display: block;
  width: 24px;
  height: 3px;
  background: #333;
  transition: transform 0.3s ease;
}

/* Navigation - Mobile (hidden by default) */
.nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.nav-open {
  max-height: 300px;
}

.nav-list {
  list-style: none;
  padding: var(--space-sm) 0;
}

.nav-list li {
  border-bottom: 1px solid #eee;
}

.nav-list a {
  display: block;
  padding: var(--space-sm) var(--container-padding);
  color: #333;
  text-decoration: none;
  transition: background 0.2s ease;
}

.nav-list a:hover,
.nav-list a:focus {
  background: #f3f4f6;
}

/* Hero - Mobile */
.hero {
  padding: var(--space-lg) 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.hero-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-sm);
}

.hero-description {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-md);
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 44px; /* Touch target size */
}

.btn:hover,
.btn:focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background: #fff;
  color: #667eea;
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
}

/* Features - Mobile */
.features {
  padding: var(--space-xl) 0;
}

.section-title {
  font-size: var(--font-size-xl);
  text-align: center;
  margin-bottom: var(--space-lg);
}

.features-grid {
  display: grid;
  gap: var(--space-md);
}

.feature-card {
  padding: var(--space-md);
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-sm);
}

.feature-card h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-xs);
}

/* Content section - Mobile */
.content-section {
  padding: var(--space-xl) 0;
  background: #f9fafb;
}

.content-layout {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.main-content {
  flex: 1;
}

.main-content article {
  background: #fff;
  padding: var(--space-md);
  border-radius: 0.5rem;
}

.main-content h2 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-md);
}

.main-content p {
  margin-bottom: var(--space-md);
}

.sidebar-widget {
  background: #fff;
  padding: var(--space-md);
  border-radius: 0.5rem;
  margin-bottom: var(--space-md);
}

.sidebar-widget h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-sm);
}

.sidebar-widget ul {
  list-style: none;
}

.sidebar-widget a {
  display: block;
  padding: var(--space-xs) 0;
  color: #2563eb;
  text-decoration: none;
}

/* Footer - Mobile */
.footer {
  background: #1f2937;
  color: #fff;
  padding: var(--space-xl) 0 var(--space-md);
}

.footer-content {
  display: grid;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.footer-section h4 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-sm);
}

.social-links {
  display: flex;
  gap: var(--space-sm);
}

.social-links a {
  color: #fff;
  text-decoration: none;
}

.footer-bottom {
  text-align: center;
  padding-top: var(--space-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.8;
}

/* Tablet (768px+) */
@media (min-width: 48rem) {
  :root {
    --container-padding: 2rem;
  }

  /* Hide mobile menu toggle */
  .mobile-menu-toggle {
    display: none;
  }

  /* Show navigation inline */
  .nav {
    position: static;
    max-height: none;
    box-shadow: none;
  }

  .nav-list {
    display: flex;
    gap: var(--space-md);
    padding: 0;
  }

  .nav-list li {
    border: none;
  }

  .nav-list a {
    padding: var(--space-xs) var(--space-sm);
    border-radius: 0.25rem;
  }

  /* Hero side-by-side */
  .hero-content {
    flex-direction: row;
    align-items: center;
  }

  .hero-text,
  .hero-image {
    flex: 1;
  }

  .hero-actions {
    flex-direction: row;
  }

  /* Features grid - 2 columns */
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Content with sidebar */
  .content-layout {
    flex-direction: row;
  }

  .main-content {
    flex: 2;
  }

  .sidebar {
    flex: 1;
  }

  /* Footer grid */
  .footer-content {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktop (1024px+) */
@media (min-width: 64rem) {
  /* Features grid - 3 columns */
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Larger spacing */
  .hero {
    padding: var(--space-xl) 0;
  }

  .features,
  .content-section {
    padding: 4rem 0;
  }
}

/* Large Desktop (1440px+) */
@media (min-width: 90rem) {
  :root {
    --container-max: 1400px;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Key Responsive Design Features

1. **Mobile-First Approach**: Base styles target mobile devices, enhanced with media queries
2. **Fluid Typography**: Uses `clamp()` for responsive font sizes without media queries
3. **Relative Units**: All spacing uses rem/em instead of fixed pixels
4. **Flexible Grid**: CSS Grid adapts from 1 column (mobile) to 2 (tablet) to 3 (desktop)
5. **Responsive Images**: Uses `srcset` and `sizes` for optimal image loading
6. **Breakpoint Strategy**:
   - Mobile: < 768px (base styles)
   - Tablet: 768px - 1023px
   - Desktop: 1024px - 1439px
   - Large Desktop: 1440px+
7. **Touch Targets**: Minimum 44x44px for mobile interactions
8. **Flexible Navigation**: Hamburger menu on mobile, inline on desktop
9. **Container System**: Max-width with fluid padding
10. **Accessibility**: Respects `prefers-reduced-motion` preference

## Testing Checklist

- [ ] Test on actual mobile devices (iOS and Android)
- [ ] Test in Chrome DevTools responsive mode
- [ ] Verify layout at all breakpoints (320px, 768px, 1024px, 1440px)
- [ ] Test landscape and portrait orientations
- [ ] Verify images load appropriate sizes
- [ ] Check touch target sizes (minimum 44x44px)
- [ ] Test navigation on mobile and desktop
- [ ] Verify text remains readable at all sizes
- [ ] Test with browser zoom at 200%
- [ ] Check for horizontal scrolling issues

## Performance Considerations

- Images use `loading="lazy"` for deferred loading
- Responsive images with `srcset` reduce bandwidth on mobile
- CSS uses efficient selectors and minimal specificity
- Animations use `transform` and `opacity` for GPU acceleration
- Sticky header uses `position: sticky` (no JavaScript)
