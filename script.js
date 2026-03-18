/* ============================================================
   ENIGMA CREATION DESIGN — Main JavaScript
   ============================================================ */

// ── PRODUCT DATA ──────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: "Celestial Eye Pendant",
    category: "necklaces",
    price: 48,
    originalPrice: null,
    emoji: "🪬",
    rating: 4.9,
    reviews: 127,
    badges: ["bestseller"],
    description: "Handcrafted from sterling silver, this pendant draws on the ancient symbolism of the evil eye — a talisman of protection worn across civilizations. The centerpiece features a deep cobalt glass eye framed by delicate wire-wrapped rays. Each piece is made to order in our Portland studio.",
    materials: ["Sterling Silver", "Gold Vermeil", "Rose Gold"],
    emojis: ["🪬", "✨", "💫"],
    related: [2, 5, 8],
    isFeatured: true,
    isBestseller: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Lunar Crescent Earrings",
    category: "earrings",
    price: 36,
    originalPrice: 52,
    emoji: "🌙",
    rating: 4.8,
    reviews: 89,
    badges: ["sale"],
    description: "Inspired by the waxing moon, these dangle earrings are hand-hammered for a uniquely organic texture. The raw, imperfect finish is entirely intentional — a reminder that beauty lives in the imperfect. Sterling silver with 18k gold-fill option available.",
    materials: ["Sterling Silver", "18k Gold Fill"],
    emojis: ["🌙", "✨", "🌕"],
    related: [1, 4, 7],
    isFeatured: true,
    isBestseller: false,
    isNew: false,
  },
  {
    id: 3,
    name: "Obsidian Sigil Ring",
    category: "rings",
    price: 62,
    originalPrice: null,
    emoji: "🔮",
    rating: 4.7,
    reviews: 54,
    badges: ["new"],
    description: "Carved from raw obsidian and set in oxidized sterling silver, this statement ring channels the stone's legendary protective energy. The geometric bezel is inspired by alchemical sigils — symbols used to encode intention. Available in sizes 5–11.",
    materials: ["Oxidized Silver", "Sterling Silver"],
    emojis: ["🔮", "🖤", "✦"],
    related: [6, 9, 12],
    isFeatured: false,
    isBestseller: false,
    isNew: true,
  },
  {
    id: 4,
    name: "Mystic Labradorite Bracelet",
    category: "bracelets",
    price: 54,
    originalPrice: null,
    emoji: "💎",
    rating: 5.0,
    reviews: 203,
    badges: ["bestseller"],
    description: "Labradorite — the stone of transformation — flashes between deep blues, golds, and greens depending on the light. Each stone is individually selected for its labradorescence. Strung on durable silk cord with a handmade silver toggle clasp.",
    materials: ["Silk Cord", "Sterling Silver Toggle"],
    emojis: ["💎", "🌊", "✨"],
    related: [1, 7, 10],
    isFeatured: true,
    isBestseller: true,
    isNew: false,
  },
  {
    id: 5,
    name: "Sacred Geometry Necklace",
    category: "necklaces",
    price: 78,
    originalPrice: null,
    emoji: "⬡",
    rating: 4.9,
    reviews: 166,
    badges: ["bestseller"],
    description: "The Flower of Life is one of the oldest geometric symbols known to humanity, found in ancient temples from Egypt to India. This pendant is precision-cut from sterling silver sheet and finished by hand. 18\" chain included; longer lengths available.",
    materials: ["Sterling Silver", "Gold Vermeil"],
    emojis: ["⬡", "✦", "🌸"],
    related: [1, 8, 11],
    isFeatured: true,
    isBestseller: true,
    isNew: false,
  },
  {
    id: 6,
    name: "Moon Phase Stacking Rings",
    category: "rings",
    price: 45,
    originalPrice: 60,
    emoji: "🌑",
    rating: 4.8,
    reviews: 91,
    badges: ["sale"],
    description: "A set of 5 stacking rings, each representing a phase of the moon — from the dark new moon to the full, radiant circle. Wear all five together or mix and match. Thin, comfortable band perfect for everyday wear. Sizes 5–10.",
    materials: ["Sterling Silver", "Gold Vermeil", "Rose Gold"],
    emojis: ["🌑", "🌒", "🌕"],
    related: [3, 9, 12],
    isFeatured: false,
    isBestseller: false,
    isNew: false,
  },
  {
    id: 7,
    name: "Tourmaline Crystal Drop Earrings",
    category: "earrings",
    price: 58,
    originalPrice: null,
    emoji: "💚",
    rating: 4.9,
    reviews: 74,
    badges: ["new"],
    description: "Raw green tourmaline crystals wrapped in 14k gold-fill wire — these earrings celebrate the beauty of the unpolished. No two pairs are exactly alike; each tourmaline crystal is unique in its color depth and natural form. Lightweight and comfortable for all-day wear.",
    materials: ["14k Gold Fill", "Sterling Silver"],
    emojis: ["💚", "🌿", "✨"],
    related: [2, 4, 10],
    isFeatured: false,
    isBestseller: false,
    isNew: true,
  },
  {
    id: 8,
    name: "Serpent Chain Necklace",
    category: "necklaces",
    price: 88,
    originalPrice: null,
    emoji: "🐍",
    rating: 4.8,
    reviews: 112,
    badges: ["bestseller"],
    description: "The serpent — symbol of transformation, wisdom, and renewal — is immortalized in this sinuous chain necklace. Each scale-like link is individually cast and connected by hand. A bold statement piece that carries ancient mythology into modern adornment.",
    materials: ["Sterling Silver", "Gold Vermeil"],
    emojis: ["🐍", "✦", "🌙"],
    related: [5, 1, 11],
    isFeatured: false,
    isBestseller: true,
    isNew: false,
  },
  {
    id: 9,
    name: "Rune Ring Set",
    category: "rings",
    price: 56,
    originalPrice: null,
    emoji: "ᚱ",
    rating: 4.7,
    reviews: 63,
    badges: ["new"],
    description: "Choose three elder futhark runes, and we'll engrave them onto this set of fine sterling silver stacking rings. A personal talisman, custom-made for you. Please include your chosen runes at checkout — we'll guide you with our rune reference card.",
    materials: ["Sterling Silver"],
    emojis: ["ᚱ", "ᚠ", "✦"],
    related: [3, 6, 12],
    isFeatured: false,
    isBestseller: false,
    isNew: true,
  },
  {
    id: 10,
    name: "Apatite & Gold Bracelet",
    category: "bracelets",
    price: 44,
    originalPrice: 58,
    emoji: "🔵",
    rating: 4.8,
    reviews: 87,
    badges: ["sale"],
    description: "Deep ocean-blue apatite beads alternate with handmade 14k gold-fill daisy spacers in this serene bracelet. Apatite is associated with clarity, inspiration, and manifestation. A beautiful everyday piece with a meditative quality.",
    materials: ["14k Gold Fill", "Sterling Silver"],
    emojis: ["🔵", "💧", "✨"],
    related: [4, 7, 1],
    isFeatured: false,
    isBestseller: false,
    isNew: false,
  },
  {
    id: 11,
    name: "The Enigma Gift Set",
    category: "sets",
    price: 119,
    originalPrice: 148,
    emoji: "🎁",
    rating: 5.0,
    reviews: 189,
    badges: ["bestseller", "sale"],
    description: "Our most popular gift set: the Celestial Eye Pendant, a pair of Lunar Crescent Earrings, and one Moon Phase Stacking Ring, beautifully packaged in our handmade kraft box with a wax seal. A complete collection of meaning, ready to gift.",
    materials: ["Sterling Silver", "Gold Vermeil"],
    emojis: ["🎁", "✨", "🪬"],
    related: [1, 2, 6],
    isFeatured: true,
    isBestseller: true,
    isNew: false,
  },
  {
    id: 12,
    name: "Amethyst Cluster Ring",
    category: "rings",
    price: 72,
    originalPrice: null,
    emoji: "💜",
    rating: 4.9,
    reviews: 98,
    badges: [],
    description: "A raw amethyst cluster set in a hand-forged sterling silver bezel. The rough, crystalline surface catches light in unexpected ways — each angle reveals something new. Amethyst has been prized for centuries as a stone of wisdom and calm. Sizes 5–10.",
    materials: ["Sterling Silver", "Oxidized Silver"],
    emojis: ["💜", "💎", "✦"],
    related: [3, 6, 9],
    isFeatured: false,
    isBestseller: false,
    isNew: false,
  },
];

