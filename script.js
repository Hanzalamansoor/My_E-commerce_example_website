/* ============================================
   SHOPHUB - GLOBAL SCRIPT
   ============================================ */

// ========================
// PRODUCT DATA
// ========================

const products = [
  {
    id: 1,
    title: "WH-1000XM5 Premium Wireless Noise Canceling Headphones | Black",
    price: 399.99,
    originalPrice: 429.99,
    rating: 4.5,
    reviews: 1243,
    category: "Electronics",
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp",
    description:
      "High-quality wireless headphones with noise cancellation, 30-hour battery life, and premium sound quality.",
    features: [
      "Noise Cancellation",
      "30-hour battery",
      "Bluetooth 5.0",
      "Comfortable design",
    ],
  },
  {
    id: 2,
    title: "Ergonomic Mesh Office Chair",
    price: 249.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 856,
    category: "Furniture",
    image:
      "https://m.media-amazon.com/images/I/81QLODsTNTL._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "Comfortable ergonomic office chair with lumbar support and adjustable armrests for long work sessions.",
    features: [
      "Lumbar Support",
      "Adjustable Height",
      "Mesh Backing",
      "360° Swivel",
    ],
  },
  {
    id: 3,
    title: "Portable USB-C Power Bank",
    price: 34.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 2156,
    category: "Electronics",
    image:
      "https://m.media-amazon.com/images/I/61TMttNiC+L._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Ultra-portable 20000mAh power bank with fast charging and multiple device support.",
    features: ["20000mAh", "USB-C", "Fast Charging", "LED Display"],
  },
  {
    id: 4,
    title: "Stainless Steel Water Bottle",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.6,
    reviews: 3421,
    category: "Home & Kitchen",
    image:
      "https://imgs.search.brave.com/lE7aG8HNgApwbZwND-r2NcOcBYDVBr7KRPqk2TCJrds/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmFtYmF3LmNvbS9j/ZG4vc2hvcC9maWxl/cy9CQnhCVHhTV3hT/VlBhY2tzaG90TmFr/ZWQwMDEuanBnP3Y9/MTcxODEwMTIwNSZ3/aWR0aD0yMDAw",
    description:
      "Durable stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    features: ["Double-Walled", "Insulated", "Leak-Proof", "Various Colors"],
  },
  {
    id: 5,
    title: "Bluetooth 5.0 Wireless Speaker",
    price: 49.99,
    originalPrice: 89.99,
    rating: 4.5,
    reviews: 1875,
    category: "Electronics",
    image:
      "https://m.media-amazon.com/images/I/81l7mB5LhsL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Portable waterproof speaker with crystal-clear sound and up to 12 hours of playback.",
    features: ["Waterproof", "12-Hour Battery", "360° Sound", "Built-in Mic"],
  },
  {
    id: 6,
    title: "LED Desk Lamp with USB",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.3,
    reviews: 945,
    category: "Home & Kitchen",
    image:
      "https://m.media-amazon.com/images/I/61bl-TYGyzL._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "Modern LED desk lamp with adjustable brightness and color temperature.",
    features: ["Dimmable", "USB Charging", "Touch Control", "Memory Function"],
  },
  {
    id: 7,
    title: "Mechanical Keyboard Gaming",
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.8,
    reviews: 1543,
    category: "Electronics",
    image:
      "https://m.media-amazon.com/images/I/81yd9W+0doL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "RGB mechanical keyboard with custom switches and anti-ghosting technology.",
    features: [
      "RGB Lighting",
      "Mechanical Switches",
      "Anti-Ghosting",
      "Programmable",
    ],
  },
  {
    id: 8,
    title: "Yoga Mat with Carrying Strap",
    price: 19.99,
    originalPrice: 39.99,
    rating: 4.4,
    reviews: 2234,
    category: "Sports & Outdoors",
    image:
      "https://m.media-amazon.com/images/I/71MQ8weHJOL._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "Non-slip yoga mat with carrying strap, perfect for studio or home practice.",
    features: ["Non-Slip", "6mm Thickness", "Eco-Friendly", "Carrying Strap"],
  },
  {
    id: 9,
    title: "4K Webcam with Microphone",
    price: 69.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviews: 1102,
    category: "Electronics",
    image:
      "https://m.media-amazon.com/images/I/61NiQkw9pEL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Crystal-clear 4K webcam perfect for streaming, conferences, and content creation.",
    features: ["4K Resolution", "Auto Focus", "Built-in Mic", "Wide Angle"],
  },
  {
    id: 10,
    title: "Bamboo Desk Organizer",
    price: 22.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 567,
    category: "Home & Kitchen",
    image:
      "https://m.media-amazon.com/images/I/71CFDvZA6ZL._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "Natural bamboo desk organizer with multiple compartments for office supplies.",
    features: [
      "Sustainable",
      "Multiple Compartments",
      "Natural Finish",
      "Space-Saving",
    ],
  },
  {
    id: 11,
    title: "Wireless Mouse with Precision",
    price: 32.99,
    originalPrice: 54.99,
    rating: 4.3,
    reviews: 1876,
    category: "Electronics",
    image:
      "https://m.media-amazon.com/images/I/61vTrVYJN3L._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Precision wireless mouse with ergonomic design and adjustable DPI.",
    features: ["Ergonomic", "Adjustable DPI", "Wireless", "Long Battery Life"],
  },
  {
    id: 12,
    title: "Coffee Maker with Timer",
    price: 59.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 2341,
    category: "Home & Kitchen",
    image:
      "https://imgs.search.brave.com/owa4N6RsWxgg9UPTDKI4fsVfuDZxg6GQZVwlikJgha4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vQXVz/ZW8tNS1DdXAtUHJv/Z3JhbW1hYmxlLUNv/ZmZlZS1NYWtlci13/aXRoLUF1dG8tQnJl/dy1UaW1lci1LZWVw/LVdhcm0tRnVuY3Rp/b24tYW5kLVNhZmV0/eS1GZWF0dXJlc182/YTA4ZmQ5OC1hNGVi/LTRlNjAtYWU1Yi04/NzUxYmQ4OGNjNWYu/ZjJkZGUxYzJiZGI2/Nzk0OTlkOTgzNmEw/Yjc5Y2MxNjMuanBl/Zz9vZG5IZWlnaHQ9/NTgwJm9kbldpZHRo/PTU4MCZvZG5CZz1G/RkZGRkY",
    description:
      "Programmable coffee maker with 12-cup capacity and built-in timer.",
    features: [
      "Programmable",
      "12-Cup Capacity",
      "Thermal Carafe",
      "Auto Shutoff",
    ],
  },
];

