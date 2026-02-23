# Amazon-Style E-Commerce Website Clone

A fully functional e-commerce website clone built with HTML, CSS, and JavaScript. No backend required - all functionality is client-side.

## Features

### Pages Implemented

1. **Homepage** - Features hero slider, product sections (Deals of the Day, Featured Products, Recommended)
2. **Products Listing** - Grid layout with filtering and sorting
3. **Product Detail** - Individual product page with full information
4. **Shopping Cart** - Cart management with quantity controls

### Key Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Amazon-style header with navigation
- ✅ Search functionality
- ✅ Product filtering (category, price range, rating)
- ✅ Product sorting (price, rating, newest)
- ✅ Shopping cart with add/remove/update functionality
- ✅ Persistent cart (using localStorage)
- ✅ Hero banner slider with auto-rotation
- ✅ Product preview cards with ratings
- ✅ Related products suggestion
- ✅ Price calculation with tax
- ✅ Notification system for user actions
- ✅ Professional footer with multiple sections

## File Structure

```
ecommerce-clone/
├── index.html              # Homepage
├── products.html           # Product listing page
├── product-detail.html     # Individual product details
├── cart.html              # Shopping cart page
├── styles.css             # All styling (responsive)
├── script.js              # All JavaScript functionality
└── README.md              # This file
```

## Color Scheme (Amazon Style)

- Primary Dark: `#131921` (header)
- Secondary Dark: `#232f3e` (navigation)
- Primary Orange: `#FF9900` (accents, buttons)
- Hover Orange: `#f39c12`
- Light Background: `#f3f3f3`

## Product Data

- 12 dummy products with realistic data
- Each product includes: title, price, rating, reviews, category, image, description, features
- Uses picsum.photos for high-quality product photos
- Categories: Electronics, Furniture, Home & Kitchen, Sports & Outdoors

## How to Use

### Opening the Website

1. Open `index.html` in your web browser to start at the homepage
2. Use the navigation to explore different pages

### Adding Products to Cart

- Click the "Add to Cart" button on any product card
- View cart from the cart icon (shows item count)

### Shopping Cart

- Navigate to cart page using the cart icon or "Proceed to Checkout"
- Adjust quantities using the input field
- Remove items with the "Remove" button
- View real-time total calculations including tax

### Filtering & Searching

- Use the sidebar filters on the products page to narrow results
- Filter by category, price range, or rating
- Search for products using the search bar
- Sort results by price or rating

### Responsive Design

- Works perfectly on mobile, tablet, and desktop
- Touch-friendly buttons and input fields
- Optimized layouts for smaller screens

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Modern mobile browsers

## Technical Details

### Storage

- Uses localStorage to persist cart data
- Cart survives page refreshes and browser closure

### JavaScript Features

- ShoppingCart class for cart management
- Product display functions with dynamic grid layout
- Navigation functions between pages
- Filter and sort functionality
- Hero slider with auto-rotation and manual controls
- Notification toast system

### CSS Features

- CSS Grid for responsive layouts
- Flexbox for component alignment
- CSS Custom properties for theming
- Media queries for responsive design
- Smooth transitions and animations

## Future Enhancements

- User authentication system
- Product reviews and ratings
- Wishlist functionality
- Advanced search with auto-complete
- Payment gateway integration
- Order history
- Product recommendations based on browsing history
- Dark mode toggle
- Multiple language support

## Notes

- All product data is fictional and used for demonstration
- Images are from placeholder service
- No backend server required
- All data persists only in the browser (localStorage)

## License

This project is open source and available for educational purposes.