const TESTIMONIALS = [
  {
    stars: 5,
    text: "I've owned a lot of jewelry but nothing has ever felt this meaningful. The Sacred Geometry necklace arrived wrapped in tissue with a handwritten note. I was genuinely moved. It's become my everyday piece.",
    author: "Amara L. — New York, NY",
  },
  {
    stars: 5,
    text: "The Labradorite Bracelet is absolutely stunning in person. Photos don't do justice to how the stone shifts color. Ordered on a Thursday, arrived Tuesday. Will be ordering the matching earrings next.",
    author: "Clara M. — Austin, TX",
  },
  {
    stars: 5,
    text: "Bought the Enigma Gift Set for my sister's birthday and she cried when she opened it. The packaging alone is beautiful. The jewelry inside is exquisite. Enigma has a customer for life.",
    author: "Priya S. — London, UK",
  },
  {
    stars: 5,
    text: "The Rune Ring Set is perfect — they made exactly the runes I chose and the engraving is crisp and clean. Incredible quality for the price. Already have three orders in now!",
    author: "Finn R. — Portland, OR",
  },
];

const REVIEWS_DATA = {
  average: 4.9,
  total: 284,
  distribution: [
    { stars: 5, pct: 91 },
    { stars: 4, pct: 7 },
    { stars: 3, pct: 1 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 0 },
  ],
  items: [
    { author: "Sophie K.", date: "Dec 12, 2024", stars: 5, text: "Genuinely the most beautiful piece of jewelry I own. The craftsmanship is exceptional — you can tell it was made with real care and intention.", verified: true },
    { author: "James T.", date: "Nov 28, 2024", stars: 5, text: "Bought this as a gift and the recipient was absolutely thrilled. The packaging is gorgeous and the quality exceeded expectations.", verified: true },
    { author: "Nadia R.", date: "Nov 15, 2024", stars: 4, text: "Beautiful piece, just as described. Shipping was fast. Only reason for 4 stars is I wish there were more size options, but what I received is stunning.", verified: true },
    { author: "Marcus W.", date: "Oct 30, 2024", stars: 5, text: "This is exactly what I was looking for. The symbolism, the quality, the feel of it — everything is perfect. Will definitely be back.", verified: true },
  ],
};

