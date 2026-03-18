/* =============================================================
   ENIGMA CREATION DESIGN — script.js
   Complete product system, cart, routing, animations
   ============================================================= */

// ─────────────────────────────────────────────────────────────
// PRODUCT DATA
// ─────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Minimal Logo Pack",
    price: 15,
    originalPrice: null,
    category: "branding",
    keyword: "logo,branding,minimal",
    description: "A clean, versatile minimal logo pack containing 10 unique mark designs. Perfect for modern businesses, freelancers, and startups. Includes SVG, PNG, and PDF source files with full commercial license.",
    badges: ["bestseller"],
    rating: 4.9,
    reviews: 214,
    isFeatured: true,
    isBestseller: true,
    isNew: false,
    materials: ["SVG", "PNG", "PDF"],
    thumbKeywords: ["logo,design,white","branding,minimal,clean","typography,logo","icon,design,simple"],
    relatedIds: [2, 5, 9],
    reviewData: [
      { author: "Sarah M.", rating: 5, text: "Absolutely stunning logos. Used them for my agency rebranding and the client loved it.", date: "Dec 8, 2024" },
      { author: "Tom K.", rating: 5, text: "Clean, professional, and incredibly versatile. Worth every penny.", date: "Nov 22, 2024" },
      { author: "Anika R.", rating: 4, text: "Great quality! Would love even more variations in a future pack.", date: "Nov 5, 2024" },
    ]
  },
  {
    id: 2,
    name: "Abstract Digital Art Print",
    price: 29,
    originalPrice: null,
    category: "digital-art",
    keyword: "abstract,art,digital",
    description: "A stunning high-resolution digital art print blending fluid shapes and rich gradients. Designed for large-format printing up to 24x36\". Delivered as a high-quality TIFF and PNG at 300 DPI.",
    badges: ["new"],
    rating: 4.8,
    reviews: 87,
    isFeatured: true,
    isBestseller: false,
    isNew: true,
    materials: ["TIFF 300DPI", "PNG 300DPI"],
    thumbKeywords: ["abstract,colorful","fluid,art,gradient","texture,digital,art","print,wall,art"],
    relatedIds: [3, 7, 11],
    reviewData: [
      { author: "James T.", rating: 5, text: "Printed this at 24x36\" and it looks incredible on my living room wall.", date: "Dec 12, 2024" },
      { author: "Lisa B.", rating: 5, text: "The colors are vibrant and the detail is remarkable. Instant download was seamless.", date: "Dec 1, 2024" },
    ]
  },
  {
    id: 3,
    name: "Premium Brand Identity Kit",
    price: 49,
    originalPrice: 79,
    category: "branding",
    keyword: "brand,identity,design",
    description: "A complete brand identity system: primary logo, submark, color palette, typography guide, business card template, and letterhead. Everything you need to launch a polished brand. Fully editable in Adobe Illustrator.",
    badges: ["sale", "bestseller"],
    rating: 5.0,
    reviews: 312,
    isFeatured: true,
    isBestseller: true,
    isNew: false,
    materials: ["AI", "EPS", "PDF", "PNG"],
    thumbKeywords: ["brand,identity,business","stationery,design,elegant","typography,branding","business,card,design"],
    relatedIds: [1, 6, 8],
    reviewData: [
      { author: "Priya K.", rating: 5, text: "This kit saved me weeks of work. My clients always ask who designed my branding now.", date: "Dec 15, 2024" },
      { author: "Mark J.", rating: 5, text: "Unbelievable value for $49. The business card template alone is worth more.", date: "Nov 28, 2024" },
      { author: "Chen L.", rating: 5, text: "Used this for 3 clients already. Professional results every time.", date: "Nov 10, 2024" },
    ]
  },
  {
    id: 4,
    name: "Luxury Social Media Templates",
    price: 22,
    originalPrice: null,
    category: "templates",
    keyword: "social,media,template",
    description: "60 premium Canva and Photoshop templates for Instagram, Facebook, and Pinterest. Includes post templates, stories, and highlight covers. Fully editable with smart object layers. Commercial license included.",
    badges: ["new"],
    rating: 4.7,
    reviews: 143,
    isFeatured: false,
    isBestseller: false,
    isNew: true,
    materials: ["Canva", "PSD", "PNG"],
    thumbKeywords: ["instagram,template,modern","social,media,design","mobile,template,app","content,creator,design"],
    relatedIds: [5, 8, 10],
    reviewData: [
      { author: "Emma R.", rating: 5, text: "My Instagram feed has never looked this good. The templates are so easy to customize.", date: "Dec 10, 2024" },
      { author: "Alex P.", rating: 4, text: "Really polished designs. Wish there were more color options but still great.", date: "Nov 30, 2024" },
    ]
  },
  {
    id: 5,
    name: "Geometric Pattern Collection",
    price: 18,
    originalPrice: null,
    category: "patterns",
    keyword: "geometric,pattern,design",
    description: "100 seamless geometric vector patterns perfect for textile, web, packaging, and print design. Fully editable SVG and EPS files. Each pattern tiles perfectly and can be recolored instantly.",
    badges: [],
    rating: 4.9,
    reviews: 198,
    isFeatured: true,
    isBestseller: true,
    isNew: false,
    materials: ["SVG", "EPS", "PNG"],
    thumbKeywords: ["geometric,pattern,art","seamless,pattern,design","textile,pattern,minimal","vector,geometric,shape"],
    relatedIds: [7, 10, 12],
    reviewData: [
      { author: "David M.", rating: 5, text: "Saved me hours of work. The patterns are incredibly versatile and well-organized.", date: "Dec 5, 2024" },
      { author: "Sophia L.", rating: 5, text: "Perfect for packaging design projects. My go-to resource now.", date: "Nov 20, 2024" },
    ]
  },
  {
    id: 6,
    name: "Vintage Poster Art Prints",
    price: 35,
    originalPrice: 45,
    category: "digital-art",
    keyword: "vintage,poster,art",
    description: "A collection of 12 vintage-inspired poster art prints featuring retro typography and classic illustration styles. Perfect for gallery walls, office spaces, or cafe decor. Print-ready at 300 DPI.",
    badges: ["sale"],
    rating: 4.8,
    reviews: 156,
    isFeatured: false,
    isBestseller: false,
    isNew: false,
    materials: ["PDF 300DPI", "PNG 300DPI"],
    thumbKeywords: ["vintage,poster,retro","retro,typography,design","art,deco,poster","illustration,vintage,minimal"],
    relatedIds: [2, 11, 3],
    reviewData: [
      { author: "Nina S.", rating: 5, text: "These are gorgeous! Printed all 12 and they look amazing framed together.", date: "Dec 14, 2024" },
      { author: "Carlos F.", rating: 4, text: "Beautiful designs. Would love a matching color theme option.", date: "Nov 25, 2024" },
    ]
  },
  {
    id: 7,
    name: "Minimal Icon Set — 500 Icons",
    price: 25,
    originalPrice: null,
    category: "icons",
    keyword: "icon,set,minimal",
    description: "500 minimal stroke icons covering UI, business, food, travel, technology, and lifestyle categories. Available in SVG, PNG (16px–512px), and Figma/Sketch formats. Consistent 2px stroke throughout.",
    badges: ["bestseller"],
    rating: 4.9,
    reviews: 267,
    isFeatured: true,
    isBestseller: true,
    isNew: false,
    materials: ["SVG", "PNG", "Figma"],
    thumbKeywords: ["icon,set,ui","minimal,icon,design","outline,icon,collection","user,interface,icon"],
    relatedIds: [5, 4, 9],
    reviewData: [
      { author: "Raj P.", rating: 5, text: "Absolutely worth it. The consistency is perfect and they work great at every size.", date: "Dec 11, 2024" },
      { author: "Mia C.", rating: 5, text: "My design workflow has been completely transformed by this icon set.", date: "Dec 2, 2024" },
      { author: "Felix H.", rating: 5, text: "Best icon pack I've ever purchased. Quality is exceptional.", date: "Nov 18, 2024" },
    ]
  },
  {
    id: 8,
    name: "Photographer Portfolio Template",
    price: 32,
    originalPrice: null,
    category: "templates",
    keyword: "photography,portfolio,website",
    description: "A stunning Webflow-ready portfolio template for photographers and creatives. Features a full-screen gallery, client inquiry form, pricing page, and animated transitions. Fully responsive and SEO-optimized.",
    badges: ["new"],
    rating: 4.8,
    reviews: 94,
    isFeatured: false,
    isBestseller: false,
    isNew: true,
    materials: ["Webflow", "Figma", "HTML/CSS"],
    thumbKeywords: ["photography,portfolio,minimal","portfolio,website,modern","gallery,photography,art","website,template,elegant"],
    relatedIds: [4, 10, 3],
    reviewData: [
      { author: "Isabella K.", rating: 5, text: "My portfolio looks incredible now. Clients comment on it constantly.", date: "Dec 9, 2024" },
      { author: "Tom R.", rating: 4, text: "Great template! Setup was a little tricky but the result is worth it.", date: "Nov 27, 2024" },
    ]
  },
  {
    id: 9,
    name: "Hand-Lettering Font Bundle",
    price: 28,
    originalPrice: 42,
    category: "fonts",
    keyword: "handlettering,calligraphy,font",
    description: "5 premium hand-lettered fonts with full character sets, alternates, and ligatures. Perfect for logos, wedding invitations, labels, and social media. Compatible with all major design software.",
    badges: ["sale"],
    rating: 4.7,
    reviews: 178,
    isFeatured: false,
    isBestseller: false,
    isNew: false,
    materials: ["OTF", "TTF", "WOFF"],
    thumbKeywords: ["calligraphy,lettering,font","handwriting,script,elegant","typography,lettering,art","script,font,design"],
    relatedIds: [1, 5, 7],
    reviewData: [
      { author: "Anna S.", rating: 5, text: "These fonts are breathtakingly beautiful. Used them for a wedding project.", date: "Dec 7, 2024" },
      { author: "Ben F.", rating: 4, text: "Lovely designs. Some fonts are better than others but overall great value.", date: "Nov 22, 2024" },
    ]
  },
  {
    id: 10,
    name: "Watercolor Texture Pack",
    price: 20,
    originalPrice: null,
    category: "textures",
    keyword: "watercolor,texture,paint",
    description: "50 high-resolution watercolor textures and washes in PNG format with transparent backgrounds. Perfect for overlays, backgrounds, and design elements. Includes 300 DPI files at 4000x4000px.",
    badges: [],
    rating: 4.8,
    reviews: 132,
    isFeatured: false,
    isBestseller: false,
    isNew: false,
    materials: ["PNG 300DPI", "JPG"],
    thumbKeywords: ["watercolor,texture,art","paint,texture,splash","watercolor,background,soft","artistic,texture,colorful"],
    relatedIds: [5, 6, 2],
    reviewData: [
      { author: "Grace M.", rating: 5, text: "Perfect watercolors! The transparency on the PNGs is flawless.", date: "Dec 4, 2024" },
      { author: "Jake T.", rating: 5, text: "I use these in almost every project now. Saves so much time.", date: "Nov 15, 2024" },
    ]
  },
  {
    id: 11,
    name: "Luxury Business Card Designs",
    price: 16,
    originalPrice: null,
    category: "branding",
    keyword: "business,card,luxury",
    description: "20 premium business card templates with front and back designs. Features gold foil, emboss-ready, and standard print variations. Fully editable in Photoshop and Illustrator. Print-ready at 300 DPI with bleed.",
    badges: ["new"],
    rating: 4.6,
    reviews: 89,
    isFeatured: false,
    isBestseller: false,
    isNew: true,
    materials: ["PSD", "AI", "PDF"],
    thumbKeywords: ["business,card,elegant","luxury,card,gold","stationery,premium,design","name,card,minimal"],
    relatedIds: [3, 1, 6],
    reviewData: [
      { author: "Marina L.", rating: 5, text: "My new business cards look so luxurious. Clients always comment on them!", date: "Dec 13, 2024" },
      { author: "Oliver P.", rating: 4, text: "Nice designs! A tutorial for the gold foil effect would be helpful.", date: "Nov 29, 2024" },
    ]
  },
  {
    id: 12,
    name: "Procreate Brush Collection",
    price: 24,
    originalPrice: 34,
    category: "digital-art",
    keyword: "procreate,brush,digital",
    description: "80 premium Procreate brushes covering inking, painting, texturing, and lettering styles. Includes grain pencils, watercolor washes, ink splatter, chalk pastels, and more. Compatible with all iPad Pro models.",
    badges: ["sale", "bestseller"],
    rating: 4.9,
    reviews: 234,
    isFeatured: false,
    isBestseller: true,
    isNew: false,
    materials: ["BRUSHSET (Procreate)"],
    thumbKeywords: ["digital,painting,procreate","illustration,brush,art","creative,art,digital","drawing,ipad,sketch"],
    relatedIds: [2, 10, 7],
    reviewData: [
      { author: "Zoe K.", rating: 5, text: "These brushes completely changed my illustration style. Absolutely love them.", date: "Dec 16, 2024" },
      { author: "Ethan M.", rating: 5, text: "The inking brushes are insanely good. Best Procreate purchase I've made.", date: "Dec 3, 2024" },
      { author: "Lily N.", rating: 5, text: "I've tried dozens of brush packs. This one stands head and shoulders above the rest.", date: "Nov 21, 2024" },
    ]
  },
];

