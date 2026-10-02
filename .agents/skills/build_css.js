const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../../css/style.css');

const chunks = [];

chunks.push(`/* ==========================================================================
   LA BONELLI PIZZARIA - STYLESHEET
   Identity & Color Palette based on logotipo-novo.png:
   - Vibrant Pizzeria Red: #E51A24 / #D3151E
   - Italian Basil Green: #009246 / #0E8A38
   - Golden Crust / Warm Cheese: #F5A623 / #FFB800
   - Dark Slate & Rich Obsidian: #0D0D11 / #15151B / #1F1F27
   - Crisp Dough Cream & White: #FFFDF9 / #F8F9FA
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

/* --- CSS Variables & Design Tokens --- */
:root {
  --primary-red: #E51A24;
  --primary-red-hover: #C4121B;
  --primary-red-dark: #8F0A10;
  --primary-red-glow: rgba(229, 26, 36, 0.35);
  --primary-red-subtle: rgba(229, 26, 36, 0.12);

  --accent-green: #009246;
  --accent-green-hover: #007839;
  --accent-green-glow: rgba(0, 146, 70, 0.35);
  --accent-green-subtle: rgba(0, 146, 70, 0.12);

  --accent-gold: #F5A623;
  --accent-gold-hover: #E09010;
  --accent-gold-glow: rgba(245, 166, 35, 0.35);
  --accent-gold-subtle: rgba(245, 166, 35, 0.12);

  --bg-main: #0D0D11;
  --bg-secondary: #131318;
  --bg-card: #191922;
  --bg-card-hover: #22222E;
  --bg-surface: #292938;
  --bg-glass: rgba(21, 21, 28, 0.88);

  --border-color: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(229, 26, 36, 0.45);
  --border-gold: rgba(245, 166, 35, 0.35);

  --text-white: #FFFFFF;
  --text-cream: #FFFDF9;
  --text-secondary: #CBD5E1;
  --text-muted: #9CA3AF;
  --text-dim: #6B7280;

  --font-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;

  --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
  --shadow-glow-red: 0 0 25px rgba(229, 26, 36, 0.35);
  --shadow-glow-green: 0 0 25px rgba(0, 146, 70, 0.35);

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  
  --header-height: 80px;
}

/* --- Base & Reset --- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-main);
  color: var(--text-white);
  line-height: 1.6;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(229, 26, 36, 0.05) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(0, 146, 70, 0.05) 0%, transparent 40%);
  background-attachment: fixed;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

ul {
  list-style: none;
}

input, textarea, select {
  font-family: inherit;
  color: var(--text-white);
}

/* --- Custom Scrollbar --- */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--bg-main);
}
::-webkit-scrollbar-thumb {
  background: var(--bg-surface);
  border-radius: var(--radius-full);
  border: 2px solid var(--bg-main);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--primary-red);
}

/* --- Container & Utilities --- */
.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-padding {
  padding: 5.5rem 0;
}

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.section-header {
  margin-bottom: 3.5rem;
  position: relative;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1rem;
  background: var(--primary-red-subtle);
  border: 1px solid var(--border-hover);
  color: #FF5A60;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: var(--radius-full);
  margin-bottom: 0.75rem;
}

.section-tag.green {
  background: var(--accent-green-subtle);
  border-color: rgba(0, 146, 70, 0.3);
  color: #10B981;
}

.section-tag.gold {
  background: var(--accent-gold-subtle);
  border-color: var(--border-gold);
  color: var(--accent-gold);
}

.section-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-cream);
}

.section-title span.red { color: var(--primary-red); }
.section-title span.gold { color: var(--accent-gold); }
.section-title span.green { color: #10B981; }

.section-desc {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 650px;
  margin: 0 auto;
}
`);

