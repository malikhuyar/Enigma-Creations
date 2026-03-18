# Enigma Creation Design — eCommerce Website

## 🚀 Instant Deploy (Netlify)

Drop the entire folder contents into Netlify's drag-and-drop deploy zone at **app.netlify.com/drop**

No build step required. Deploys instantly.

---

## 📁 File Structure

```
enigma/
├── index.html    ← Main HTML (all pages)
├── script.js     ← Product data, cart, routing, rendering
└── README.md
```

> No `style.css` needed — all styles use Tailwind CDN + inline `<style>`.

---

## ✨ Features

- **7 Pages**: Home, Shop, Product Detail, About, Contact, Checkout, Confirmation
- **12 Products** across 7 categories with Unsplash images
- **Cart System** with add/remove/quantity (localStorage persisted)
- **Shop Filters**: Category, Price Range, Bestseller/New/Sale toggles
- **Sort**: Featured, Newest, Price Low→High, Price High→Low, Popular
- **Product Detail**: Gallery, thumbnails, materials, quantity, reviews, related products
- **Wishlist** (localStorage persisted)
- **Dark loader** animation on page load
- **Scroll reveal** animations
- **Responsive**: Mobile + Tablet + Desktop
- **Search**: Global navbar search + shop search bar
- **Newsletter** + **Contact** forms with toast feedback

## 🖼️ Images

All product images load automatically from **Unsplash** using keyword-based URLs:
```
https://source.unsplash.com/600x600/?keyword,terms
```

No API key needed. Fallback to Picsum if Unsplash fails.

## 🎨 Design System

- **Font**: Playfair Display (display) + Plus Jakarta Sans (body)
- **Colors**: Warm gold `#D4AF37` / Ink `#1C1917` / Cream `#FAF8F3`
- **Style**: Luxury editorial — premium Shopify/Apple aesthetic