// ── APP STATE ──────────────────────────────────────────────────
const state = {
  cart: JSON.parse(localStorage.getItem("enigmaCart") || "[]"),
  currentPage: "home",
  currentProduct: null,
  qty: 1,
  selectedMaterial: null,
  currentTestimonial: 0,
  filterCategory: "all",
  filterPrice: "all",
  sortBy: "featured",
  shopSearch: "",
  wishlist: new Set(JSON.parse(localStorage.getItem("enigmaWishlist") || "[]")),
};

// ── UTILS ──────────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function fmt(n) { return `$${n.toFixed(2)}`; }

function starsHtml(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = "★".repeat(full);
  if (half) s += "½";
  return `<span class="stars">${s}</span>`;
}

function showToast(msg, duration = 2800) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), duration);
}

function saveCart() {
  localStorage.setItem("enigmaCart", JSON.stringify(state.cart));
}

function saveWishlist() {
  localStorage.setItem("enigmaWishlist", JSON.stringify([...state.wishlist]));
}

// ── NAVIGATION ─────────────────────────────────────────────────
function navigateTo(page, opts = {}) {
  $$(".page").forEach(p => p.classList.remove("active"));
  const el = $(`#page-${page}`);
  if (!el) return;
  el.classList.add("active");
  state.currentPage = page;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // close cart / mobile
  closeCart();
  closeMobileNav();

  // update nav links
  $$(".nav-link").forEach(a => {
    a.classList.toggle("active", a.dataset.page === page);
  });

  // page-specific init
  if (page === "shop") initShop(opts.category);
  if (page === "cart") renderCartPage();
  if (page === "checkout") renderCheckout();
  if (page === "product" && opts.product) openProduct(opts.product);

  // re-run reveal for new page
  setTimeout(initReveal, 100);
}

// delegate clicks on [data-page]
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-page]");
  if (!el) return;
  e.preventDefault();
  const page = el.dataset.page;
  const cat = el.dataset.category;
  if (page === "shop" && cat) {
    navigateTo("shop", { category: cat });
    state.filterCategory = cat;
    // update radio
    const radio = document.querySelector(`input[name="cat"][value="${cat}"]`);
    if (radio) { radio.checked = true; filterShop(); }
  } else {
    navigateTo(page);
  }
});