chunks.push(`
/* --- Buttons --- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.75rem;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: var(--radius-full);
  transition: all var(--transition-normal);
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-red) 0%, #C4121B 100%);
  color: #FFFFFF;
  box-shadow: 0 6px 20px var(--primary-red-glow);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #FF2E39 0%, var(--primary-red) 100%);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(229, 26, 36, 0.5);
}

.btn-whatsapp {
  background: linear-gradient(135deg, #00A859 0%, var(--accent-green) 100%);
  color: #FFFFFF;
  box-shadow: 0 6px 20px var(--accent-green-glow);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.btn-whatsapp:hover {
  background: linear-gradient(135deg, #10B981 0%, #008742 100%);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 168, 89, 0.5);
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-cream);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--bg-surface);
  border-color: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  transform: translateY(-2px);
}

.btn-outline-gold {
  background: transparent;
  color: var(--accent-gold);
  border: 1.5px solid var(--accent-gold);
}

.btn-outline-gold:hover {
  background: var(--accent-gold);
  color: #111111;
  box-shadow: 0 6px 20px var(--accent-gold-glow);
  transform: translateY(-2px);
}

.btn-sm {
  padding: 0.5rem 1.1rem;
  font-size: 0.85rem;
}

.btn-lg {
  padding: 1.05rem 2.2rem;
  font-size: 1.05rem;
}

/* --- Top Announcement Bar --- */
.top-bar {
  background: #09090C;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.82rem;
  padding: 0.45rem 0;
  color: var(--text-muted);
}

.top-bar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.top-bar-left, .top-bar-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.top-info-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.75rem;
}

.status-badge.open {
  background: rgba(16, 185, 129, 0.15);
  color: #10B981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.status-badge.closed {
  background: rgba(239, 68, 68, 0.15);
  color: #EF4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: currentColor;
  display: inline-block;
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.3); }
}

/* --- Header / Navigation --- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--bg-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.site-header.scrolled {
  background: rgba(13, 13, 17, 0.96);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  border-bottom-color: rgba(229, 26, 36, 0.2);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-img {
  height: 58px;
  width: auto;
  object-fit: contain;
  transition: transform var(--transition-normal);
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
}

.logo-link:hover .logo-img {
  transform: scale(1.05);
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.nav-link {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-cream);
  position: relative;
  padding: 0.5rem 0;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-red), var(--accent-gold));
  transition: width var(--transition-normal);
  border-radius: var(--radius-full);
}

.nav-link:hover, .nav-link.active {
  color: #FF6B6B;
}

.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cart-toggle-btn {
  position: relative;
  background: var(--bg-card);
  color: var(--text-white);
  border: 1px solid var(--border-color);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all var(--transition-normal);
}

.cart-toggle-btn:hover {
  background: var(--bg-surface);
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  transform: scale(1.05);
}

.cart-count {
  position: absolute;
  top: -4px;
  right: -4px;
  background: var(--primary-red);
  color: #FFFFFF;
  font-size: 0.72rem;
  font-weight: 800;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(229, 26, 36, 0.6);
  border: 2px solid var(--bg-main);
  transition: transform var(--transition-fast);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 8px;
  z-index: 1002;
}

.mobile-menu-btn span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--text-white);
  border-radius: 2px;
  transition: all var(--transition-normal);
}

.mobile-menu-btn.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background-color: var(--primary-red);
}
.mobile-menu-btn.open span:nth-child(2) {
  opacity: 0;
}
.mobile-menu-btn.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background-color: var(--primary-red);
}

/* --- Mobile Drawer --- */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 340px;
  height: 100vh;
  background: var(--bg-secondary);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.8);
  border-left: 1px solid var(--border-color);
  z-index: 1001;
  padding: 5.5rem 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: right var(--transition-slow);
}

.mobile-drawer.open {
  right: 0;
}

.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-normal);
}

.drawer-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.mobile-nav-link {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-cream);
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-nav-link:hover {
  color: var(--primary-red);
  padding-left: 0.5rem;
}
`);