const CATEGORIES = [
  { value: "branding",    label: "Branding",        emoji: "🏷️",  keyword: "branding,logo,identity" },
  { value: "digital-art", label: "Digital Art",     emoji: "🎨",  keyword: "digital,art,abstract" },
  { value: "templates",   label: "Templates",       emoji: "📐",  keyword: "template,design,layout" },
  { value: "icons",       label: "Icons",           emoji: "✦",   keyword: "icon,ui,minimal" },
  { value: "fonts",       label: "Fonts",           emoji: "Aa",  keyword: "typography,font,lettering" },
  { value: "patterns",    label: "Patterns",        emoji: "⬡",   keyword: "pattern,geometric,vector" },
  { value: "textures",    label: "Textures",        emoji: "🖼️",  keyword: "texture,watercolor,paint" },
];

// ─────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('enigmaCart') || '[]');
let currentProduct = null;
let currentQty = 1;
let activeCategory = 'all';
let wishlist = new Set(JSON.parse(localStorage.getItem('enigmaWishlist') || '[]'));

// ─────────────────────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const fmt = n => `$${n.toFixed(2)}`;
const unsplash = (keyword, w = 600, h = 600) =>
  `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=${w}&q=80&auto=format&fit=crop`;

// Better image URLs using Unsplash search
function getUnsplashUrl(keyword, w = 600, h = 600, seed = 0) {
  const keywords = keyword.replace(/,/g, '+');
  // Use Unsplash source with keywords (works without API key)
  return `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(keyword)}`;
}