// ── LOADER ─────────────────────────────────────────────────────
window.addEventListener("load", () => {
  setTimeout(() => {
    $("#loader").classList.add("hidden");
    navigateTo("home");
    initAll();
  }, 1400);
});

// ── INIT ALL ───────────────────────────────────────────────────
function initAll() {
  initNavbar();
  initTheme();
  initSearch();
  initCart();
  initReveal();
  renderFeatured();
  renderBestsellers();
  renderTestimonials();
  updateCartUI();
}

// ── NAVBAR ─────────────────────────────────────────────────────
function initNavbar() {
  window.addEventListener("scroll", () => {
    $("#navbar").classList.toggle("scrolled", window.scrollY > 10);
  });
}

// Mobile nav
$("#mobileToggle").addEventListener("click", () => {
  $("#navLinks").classList.toggle("mobile-open");
});

function closeMobileNav() {
  $("#navLinks").classList.remove("mobile-open");
}

// ── THEME ──────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem("enigmaTheme") || "light";
  document.documentElement.dataset.theme = saved;
}

$("#themeToggle").addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  const next = current === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("enigmaTheme", next);
});

// ── SEARCH ─────────────────────────────────────────────────────
function initSearch() {
  const bar = $("#searchBar");

  $("#searchToggle").addEventListener("click", () => {
    bar.classList.add("open");
    $("#searchInput").focus();
  });

  $("#searchClose").addEventListener("click", () => {
    bar.classList.remove("open");
  });

  let searchTimer;
  $("#searchInput").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      const q = e.target.value.trim();
      if (q.length > 1) {
        state.shopSearch = q;
        navigateTo("shop");
        filterShop();
        bar.classList.remove("open");
      }
    }, 500);
  });
}

// ── CART ───────────────────────────────────────────────────────
function initCart() {
  const overlay = $("#cartOverlay");
  const drawer = $("#cartDrawer");

  $("#cartToggle").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
}

function openCart() {
  $("#cartOverlay").classList.add("open");
  $("#cartDrawer").classList.add("open");
  document.body.style.overflow = "hidden";
  renderCartDrawer();
}

function closeCart() {
  $("#cartOverlay").classList.remove("open");
  $("#cartDrawer").classList.remove("open");
  document.body.style.overflow = "";
}

function addToCart(productId, qty = 1, material = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const mat = material || product.materials[0];
  const key = `${productId}-${mat}`;
  const existing = state.cart.find(i => i.key === key);

  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      key,
      productId,
      name: product.name,
      price: product.price,
      emoji: product.emoji,
      material: mat,
      qty,
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✓ "${product.name}" added to cart`);

  // animate count
  const count = $("#cartCount");
  count.classList.remove("show");
  void count.offsetWidth;
  count.classList.add("show");
}

function removeFromCart(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  saveCart();
  updateCartUI();
  renderCartDrawer();
  renderCartPage();
}

function updateCartQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartDrawer();
  renderCartPage();
}

function updateCartUI() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  const countEl = $("#cartCount");
  countEl.textContent = total;
  countEl.classList.toggle("show", total > 0);
}

function renderCartDrawer() {
  const el = $("#cartItems");
  const footer = $("#cartFooter");

  if (state.cart.length === 0) {
    el.innerHTML = `<div class="cart-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <p>Your cart is empty</p>
      <button class="btn btn-outline" onclick="closeCart();navigateTo('shop')">Browse Shop</button>
    </div>`;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "flex";
  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  el.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.material}</div>
        <div class="cart-item-price-row">
          <span class="cart-item-price">${fmt(item.price * item.qty)}</span>
          <div class="cart-qty-ctrl">
            <button onclick="updateCartQty('${item.key}',-1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty('${item.key}',1)">+</button>
          </div>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.key}')">✕</button>
    </div>
  `).join("");

  $("#cartTotal").textContent = fmt(subtotal);
}

// ── REVEAL ANIMATION ───────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  $$(".reveal").forEach(el => obs.observe(el));
}