chunks.push(`
/* --- Hero Section --- */
.hero-section {
  position: relative;
  padding: 4rem 0 5.5rem;
  overflow: hidden;
}

.hero-bg-glow {
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  background: radial-gradient(circle, rgba(229, 26, 36, 0.15) 0%, rgba(245, 166, 35, 0.08) 50%, transparent 80%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3.5rem;
  position: relative;
  z-index: 1;
}

.hero-badge-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.hero-rating-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(245, 166, 35, 0.12);
  border: 1px solid var(--border-gold);
  color: var(--accent-gold);
  padding: 0.35rem 0.9rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 700;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: 3.6rem;
  font-weight: 900;
  line-height: 1.12;
  margin-bottom: 1.35rem;
  color: var(--text-cream);
  letter-spacing: -0.5px;
}

.hero-title .highlight {
  background: linear-gradient(135deg, #FF4B55 0%, var(--primary-red) 50%, var(--accent-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.18rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 1.75rem;
  max-width: 580px;
}

.hero-pills {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2.25rem;
}

.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-cream);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

/* Hero Visual Card */
.hero-visual {
  position: relative;
}

.hero-image-wrapper {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg), 0 0 40px rgba(229, 26, 36, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.1);
  transform: perspective(1000px) rotateY(-3deg) rotateX(2deg);
  transition: transform var(--transition-slow);
}

.hero-image-wrapper:hover {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
}

.hero-main-img {
  width: 100%;
  height: 480px;
  object-fit: cover;
}

.hero-floating-card {
  position: absolute;
  background: rgba(22, 22, 30, 0.92);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  padding: 0.85rem 1.15rem;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: var(--shadow-md);
  animation: float-card 4s ease-in-out infinite alternate;
  z-index: 2;
}

.hero-floating-card.top-left {
  top: -15px;
  left: -20px;
}

.hero-floating-card.bottom-right {
  bottom: -15px;
  right: -15px;
  animation-delay: -2s;
}

.card-icon-box {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  background: var(--primary-red-subtle);
  color: var(--primary-red);
  border: 1px solid var(--border-hover);
}

.card-icon-box.green {
  background: var(--accent-green-subtle);
  color: #10B981;
  border-color: rgba(0, 146, 70, 0.3);
}

.card-text-box h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-white);
  margin-bottom: 2px;
}

.card-text-box p {
  font-size: 0.75rem;
  color: var(--text-muted);
}

@keyframes float-card {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}

/* --- Features Strip --- */
.features-strip {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  padding: 3rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.feature-item:hover {
  transform: translateY(-4px);
  border-color: var(--border-hover);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  background: var(--bg-surface);
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.feature-info h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-cream);
  margin-bottom: 0.3rem;
}

.feature-info p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.45;
}
`);