function imgEl(keyword, alt, cls = '', w = 600, h = 600, seed = 0) {
  const url = getUnsplashUrl(keyword, w, h, seed);
  return `<img src="${url}" alt="${alt}" class="${cls}" loading="lazy" onerror="handleImgError(this,'${keyword}')" />`;
}

function handleImgError(el, keyword) {
  // Fallback: try a different unsplash endpoint
  const fallbacks = [
    `https://picsum.photos/seed/${encodeURIComponent(keyword)}/600/600`,
    `https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80&auto=format&fit=crop`,
  ];
  const tried = parseInt(el.dataset.tried || '0');
  if (tried < fallbacks.length) {
    el.dataset.tried = tried + 1;
    el.src = fallbacks[tried];
  } else {
    el.style.display = 'none';
    el.parentElement.style.background = 'linear-gradient(135deg, #F5ECC7, #F0EBE1)';
  }
}

function starsHtml(n) {
  return '★'.repeat(Math.floor(n)) + (n % 1 >= 0.5 ? '½' : '');
}

function saveCart() {
  localStorage.setItem('enigmaCart', JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem('enigmaWishlist', JSON.stringify([...wishlist]));
}

function showToast(msg) {
  const t = $('toast');
  $('toast-msg').textContent = msg;
  t.style.transform = 'translateX(-50%) translateY(0)';
  t.style.opacity = '1';
  t.style.pointerEvents = 'auto';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => {
    t.style.transform = 'translateX(-50%) translateY(80px)';
    t.style.opacity = '0';
    t.style.pointerEvents = 'none';
  }, 2800);
}