// ========================
// CART FUNCTIONALITY
// ========================

class ShoppingCart {
  constructor() {
    this.items = this.loadFromStorage();
  }

  loadFromStorage() {
    const stored = localStorage.getItem("shophub_cart");
    return stored ? JSON.parse(stored) : [];
  }

  saveToStorage() {
    localStorage.setItem("shophub_cart", JSON.stringify(this.items));
    this.updateCartCount();
  }

  addItem(product) {
    const existingItem = this.items.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.saveToStorage();
    return existingItem ? false : true;
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.saveToStorage();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, parseInt(quantity));
      this.saveToStorage();
    }
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  clear() {
    this.items = [];
    this.saveToStorage();
  }

  updateCartCount() {
    const cartCount = document.querySelector(".cart-count");
    if (cartCount) {
      const count = this.getItemCount();
      cartCount.textContent = count;
      cartCount.style.display = count > 0 ? "flex" : "none";
    }
  }
}

// Initialize cart
const cart = new ShoppingCart();

// ========================
// PRODUCT DISPLAY
// ========================

function displayProducts(productList, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (productList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
        <h3>No products found</h3>
        <p>Try adjusting your filters</p>
      </div>
    `;
    return;
  }

  // Update product count if element exists
  const countEl = document.getElementById("product-count");
  if (countEl) {
    countEl.textContent = `Showing ${productList.length} product${productList.length !== 1 ? "s" : ""}`;
  }

  container.innerHTML = productList
    .map(
      (product) => `
      <div class="product-card" onclick="goToProductDetail(${product.id})">
        <img src="${product.image}" alt="${product.title}" class="product-image" onerror="this.src='https://picsum.photos/seed/${product.id}/200/200'">
        <div class="product-info-section">
          <h3 class="product-title">${product.title}</h3>
          <div class="product-rating">★★★★☆ (${product.reviews.toLocaleString()})</div>
          <div class="product-price">$${product.price.toFixed(2)}
            <span style="text-decoration: line-through; color: #999; font-size: 13px; margin-left: 6px; font-weight: 400;">$${product.originalPrice.toFixed(2)}</span>
          </div>
          <button onclick="event.stopPropagation(); addToCart(${product.id})">🛒 Add to Cart</button>
        </div>
      </div>
    `,
    )
    .join("");
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const isNew = cart.addItem(product);
    showNotification(
      isNew ?
        `✅ ${product.title.substring(0, 40)}... added!`
      : `🔄 Quantity updated!`,
    );
  }
}

function showNotification(message) {
  // Remove existing notification if any
  const existing = document.querySelector(".shophub-notification");
  if (existing) existing.remove();

  const notification = document.createElement("div");
  notification.className = "shophub-notification";
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #28a745, #20913b);
    color: white;
    padding: 14px 20px;
    border-radius: 8px;
    z-index: 9999;
    font-size: 14px;
    font-weight: 600;
    max-width: 320px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    animation: slideIn 0.3s ease-in-out;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-in-out";
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// ========================
// PAGE NAVIGATION
// ========================

function goToHomepage() {
  window.location.href = "index.html";
}

function goToProducts() {
  window.location.href = "products.html";
}

function goToProductDetail(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

function goToCart() {
  window.location.href = "cart.html";
}

// ========================
// SEARCH
// ========================

function initializeSearch() {
  const searchBtn = document.querySelector(".search-container button");
  const searchInput = document.querySelector(".search-container input");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query) {
        const filtered = products.filter(
          (p) =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()),
        );

        if (window.location.pathname.includes("products.html")) {
          displayProducts(filtered, "main-products-grid");
        } else {
          sessionStorage.setItem("searchResults", JSON.stringify(filtered));
          window.location.href = "products.html?search=1";
        }
      }
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchBtn.click();
    });
  }
}

// ========================
// HERO SLIDER (index.html)
// ========================

function initializeHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const controls = document.querySelectorAll(".slider-control");

  if (slides.length === 0) return;

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    controls.forEach((c, i) => c.classList.toggle("active", i === index));
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  controls.forEach((control, index) => {
    control.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  showSlide(0);
  setInterval(nextSlide, 4000);
}

// ========================
// PRODUCTS PAGE
// ========================

function initializeProductsPage() {
  // Check for category filter from landing/home page
  // FIX: Handle both string and JSON formats
  const categoryFilter = sessionStorage.getItem("categoryFilter");
  if (categoryFilter) {
    sessionStorage.removeItem("categoryFilter");
    try {
      // Try parsing as JSON array first (old format)
      const parsed = JSON.parse(categoryFilter);
      if (Array.isArray(parsed)) {
        displayProducts(parsed, "main-products-grid");
      } else {
        // It's a category name string stored as JSON
        const filtered = products.filter((p) => p.category === parsed);
        displayProducts(filtered, "main-products-grid");
      }
    } catch (e) {
      // It's a plain category name string (new format)
      const filtered = products.filter((p) => p.category === categoryFilter);
      displayProducts(filtered, "main-products-grid");
    }
    return;
  }

  // Check for search results
  const searchResults = sessionStorage.getItem("searchResults");
  if (searchResults) {
    sessionStorage.removeItem("searchResults");
    displayProducts(JSON.parse(searchResults), "main-products-grid");
    return;
  }

  // Default: show all products
  displayProducts(products, "main-products-grid");

  // Initialize filters
  const categoryFilters = document.querySelectorAll('input[name="category"]');
  const priceMin = document.getElementById("price-min");
  const priceMax = document.getElementById("price-max");
  // FIX: Use the correct button id
  const priceApply =
    document.getElementById("price-apply-btn") ||
    document.querySelector(".price-range button");
  const ratingFilters = document.querySelectorAll('input[name="rating"]');

  function applyFilters() {
    let filtered = [...products];

    // Category filter
    const selectedCategories = Array.from(categoryFilters)
      .filter((f) => f.checked)
      .map((f) => f.value);

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category),
      );
    }

    // Price filter
    const min = parseFloat(priceMin?.value) || 0;
    const max = parseFloat(priceMax?.value) || Infinity;
    filtered = filtered.filter((p) => p.price >= min && p.price <= max);

    // Rating filter
    const selectedRatings = Array.from(ratingFilters)
      .filter((f) => f.checked)
      .map((f) => parseFloat(f.value));

    if (selectedRatings.length > 0) {
      filtered = filtered.filter((p) =>
        selectedRatings.some((r) => p.rating >= r),
      );
    }

    displayProducts(filtered, "main-products-grid");
  }

  categoryFilters.forEach((filter) =>
    filter.addEventListener("change", applyFilters),
  );
  ratingFilters.forEach((filter) =>
    filter.addEventListener("change", applyFilters),
  );
  if (priceApply) priceApply.addEventListener("click", applyFilters);

  // Sort
  const sortSelect = document.querySelector(".sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      const sorted = [...products];
      switch (e.target.value) {
        case "price-low":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          sorted.sort((a, b) => b.rating - a.rating);
          break;
        case "newest":
          sorted.sort((a, b) => b.id - a.id);
          break;
      }
      displayProducts(sorted, "main-products-grid");
    });
  }
}

// ========================
// PRODUCT DETAIL PAGE
// ========================

function initializeProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  const product = products.find((p) => p.id === productId);

  if (!product) {
    document.body.innerHTML =
      '<div style="padding: 40px; text-align:center;"><h2>Product not found</h2><a href="products.html" style="color:#ff9900;">← Back to Products</a></div>';
    return;
  }

  // Update page title and breadcrumb
  document.title = `ShopHub - ${product.title}`;
  const breadcrumb = document.getElementById("breadcrumb-product");
  if (breadcrumb)
    breadcrumb.textContent = product.title.substring(0, 40) + "...";

  // Set product details
  const imageEl = document.querySelector(".product-image-large");
  const titleEl = document.querySelector(".product-info h1");
  const ratingEl = document.querySelector(".product-info .product-rating");
  const priceEl = document.querySelector(".product-info-price");
  const descEl = document.querySelector(".product-info-description");
  const featuresEl = document.querySelector(".product-info-features");

  if (imageEl) {
    imageEl.src = product.image.replace("/200/200", "/400/400");
    imageEl.alt = product.title;
  }
  if (titleEl) titleEl.textContent = product.title;
  if (ratingEl)
    ratingEl.innerHTML = `${"★".repeat(Math.floor(product.rating))}☆ ${product.rating} (${product.reviews.toLocaleString()} reviews)`;
  if (priceEl)
    priceEl.innerHTML = `$${product.price.toFixed(2)} <span style="text-decoration:line-through; color:#999; font-size:16px; margin-left:10px; font-weight:400;">$${product.originalPrice.toFixed(2)}</span>`;
  if (descEl) descEl.textContent = product.description;
  if (featuresEl) {
    featuresEl.innerHTML = product.features
      .map((f) => `<div class="feature-item">✓ ${f}</div>`)
      .join("");
  }

  // Add to cart button
  const addCartBtn = document.querySelector(".btn-add-cart");
  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => addToCart(product.id));
  }

  // Buy now button
  const buyNowBtn = document.querySelector(".btn-buy-now");
  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", () => {
      addToCart(product.id);
      goToCart();
    });
  }

  // Related products
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  displayProducts(related, "related-products-grid");
}

// ========================
// CART PAGE
// ========================

function initializeCartPage() {
  const itemsContainer = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");

  function renderCart() {
    if (!itemsContainer) return;

    if (cart.items.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-cart">
          <h2>🛒 Your Cart is Empty</h2>
          <p>Looks like you haven't added anything yet!</p>
          <a href="products.html">Continue Shopping</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = "$0.00";
      if (taxEl) taxEl.textContent = "$0.00";
      if (totalEl) totalEl.textContent = "$0.00";
      return;
    }

    itemsContainer.innerHTML = cart.items
      .map(
        (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-image" onerror="this.src='https://picsum.photos/seed/${item.id}/200/200'">
          <div class="cart-item-details">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
            <div class="cart-item-quantity">
              <label>Qty:</label>
              <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)" class="quantity-input">
              <button onclick="removeFromCart(${item.id})" style="background-color:#dc3545; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-size:13px; font-weight:600;">Remove</button>
            </div>
          </div>
          <div style="text-align:right; font-weight:700; font-size:16px; color:#ff9900;">
            $${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      `,
      )
      .join("");

    const subtotal = cart.getTotal();
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  }

  renderCart();

  const checkoutBtn = document.querySelector(".checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.items.length === 0) {
        showNotification("⚠️ Your cart is empty!");
        return;
      }
      alert(
        "🎉 Thank you for your purchase! Your order has been placed successfully.",
      );
      cart.clear();
      renderCart();
    });
  }
}