chunks.push(`
/* --- Menu Section --- */
.menu-section {
  position: relative;
}

.menu-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.category-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  background: var(--bg-secondary);
  padding: 0.5rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-color);
}

.category-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.35rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: all var(--transition-fast);
}

.category-tab:hover {
  color: var(--text-white);
  background: rgba(255, 255, 255, 0.05);
}

.category-tab.active {
  background: var(--primary-red);
  color: #FFFFFF;
  box-shadow: 0 4px 14px var(--primary-red-glow);
}

.menu-search-box {
  width: 100%;
  max-width: 420px;
  position: relative;
}

.menu-search-input {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  padding: 0.75rem 1.25rem 0.75rem 2.8rem;
  font-size: 0.92rem;
  color: var(--text-white);
  transition: all var(--transition-fast);
}

.menu-search-input:focus {
  outline: none;
  border-color: var(--primary-red);
  box-shadow: 0 0 15px var(--primary-red-glow);
  background: var(--bg-surface);
}

.menu-search-icon {
  position: absolute;
  left: 1.1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

/* Pizza Card */
.pizza-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
  position: relative;
}

.pizza-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-hover);
  box-shadow: var(--shadow-lg), 0 0 25px rgba(229, 26, 36, 0.15);
}

.pizza-card-img-wrap {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #111116;
}

.pizza-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.pizza-card:hover .pizza-card-img {
  transform: scale(1.08);
}

.pizza-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--primary-red);
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.5px;
}

.pizza-badge.chef {
  background: var(--accent-gold);
  color: #111111;
}

.pizza-badge.veg {
  background: var(--accent-green);
  color: #FFFFFF;
}

.pizza-card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.pizza-card-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
}

.pizza-name {
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-cream);
}

.pizza-ingredients {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

.pizza-sizes-selector {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--bg-secondary);
  padding: 0.35rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.size-btn {
  flex: 1;
  text-align: center;
  padding: 0.45rem 0.2rem;
  border-radius: var(--radius-sm);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-muted);
  transition: all var(--transition-fast);
}

.size-btn.active {
  background: var(--bg-surface);
  color: var(--text-white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.pizza-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.pizza-price-box {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  text-transform: uppercase;
  font-weight: 700;
}

.price-val {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--accent-gold);
  line-height: 1;
}

.add-order-btn {
  background: var(--primary-red-subtle);
  color: #FF5A60;
  border: 1px solid var(--border-hover);
  padding: 0.6rem 1.1rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all var(--transition-fast);
}

.add-order-btn:hover {
  background: var(--primary-red);
  color: #FFFFFF;
  border-color: var(--primary-red);
  box-shadow: 0 4px 12px var(--primary-red-glow);
  transform: translateY(-2px);
}
`);

chunks.push(`
/* --- Delivery Section --- */
.delivery-section {
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-main) 100%);
  position: relative;
  overflow: hidden;
}

.delivery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;
}

.delivery-visual {
  position: relative;
}

.delivery-img-wrapper {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 2px solid var(--border-color);
  box-shadow: var(--shadow-lg);
}

.delivery-img-wrapper img {
  width: 100%;
  height: 440px;
  object-fit: cover;
}

.delivery-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 2rem 0;
}

.step-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

.step-card:hover {
  border-color: var(--border-hover);
  transform: translateX(6px);
}

.step-number {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--primary-red);
  color: #FFFFFF;
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px var(--primary-red-glow);
}

.step-content h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-cream);
  margin-bottom: 0.25rem;
}

.step-content p {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.payment-methods-strip {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background: var(--bg-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.payment-methods-strip span {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-cream);
}

.payment-tags {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pay-tag {
  background: var(--bg-card);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-gold);
  border: 1px solid var(--border-gold);
}

/* --- About Us Section --- */
.about-section {
  position: relative;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 4rem;
  align-items: center;
}

.about-images-composition {
  position: relative;
}

.about-main-img {
  width: 85%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--border-color);
  height: 420px;
  object-fit: cover;
}

.about-sub-img {
  position: absolute;
  bottom: -25px;
  right: 0;
  width: 55%;
  height: 240px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 4px solid var(--bg-main);
  box-shadow: var(--shadow-lg);
}

.about-story p {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.about-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.stat-item {
  text-align: center;
  padding: 1rem 0.5rem;
  background: var(--bg-card);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.stat-num {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 900;
  color: var(--accent-gold);
  line-height: 1;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
}

/* --- Schedule & Opening Hours Section --- */
.schedule-section {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.schedule-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.schedule-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
}

.schedule-table tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.schedule-table tr:last-child {
  border-bottom: none;
}

.schedule-table td {
  padding: 0.85rem 0.5rem;
  font-size: 0.95rem;
}

.schedule-table td.day {
  font-weight: 600;
  color: var(--text-cream);
}

.schedule-table td.hours {
  text-align: right;
  font-weight: 700;
  color: var(--accent-gold);
}

.schedule-table tr.current-day {
  background: rgba(229, 26, 36, 0.1);
  border-radius: var(--radius-sm);
}

.schedule-table tr.current-day td.day {
  color: #FF5A60;
  font-weight: 800;
}
`);

