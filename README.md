# Bean & Bloom Café ☕🌸

> “Coffee, fresh bakes & little moments of joy.”

A complete, responsive, modern café website built for **Bean & Bloom Café** (fictional brand). Designed with an editorial aesthetic, warm color palette (espresso brown, warm cream, muted sage green, and terracotta), elegant typography, and a rich suite of interactive features engineered to showcase premium freelance web design capabilities.

---

## 🌟 Client-Winning Interactive Features

1. **💸 Comprehensive Checkout & Payment Gateway**:
   - Simulated Razorpay / UPI / Card / Cash payment flow.
   - **UPI Instant Pay**: GPay, PhonePe, Paytm, BHIM with interactive UPI ID input and dynamic scan-to-pay QR code.
   - **Credit / Debit Cards**: Live formatted card input (`XXXX XXXX XXXX XXXX`), Expiry, CVV with 128-bit SSL demo shield.
   - **Pay at Counter**: Option to collect Kitchen Order Token and settle via cash/POS machine.
   - **Tip Jar & Promo Codes**: Add barista love tips (+₹20, +₹50, +₹100) and test discount codes like `BLOOM10` (10% off).
   - **Digital Tax Invoice & Kitchen Order Token (KOT)**: Itemized bill with 5% restaurant GST, prep countdown (12 mins), and a one-click **"Print / Save Tax Invoice"** button.
   - **Live Order Status Tracker**: Order Placed ➔ Barista Brewing ➔ Oven Fresh ➔ Ready at Table.

2. **📱 Scan & Dine Digital QR Menu & Table Stand Simulator**:
   - Interactive SVG QR Code generator (`qrcode.react`) linked directly to table ordering.
   - Select dining tables (*Table 1 Window Nook*, *Table 4 Patio*, *Table 6 Brew Bar*, or *Takeaway Counter*).
   - Test table scan mode: updates the website into live table ordering mode where orders are routed to that specific table.
   - Allows café owners to copy digital menu links or print tent cards for physical tables.

3. **🍽️ Expanded Menu with Pricing Starting from ₹100**:
   - 20+ handcrafted items across **Coffee**, **Tea**, **Bakery**, **Desserts**, and **Savory Bites**.
   - Accessible pocket-friendly pricing starting at **₹100** (e.g. *South Indian Peaberry Filter Coffee* ₹100, *Lemon Mint Iced Tea* ₹100, *Artisan Brioche Toast* ₹100, *Swedish Cardamom Bun* ₹110, *Truffle Herb Fries* ₹140, etc.).
   - Live category filters, keyword search, budget filter (`≤ ₹140 Pocket-Friendly`), and dietary filters (*Vegetarian*, *Vegan*, *Eggless*).

4. **📅 Table Reservation & Atmosphere Booking Engine**:
   - Select party size (1, 2, 4, 6+ guests) and time windows (Morning Brew, Sunset Coffee, etc.).
   - Choose seating zones: *Sunlit Garden Patio*, *Window Reading Nook*, *Roastery Brew Bar*, or *Quiet Study Desk*.
   - Instant digital reservation pass with unique booking ID (e.g. `#BNB-RES-510`).

5. **☕ The Bloom Coffee Pass (Interactive Loyalty Stamp Card)**:
   - Digital stamp card simulator: "Buy 5 coffees, get your 6th free!".
   - Click to stamp the card; completing 6 stamps reveals an exclusive promo code (`BLOOM10`) for 10% off!

6. **💬 Customer & Critic Reviews**:
   - 5-star testimonials from local Bengaluru food critics, architects, and remote professionals.

7. **🟢 Live Café Vibe & Seating Tracker**:
   - Ambient top bar displaying live café atmosphere (*"Quiet & Sunlit • 42% Capacity • Sourdough fresh out of oven"*).

8. **💬 Direct WhatsApp Ordering**:
   - Centralized constant `cafeConfig.whatsapp.number` generates formatted order manifests ready to send.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have Node.js (v18 or higher) installed.

### 2. Navigate to Project
```bash
cd cafe-website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 5. Production Build
```bash
npm run build
```
Generates an optimized static production bundle in `dist/`.

---

## 🛠️ How to Customize for a Real Client

All business information, menu items, prices, promo codes, and seating zones are centralized in:

📁 **`src/config/cafeConfig.js`**

### 1. Updating the WhatsApp Phone Number
```javascript
whatsapp: {
  number: "918347537599", // Put client's real WhatsApp number with country code
  isDemoPlaceholder: false, // Set to false for live production
}
```

### 2. Adding / Modifying Menu Items & Prices
```javascript
{
  id: "c-filter",
  category: "Coffee",
  name: "South Indian Peaberry Filter Coffee",
  price: 100, // In INR (₹)
  dietary: "Vegetarian",
  description: "Traditional brass filter decoction with chicory blend and frothed milk.",
  image: "https://your-image-url.com/image.jpg",
  popular: true,
}
```

### 3. Managing Promo Codes
```javascript
promoCodes: {
  "BLOOM10": { discountPercent: 10, description: "10% Welcome Perk" },
  "FIRSTSIP": { discountPercent: 15, description: "15% First Coffee Discount" },
}
```

---

## 📁 Project Structure

```
cafe-website/
├── index.html                      # HTML entry point with meta tags & Google Fonts
├── package.json                    # Dependencies (React 18, Vite 6, Tailwind CSS, Lucide, qrcode.react)
├── tailwind.config.js              # Custom cafe theme palette (espresso, cream, sage, terracotta)
├── vite.config.js                  # Vite server setup
├── src/
│   ├── main.jsx                    # React root mount
│   ├── App.jsx                     # App shell, global bag state & modal orchestration
│   ├── index.css                   # Tailwind directives & base styles
│   ├── config/
│   │   └── cafeConfig.js           # Central data, menu, prices, WhatsApp & promo codes
│   └── components/
│       ├── LiveVibeBanner.jsx      # Top ambient occupancy & fresh batch tracker
│       ├── Navbar.jsx              # Responsive header with QR, table & order bag triggers
│       ├── Hero.jsx                # Editorial hero banner with photography & CTAs
│       ├── OurStory.jsx            # Brand narrative & roastery philosophy
│       ├── SignatureSpecials.jsx   # 3 highlighted guest favorites
│       ├── MenuSection.jsx         # 6 categories, budget filter, search & dietary tags
│       ├── LoyaltyClub.jsx         # Interactive 6-stamp loyalty rewards simulator
│       ├── TestimonialsSection.jsx # Social proof reviews from food critics
│       ├── GallerySection.jsx      # Photo grid with full-screen lightbox modal
│       ├── VisitUsSection.jsx      # Opening hours, address, Google Maps directions
│       ├── ContactOrderSection.jsx # Validated form & WhatsApp ordering
│       ├── OrderModal.jsx          # Order bag with item adjustments & payment entry
│       ├── CheckoutPaymentModal.jsx # Simulated UPI, Card & Cash gateway with Tax Invoices
│       ├── QrMenuScannerModal.jsx  # Interactive Table QR menu scanner & tent card mockup
│       ├── TableReservationModal.jsx # Table booking with zone selection & confirmation passes
│       ├── ImageWithFallback.jsx   # Resilient image loading with warm fallback
│       └── Footer.jsx              # Compact footer with links & back-to-top
```

---

## 📄 License
MIT — Free to use for freelance client templates and portfolio showcases.