// ─────────────────────────────────────────────────────────────
// PAGE ROUTING
// ─────────────────────────────────────────────────────────────
const PAGES = ['home', 'shop', 'product', 'about', 'contact', 'checkout', 'confirmation'];

function showPage(name, opts = {}) {
  PAGES.forEach(p => {
    const el = $(`page-${p}`);
    if (el) el.classList.toggle('hidden', p !== name);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Nav active state
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('nav-link-active', a.dataset.page === name);
  });

  // Close drawers
  closeCart();
  closeMobileMenu();
  $('search-bar').classList.add('hidden');

  // Page-specific init
  if (name === 'shop') {
    initShopPage(opts.category || null);
  }
  if (name === 'product' && opts.productId) {
    openProduct(opts.productId);
  }
  if (name === 'checkout') {
    renderCheckout();
  }

  // Re-run reveal
  setTimeout(initReveal, 80);
}

// ─────────────────────────────────────────────────────────────
// CART
// ─────────────────────────────────────────────────────────────
function openCart() {
  $('cart-overlay').style.opacity = '1';
  $('cart-overlay').style.pointerEvents = 'auto';
  $('cart-drawer').style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
}

function closeCart() {
  $('cart-overlay').style.opacity = '0';
  $('cart-overlay').style.pointerEvents = 'none';
  $('cart-drawer').style.transform = 'translateX(100%)';
  document.body.style.overflow = '';
}