chunks.push(`
/* --- Reviews Section --- */
.reviews-section {
  position: relative;
}

.reviews-summary-card {
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-surface) 100%);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-lg);
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  box-shadow: var(--shadow-md);
}

.reviews-summary-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.score-big {
  font-family: var(--font-serif);
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--accent-gold);
  line-height: 1;
}

.stars-wrapper {
  color: var(--accent-gold);
  font-size: 1.25rem;
  letter-spacing: 2px;
  margin-bottom: 0.2rem;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.75rem;
}

.review-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all var(--transition-normal);
  position: relative;
}

.review-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-gold);
  box-shadow: var(--shadow-md);
}

.review-card::before {
  content: '“';
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-family: var(--font-serif);
  font-size: 4.5rem;
  color: rgba(255, 255, 255, 0.04);
  line-height: 1;
  pointer-events: none;
}

.review-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-red), var(--accent-gold));
  color: #FFFFFF;
  font-weight: 800;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.author-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-white);
}

.review-source {
  font-size: 0.75rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

/* --- Gallery Section --- */
.gallery-section {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.gallery-item {
  position: relative;
  height: 240px;
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--border-color);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(13, 13, 17, 0.9) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.gallery-overlay h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-white);
}

.gallery-overlay p {
  font-size: 0.78rem;
  color: var(--accent-gold);
}

/* --- Location Section --- */
.location-section {
  position: relative;
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 2.5rem;
  align-items: stretch;
}

.location-info-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-md);
}

.location-detail-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.loc-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.loc-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--primary-red-subtle);
  color: var(--primary-red);
  border: 1px solid var(--border-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.loc-text h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-cream);
  margin-bottom: 0.2rem;
}

.loc-text p {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.map-wrapper {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  height: 100%;
  min-height: 400px;
}

.map-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
  filter: contrast(1.05) saturate(1.1);
}
`);

chunks.push(`
/* --- Contact & WhatsApp Order Form Section --- */
.contact-section {
  background: linear-gradient(180deg, var(--bg-main) 0%, #15151F 100%);
  position: relative;
}

.contact-card-container {
  max-width: 860px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg), 0 0 35px rgba(229, 26, 36, 0.12);
  overflow: hidden;
}

.form-tabs-header {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-secondary);
}

.form-tab-btn {
  flex: 1;
  padding: 1.25rem 1rem;
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition: all var(--transition-fast);
  border-bottom: 3px solid transparent;
}

.form-tab-btn.active {
  color: var(--text-white);
  background: var(--bg-card);
  border-bottom-color: var(--primary-red);
}

.form-body {
  padding: 2.5rem;
}

.form-tab-content {
  display: none;
}

.form-tab-content.active {
  display: block;
}

.form-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.form-grid-3 {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-cream);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.form-label .required {
  color: var(--primary-red);
}

.form-control {
  width: 100%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 0.85rem 1.1rem;
  font-size: 0.95rem;
  color: var(--text-white);
  transition: all var(--transition-fast);
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-red);
  background: var(--bg-surface);
  box-shadow: 0 0 12px var(--primary-red-glow);
}

textarea.form-control {
  resize: vertical;
  min-height: 100px;
}

.radio-pills {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.radio-pill-label {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: all var(--transition-fast);
}

.radio-pill-label input {
  display: none;
}

.radio-pill-label:has(input:checked) {
  background: var(--primary-red-subtle);
  border-color: var(--primary-red);
  color: #FFFFFF;
  box-shadow: 0 2px 10px rgba(229, 26, 36, 0.25);
}

.form-delivery-address {
  background: var(--bg-secondary);
  padding: 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 1.25rem;
}

.order-items-preview-box {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.preview-items-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--accent-gold);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.preview-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.preview-item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.88rem;
  color: var(--text-cream);
  padding-bottom: 0.4rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
}

.whatsapp-submit-btn {
  width: 100%;
  padding: 1.15rem;
  font-size: 1.05rem;
  border-radius: var(--radius-md);
  margin-top: 1rem;
}

/* --- Cart Drawer --- */
.cart-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 440px;
  height: 100vh;
  background: var(--bg-secondary);
  border-left: 1px solid var(--border-color);
  box-shadow: -15px 0 40px rgba(0, 0, 0, 0.8);
  z-index: 1005;
  display: flex;
  flex-direction: column;
  transition: right var(--transition-slow);
}

.cart-drawer.open {
  right: 0;
}

.cart-header {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-card);
}

.cart-header h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-cream);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cart-close-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-surface);
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
}

.cart-close-btn:hover {
  background: var(--primary-red);
  transform: rotate(90deg);
}

.cart-body {
  padding: 1.5rem;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.empty-cart-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-muted);
}

.empty-cart-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}

.cart-item-card {
  display: flex;
  gap: 1rem;
  background: var(--bg-card);
  padding: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  position: relative;
}

.cart-item-thumb {
  width: 70px;
  height: 70px;
  border-radius: var(--radius-sm);
  object-fit: cover;
}

.cart-item-info {
  flex-grow: 1;
}

.cart-item-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-cream);
  margin-bottom: 0.2rem;
}

.cart-item-details {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.cart-item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-item-price {
  font-weight: 800;
  font-size: 1rem;
  color: var(--accent-gold);
}

.qty-control {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-surface);
  border-radius: var(--radius-full);
  padding: 0.2rem 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.qty-btn {
  font-weight: 800;
  color: var(--text-white);
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.qty-val {
  font-size: 0.85rem;
  font-weight: 700;
  min-width: 16px;
  text-align: center;
}

.cart-item-remove {
  color: var(--text-dim);
  font-size: 0.9rem;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  transition: color var(--transition-fast);
}

.cart-item-remove:hover {
  color: var(--primary-red);
}

.cart-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--border-color);
  background: var(--bg-card);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-summary-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.cart-summary-row.total {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-white);
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.cart-summary-row.total span.val {
  color: var(--accent-gold);
}
`);