// ── PRODUCT CARD ────────────────────────────────────────────────
function productCardHTML(p) {
  const hasDiscount = p.originalPrice && p.originalPrice > p.price;
  const discountPct = hasDiscount ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

  return `
    <article class="product-card" onclick="navigateTo('product',{product:${p.id}})">
      <div class="product-card-img" style="background:linear-gradient(135deg,var(--cream-dark),rgba(201,169,110,0.1))">
        ${p.emoji}
        <div class="product-card-badges">
          ${p.badges.map(b => `<span class="badge badge-${b}">${b}</span>`).join("")}
        </div>
        <button class="product-card-wishlist" onclick="toggleWishlist(event,${p.id})" data-id="${p.id}">
          ${state.wishlist.has(p.id) ? "♥" : "♡"}
        </button>
      </div>
      <div class="product-card-info">
        <div class="product-card-cat">${p.category}</div>
        <h3 class="product-card-name">${p.name}</h3>
        <div class="product-card-rating">
          ${starsHtml(p.rating)}
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-card-price-row">
          <span class="product-card-price">${fmt(p.price)}</span>
          ${hasDiscount ? `<span class="product-card-original">${fmt(p.originalPrice)}</span><span class="product-card-discount">−${discountPct}%</span>` : ""}
        </div>
      </div>
      <div class="product-card-footer">
        <button class="product-card-add" onclick="event.stopPropagation();addToCart(${p.id})">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

function toggleWishlist(e, id) {
  e.stopPropagation();
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    showToast("Removed from wishlist");
  } else {
    state.wishlist.add(id);
    showToast("♥ Added to wishlist");
  }
  saveWishlist();
  e.target.textContent = state.wishlist.has(id) ? "♥" : "♡";
}

// ── FEATURED ───────────────────────────────────────────────────
function renderFeatured() {
  const featured = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);
  $("#featuredGrid").innerHTML = featured.map(productCardHTML).join("");
}

// ── BESTSELLERS ────────────────────────────────────────────────
function renderBestsellers() {
  const best = PRODUCTS.filter(p => p.isBestseller).slice(0, 4);
  $("#bestsellerGrid").innerHTML = best.map(productCardHTML).join("");
}

// ── TESTIMONIALS ───────────────────────────────────────────────
function renderTestimonials() {
  const inner = $("#testimonialInner");
  const dots = $("#testimonialDots");

  inner.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-inner">
        <div class="testimonial-stars">${"★".repeat(t.stars)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <p class="testimonial-author">— ${t.author}</p>
      </div>
    </div>
  `).join("");

  dots.innerHTML = TESTIMONIALS.map((_, i) => `
    <button class="testimonial-dot ${i === 0 ? "active" : ""}" onclick="goToTestimonial(${i})"></button>
  `).join("");

  // auto-advance
  setInterval(() => {
    goToTestimonial((state.currentTestimonial + 1) % TESTIMONIALS.length);
  }, 5000);
}

function goToTestimonial(idx) {
  state.currentTestimonial = idx;
  $("#testimonialInner").style.transform = `translateX(-${idx * 100}%)`;
  $$(".testimonial-dot").forEach((d, i) => d.classList.toggle("active", i === idx));
}

// ── SHOP PAGE ──────────────────────────────────────────────────
function initShop(presetCategory = null) {
  if (presetCategory) {
    state.filterCategory = presetCategory;
    const radio = document.querySelector(`input[name="cat"][value="${presetCategory}"]`);
    if (radio) radio.checked = true;
  }

  filterShop();

  // Filter listeners
  $$("input[name='cat']").forEach(r => r.addEventListener("change", () => {
    state.filterCategory = r.value;
    filterShop();
  }));

  $$("input[name='price']").forEach(r => r.addEventListener("change", () => {
    state.filterPrice = r.value;
    filterShop();
  }));

  $("#sortSelect").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    filterShop();
  });

  $("#shopSearch").addEventListener("input", (e) => {
    state.shopSearch = e.target.value;
    filterShop();
  });
}

