/**
 * Bean & Bloom Café - Central Brand & Business Configuration
 * 
 * Developer & Owner Credentials:
 * Name: Tambali Sathvika
 * Email: tambalisathvika@gmail.com
 * Phone: +91 98765 43210
 */

export const cafeConfig = {
  brand: {
    name: "Bean & Bloom Café",
    shortName: "Bean & Bloom",
    tagline: "Coffee, fresh bakes & little moments of joy.",
    headline: "Your little corner of comfort.",
    subdescription:
      "A warm neighborhood retreat crafted for slow mornings, thoughtful conversations, freshly roasted artisanal coffee, and scratch-made golden bakes.",
    established: "2023",
  },

  // Developer & Lead Designer Credentials
  creator: {
    name: "Tambali Sathvika",
    email: "tambalisathvika@gmail.com",
    phone: "+91 98765 43210",
    displayPhone: "+91 98765 43210",
    whatsappNumber: "919876543210",
    github: "https://github.com/tambalisathvika",
    linkedin: "https://www.linkedin.com/in/tambali-sathvika",
    role: "Lead Full-Stack Web Designer & Developer",
    status: "Available for Freelance Café & Restaurant Projects",
  },

  // Contact details & Management
  contact: {
    addressPlaceholder: "14 Bloom Garden Road, Indiranagar, Bengaluru, KA 560038",
    displayAddress: "14 Bloom Garden Road, Indiranagar, Bengaluru",
    landmark: "Just off 100 Feet Road, opposite Bloom Park",
    phonePlaceholder: "+91 98765 43210",
    displayPhone: "+91 98765 43210",
    email: "tambalisathvika@gmail.com",
    ownerName: "Tambali Sathvika",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Indiranagar+Bengaluru+Cafe",
  },

  // WhatsApp Order & Direct Inquiries
  whatsapp: {
    number: "919876543210", // Tambali Sathvika's WhatsApp constant
    isDemoPlaceholder: false, // Directly opens WhatsApp Web / App
    defaultMessage: "Hello Sathvika! I would like to place an order at Bean & Bloom Café / discuss a web design project.",
  },

  // Promo Codes for discounts
  promoCodes: {
    "BLOOM10": { discountPercent: 10, description: "10% Welcome Perk" },
    "FIRSTSIP": { discountPercent: 15, description: "15% First Coffee Discount" },
    "CHEF50": { discountFlat: 50, description: "₹50 Chef's Special Flat Off" },
    "SATHVIKA": { discountPercent: 20, description: "20% Sathvika Founder Special" },
  },

  // Opening Hours
  hours: [
    {
      label: "Weekday Mornings & Evenings",
      days: "Monday – Friday",
      time: "7:30 AM – 9:00 PM",
      status: "Brewing fresh daily",
    },
    {
      label: "Weekend Brunch & Gatherings",
      days: "Saturday – Sunday",
      time: "8:00 AM – 10:00 PM",
      status: "Extended weekend comfort",
    },
  ],

  // Café Amenities
  amenities: [
    { title: "High-Speed Wi-Fi", desc: "Cozy nooks with power plugs for quiet work & reading." },
    { title: "Pet-Friendly Patio", desc: "Bring your furry companions to our sunlit garden deck." },
    { title: "Artisanal Roastery", desc: "Single-origin Arabica beans roasted locally in small batches." },
    { title: "Scratch Bakery", desc: "Croissants, sourdough, and tea cakes fresh out of the oven every 7 AM." },
  ],

  // Seating Zones for Table Booking & QR Scanner
  seatingZones: [
    { id: "patio", name: "Sunlit Garden Patio", desc: "Outdoor breeze, lush potted palms & pet-friendly deck" },
    { id: "window", name: "Window Reading Nook", desc: "Soft cushions, natural lighting & quiet neighborhood view" },
    { id: "brewbar", name: "Roastery Brew Bar", desc: "Front row seat to witness precision V60 and espresso pulls" },
    { id: "study", name: "Quiet Work & Study Desk", desc: "High-speed Wi-Fi, individual surge outlets & gentle jazz" },
  ],

  // Signature Specials (Featured in Dedicated Showcase Section)
  signatureSpecials: [
    {
      id: "spec-1",
      name: "Cinnamon Honeycomb Latte",
      tagline: "Guest Favorite",
      price: 190,
      category: "Coffee",
      dietary: "Vegetarian",
      description: "Double shot of single-origin espresso with steamed oat milk, raw mountain honey and crunchy honeycomb dust.",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=900&auto=format&fit=crop",
      badge: "Signature Pour",
    },
    {
      id: "spec-2",
      name: "Sourdough Cardamom Cruffin",
      tagline: "Baker's Morning Pride",
      price: 150,
      category: "Bakery",
      dietary: "Eggless",
      description: "48-hour slow-fermented flaky sourdough croissant dough, rolled with fresh Malabar cardamom sugar and orange zest.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop",
      badge: "Baked Fresh Daily",
    },
    {
      id: "spec-3",
      name: "Belgian Dark Hazelnut Tart",
      tagline: "Chef's Decadence",
      price: 210,
      category: "Desserts",
      dietary: "Vegetarian",
      description: "Crisp almond sablé crust filled with 70% dark Callebaut chocolate ganache, slow-roasted hazelnuts and Tuticorin sea salt.",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=900&auto=format&fit=crop",
      badge: "Handcrafted Delight",
    },
  ],

  // Full Expanded Menu across Coffee, Tea, Bakery, Desserts, Savory Bites
  // Starting from ₹100!
  menuCategories: ["All", "Coffee", "Tea", "Bakery", "Desserts", "Savory Bites"],

  menuItems: [
    // --- COFFEE (Starting from ₹100) ---
    {
      id: "c-filter",
      category: "Coffee",
      name: "South Indian Peaberry Filter Coffee",
      price: 100,
      dietary: "Vegetarian",
      description: "Traditional brass filter decoction brewed with 80:20 chicory blend and frothed full-cream milk.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "c-espresso",
      category: "Coffee",
      name: "Classic Single Shot Espresso",
      price: 110,
      dietary: "Vegan",
      description: "Concentrated 30ml pull of 100% Chikmagalur Arabica with golden crema and dark cocoa notes.",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600&auto=format&fit=crop",
      popular: false,
    },
    {
      id: "c-americano",
      category: "Coffee",
      name: "Iced Long Black Americano",
      price: 120,
      dietary: "Vegan",
      description: "Double ristretto poured over chilled mountain spring water and clear crystal ice cubes.",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop",
      popular: false,
    },
    {
      id: "c-cortado",
      category: "Coffee",
      name: "Velvet Espresso Cortado",
      price: 140,
      dietary: "Vegetarian",
      description: "Equal parts bold double espresso and velvety textured whole milk in a warm 4oz glass.",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "c-cappuccino",
      category: "Coffee",
      name: "Classic Cappuccino with Cocoa Dust",
      price: 150,
      dietary: "Vegetarian",
      description: "Rich espresso crowned with dense silky foam and unsweetened Dutch cocoa powder.",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop",
      popular: false,
    },
    {
      id: "c-flatwhite",
      category: "Coffee",
      name: "Sea Salt Caramel Flat White",
      price: 170,
      dietary: "Vegetarian",
      description: "Silky micro-foam poured over double ristretto, drizzled with artisanal palm-jaggery caramel and sea salt.",
      image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "c-coldbrew",
      category: "Coffee",
      name: "18-Hour Vanilla Bean Cold Brew",
      price: 160,
      dietary: "Vegan",
      description: "Slow-steeped over 18 hours with Madagascar vanilla pods. Smooth, low-acidity and naturally sweet.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },

    // --- TEA & CHAI (Starting from ₹100) ---
    {
      id: "t-lemon",
      category: "Tea",
      name: "Fresh Lemon Mint Iced Tea",
      price: 100,
      dietary: "Vegan",
      description: "Cold-infused Nilgiri black tea shaken with garden mint, freshly squeezed lemons and wild honey.",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "t-ginger",
      category: "Tea",
      name: "Ginger Tulsi Herbal Chai Pot",
      price: 110,
      dietary: "Vegetarian",
      description: "Steaming Assam CTC infused with fresh pounded ginger, holy basil and crushed green cardamom.",
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=600&auto=format&fit=crop",
      popular: false,
    },
    {
      id: "t-darjeeling",
      category: "Tea",
      name: "First Flush Darjeeling Estate Pot",
      price: 130,
      dietary: "Vegan",
      description: "Delicate muscatel floral profile harvested from Himalayan slopes, served in an artisanal ceramic brew pot.",
      image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=600&auto=format&fit=crop",
      popular: false,
    },
    {
      id: "t-kahwa",
      category: "Tea",
      name: "Kashmiri Saffron Kahwa",
      price: 150,
      dietary: "Vegan",
      description: "Traditional green tea simmered with saffron strands, whole cinnamon, and crushed Kashmiri almonds.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },

    // --- BAKERY & PASTRY (Starting from ₹100) ---
    {
      id: "b-toast",
      category: "Bakery",
      name: "Artisan Brioche Toast & Fig Jam",
      price: 100,
      dietary: "Vegetarian",
      description: "Two thick golden slices of toasted brioche served with house-made dried fig jam and salted butter.",
      image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?q=80&w=600&auto=format&fit=crop",
      popular: false,
    },
    {
      id: "b-bun",
      category: "Bakery",
      name: "Swedish Cardamom Cinnamon Bun",
      price: 110,
      dietary: "Eggless",
      description: "Braided twisted pastry dough baked with brown sugar, butter and aromatic crushed cardamom.",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "b-croissant",
      category: "Bakery",
      name: "Golden Flake Butter Croissant",
      price: 130,
      dietary: "Vegetarian",
      description: "Classic French lamination with 82% churned butter, yielding paper-thin crispy layers and airy honeycomb interior.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "b-muffin",
      category: "Bakery",
      name: "Blueberry Lemon Streusel Muffin",
      price: 120,
      dietary: "Eggless",
      description: "Tender buttermilk muffin packed with juicy wild blueberries and crowned with crispy lemon-zest crumble.",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=600&auto=format&fit=crop",
      popular: false,
    },
    {
      id: "b-cruffin",
      category: "Bakery",
      name: "Sourdough Cardamom Cruffin",
      price: 150,
      dietary: "Eggless",
      description: "48-hour slow-fermented flaky sourdough croissant dough, rolled with fresh Malabar cardamom sugar.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop",
      popular: true,
    },

    // --- SAVORY BITES (Starting from ₹120) ---
    {
      id: "s-garlic",
      category: "Savory Bites",
      name: "Herbed Garlic Sourdough Loaf",
      price: 120,
      dietary: "Vegetarian",
      description: "Toasted country sourdough slathered in confit garlic, fresh rosemary and aged cheddar.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
      popular: false,
    },
    {
      id: "s-fries",
      category: "Savory Bites",
      name: "Crispy Truffle Herb Fries",
      price: 140,
      dietary: "Vegetarian",
      description: "Hand-cut potato batons tossed with white truffle oil, rosemary sea salt and garlic aioli dip.",
      image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "s-toastie",
      category: "Savory Bites",
      name: "Charred Mushroom & Gouda Toastie",
      price: 160,
      dietary: "Vegetarian",
      description: "Pan-roasted button & oyster mushrooms with caramelized onions and molten gouda cheese inside toasted sourdough.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "s-avocado",
      category: "Savory Bites",
      name: "Rustic Smashed Avocado Toast",
      price: 180,
      dietary: "Vegan",
      description: "Thick slice of toasted whole wheat sourdough with Hass avocado, chili crisps, roasted sunflower seeds and microgreens.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },

    // --- DESSERTS (Starting from ₹110) ---
    {
      id: "d-cookie",
      category: "Desserts",
      name: "Sea Salt Dark Chocolate Chunk Cookie",
      price: 110,
      dietary: "Vegetarian",
      description: "Warm soft-baked cookie loaded with 70% dark chocolate puddles and sprinkled with Maldon sea salt flakes.",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "d-loaf",
      category: "Desserts",
      name: "Pistachio Rosewater Tea Loaf",
      price: 140,
      dietary: "Eggless",
      description: "Moist tender slice infused with Persian rosewater, crushed green pistachios and a citrus glaze.",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop",
      popular: false,
    },
    {
      id: "d-tiramisu",
      category: "Desserts",
      name: "Warm Espresso Tiramisu Jar",
      price: 170,
      dietary: "Eggless",
      description: "Sponge savoiardi steeped in hot espresso ristretto, layered with airy mascarpone and cocoa nibs.",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "d-cheesecake",
      category: "Desserts",
      name: "Burnt Basque Vanilla Cheesecake",
      price: 190,
      dietary: "Vegetarian",
      description: "Creamy, custard-like molten center with caramelized blistered top and pure Bourbon vanilla notes.",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop",
      popular: true,
    },
    {
      id: "d-tart",
      category: "Desserts",
      name: "Belgian Dark Hazelnut Tart",
      price: 210,
      dietary: "Vegetarian",
      description: "Crisp almond crust with 70% Callebaut dark ganache, roasted hazelnuts and sea salt flakes.",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=900&auto=format&fit=crop",
      popular: true,
    },
  ],

  // Client & Guest Testimonials
  testimonials: [
    {
      id: "t1",
      name: "Ananya Deshmukh",
      role: "Architect & Indiranagar Resident",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      comment: "Bean & Bloom has ruined all other cafés for me. Their Cinnamon Honeycomb Latte and quiet garden patio are my creative sanctuary every single morning.",
      rating: 5,
      favoriteItem: "Honeycomb Latte",
    },
    {
      id: "t2",
      name: "Rohan Varma",
      role: "Food & Beverage Critic, Bengaluru",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      comment: "The crust and crumb on their sourdough cardamom cruffins rival top bakeries in Paris and Copenhagen. Real artisanal craft without pretension.",
      rating: 5,
      favoriteItem: "Cardamom Cruffin",
    },
    {
      id: "t3",
      name: "Meera Nair",
      role: "Remote Product Designer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      comment: "High-speed Wi-Fi, polite staff who let you work in peace, and the iced cold brew on tap is perfection. The table QR ordering is seamless!",
      rating: 5,
      favoriteItem: "Vanilla Cold Brew",
    },
  ],

  // Gallery Showcase items
  gallery: [
    {
      id: "g1",
      title: "The Pour-Over Bar",
      subtitle: "Precision brewing with single-origin beans",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
      alt: "Barista pouring hot water over coffee grounds at the brew bar",
    },
    {
      id: "g2",
      title: "Morning Sunlit Nook",
      subtitle: "A peaceful sanctuary for slow mornings",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
      alt: "Sunlight casting warm shadows across wooden cafe tables and indoor greenery",
    },
    {
      id: "g3",
      title: "Fresh Out of the Oven",
      subtitle: "Sourdough croissants baked daily at 6:30 AM",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
      alt: "Freshly baked golden pastries displayed on a marble counter",
    },
    {
      id: "g4",
      title: "Artisanal Latte Art",
      subtitle: "Crafted with silky micro-foam and love",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop",
      alt: "Top down view of a ceramic cup with rosette latte art",
    },
    {
      id: "g5",
      title: "Garden Verandah Seating",
      subtitle: "Surrounded by blooming jasmine and leafy palms",
      image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
      alt: "Outdoor garden patio seating with wicker chairs and plants",
    },
    {
      id: "g6",
      title: "The Dessert Atelier",
      subtitle: "Handcrafted tarts and seasonal bakes",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop",
      alt: "Decadent chocolate tarts and pastries arranged for afternoon tea",
    },
  ],

  // Social handles
  socials: [
    { name: "Instagram", handle: "@beanandbloom.cafe", url: "https://instagram.com" },
    { name: "Facebook", handle: "Bean & Bloom Café", url: "https://facebook.com" },
    { name: "GitHub", handle: "tambalisathvika", url: "https://github.com/tambalisathvika" },
    { name: "LinkedIn", handle: "tambali-sathvika", url: "https://www.linkedin.com/in/tambali-sathvika" },
  ],
};