function updateQuantity(productId, quantity) {
  cart.updateQuantity(productId, parseInt(quantity));
  initializeCartPage();
}

function removeFromCart(productId) {
  cart.removeItem(productId);
  initializeCartPage();
}

// ========================
// CATEGORY NAVIGATION
// ========================

function initializeCategoryNav() {
  const categoryLinks = document.querySelectorAll(
    ".category-nav a[data-category]",
  );
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = link.getAttribute("data-category");
      const filtered =
        category === "all" ? products : (
          products.filter((p) => p.category === category)
        );

      if (window.location.pathname.includes("products.html")) {
        displayProducts(filtered, "main-products-grid");
      } else {
        // FIX: Store as plain string, not JSON
        sessionStorage.setItem(
          "categoryFilter",
          category === "all" ? "all" : category,
        );
        window.location.href = "products.html";
      }
    });
  });
}

// ========================
// INITIALIZE ON PAGE LOAD
// ========================

document.addEventListener("DOMContentLoaded", () => {
  cart.updateCartCount();
  initializeSearch();
  initializeHeroSlider();
  initializeCategoryNav();

  const path = window.location.pathname;

  if (path.includes("products.html")) {
    initializeProductsPage();
  } else if (path.includes("product-detail.html")) {
    initializeProductDetail();
  } else if (path.includes("cart.html")) {
    initializeCartPage();
  }
});

// ========================
// CSS ANIMATIONS
// ========================

const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);