function filterShop() {
  let products = [...PRODUCTS];

  // Category
  if (state.filterCategory !== "all") {
    products = products.filter(p => p.category === state.filterCategory);
  }

  // Price
  if (state.filterPrice === "under40") products = products.filter(p => p.price < 40);
  else if (state.filterPrice === "40-80") products = products.filter(p => p.price >= 40 && p.price <= 80);
  else if (state.filterPrice === "over80") products = products.filter(p => p.price > 80);

  // Search
  if (state.shopSearch) {
    const q = state.shopSearch.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Sort
  if (state.sortBy === "low-high") products.sort((a, b) => a.price - b.price);
  else if (state.sortBy === "high-low") products.sort((a, b) => b.price - a.price);
  else if (state.sortBy === "newest") products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  else if (state.sortBy === "popular") products.sort((a, b) => b.reviews - a.reviews);

  $("#shopCount").textContent = `Showing ${products.length} product${products.length !== 1 ? "s" : ""}`;
  $("#shopGrid").innerHTML = products.length
    ? products.map(productCardHTML).join("")
    : `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-soft)">
        <p style="font-size:2rem;margin-bottom:12px">🔍</p>
        <p>No products found. Try adjusting your filters.</p>
       </div>`;
}

// ── PRODUCT PAGE ───────────────────────────────────────────────
function openProduct(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;
  state.currentProduct = p;
  state.qty = 1;
  state.selectedMaterial = p.materials[0];

  // Update breadcrumb
  $("#prodBreadcrumb").textContent = p.name;

  // Title, badges, price
  $("#productTitle").textContent = p.name;
  $("#productBadges").innerHTML = p.badges.map(b => `<span class="badge badge-${b}">${b}</span>`).join("");

  const hasDiscount = p.originalPrice && p.originalPrice > p.price;
  const discountPct = hasDiscount ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  $("#productPrice").textContent = fmt(p.price);
  $("#productOriginal").textContent = hasDiscount ? fmt(p.originalPrice) : "";
  $("#productDiscount").textContent = hasDiscount ? `−${discountPct}%` : "";

  // Stars
  $("#productStars").innerHTML = starsHtml(p.rating);
  $("#productReviewCount").textContent = `(${p.reviews} reviews)`;

  // Description
  $("#productDesc").textContent = p.description;

  // Gallery
  $("#productMainImg").textContent = p.emoji;
  $("#productThumbs").innerHTML = p.emojis.map((em, i) => `
    <div class="product-thumb ${i === 0 ? "active" : ""}" onclick="setThumb(this,'${em}')">${em}</div>
  `).join("");

  // Materials
  $("#materialBtns").innerHTML = p.materials.map(m => `
    <button class="option-btn ${m === p.materials[0] ? "active" : ""}" onclick="selectMaterial(this,'${m}')">${m}</button>
  `).join("");

  // Qty
  $("#qtyValue").textContent = 1;

  // Wishlist
  $("#wishlistBtn").textContent = state.wishlist.has(p.id) ? "♥" : "♡";
  $("#wishlistBtn").onclick = () => {
    toggleWishlistProduct(p.id);
  };

  // Add to cart
  $("#addToCartBtn").onclick = () => {
    addToCart(p.id, state.qty, state.selectedMaterial);
  };

  // Qty controls
  $("#qtyMinus").onclick = () => { if (state.qty > 1) { state.qty--; $("#qtyValue").textContent = state.qty; } };
  $("#qtyPlus").onclick = () => { state.qty++; $("#qtyValue").textContent = state.qty; };

  // Reviews
  renderProductReviews();

  // Related
  const related = p.related.map(id => PRODUCTS.find(pr => pr.id === id)).filter(Boolean);
  $("#relatedGrid").innerHTML = related.map(productCardHTML).join("");
}

function setThumb(el, emoji) {
  $$(".product-thumb").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
  $("#productMainImg").textContent = emoji;
}

function selectMaterial(btn, mat) {
  $$(".option-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  state.selectedMaterial = mat;
}

function toggleWishlistProduct(id) {
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    $("#wishlistBtn").textContent = "♡";
    showToast("Removed from wishlist");
  } else {
    state.wishlist.add(id);
    $("#wishlistBtn").textContent = "♥";
    showToast("♥ Added to wishlist");
  }
  saveWishlist();
}

function renderProductReviews() {
  const d = REVIEWS_DATA;
  // Summary
  $("#reviewsSummary").innerHTML = `
    <div class="rs-score">
      <strong>${d.average}</strong>
      <div class="rs-stars">${"★".repeat(5)}</div>
      <span>${d.total} reviews</span>
    </div>
    <div class="rs-bars">
      ${d.distribution.map(r => `
        <div class="rs-bar-row">
          <span>${r.stars}★</span>
          <div class="rs-bar-track"><div class="rs-bar-fill" style="width:${r.pct}%"></div></div>
          <span>${r.pct}%</span>
        </div>
      `).join("")}
    </div>
  `;

  // Reviews list
  $("#reviewsList").innerHTML = d.items.map(r => `
    <div class="review-card">
      <div class="review-header">
        <span class="review-author">${r.author}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="review-stars">${"★".repeat(r.stars)}</div>
      <p class="review-text">${r.text}</p>
      ${r.verified ? '<p class="review-verified">✓ Verified Purchase</p>' : ""}
    </div>
  `).join("");
}

// ── CART PAGE ──────────────────────────────────────────────────
function renderCartPage() {
  const el = $("#cartPageItems");
  if (!el) return;

  if (state.cart.length === 0) {
    el.innerHTML = `
      <div style="text-align:center;padding:80px 20px;color:var(--text-soft)">
        <p style="font-size:3rem;margin-bottom:16px">🛒</p>
        <p style="font-size:1.1rem;margin-bottom:24px">Your cart is empty</p>
        <button class="btn btn-primary" data-page="shop">Start Shopping</button>
      </div>`;
    updateCartSummary(0);
    return;
  }

  el.innerHTML = state.cart.map(item => `
    <div class="cart-page-item">
      <div class="cart-page-item-img">${item.emoji}</div>
      <div>
        <div class="cart-page-name">${item.name}</div>
        <div class="cart-page-variant">${item.material} · Qty: ${item.qty}</div>
        <div class="cart-qty-ctrl">
          <button onclick="updateCartQty('${item.key}',-1);renderCartPage()">−</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty('${item.key}',1);renderCartPage()">+</button>
        </div>
      </div>
      <div>
        <div class="cart-page-price">${fmt(item.price * item.qty)}</div>
        <button class="btn btn-ghost small" onclick="removeFromCart('${item.key}');renderCartPage()" style="margin-top:8px;font-size:0.75rem">Remove</button>
      </div>
    </div>
  `).join("");

  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  updateCartSummary(subtotal);
}

function updateCartSummary(subtotal) {
  const shipping = subtotal >= 75 ? 0 : 8.95;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const s = (id, val) => { const el = $(id); if (el) el.textContent = val; };
  s("#summarySubtotal", fmt(subtotal));
  s("#summaryShipping", shipping === 0 ? "Free" : fmt(shipping));
  s("#summaryTax", fmt(tax));
  s("#summaryTotal", fmt(total));
}

// ── CHECKOUT PAGE ──────────────────────────────────────────────
function renderCheckout() {
  const el = $("#checkoutItems");
  if (!el) return;

  el.innerHTML = state.cart.map(item => `
    <div class="checkout-item">
      <div class="checkout-item-img" data-qty="${item.qty}">${item.emoji}</div>
      <div class="checkout-item-name">${item.name}<br><small style="color:var(--text-soft)">${item.material}</small></div>
      <div class="checkout-item-price">${fmt(item.price * item.qty)}</div>
    </div>
  `).join("");

  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const s = (id, val) => { const el = $(id); if (el) el.textContent = val; };
  s("#coSubtotal", fmt(subtotal));
  s("#coTax", fmt(tax));
  s("#coTotal", fmt(total));
  s("#checkoutTotal", fmt(total));
}

function handleCheckout() {
  // Simulate order
  const orderNum = "ECD-" + Date.now().toString().slice(-6);
  $("#orderNum").textContent = orderNum;
  state.cart = [];
  saveCart();
  updateCartUI();
  navigateTo("confirmation");
}

// ── NEWSLETTER ─────────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault();
  e.target.reset();
  showToast("🎉 Welcome to the circle! Check your inbox for 10% off.");
}

// ── CONTACT ────────────────────────────────────────────────────
function handleContact(e) {
  e.preventDefault();
  e.target.reset();
  showToast("✓ Message sent! We'll get back to you within 24 hours.");
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────────
// Parallax hero orbs on scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const orb1 = $(".hero-orb-1");
  const orb2 = $(".hero-orb-2");
  if (orb1) orb1.style.transform = `translateY(${scrollY * 0.15}px)`;
  if (orb2) orb2.style.transform = `translateY(${scrollY * 0.08}px)`;
});

// ── KEYBOARD ───────────────────────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    $("#searchBar").classList.remove("open");
  }
});

// ── EXPOSE GLOBALS FOR INLINE HANDLERS ─────────────────────────
Object.assign(window, {
  navigateTo,
  addToCart,
  removeFromCart,
  updateCartQty,
  toggleWishlist,
  setThumb,
  selectMaterial,
  goToTestimonial,
  handleNewsletter,
  handleContact,
  handleCheckout,
  closeCart,
  filterShop,
  renderCartPage,
});