function addToCart(productId, qty = 1, material = null) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const mat = material || (p.materials && p.materials[0]) || 'Standard';
  const key = `${productId}-${mat}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, productId, name: p.name, price: p.price, keyword: p.keyword, material: mat, qty });
  }
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast(`✓ "${p.name}" added to cart`);
  // Pulse badge
  const badge = $('cart-badge');
  badge.style.transform = 'scale(1.5)';
  setTimeout(() => (badge.style.transform = 'scale(1)'), 300);
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function updateCartItemQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = $('cart-badge');
  badge.textContent = total;
  if (total > 0) {
    badge.style.opacity = '1';
    badge.style.transform = 'scale(1)';
  } else {
    badge.style.opacity = '0';
    badge.style.transform = 'scale(0)';
  }
}

function renderCartDrawer() {
  const itemsEl = $('cart-items');
  const footerEl = $('cart-footer');
  const emptyEl = $('cart-empty');

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    footerEl.classList.add('hidden');
    emptyEl.classList.remove('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  footerEl.classList.remove('hidden');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  itemsEl.innerHTML = cart.map(item => `
    <div class="flex gap-3 items-start p-3 bg-white rounded-xl border border-gold-pale">
      <div class="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-cream-dark">
        ${imgEl(item.keyword, item.name, 'w-full h-full object-cover', 200, 200)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-ink leading-tight mb-1 truncate">${item.name}</p>
        <p class="text-xs text-ink-muted mb-2">${item.material}</p>
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-gold-dark">${fmt(item.price * item.qty)}</span>
          <div class="flex items-center gap-1.5">
            <button onclick="updateCartItemQty('${item.key}',-1)" class="w-6 h-6 rounded-md bg-cream-dark hover:bg-gold-pale flex items-center justify-center text-ink-soft text-sm transition-colors">−</button>
            <span class="text-xs font-semibold w-4 text-center text-ink">${item.qty}</span>
            <button onclick="updateCartItemQty('${item.key}',1)" class="w-6 h-6 rounded-md bg-cream-dark hover:bg-gold-pale flex items-center justify-center text-ink-soft text-sm transition-colors">+</button>
          </div>
        </div>
      </div>
      <button onclick="removeFromCart('${item.key}')" class="w-6 h-6 rounded-full hover:bg-red-50 flex items-center justify-center text-ink-muted hover:text-red-400 transition-colors text-xs flex-shrink-0 mt-0.5">✕</button>
    </div>
  `).join('');

  $('cart-subtotal').textContent = fmt(subtotal);
}

// ─────────────────────────────────────────────────────────────
// PRODUCT CARD
// ─────────────────────────────────────────────────────────────
function productCard(p, size = 'normal') {
  const hasDiscount = p.originalPrice && p.originalPrice > p.price;
  const discountPct = hasDiscount ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  const isWishlisted = wishlist.has(p.id);

  return `
    <article class="product-card bg-white rounded-2xl border border-gold-pale overflow-hidden shadow-card cursor-pointer group" onclick="showPage('product',{productId:${p.id}})">
      <div class="relative overflow-hidden aspect-square bg-cream-dark">
        ${imgEl(p.keyword, p.name, 'w-full h-full object-cover img-zoom', 600, 600)}
        <!-- Badges -->
        <div class="absolute top-3 left-3 flex flex-col gap-1.5">
          ${p.badges.includes('bestseller') ? `<span class="text-[10px] font-bold uppercase tracking-wide bg-gold-light text-white px-2.5 py-1 rounded-full">Bestseller</span>` : ''}
          ${p.badges.includes('new') ? `<span class="text-[10px] font-bold uppercase tracking-wide bg-sky-500 text-white px-2.5 py-1 rounded-full">New</span>` : ''}
          ${p.badges.includes('sale') ? `<span class="text-[10px] font-bold uppercase tracking-wide bg-rose-500 text-white px-2.5 py-1 rounded-full">Sale</span>` : ''}
        </div>
        <!-- Wishlist -->
        <button onclick="event.stopPropagation();toggleWishlistCard(${p.id},this)" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-sm shadow-sm transition-all hover:scale-110 ${isWishlisted ? 'text-rose-500' : 'text-ink-muted hover:text-rose-400'}" title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">
          ${isWishlisted ? '♥' : '♡'}
        </button>
        <!-- Quick add -->
        <div class="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button onclick="event.stopPropagation();addToCart(${p.id})" class="btn-gold w-full bg-gold-light/95 hover:bg-gold text-white text-xs font-semibold py-3 transition-all">
            Quick Add to Cart
          </button>
        </div>
      </div>
      <div class="p-4">
        <p class="text-[10px] font-semibold text-gold-dark uppercase tracking-widest mb-1.5">${p.category.replace('-', ' ')}</p>
        <h3 class="font-display font-semibold text-ink text-[15px] leading-snug mb-1.5 group-hover:text-gold-dark transition-colors line-clamp-2">${p.name}</h3>
        <div class="flex items-center gap-1.5 mb-3">
          <span class="stars text-xs">${starsHtml(p.rating)}</span>
          <span class="text-xs text-ink-muted">(${p.reviews})</span>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="font-display font-bold text-ink">${fmt(p.price)}</span>
          ${hasDiscount ? `<span class="text-xs text-ink-muted line-through">${fmt(p.originalPrice)}</span><span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">-${discountPct}%</span>` : ''}
        </div>
      </div>
    </article>
  `;
}

function toggleWishlistCard(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.innerHTML = '♡';
    btn.classList.remove('text-rose-500');
    btn.classList.add('text-ink-muted', 'hover:text-rose-400');
    showToast('Removed from wishlist');
  } else {
    wishlist.add(id);
    btn.innerHTML = '♥';
    btn.classList.add('text-rose-500');
    btn.classList.remove('text-ink-muted', 'hover:text-rose-400');
    showToast('♥ Added to wishlist');
  }
  saveWishlist();
}

// ─────────────────────────────────────────────────────────────
// HOME PAGE INIT
// ─────────────────────────────────────────────────────────────
function initHome() {
  // Categories grid
  const catGrid = $('categories-grid');
  if (catGrid) {
    catGrid.innerHTML = CATEGORIES.map(c => `
      <div class="cat-card bg-white rounded-2xl border border-gold-pale overflow-hidden shadow-card cursor-pointer hover:border-gold-light hover:shadow-card-hover" onclick="showPage('shop',{category:'${c.value}'})">
        <div class="aspect-[4/3] overflow-hidden bg-cream-dark">
          ${imgEl(c.keyword, c.label, 'w-full h-full object-cover img-zoom', 400, 300)}
        </div>
        <div class="p-3.5 text-center">
          <p class="font-display font-semibold text-ink text-sm">${c.label}</p>
          <p class="text-xs text-ink-muted mt-0.5">${products.filter(p => p.category === c.value).length} designs</p>
        </div>
      </div>
    `).join('');
  }

  // Featured grid (isFeatured)
  const featGrid = $('featured-grid');
  if (featGrid) {
    const featured = products.filter(p => p.isFeatured).slice(0, 4);
    featGrid.innerHTML = featured.map(p => productCard(p)).join('');
  }

  // Bestsellers grid
  const bestGrid = $('bestsellers-grid');
  if (bestGrid) {
    const best = products.filter(p => p.isBestseller).slice(0, 3);
    bestGrid.innerHTML = best.map(p => productCard(p)).join('');
  }
}

// ─────────────────────────────────────────────────────────────
// SHOP PAGE
// ─────────────────────────────────────────────────────────────
function initShopPage(presetCategory = null) {
  // Build category filters
  const catEl = $('category-filters');
  if (catEl) {
    catEl.innerHTML = `
      <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-ink text-ink-muted">
        <input type="radio" name="shop-cat" value="all" ${!presetCategory || presetCategory === 'all' ? 'checked' : ''} onchange="applyFilters()" class="accent-gold-light"> All Categories
      </label>
      ${CATEGORIES.map(c => `
        <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-ink text-ink-muted">
          <input type="radio" name="shop-cat" value="${c.value}" ${presetCategory === c.value ? 'checked' : ''} onchange="applyFilters()" class="accent-gold-light">
          ${c.label}
        </label>
      `).join('')}
    `;
  }

  applyFilters();
}

function applyFilters() {
  const search = ($('shop-search')?.value || '').toLowerCase().trim();
  const catEl = document.querySelector('input[name="shop-cat"]:checked');
  const cat = catEl ? catEl.value : 'all';
  const priceEl = document.querySelector('input[name="price"]:checked');
  const price = priceEl ? priceEl.value : 'all';
  const onlyBest = $('filter-bestseller')?.checked;
  const onlyNew = $('filter-new')?.checked;
  const onlySale = $('filter-sale')?.checked;
  const sort = $('shop-sort')?.value || 'featured';

  let filtered = [...products];

  // Category
  if (cat && cat !== 'all') filtered = filtered.filter(p => p.category === cat);

  // Price
  if (price === 'under20') filtered = filtered.filter(p => p.price < 20);
  else if (price === '20-50') filtered = filtered.filter(p => p.price >= 20 && p.price <= 50);
  else if (price === 'over50') filtered = filtered.filter(p => p.price > 50);

  // Type checkboxes
  if (onlyBest) filtered = filtered.filter(p => p.isBestseller);
  if (onlyNew) filtered = filtered.filter(p => p.isNew);
  if (onlySale) filtered = filtered.filter(p => p.badges.includes('sale'));

  // Search
  if (search) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search)
    );
  }

  // Sort
  if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'newest') filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  else if (sort === 'popular') filtered.sort((a, b) => b.reviews - a.reviews);

  const grid = $('shop-grid');
  const empty = $('shop-empty');
  const count = $('shop-count');

  if (count) count.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    grid.innerHTML = filtered.map(p => productCard(p)).join('');
  }
}

function resetFilters() {
  const catAll = document.querySelector('input[name="shop-cat"][value="all"]');
  if (catAll) catAll.checked = true;
  const priceAll = document.querySelector('input[name="price"][value="all"]');
  if (priceAll) priceAll.checked = true;
  const bestEl = $('filter-bestseller');
  if (bestEl) bestEl.checked = false;
  const newEl = $('filter-new');
  if (newEl) newEl.checked = false;
  const saleEl = $('filter-sale');
  if (saleEl) saleEl.checked = false;
  const searchEl = $('shop-search');
  if (searchEl) searchEl.value = '';
  const sortEl = $('shop-sort');
  if (sortEl) sortEl.value = 'featured';
  applyFilters();
}

// ─────────────────────────────────────────────────────────────
// PRODUCT PAGE
// ─────────────────────────────────────────────────────────────
let detailQty = 1;

function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  detailQty = 1;

  $('prod-breadcrumb').textContent = p.name;
  $('prod-name').textContent = p.name;

  // Badges
  $('prod-badges').innerHTML = p.badges.map(b => {
    const map = { bestseller: 'bg-gold-light text-white', new: 'bg-sky-500 text-white', sale: 'bg-rose-500 text-white' };
    return `<span class="text-xs font-bold uppercase tracking-wide ${map[b] || ''} px-3 py-1 rounded-full">${b}</span>`;
  }).join('');

  // Stars + reviews
  $('prod-reviews').innerHTML = `<span class="stars text-base">${starsHtml(p.rating)}</span> <span class="text-sm text-ink-muted ml-1">(${p.reviews} reviews)</span>`;

  // Price
  $('prod-price').textContent = fmt(p.price);
  const hasDiscount = p.originalPrice && p.originalPrice > p.price;
  if (hasDiscount) {
    $('prod-original').textContent = fmt(p.originalPrice);
    $('prod-original').classList.remove('hidden');
    $('prod-discount').textContent = `-${Math.round((1 - p.price / p.originalPrice) * 100)}%`;
    $('prod-discount').classList.remove('hidden');
  } else {
    $('prod-original').classList.add('hidden');
    $('prod-discount').classList.add('hidden');
  }

  // Description
  $('prod-desc').textContent = p.description;

  // Main image
  $('prod-main-img').src = getUnsplashUrl(p.keyword, 800, 800);
  $('prod-main-img').onerror = function() { handleImgError(this, p.keyword); };

  // Thumbnails
  const thumbsEl = $('prod-thumbs');
  const allKeywords = [p.keyword, ...(p.thumbKeywords || [])].slice(0, 4);
  thumbsEl.innerHTML = allKeywords.map((kw, i) => `
    <button onclick="setMainImg('${kw}')" class="rounded-xl overflow-hidden border-2 ${i === 0 ? 'border-gold-light' : 'border-transparent'} hover:border-gold-light transition-all aspect-square bg-cream-dark thumb-btn" data-kw="${kw}">
      ${imgEl(kw, '', 'w-full h-full object-cover', 200, 200, i)}
    </button>
  `).join('');

  // Options (materials)
  const optsEl = $('prod-options');
  if (p.materials && p.materials.length > 0) {
    optsEl.innerHTML = `
      <p class="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-2">Format / Files Included</p>
      <div class="flex flex-wrap gap-2 mb-5">
        ${p.materials.map((m, i) => `
          <button class="px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${i === 0 ? 'border-gold-light bg-gold-pale text-gold-dark' : 'border-gold-pale text-ink-muted hover:border-gold-light hover:text-ink'}" onclick="selectMaterialBtn(this)">${m}</button>
        `).join('')}
      </div>
    `;
  }

  // Quantity
  $('prod-qty').textContent = detailQty;

  // Add to cart button
  $('add-to-cart-btn').onclick = () => {
    addToCart(p.id, detailQty);
    openCart();
  };

  // Wishlist button
  const wlBtn = $('wishlist-btn');
  wlBtn.textContent = wishlist.has(p.id) ? '♥' : '♡';
  wlBtn.classList.toggle('text-rose-500', wishlist.has(p.id));

  // Reviews
  const reviewsEl = $('prod-reviews-list');
  if (p.reviewData && p.reviewData.length) {
    reviewsEl.innerHTML = p.reviewData.map(r => `
      <div class="bg-white rounded-2xl border border-gold-pale p-5 hover:border-gold-light transition-colors">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gold-light to-gold-dark flex items-center justify-center text-white text-xs font-bold">${r.author[0]}</div>
            <div><p class="text-sm font-semibold text-ink">${r.author}</p><p class="text-xs text-emerald-600">✓ Verified</p></div>
          </div>
          <span class="text-xs text-ink-muted">${r.date}</span>
        </div>
        <div class="stars text-sm mb-2">${'★'.repeat(r.rating)}</div>
        <p class="text-sm text-ink-soft font-display italic leading-relaxed">"${r.text}"</p>
      </div>
    `).join('');
  }

  // Related products
  const relGrid = $('related-grid');
  if (p.relatedIds) {
    const related = p.relatedIds.map(rid => products.find(x => x.id === rid)).filter(Boolean);
    relGrid.innerHTML = related.map(rp => productCard(rp)).join('');
  }
}

function setMainImg(kw) {
  $('prod-main-img').src = getUnsplashUrl(kw, 800, 800);
  document.querySelectorAll('.thumb-btn').forEach(btn => {
    btn.classList.toggle('border-gold-light', btn.dataset.kw === kw);
    btn.classList.toggle('border-transparent', btn.dataset.kw !== kw);
  });
}

function selectMaterialBtn(btn) {
  document.querySelectorAll('#prod-options button').forEach(b => {
    b.classList.remove('border-gold-light', 'bg-gold-pale', 'text-gold-dark');
    b.classList.add('border-gold-pale', 'text-ink-muted');
  });
  btn.classList.add('border-gold-light', 'bg-gold-pale', 'text-gold-dark');
  btn.classList.remove('border-gold-pale', 'text-ink-muted');
}

function changeQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  $('prod-qty').textContent = detailQty;
}

function toggleWishlist() {
  if (!currentProduct) return;
  const id = currentProduct.id;
  const btn = $('wishlist-btn');
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.textContent = '♡';
    btn.classList.remove('text-rose-500');
    showToast('Removed from wishlist');
  } else {
    wishlist.add(id);
    btn.textContent = '♥';
    btn.classList.add('text-rose-500');
    showToast('♥ Added to wishlist');
  }
  saveWishlist();
}

// ─────────────────────────────────────────────────────────────
// CHECKOUT
// ─────────────────────────────────────────────────────────────
function renderCheckout() {
  const el = $('checkout-items-list');
  if (!el) return;

  if (cart.length === 0) {
    el.innerHTML = `<p class="text-sm text-ink-muted text-center py-4">No items in cart</p>`;
    $('co-subtotal').textContent = '$0.00';
    $('co-tax').textContent = '$0.00';
    $('co-total').textContent = '$0.00';
    $('checkout-total-btn').textContent = '$0.00';
    return;
  }

  el.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 py-2">
      <div class="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-cream-dark border border-gold-pale">
        ${imgEl(item.keyword, item.name, 'w-full h-full object-cover', 100, 100)}
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-ink leading-tight truncate">${item.name}</p>
        <p class="text-xs text-ink-muted">Qty: ${item.qty}</p>
      </div>
      <span class="text-sm font-semibold text-ink">${fmt(item.price * item.qty)}</span>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  $('co-subtotal').textContent = fmt(subtotal);
  $('co-tax').textContent = fmt(tax);
  $('co-total').textContent = fmt(total);
  $('checkout-total-btn').textContent = fmt(total);
}

function placeOrder() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  const orderId = 'ECD-' + Date.now().toString().slice(-6);
  $('confirm-order-id').textContent = orderId;
  cart = [];
  saveCart();
  updateCartBadge();
  showPage('confirmation');
}

// ─────────────────────────────────────────────────────────────
// SEARCH
// ─────────────────────────────────────────────────────────────
function toggleSearch() {
  const bar = $('search-bar');
  bar.classList.toggle('hidden');
  if (!bar.classList.contains('hidden')) {
    $('global-search').focus();
  }
}

function handleGlobalSearch(val) {
  if (val.trim().length > 1) {
    showPage('shop');
    const s = $('shop-search');
    if (s) { s.value = val; applyFilters(); }
  }
}

// ─────────────────────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────────────────────
function toggleMobileMenu() {
  const m = $('mobile-menu');
  m.classList.toggle('hidden');
}

function closeMobileMenu() {
  $('mobile-menu').classList.add('hidden');
}

// ─────────────────────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// ─────────────────────────────────────────────────────────────
// NAVBAR SHADOW ON SCROLL
// ─────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = $('navbar');
  if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(28,25,23,0.07)' : 'none';
}, { passive: true });

// ─────────────────────────────────────────────────────────────
// FORMS
// ─────────────────────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  e.target.reset();
  showToast('🎉 Welcome! Your 10% discount code is on its way.');
}

function handleContact(e) {
  e.preventDefault();
  e.target.reset();
  showToast('✓ Message sent! We\'ll reply within 24 hours.');
}

// ─────────────────────────────────────────────────────────────
// KEYBOARD
// ─────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCart();
    $('search-bar').classList.add('hidden');
    closeMobileMenu();
  }
});

// ─────────────────────────────────────────────────────────────
// BOOTSTRAP
// ─────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  // Hide loader
  setTimeout(() => {
    const loader = $('loader');
    if (loader) loader.classList.add('hidden');
    // Init home page
    initHome();
    updateCartBadge();
    initReveal();
  }, 900);
});

// Expose globals for inline handlers
Object.assign(window, {
  showPage, openCart, closeCart, addToCart, removeFromCart,
  updateCartItemQty, toggleWishlistCard, toggleWishlist,
  openProduct, setMainImg, selectMaterialBtn, changeQty,
  applyFilters, resetFilters, toggleSearch, handleGlobalSearch,
  toggleMobileMenu, closeMobileMenu, handleNewsletter,
  handleContact, placeOrder, handleImgError,
});