chunks.push(`
/* --- Product Customization Modal --- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  z-index: 1010;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.modal-content {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  max-width: 540px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  position: relative;
  transform: translateY(20px) scale(0.95);
  transition: transform var(--transition-normal);
}

.modal-overlay.open .modal-content {
  transform: translateY(0) scale(1);
}

.modal-close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transition: all var(--transition-fast);
}

.modal-close-btn:hover {
  background: var(--primary-red);
}

.modal-hero-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.modal-body {
  padding: 1.75rem;
}

.modal-title {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-cream);
  margin-bottom: 0.4rem;
}

.modal-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.modal-option-group {
  margin-bottom: 1.5rem;
}

.modal-option-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-white);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.option-badge-req {
  font-size: 0.72rem;
  background: var(--primary-red-subtle);
  color: #FF5A60;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-full);
}

.custom-checkbox-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.custom-checkbox-row:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.custom-checkbox-row:has(input:checked) {
  border-color: var(--primary-red);
  background: var(--primary-red-subtle);
}

.custom-checkbox-row label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
}

.option-add-price {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-gold);
}

.modal-footer {
  padding: 1.25rem 1.75rem;
  border-top: 1px solid var(--border-color);
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* --- Lightbox Modal --- */
.lightbox-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 1020;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-normal);
  padding: 2rem;
}

.lightbox-modal.open {
  opacity: 1;
  pointer-events: auto;
}

.lightbox-img-wrap {
  max-width: 900px;
  max-height: 80vh;
  position: relative;
}

.lightbox-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}

.lightbox-caption {
  text-align: center;
  margin-top: 1rem;
  color: var(--text-cream);
  font-size: 1.1rem;
  font-weight: 600;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all var(--transition-fast);
}

.lightbox-close:hover {
  background: var(--primary-red);
}

/* --- Floating Actions --- */
.floating-actions {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 990;
}

.floating-whatsapp {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.5);
  transition: all var(--transition-normal);
  position: relative;
  text-decoration: none;
}

.floating-whatsapp:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.7);
}

.floating-whatsapp::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid #25D366;
  animation: pulse-ring 2s infinite ease-out;
}

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}

.back-to-top {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-card);
  color: var(--text-white);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: var(--shadow-md);
  opacity: 0;
  pointer-events: none;
  transition: all var(--transition-normal);
}

.back-to-top.visible {
  opacity: 1;
  pointer-events: auto;
}

.back-to-top:hover {
  background: var(--primary-red);
  transform: translateY(-4px);
}

/* --- Toast Notifications --- */
.toast-container {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 1030;
}

.toast {
  background: rgba(22, 22, 30, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--primary-red);
  color: var(--text-white);
  padding: 0.9rem 1.4rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: toast-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  max-width: 360px;
}

.toast.success {
  border-left-color: #10B981;
}

@keyframes toast-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Footer --- */
.site-footer {
  background: #08080B;
  border-top: 1px solid var(--border-color);
  padding: 5rem 0 2rem;
  position: relative;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.25fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.footer-brand .footer-logo {
  height: 60px;
  width: auto;
  margin-bottom: 1.25rem;
}

.footer-brand p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer-social-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
}

.social-btn:hover {
  background: var(--primary-red);
  transform: translateY(-3px);
  border-color: var(--primary-red);
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-cream);
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--primary-red);
  border-radius: var(--radius-full);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
}

.footer-links a:hover {
  color: #FF6B6B;
  padding-left: 0.35rem;
}

.footer-contact-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.88rem;
}

.footer-contact-item span.icon {
  color: var(--primary-red);
  font-size: 1.1rem;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  color: var(--text-dim);
  font-size: 0.85rem;
}

/* --- Scroll Animation Classes (JavaScript IntersectionObserver) --- */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-left.revealed {
  opacity: 1;
  transform: translateX(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-right.revealed {
  opacity: 1;
  transform: translateX(0);
}

.reveal-zoom {
  opacity: 0;
  transform: scale(0.92);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-zoom.revealed {
  opacity: 1;
  transform: scale(1);
}

.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }

/* Lazy Load Image Styling */
img.lazy-load {
  opacity: 0;
  filter: blur(10px);
  transition: opacity 0.6s ease, filter 0.6s ease;
}

img.lazy-load.loaded {
  opacity: 1;
  filter: blur(0);
}

/* --- Responsive Media Queries --- */
@media (max-width: 1080px) {
  .hero-title { font-size: 3rem; }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 868px) {
  .nav-desktop { display: none; }
  .mobile-menu-btn { display: flex; }
  .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
  .delivery-grid { grid-template-columns: 1fr; }
  .about-grid { grid-template-columns: 1fr; }
  .schedule-grid { grid-template-columns: 1fr; }
  .location-grid { grid-template-columns: 1fr; }
  .form-grid-2, .form-grid-3 { grid-template-columns: 1fr; }
  .hero-visual { order: -1; }
  .hero-image-wrapper { transform: none; }
  .hero-image-wrapper:hover { transform: none; }
  .hero-main-img { height: 360px; }
  .top-bar-right { display: none; }
}

@media (max-width: 580px) {
  .hero-title { font-size: 2.3rem; }
  .section-title { font-size: 2rem; }
  .features-grid { grid-template-columns: 1fr; }
  .menu-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
  .hero-floating-card.top-left { left: 0; }
  .hero-floating-card.bottom-right { right: 0; }
  .reviews-summary-card { flex-direction: column; text-align: center; }
  .reviews-summary-left { flex-direction: column; }
  .about-main-img { width: 100%; height: 300px; }
  .about-sub-img { display: none; }
  .form-body { padding: 1.5rem 1.25rem; }
}
`);

fs.writeFileSync(targetPath, chunks.join(''), 'utf8');
console.log('Successfully written css/style.css!');
