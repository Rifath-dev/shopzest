
/* ── Data ─────────────────────────────────────────────────────── */
const PRODUCTS = [
  {id:1,  name:"Air Pulse Sneakers",    price:129.99,oldPrice:179.99,rating:4.8,reviews:2341,tag:"HOT", emoji:"👟",category:"Footwear"},
  {id:2,  name:"Matte Lip Set",          price:34.99, oldPrice:null,  rating:4.6,reviews:891, tag:"NEW", emoji:"💄",category:"Beauty"},
  {id:3,  name:"Noise-Cancel Buds",      price:89.99, oldPrice:119.99,rating:4.9,reviews:5102,tag:"SALE",emoji:"🎧",category:"Tech"},
  {id:4,  name:"Linen Shirt",            price:49.99, oldPrice:null,  rating:4.5,reviews:423, tag:null,  emoji:"👕",category:"Fashion"},
  {id:5,  name:"Smart Watch Pro",        price:199.99,oldPrice:249.99,rating:4.7,reviews:3218,tag:"SALE",emoji:"⌚",category:"Tech"},
  {id:6,  name:"Serum Kit",              price:64.99, oldPrice:null,  rating:4.8,reviews:1647,tag:"NEW", emoji:"🧴",category:"Beauty"},
  {id:7,  name:"Yoga Mat Pro",           price:44.99, oldPrice:59.99, rating:4.6,reviews:980, tag:"SALE",emoji:"🧘",category:"Sports"},
  {id:8,  name:"Ceramic Mug",            price:19.99, oldPrice:null,  rating:4.7,reviews:312, tag:null,  emoji:"☕",category:"Home"},
  {id:9,  name:"Running Shorts",         price:29.99, oldPrice:39.99, rating:4.5,reviews:678, tag:"SALE",emoji:"🩳",category:"Sports"},
  {id:10, name:"Vitamin C Gummies",      price:24.99, oldPrice:null,  rating:4.7,reviews:2104,tag:"NEW", emoji:"🍊",category:"Beauty"},
  {id:11, name:"Desk Lamp LED",          price:54.99, oldPrice:69.99, rating:4.6,reviews:534, tag:null,  emoji:"💡",category:"Home"},
  {id:12, name:"Canvas Backpack",        price:74.99, oldPrice:null,  rating:4.8,reviews:1289,tag:"HOT", emoji:"🎒",category:"Fashion"},
  {id:13, name:"Mechanical Keyboard",    price:149.99,oldPrice:199.99,rating:4.9,reviews:3871,tag:"SALE",emoji:"⌨️",category:"Tech"},
  {id:14, name:"Trail Running Shoes",    price:119.99,oldPrice:null,  rating:4.7,reviews:892, tag:"NEW", emoji:"👟",category:"Footwear"},
  {id:15, name:"Resistance Bands",       price:22.99, oldPrice:29.99, rating:4.5,reviews:1456,tag:null,  emoji:"💪",category:"Sports"},
  {id:16, name:"Scented Candle Set",     price:39.99, oldPrice:null,  rating:4.8,reviews:743, tag:"NEW", emoji:"🕯️",category:"Home"},
  {id:17, name:"Wireless Charger",       price:34.99, oldPrice:44.99, rating:4.6,reviews:2210,tag:"SALE",emoji:"🔋",category:"Tech"},
  {id:18, name:"Floral Midi Dress",      price:59.99, oldPrice:null,  rating:4.5,reviews:389, tag:null,  emoji:"👗",category:"Fashion"},
  {id:19, name:"Chelsea Boots",          price:139.99,oldPrice:169.99,rating:4.7,reviews:1034,tag:"HOT", emoji:"🥾",category:"Footwear"},
  {id:20, name:"Retinol Night Cream",    price:49.99, oldPrice:64.99, rating:4.9,reviews:4502,tag:"SALE",emoji:"🌙",category:"Beauty"},
  {id:21, name:"Bamboo Cutting Board",   price:28.99, oldPrice:null,  rating:4.6,reviews:612, tag:null,  emoji:"🍽️",category:"Home"},
  {id:22, name:"Smart Water Bottle",     price:44.99, oldPrice:59.99, rating:4.7,reviews:1872,tag:"NEW", emoji:"💧",category:"Sports"},
  {id:23, name:"Headphone Pro Max",      price:249.99,oldPrice:299.99,rating:4.9,reviews:6120,tag:"HOT", emoji:"🎵",category:"Tech"},
  {id:24, name:"Linen Trousers",         price:64.99, oldPrice:null,  rating:4.4,reviews:278, tag:null,  emoji:"👖",category:"Fashion"},
  // ── New products ───────────────────────────────────────────
  {id:25, name:"Platform Sneakers",      price:109.99,oldPrice:139.99,rating:4.7,reviews:1543,tag:"SALE",emoji:"👠",category:"Footwear"},
  {id:26, name:"Leather Loafers",        price:124.99,oldPrice:null,  rating:4.6,reviews:821, tag:null,  emoji:"🥿",category:"Footwear"},
  {id:27, name:"High-Top Boots",         price:164.99,oldPrice:199.99,rating:4.8,reviews:672, tag:"HOT", emoji:"👢",category:"Footwear"},
  {id:28, name:"Slip-On Mules",          price:54.99, oldPrice:69.99, rating:4.4,reviews:408, tag:"SALE",emoji:"🩴",category:"Footwear"},
  {id:29, name:"Retro Basketball Shoes", price:94.99, oldPrice:null,  rating:4.6,reviews:1102,tag:"NEW", emoji:"👟",category:"Footwear"},
  {id:30, name:"SPF50 Sunscreen",        price:18.99, oldPrice:null,  rating:4.8,reviews:3321,tag:"NEW", emoji:"🧴",category:"Beauty"},
  {id:31, name:"Rose Facial Toner",      price:29.99, oldPrice:39.99, rating:4.7,reviews:1890,tag:"SALE",emoji:"🌹",category:"Beauty"},
  {id:32, name:"Hyaluronic Eye Cream",   price:44.99, oldPrice:null,  rating:4.9,reviews:2750,tag:"HOT", emoji:"👁️",category:"Beauty"},
  {id:33, name:"Jade Gua Sha Tool",      price:22.99, oldPrice:null,  rating:4.6,reviews:980, tag:"NEW", emoji:"💚",category:"Beauty"},
  {id:34, name:"Hair Repair Mask",       price:26.99, oldPrice:34.99, rating:4.7,reviews:1430,tag:"SALE",emoji:"💆",category:"Beauty"},
  {id:35, name:"Brow Lamination Kit",    price:31.99, oldPrice:null,  rating:4.5,reviews:654, tag:"NEW", emoji:"✨",category:"Beauty"},
  {id:36, name:"4K Webcam",             price:79.99, oldPrice:99.99, rating:4.7,reviews:2340,tag:"SALE",emoji:"📷",category:"Tech"},
  {id:37, name:"USB-C Hub 10-in-1",     price:59.99, oldPrice:74.99, rating:4.8,reviews:3100,tag:"HOT", emoji:"🔌",category:"Tech"},
  {id:38, name:"Smart LED Strip",       price:29.99, oldPrice:null,  rating:4.6,reviews:1876,tag:"NEW", emoji:"💡",category:"Tech"},
  {id:39, name:"Portable SSD 1TB",      price:89.99, oldPrice:119.99,rating:4.9,reviews:4210,tag:"SALE",emoji:"💾",category:"Tech"},
  {id:40, name:"E-Ink Tablet",          price:329.99,oldPrice:399.99,rating:4.8,reviews:1540,tag:"HOT", emoji:"📱",category:"Tech"},
  {id:41, name:"Mini Projector 1080p",  price:189.99,oldPrice:229.99,rating:4.7,reviews:890, tag:"SALE",emoji:"📽️",category:"Tech"},
  {id:42, name:"Smart Doorbell",        price:99.99, oldPrice:null,  rating:4.6,reviews:1230,tag:"NEW", emoji:"🔔",category:"Tech"},
  {id:43, name:"Oversized Blazer",      price:84.99, oldPrice:null,  rating:4.5,reviews:543, tag:null,  emoji:"🧥",category:"Fashion"},
  {id:44, name:"Silk Slip Skirt",       price:69.99, oldPrice:89.99, rating:4.7,reviews:712, tag:"SALE",emoji:"👘",category:"Fashion"},
  {id:45, name:"Cargo Trousers",        price:54.99, oldPrice:null,  rating:4.5,reviews:398, tag:"NEW", emoji:"👖",category:"Fashion"},
  {id:46, name:"Ribbed Tank Top",       price:19.99, oldPrice:null,  rating:4.4,reviews:1102,tag:null,  emoji:"👚",category:"Fashion"},
  {id:47, name:"Wide-Leg Jeans",        price:79.99, oldPrice:99.99, rating:4.6,reviews:876, tag:"SALE",emoji:"👖",category:"Fashion"},
  {id:48, name:"Knit Polo Shirt",       price:44.99, oldPrice:null,  rating:4.5,reviews:332, tag:"NEW", emoji:"👕",category:"Fashion"},
  {id:49, name:"Trench Coat Classic",   price:149.99,oldPrice:189.99,rating:4.8,reviews:621, tag:"HOT", emoji:"🧥",category:"Fashion"},
  {id:50, name:"Dumbbell Set 20kg",     price:89.99, oldPrice:109.99,rating:4.8,reviews:2340,tag:"SALE",emoji:"🏋️",category:"Sports"},
  {id:51, name:"Jump Rope Speed",       price:14.99, oldPrice:null,  rating:4.6,reviews:1890,tag:null,  emoji:"🪢",category:"Sports"},
  {id:52, name:"Foam Roller Pro",       price:34.99, oldPrice:44.99, rating:4.7,reviews:1120,tag:"SALE",emoji:"🟠",category:"Sports"},
  {id:53, name:"Cycling Helmet",        price:74.99, oldPrice:null,  rating:4.8,reviews:765, tag:"NEW", emoji:"⛑️",category:"Sports"},
  {id:54, name:"Tennis Racket Pro",     price:119.99,oldPrice:149.99,rating:4.7,reviews:543, tag:"HOT", emoji:"🎾",category:"Sports"},
  {id:55, name:"Swimming Goggles",      price:22.99, oldPrice:29.99, rating:4.6,reviews:1432,tag:"SALE",emoji:"🥽",category:"Sports"},
  {id:56, name:"Camping Tent 3-Person", price:179.99,oldPrice:219.99,rating:4.8,reviews:980, tag:"SALE",emoji:"⛺",category:"Sports"},
  {id:57, name:"Protein Shaker Bottle", price:17.99, oldPrice:null,  rating:4.5,reviews:2100,tag:null,  emoji:"🥤",category:"Sports"},
  {id:58, name:"Aromatherapy Diffuser", price:42.99, oldPrice:54.99, rating:4.7,reviews:1430,tag:"SALE",emoji:"🌫️",category:"Home"},
  {id:59, name:"Linen Duvet Cover",     price:89.99, oldPrice:null,  rating:4.8,reviews:654, tag:"NEW", emoji:"🛏️",category:"Home"},
  {id:60, name:"Cast Iron Skillet",     price:54.99, oldPrice:69.99, rating:4.9,reviews:3210,tag:"HOT", emoji:"🍳",category:"Home"},
  {id:61, name:"Macramé Wall Art",      price:49.99, oldPrice:null,  rating:4.6,reviews:412, tag:null,  emoji:"🖼️",category:"Home"},
  {id:62, name:"Air Purifier HEPA",     price:129.99,oldPrice:159.99,rating:4.8,reviews:2100,tag:"SALE",emoji:"💨",category:"Home"},
  {id:63, name:"Wooden Serving Board",  price:34.99, oldPrice:null,  rating:4.7,reviews:543, tag:"NEW", emoji:"🪵",category:"Home"},
  {id:64, name:"Espresso Machine",      price:219.99,oldPrice:279.99,rating:4.9,reviews:1870,tag:"HOT", emoji:"☕",category:"Home"},
  {id:65, name:"Velvet Throw Blanket",  price:44.99, oldPrice:59.99, rating:4.8,reviews:1120,tag:"SALE",emoji:"🧣",category:"Home"},
  {id:66, name:"Smart Plant Pot",       price:39.99, oldPrice:null,  rating:4.5,reviews:760, tag:"NEW", emoji:"🌿",category:"Home"},
  {id:67, name:"Compact Blender",       price:64.99, oldPrice:84.99, rating:4.7,reviews:1543,tag:"SALE",emoji:"🥤",category:"Home"},
  // ── Batch 3 ────────────────────────────────────────────────
  {id:68, name:"Ankle Strap Heels",     price:89.99, oldPrice:109.99,rating:4.6,reviews:743, tag:"NEW", emoji:"👠",category:"Footwear"},
  {id:69, name:"Waterproof Hiking Boot",price:154.99,oldPrice:184.99,rating:4.8,reviews:1321,tag:"HOT", emoji:"🥾",category:"Footwear"},
  {id:70, name:"Knit Sneakers",         price:74.99, oldPrice:null,  rating:4.5,reviews:612, tag:null,  emoji:"👟",category:"Footwear"},
  {id:71, name:"Oxford Derby Shoes",    price:134.99,oldPrice:164.99,rating:4.7,reviews:489, tag:"SALE",emoji:"👞",category:"Footwear"},
  {id:72, name:"Flip-Flop Sandals",     price:24.99, oldPrice:null,  rating:4.4,reviews:2310,tag:null,  emoji:"🩴",category:"Footwear"},
  {id:73, name:"Collagen Booster Serum",price:54.99, oldPrice:69.99, rating:4.9,reviews:3120,tag:"HOT", emoji:"💉",category:"Beauty"},
  {id:74, name:"Micellar Cleansing Water",price:16.99,oldPrice:null, rating:4.7,reviews:2450,tag:"NEW", emoji:"💧",category:"Beauty"},
  {id:75, name:"Lip Gloss Trio Pack",   price:22.99, oldPrice:29.99, rating:4.5,reviews:1230,tag:"SALE",emoji:"💋",category:"Beauty"},
  {id:76, name:"Charcoal Face Mask",    price:18.99, oldPrice:null,  rating:4.6,reviews:1870,tag:null,  emoji:"🖤",category:"Beauty"},
  {id:77, name:"Volumising Shampoo",    price:21.99, oldPrice:27.99, rating:4.6,reviews:2100,tag:"SALE",emoji:"🚿",category:"Beauty"},
  {id:78, name:"Nail Polish Set 12pc",  price:27.99, oldPrice:null,  rating:4.5,reviews:980, tag:"NEW", emoji:"💅",category:"Beauty"},
  {id:79, name:"Contour Palette Pro",   price:38.99, oldPrice:49.99, rating:4.8,reviews:1640,tag:"HOT", emoji:"🎨",category:"Beauty"},
  {id:80, name:"Noise-Cancel Earbuds",  price:129.99,oldPrice:159.99,rating:4.9,reviews:4870,tag:"SALE",emoji:"🎵",category:"Tech"},
  {id:81, name:"Foldable Drone 4K",     price:299.99,oldPrice:379.99,rating:4.7,reviews:1120,tag:"HOT", emoji:"🚁",category:"Tech"},
  {id:82, name:"Bluetooth Speaker Pro", price:69.99, oldPrice:89.99, rating:4.8,reviews:3210,tag:"SALE",emoji:"🔊",category:"Tech"},
  {id:83, name:"Portable Power Bank",   price:44.99, oldPrice:54.99, rating:4.7,reviews:5430,tag:null,  emoji:"🔋",category:"Tech"},
  {id:84, name:"Smart Ring Health",     price:199.99,oldPrice:249.99,rating:4.6,reviews:876, tag:"NEW", emoji:"💍",category:"Tech"},
  {id:85, name:"Gaming Mouse RGB",      price:54.99, oldPrice:69.99, rating:4.8,reviews:4120,tag:"SALE",emoji:"🖱️",category:"Tech"},
  {id:86, name:"Curved Monitor 27in",   price:349.99,oldPrice:419.99,rating:4.9,reviews:2340,tag:"HOT", emoji:"🖥️",category:"Tech"},
  {id:87, name:"Tablet Stand Aluminium",price:32.99, oldPrice:null,  rating:4.7,reviews:1890,tag:"NEW", emoji:"📱",category:"Tech"},
  {id:88, name:"Graphic Hoodie",        price:54.99, oldPrice:null,  rating:4.5,reviews:1120,tag:"NEW", emoji:"🧥",category:"Fashion"},
  {id:89, name:"Satin Blouse",          price:44.99, oldPrice:59.99, rating:4.6,reviews:654, tag:"SALE",emoji:"👚",category:"Fashion"},
  {id:90, name:"Denim Jacket Classic",  price:89.99, oldPrice:109.99,rating:4.7,reviews:1230,tag:"HOT", emoji:"🧥",category:"Fashion"},
  {id:91, name:"Pleated Mini Skirt",    price:39.99, oldPrice:null,  rating:4.5,reviews:432, tag:null,  emoji:"👗",category:"Fashion"},
  {id:92, name:"Striped Polo Shirt",    price:34.99, oldPrice:44.99, rating:4.4,reviews:378, tag:"SALE",emoji:"👕",category:"Fashion"},
  {id:93, name:"Wool Peacoat",          price:179.99,oldPrice:219.99,rating:4.8,reviews:560, tag:"HOT", emoji:"🧥",category:"Fashion"},
  {id:94, name:"Lace Bodysuit",         price:49.99, oldPrice:null,  rating:4.6,reviews:720, tag:"NEW", emoji:"👗",category:"Fashion"},
  {id:95, name:"Crossbody Leather Bag", price:99.99, oldPrice:124.99,rating:4.8,reviews:1430,tag:"SALE",emoji:"👜",category:"Fashion"},
  {id:96, name:"Pull-Up Bar",           price:37.99, oldPrice:49.99, rating:4.7,reviews:2870,tag:"SALE",emoji:"🏋️",category:"Sports"},
  {id:97, name:"Knee Compression Sleeve",price:19.99,oldPrice:null,  rating:4.6,reviews:1654,tag:null,  emoji:"🦵",category:"Sports"},
  {id:98, name:"Soccer Cleats",         price:84.99, oldPrice:104.99,rating:4.7,reviews:987, tag:"SALE",emoji:"⚽",category:"Sports"},
  {id:99, name:"Badminton Racket Set",  price:54.99, oldPrice:null,  rating:4.5,reviews:543, tag:"NEW", emoji:"🏸",category:"Sports"},
  {id:100,name:"Gym Gloves",            price:17.99, oldPrice:22.99, rating:4.6,reviews:2100,tag:"SALE",emoji:"🧤",category:"Sports"},
  {id:101,name:"Sleeping Bag -10°C",    price:89.99, oldPrice:114.99,rating:4.8,reviews:765, tag:"HOT", emoji:"🛌",category:"Sports"},
  {id:102,name:"Balance Board",         price:44.99, oldPrice:59.99, rating:4.6,reviews:890, tag:"SALE",emoji:"🏄",category:"Sports"},
  {id:103,name:"AB Wheel Roller",       price:19.99, oldPrice:null,  rating:4.5,reviews:1870,tag:null,  emoji:"⚙️",category:"Sports"},
  {id:104,name:"Blackout Curtains",     price:59.99, oldPrice:74.99, rating:4.7,reviews:1230,tag:"SALE",emoji:"🪟",category:"Home"},
  {id:105,name:"Stainless Steel Pan",   price:49.99, oldPrice:64.99, rating:4.8,reviews:2100,tag:"HOT", emoji:"🍳",category:"Home"},
  {id:106,name:"Floating Wall Shelves", price:34.99, oldPrice:null,  rating:4.6,reviews:876, tag:"NEW", emoji:"🪵",category:"Home"},
  {id:107,name:"Robot Vacuum Cleaner",  price:249.99,oldPrice:299.99,rating:4.8,reviews:3120,tag:"SALE",emoji:"🤖",category:"Home"},
  {id:108,name:"Memory Foam Pillow",    price:44.99, oldPrice:54.99, rating:4.9,reviews:4320,tag:"HOT", emoji:"🛏️",category:"Home"},
  {id:109,name:"Indoor Plant Set 3pc",  price:37.99, oldPrice:null,  rating:4.7,reviews:654, tag:"NEW", emoji:"🌱",category:"Home"},
  {id:110,name:"Digital Kitchen Scale", price:22.99, oldPrice:29.99, rating:4.7,reviews:2870,tag:"SALE",emoji:"⚖️",category:"Home"},
  {id:111,name:"Canister Vacuum",       price:119.99,oldPrice:149.99,rating:4.6,reviews:1120,tag:"SALE",emoji:"🌀",category:"Home"},
  {id:112,name:"Throw Pillow Set 4pc",  price:49.99, oldPrice:null,  rating:4.5,reviews:543, tag:null,  emoji:"🛋️",category:"Home"},
  {id:113,name:"Insulated Travel Mug",  price:27.99, oldPrice:34.99, rating:4.8,reviews:3450,tag:"HOT", emoji:"☕",category:"Home"},
  {id:114,name:"Raised Garden Bed",     price:79.99, oldPrice:99.99, rating:4.6,reviews:432, tag:"SALE",emoji:"🌻",category:"Home"},
  {id:115,name:"Spice Rack Organiser",  price:24.99, oldPrice:null,  rating:4.7,reviews:1090,tag:"NEW", emoji:"🫙",category:"Home"},
  {id:116,name:"Oak Side Table",        price:94.99, oldPrice:119.99,rating:4.7,reviews:312, tag:"SALE",emoji:"🪑",category:"Home"},
  {id:117,name:"Platform Loafers",      price:79.99, oldPrice:null,  rating:4.6,reviews:543, tag:"NEW", emoji:"👟",category:"Footwear"},
  {id:118,name:"Cold Brew Kit",         price:34.99, oldPrice:44.99, rating:4.8,reviews:2100,tag:"SALE",emoji:"🧋",category:"Home"},
];

const TAG_COLOR  = {HOT:"#FF6B35",NEW:"#7C3AED",SALE:"#059669"};
const TAG_BG     = {HOT:"#FF6B3522",NEW:"#7C3AED22",SALE:"#05966922"};
const CATEGORIES = ["All","Footwear","Beauty","Tech","Fashion","Sports","Home"];
const BOT_REPLIES = [
  "Thanks for reaching out! How can I help you today? 😊",
  "I'll look into that right away for you!",
  "Our team typically responds within 2 hours. Anything else I can help with?",
  "Great question! Let me check that for you.",
  "Your order is being processed. You'll get a confirmation shortly! 📦",
  "We offer free returns within 30 days of purchase.",
  "I understand your concern. Let me escalate this to a specialist.",
];

/* ── State ─────────────────────────────────────────────────────── */
let cart = {};
let wishlist = new Set();
let shopCat = "All";
let shopSort = "featured";
let shopPrice = 300;
let shopSearch = "";
let shopPage = 1;
const PAGE_SIZE = 12;
let shopLoading = false;
let shopObserver = null;
let botIdx = 0;
let isSignup = false;
let isLoggedIn = false;
let currentUser = null;
let toastTimer = null;
let bannerIdx = 0;
let bannerTimer = null;
let spInited = false;
let recentViewed = [];
const BANNERS = [
  {title:"Summer Sale",   sub:"Up to 60% off everything",  accent:"#FF6B35", emoji:"☀️", bg:"linear-gradient(135deg,#1a0a00,#2d1200)"},
  {title:"New Arrivals",  sub:"Fresh drops every week",    accent:"#7C3AED", emoji:"✨", bg:"linear-gradient(135deg,#0d0818,#1a1032)"},
  {title:"Flash Deals",   sub:"24 hours only — hurry!",    accent:"#059669", emoji:"⚡", bg:"linear-gradient(135deg,#001a0e,#002d1a)"},
];

/* ── Mobile menu ──────────────────────────────────────────────── */
function toggleMenu() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobile-menu');
  h.classList.toggle('open');
  m.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ── Sidebar toggle (mobile) ──────────────────────────────────── */
function toggleSidebar() {
  const d = document.getElementById('sidebar-drawer');
  const a = document.getElementById('sidebar-arrow');
  d.classList.toggle('open');
  a.textContent = d.classList.contains('open') ? '▴' : '▾';
}

/* ── Toast ─────────────────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  t.style.animation = 'none';
  void t.offsetWidth;
  t.style.animation = 'toast 2.5s ease forwards';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.style.display = 'none', 2500);
}

/* ── Navigation ────────────────────────────────────────────────── */
function showPage(id) {
  closeMenu();
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('page-' + id);
  if (el) { el.classList.add('active'); el.classList.remove('page'); void el.offsetWidth; el.classList.add('page'); }
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === id);
  });
  document.querySelectorAll('.mobile-nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.mpage === id);
  });
  window.scrollTo({top:0, behavior:'smooth'});
  if (id === 'cart')     renderCart();
  if (id === 'wishlist') renderWishlist();
  if (id === 'chat')     initChat();
  if (id === 'profile')  renderProfile();
  if (id === 'shop')     renderShop();
  if (id === 'search') {
    if (!spInited) { spInited = true; initSearchPage(); }
    spRenderHistory();
  }
}

/* ── Scroll effects ────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.getElementById('navbar').classList.toggle('scrolled', y > 30);
  const btn = document.getElementById('back-top');
  btn.style.display = y > 400 ? 'flex' : 'none';
}, {passive:true});

/* ── Product card builder ──────────────────────────────────── */
function makeCard(p, wishBtn=true) {
  const inWish = wishlist.has(p.id);
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5-Math.round(p.rating));
  return `
    <div class="pcard card-hover">
      <div class="pcard-img" onclick="openProduct(${p.id})" style="cursor:pointer">
        ${p.tag ? `<span class="pcard-tag" style="background:${TAG_BG[p.tag]};color:${TAG_COLOR[p.tag]};border:1px solid ${TAG_COLOR[p.tag]}44">${p.tag}</span>` : ''}
        ${wishBtn ? `<span class="pcard-wish" onclick="event.stopPropagation();toggleWish(${p.id})">${inWish?'❤️':'🤍'}</span>` : ''}
        <span style="font-size:56px;pointer-events:none">${p.emoji}</span>
      </div>
      <div class="pcard-body" onclick="openProduct(${p.id})" style="cursor:pointer">
        <div class="pcard-cat">${p.category}</div>
        <div class="pcard-name">${p.name}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:0">
          <span class="pcard-stars">${stars}</span>
          <span class="pcard-reviews">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="pcard-footer" onclick="event.stopPropagation()">
          <div>
            <span class="pcard-price">$${p.price}</span>
            ${p.oldPrice ? `<span class="pcard-old">$${p.oldPrice}</span>` : ''}
          </div>
          <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>`;
}

/* ── Cart ──────────────────────────────────────────────────────── */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  cart[id] = cart[id] ? {...cart[id], qty: cart[id].qty+1} : {product:p, qty:1};
  updateBadges(); showToast(`✅ "${p.name}" added to cart`);
}
function removeFromCart(id) {
  const name = cart[id] ? cart[id].product.name : '';
  delete cart[id]; updateBadges();
  if (document.getElementById('page-cart').classList.contains('active')) renderCart();
  showToast(`🗑️ "${name}" removed`);
}
function updateQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) { removeFromCart(id); return; }
  updateBadges();
  if (document.getElementById('page-cart').classList.contains('active')) renderCart();
}
function clearCart() {
  cart = {}; updateBadges();
  if (document.getElementById('page-cart').classList.contains('active')) renderCart();
  showToast('🗑️ Cart cleared');
}
function renderCart() {
  const items = Object.values(cart);
  const el = document.getElementById('cart-items');
  if (items.length === 0) {
    el.innerHTML = `<div style="text-align:center;padding:100px 20px"><div style="font-size:80px;margin-bottom:24px">🛒</div><div style="font-family:var(--serif);font-size:32px;font-style:italic;margin-bottom:12px">Your cart is empty</div><div style="font-size:14px;color:var(--muted)">Add some products to get started</div></div>`;
    document.getElementById('o-subtotal').textContent = '$0.00';
    document.getElementById('o-shipping').textContent = '$5.99';
    document.getElementById('o-tax').textContent = '$0.00';
    document.getElementById('o-total').textContent = '$0.00';
    document.getElementById('checkout-btn') && (document.querySelector('.checkout-btn').textContent = 'Checkout');
    return;
  }
  el.innerHTML = items.map(({product:p, qty}) => `
    <div class="cart-item">
      <div class="cart-item-img">${p.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-cat">${p.category}</div>
        <div class="qty-row">
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="updateQty(${p.id},-1)">−</button>
            <span class="qty-val">${qty}</span>
            <button class="qty-btn plus" onclick="updateQty(${p.id},1)">+</button>
          </div>
          <span class="item-total">$${(p.price*qty).toFixed(2)}</span>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${p.id})">✕</button>
    </div>`).join('');
  const sub = items.reduce((s,{product:p,qty}) => s+p.price*qty, 0);
  const ship = sub > 100 ? 0 : 5.99;
  const tax = sub*0.08;
  const tot = sub+ship+tax;
  document.getElementById('o-subtotal').textContent = '$'+sub.toFixed(2);
  document.getElementById('o-shipping').innerHTML = ship===0 ? '<span class="free">FREE 🎉</span>' : '$'+ship.toFixed(2);
  document.getElementById('o-tax').textContent = '$'+tax.toFixed(2);
  document.getElementById('o-total').textContent = '$'+tot.toFixed(2);
  document.querySelector('.checkout-btn').textContent = `Checkout — $${tot.toFixed(2)}`;
  document.getElementById('shipping-hint').textContent = ship > 0 ? `Add $${(100-sub).toFixed(2)} more for free shipping` : '';
}

/* ── Wishlist ──────────────────────────────────────────────────── */
function toggleWish(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  if (wishlist.has(id)) { wishlist.delete(id); showToast('💔 Removed from wishlist'); }
  else { wishlist.add(id); showToast(`❤️ "${p.name}" saved`); }
  updateBadges();
  if (document.getElementById('page-wishlist').classList.contains('active')) renderWishlist();
}
function addFromWish(id) {
  addToCart(id); wishlist.delete(id); updateBadges(); renderWishlist();
}
function addAllToCart() {
  wishlist.forEach(id => addToCart(id));
  wishlist.clear(); updateBadges(); renderWishlist(); showToast('🛒 All items moved to cart!');
}
function renderWishlist() {
  const items = PRODUCTS.filter(p => wishlist.has(p.id));
  const grid = document.getElementById('wish-grid');
  const empty = document.getElementById('wish-empty');
  const addAll = document.getElementById('add-all-btn');
  if (items.length === 0) { grid.innerHTML = ''; empty.style.display = 'block'; addAll.style.display = 'none'; return; }
  empty.style.display = 'none';
  addAll.style.display = items.length > 1 ? 'inline-block' : 'none';
  grid.innerHTML = items.map(p => {
    const stars = '★'.repeat(Math.round(p.rating))+'☆'.repeat(5-Math.round(p.rating));
    return `
      <div class="pcard card-hover">
        <div class="pcard-img">
          ${p.tag ? `<span class="pcard-tag" style="background:${TAG_BG[p.tag]};color:${TAG_COLOR[p.tag]};border:1px solid ${TAG_COLOR[p.tag]}44">${p.tag}</span>` : ''}
          <span style="position:absolute;top:12px;right:12px;width:32px;height:32px;border-radius:10px;background:#00000066;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer" onclick="toggleWish(${p.id})">❌</span>
          <span style="font-size:56px">${p.emoji}</span>
        </div>
        <div class="pcard-body">
          <div class="pcard-cat">${p.category}</div>
          <div class="pcard-name">${p.name}</div>
          <div style="display:flex;align-items:center;gap:6px"><span class="pcard-stars">${stars}</span><span class="pcard-reviews">(${p.reviews.toLocaleString()})</span></div>
          <div class="pcard-footer">
            <div><span class="pcard-price">$${p.price}</span>${p.oldPrice?`<span class="pcard-old">$${p.oldPrice}</span>`:''}</div>
            <button class="add-btn" onclick="addFromWish(${p.id})">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ── Badges ────────────────────────────────────────────────────── */
function updateBadges() {
  const cc = Object.values(cart).reduce((s,{qty})=>s+qty,0);
  const wc = wishlist.size;
  const cb = document.getElementById('cart-badge');
  const wb = document.getElementById('wish-badge');
  const cd = document.getElementById('nav-cart-dot');
  const wd = document.getElementById('nav-wish-dot');
  const mcb = document.getElementById('m-cart-badge');
  const mwb = document.getElementById('m-wish-badge');
  cb.textContent = cc; cb.style.display = cc ? 'inline' : 'none';
  wb.textContent = wc; wb.style.display = wc ? 'inline' : 'none';
  cd.textContent = cc; cd.style.display = cc ? 'flex' : 'none';
  wd.textContent = wc; wd.style.display = wc ? 'flex' : 'none';
  if(mcb){mcb.textContent=cc;mcb.style.display=cc?'inline':'none';}
  if(mwb){mwb.textContent=wc;mwb.style.display=wc?'inline':'none';}
}

/* ── Shop ──────────────────────────────────────────────────────── */
function filterShop(cat) { shopCat = cat; showPage('shop'); }
function onSortChange(val) { shopSort = val; shopPage = 1; renderShop(); }
function onPriceChange(val) { shopPrice = +val; document.getElementById('price-label').textContent = val; shopPage = 1; renderShop(); }
function getFiltered() {
  let arr = PRODUCTS.filter(p =>
    (shopCat === 'All' || p.category === shopCat) &&
    p.price <= shopPrice &&
    (!shopSearch || p.name.toLowerCase().includes(shopSearch.toLowerCase()))
  );
  if (shopSort==='price-asc')  arr.sort((a,b)=>a.price-b.price);
  if (shopSort==='price-desc') arr.sort((a,b)=>b.price-a.price);
  if (shopSort==='rating')     arr.sort((a,b)=>b.rating-a.rating);
  if (shopSort==='reviews')    arr.sort((a,b)=>b.reviews-a.reviews);
  return arr;
}
function renderShop() {
  // sidebar
  document.getElementById('cat-filters').innerHTML = CATEGORIES.map(c =>
    `<div class="filter-link ${c===shopCat?'active':''}" onclick="setShopCat('${c}')">${c}</div>`
  ).join('');
  const filtered = getFiltered();
  document.getElementById('shop-title').textContent = shopCat==='All' ? 'All Products' : shopCat;
  document.getElementById('shop-count').textContent = filtered.length + ' products';
  const visible = [];
  for (let i=0; i<shopPage*PAGE_SIZE; i++) visible.push({...filtered[i%filtered.length], _key:i});
  document.getElementById('shop-grid').innerHTML = filtered.length===0
    ? `<div style="grid-column:1/-1;text-align:center;padding:80px 0;color:var(--muted)"><div style="font-size:56px;margin-bottom:16px">🔍</div><div style="font-family:var(--serif);font-size:24px;font-style:italic">No products found</div></div>`
    : visible.map(p => makeCard(p)).join('');
  const sentinel = document.getElementById('load-sentinel');
  const allSeen  = document.getElementById('all-seen');
  const hasMore  = shopPage < 6 && filtered.length > 0;
  sentinel.style.display = hasMore ? 'block' : 'none';
  allSeen.classList.toggle('hidden', hasMore || filtered.length===0);
  // observer
  if (shopObserver) shopObserver.disconnect();
  if (hasMore) {
    shopObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !shopLoading) {
        shopLoading = true;
        setTimeout(() => { shopPage++; shopLoading = false; renderShop(); }, 700);
      }
    }, {threshold:.1});
    shopObserver.observe(sentinel);
  }
}
function setShopCat(cat) { shopCat = cat; shopPage = 1; renderShop(); }

/* ── Advanced Search ───────────────────────────────────────────── */
let searchHistory = JSON.parse(localStorage.getItem('szHistory')||'[]');
let searchActive = false;
let searchFocusIdx = -1;
let searchResults = [];

/* Fuzzy scorer: returns 0–100, higher = better match */
function fuzzyScore(str, query) {
  str = str.toLowerCase(); query = query.toLowerCase().trim();
  if (!query) return 0;
  if (str === query) return 100;
  if (str.startsWith(query)) return 90;
  if (str.includes(query)) return 75;
  // token match: every query word appears somewhere
  const tokens = query.split(/\s+/);
  const tokenHits = tokens.filter(t => str.includes(t)).length;
  if (tokenHits === tokens.length) return 60;
  if (tokenHits > 0) return 40 * (tokenHits / tokens.length);
  // character sequence match
  let qi = 0;
  for (let c of str) { if (c === query[qi]) qi++; }
  if (qi === query.length) return 25;
  return 0;
}

function highlightMatch(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:#FF6B3544;color:#FF6B35;border-radius:3px;padding:0 2px">$1</mark>');
}

function runSearch(query) {
  query = query.trim();
  if (!query) return [];
  return PRODUCTS
    .map(p => {
      const nameScore = fuzzyScore(p.name, query) * 1.5;
      const catScore  = fuzzyScore(p.category, query) * 0.8;
      const tagScore  = p.tag ? fuzzyScore(p.tag, query) * 0.5 : 0;
      const score = Math.max(nameScore, catScore, tagScore);
      return { ...p, _score: score };
    })
    .filter(p => p._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, 8);
}

function renderDropdown(query) {
  const dd = document.getElementById('search-dropdown');
  const q = (query||'').trim();

  if (!q) {
    let html = '';
    if (searchHistory.length) {
      html += `<div style="padding:10px 14px 4px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#555">Recent</div>`;
      html += searchHistory.slice(0,5).map((h,i) =>
        `<div class="sd-item" data-idx="${i}" data-type="history" onclick="applySearch('${h.replace(/'/g,"\\'").replace(/"/g,'&quot;')}')">
          <span style="font-size:16px;opacity:.4">🕐</span>
          <span style="flex:1;font-size:13px">${h}</span>
          <span onmousedown="removeHistory(event,'${h.replace(/'/g,"\\'").replace(/"/g,'&quot;')}')" style="opacity:.3;font-size:11px;padding:2px 6px">✕</span>
        </div>`
      ).join('');
    }
    html += `<div style="padding:10px 14px 4px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#555">Categories</div>`;
    html += `<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px 14px 14px">` +
      ['Footwear','Beauty','Tech','Fashion','Sports','Home'].map(c =>
        `<span onmousedown="filterShop('${c}')" style="background:#FF6B3518;border:1px solid #FF6B3533;border-radius:20px;padding:5px 13px;font-size:12px;font-weight:600;color:#FF6B35;cursor:pointer">${c}</span>`
      ).join('') + `</div>`;
    dd.innerHTML = html || '';
    dd.style.display = 'block';
    return;
  }

  searchResults = runSearch(q);
  searchFocusIdx = -1;

  if (!searchResults.length) {
    dd.innerHTML = `<div style="padding:24px;text-align:center;color:#555;font-size:13px">😕 No results for "<b style="color:#f2eee9">${q}</b>"</div>`;
    dd.style.display = 'block';
    return;
  }

  const TAG_C = {HOT:'#FF6B35',NEW:'#7C3AED',SALE:'#059669'};
  let html = `<div style="padding:10px 14px 4px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#555">${searchResults.length} result${searchResults.length!==1?'s':''}</div>`;

  searchResults.forEach((p, i) => {
    html += `
      <div class="sd-item" data-idx="${i}" data-type="product" onmousedown="applySearchProduct(${p.id})" style="border-bottom:1px solid #161616">
        <div style="width:44px;height:44px;background:#161616;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">${p.emoji}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;margin-bottom:2px">${highlightMatch(p.name,q)}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-size:11px;color:#555">${p.category}</span>
            ${p.tag?`<span style="font-size:9px;font-weight:800;padding:2px 6px;border-radius:10px;background:${TAG_C[p.tag]}22;color:${TAG_C[p.tag]}">${p.tag}</span>`:''}
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:14px;font-weight:700;color:#FF6B35">$${p.price}</div>
          ${p.oldPrice?`<div style="font-size:10px;color:#555;text-decoration:line-through">$${p.oldPrice}</div>`:''}
        </div>
      </div>`;
  });

  const safeQ = q.replace(/'/g,"\\'").replace(/"/g,'&quot;');
  html += `<div onmousedown="applySearch('${safeQ}')" style="padding:12px 14px;text-align:center;font-size:12px;font-weight:600;color:#FF6B35;cursor:pointer;border-top:1px solid #1e1e1e">See all results for "${q}" →</div>`;
  dd.innerHTML = html;
  dd.style.display = 'block';
}

function applySearch(q) {
  document.getElementById('search-input').value = q;
  shopSearch = q;
  shopPage = 1;
  saveHistory(q);
  document.getElementById('search-dropdown').style.display = 'none';
  showPage('shop');
}

function applySearchProduct(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  if (!p) return;
  saveHistory(p.name);
  shopSearch = p.name;
  shopPage = 1;
  document.getElementById('search-dropdown').style.display = 'none';
  document.getElementById('search-input').value = p.name;
  showPage('shop');
}

function saveHistory(q) {
  if (!q.trim()) return;
  searchHistory = [q, ...searchHistory.filter(h=>h!==q)].slice(0,10);
  try { localStorage.setItem('szHistory', JSON.stringify(searchHistory)); } catch(e){}
}

function removeHistory(e, q) {
  e.stopPropagation();
  searchHistory = searchHistory.filter(h=>h!==q);
  try { localStorage.setItem('szHistory', JSON.stringify(searchHistory)); } catch(e){}
  renderDropdown(document.getElementById('search-input').value);
}

function clearSearchInput() {
  document.getElementById('search-input').value = '';
  document.getElementById('search-clear').style.display = 'none';
  shopSearch = '';
  renderDropdown('');
}

function toggleSearch() {
  const box = document.getElementById('search-box');
  const tog = document.getElementById('search-toggle');
  const isHidden = box.classList.contains('hidden');
  box.classList.toggle('hidden', !isHidden);
  tog.classList.toggle('hidden', isHidden);
  if (isHidden) {
    const inp = box.querySelector('input');
    inp.focus();
    renderDropdown(inp.value);
  } else {
    document.getElementById('search-dropdown').style.display = 'none';
  }
}

function closeSearch() {
  document.getElementById('search-box').classList.add('hidden');
  document.getElementById('search-toggle').classList.remove('hidden');
  document.getElementById('search-input').value = '';
  document.getElementById('search-clear').style.display = 'none';
  document.getElementById('search-dropdown').style.display = 'none';
  shopSearch = '';
}

function onSearchInput(val) {
  document.getElementById('search-clear').style.display = val ? 'inline' : 'none';
  shopSearch = val;
  shopPage = 1;
  renderDropdown(val);
  if (val) showPage('shop');
}

function onSearchBlur() {
  setTimeout(() => {
    document.getElementById('search-dropdown').style.display = 'none';
    if (!document.getElementById('search-input').value) closeSearch();
  }, 300);
}

function searchKeydown(e) {
  const dd = document.getElementById('search-dropdown');
  const items = [...dd.querySelectorAll('.sd-item[data-type="product"], .sd-item[data-type="history"]')];
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    searchFocusIdx = Math.min(searchFocusIdx+1, items.length-1);
    items.forEach((el,i) => el.classList.toggle('sd-focused', i===searchFocusIdx));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    searchFocusIdx = Math.max(searchFocusIdx-1, 0);
    items.forEach((el,i) => el.classList.toggle('sd-focused', i===searchFocusIdx));
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (searchFocusIdx >= 0 && items[searchFocusIdx]) {
      items[searchFocusIdx].dispatchEvent(new MouseEvent('mousedown'));
    } else {
      const q = document.getElementById('search-input').value.trim();
      if (q) { saveHistory(q); applySearch(q); }
    }
  } else if (e.key === 'Escape') {
    closeSearch();
  }
}

/* ── Product Detail ────────────────────────────────────────────── */
const PRODUCT_DETAILS = {
  desc: {
    1:  {long:"Premium sneakers engineered for all-day comfort. Features a responsive air-cushioned sole, breathable mesh upper, and reinforced heel for lasting support. Ideal for casual wear, light running, or standing all day.", features:[{icon:"💨",t:"Air Cushion Sole",s:"Shock-absorbing responsive foam"},{icon:"🧵",t:"Mesh Upper",s:"Breathable & lightweight material"},{icon:"🔒",t:"Heel Lock",s:"Reinforced ankle support"},{icon:"♻️",t:"Eco Materials",s:"30% recycled content"}]},
    2:  {long:"A complete matte lip collection with 6 rich shades. Long-wearing formula stays vibrant for up to 12 hours without fading or feathering. Infused with vitamin E for a moisturising matte finish.", features:[{icon:"💧",t:"12-Hour Wear",s:"No feathering or fading"},{icon:"🌿",t:"Vitamin E",s:"Moisturising matte formula"},{icon:"🎨",t:"6 Shades",s:"From nude to deep berry"},{icon:"🐰",t:"Cruelty-Free",s:"PETA certified"}]},
    3:  {long:"Industry-leading active noise cancellation blocks up to 98% of ambient sound. 30-hour battery life, multipoint Bluetooth pairing, and a foldable design make these the perfect everyday companion.", features:[{icon:"🔇",t:"ANC Pro",s:"Blocks 98% ambient noise"},{icon:"🔋",t:"30-Hr Battery",s:"USB-C fast charge"},{icon:"📡",t:"Multipoint BT",s:"Connect 2 devices at once"},{icon:"🎙️",t:"4-Mic Array",s:"Crystal-clear call quality"}]},
    default:{long:"Carefully crafted for quality, durability, and everyday use. This product combines premium materials with thoughtful design to deliver outstanding performance and style.", features:[{icon:"⭐",t:"Premium Quality",s:"Rigorously tested materials"},{icon:"🎯",t:"Precision Design",s:"Engineered for daily use"},{icon:"🛡️",t:"Durable Build",s:"Built to last"},{icon:"✅",t:"Warranty",s:"1-year manufacturer warranty"}]}
  }
};

const REVIEWS_DATA = [
  {name:"Sarah M.",   avatar:"#FF6B35", stars:5, date:"May 2, 2026",   verified:true,  title:"Absolutely love these!",              body:"Exceeded all my expectations. The quality is outstanding and they arrived quickly. Would definitely buy again — already recommended to three friends.",helpful:42},
  {name:"James K.",   avatar:"#7C3AED", stars:4, date:"Apr 18, 2026",  verified:true,  title:"Great value for money",               body:"Really solid product. Took a day to get used to but now I use it every day. Packaging was excellent and delivery was super fast.",helpful:28},
  {name:"Priya T.",   avatar:"#059669", stars:5, date:"Apr 5, 2026",   verified:false, title:"Better than the photos suggest",      body:"The colour in real life is even nicer. Fits perfectly and feels premium. I was a little hesitant given the price but it was worth every penny.",helpful:19},
  {name:"Carlos R.",  avatar:"#3B82F6", stars:3, date:"Mar 29, 2026",  verified:true,  title:"Good but shipping was slow",          body:"Product itself is great — exactly as described. Took a bit longer to arrive than expected but customer support was responsive when I enquired.",helpful:11},
  {name:"Emily W.",   avatar:"#EC4899", stars:5, date:"Mar 14, 2026",  verified:true,  title:"My new favourite purchase this year", body:"I've bought a lot of products online and this is genuinely one of the best. The attention to detail is incredible. Five stars without hesitation.",helpful:67},
];

const QA_DATA = [
  {q:"Does this come in different sizes?",                    a:"Yes! Available in sizes XS–XXL. Please refer to our size guide on the product page for exact measurements.", asker:"Alex B.", date:"Apr 20, 2026", answerer:"shopZest Support"},
  {q:"Is this product suitable for sensitive skin?",          a:"Absolutely. All materials are hypoallergenic and dermatologist-tested. No harsh chemicals used in manufacturing.", asker:"Nina R.", date:"Apr 8, 2026",  answerer:"shopZest Support"},
  {q:"Can I return it if it doesn't fit?",                    a:"Of course! We offer free returns within 30 days of delivery. Just initiate through your account dashboard.", asker:"Tom H.",  date:"Mar 22, 2026", answerer:"shopZest Support"},
  {q:"What is the estimated delivery time for international?",a:"International shipping typically takes 7–14 business days. Express options are available at checkout.", asker:"Mei L.",  date:"Mar 10, 2026", answerer:"shopZest Support"},
];

let selectedSize  = null;
let selectedColor = null;
let reviewStarHover = 0;
let reviewStarPick  = 0;

function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  // Track recently viewed
  recentViewed = [p, ...recentViewed.filter(x => x.id !== id)].slice(0, 8);

  // Breadcrumb
  document.getElementById('pd-breadcrumb').innerHTML =
    `<span class="link" onclick="showPage('home')" style="color:var(--muted)">Home</span>
     <span style="color:var(--dim)">›</span>
     <span class="link" onclick="filterShop('${p.category}')" style="color:var(--muted)">${p.category}</span>
     <span style="color:var(--dim)">›</span>
     <span style="color:var(--text)">${p.name}</span>`;

  // Image panel
  const imgs = [p.emoji, p.emoji, p.emoji, p.emoji];
  document.getElementById('pd-img-main').innerHTML = `<span id="pd-main-emoji" style="font-size:140px">${p.emoji}</span>`;
  document.getElementById('pd-thumbs').innerHTML = imgs.map((e,i) =>
    `<div class="pd-thumb ${i===0?'active':''}" onclick="selectThumb(this,'${e}')">${e}</div>`
  ).join('');

  // Tag
  document.getElementById('pd-tag').innerHTML = p.tag
    ? `<span style="display:inline-block;background:${TAG_BG[p.tag]};color:${TAG_COLOR[p.tag]};border:1px solid ${TAG_COLOR[p.tag]}44;border-radius:20px;padding:4px 12px;font-size:11px;font-weight:800;letter-spacing:.5px;margin-bottom:10px">${p.tag}</span>`
    : '';

  // Title & meta
  document.getElementById('pd-title').textContent = p.name;
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5-Math.round(p.rating));
  document.getElementById('pd-meta').innerHTML =
    `<span class="pd-stars">${stars}</span>
     <span class="pd-rating-val">${p.rating}</span>
     <span class="pd-review-count" onclick="switchTab('reviews',document.querySelector('[data-tab=reviews]'))">(${p.reviews.toLocaleString()} reviews)</span>
     <span class="pd-sold">🛒 ${(Math.floor(p.reviews/12)).toLocaleString()} sold</span>`;

  // Price
  const disc = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0;
  document.getElementById('pd-price-row').innerHTML =
    `<span class="pd-price">$${p.price}</span>
     ${p.oldPrice ? `<span class="pd-old">$${p.oldPrice}</span><span class="pd-discount">−${disc}%</span>` : ''}`;

  // Description
  const det = PRODUCT_DETAILS.desc[id] || PRODUCT_DETAILS.desc.default;
  document.getElementById('pd-desc').textContent = det.long;

  // Options
  selectedSize = null; selectedColor = null;
  const sizes  = ['XS','S','M','L','XL','XXL'];
  const colors = ['⚫','⚪','🔵','🔴','🟢'];
  document.getElementById('pd-options').innerHTML = `
    <div class="pd-options" style="margin-bottom:20px">
      <div class="pd-opt-label">Size</div>
      <div class="pd-opt-chips">${sizes.map(s=>`<div class="pd-chip" onclick="selectChip(this,'size','${s}')">${s}</div>`).join('')}</div>
    </div>
    <div class="pd-options">
      <div class="pd-opt-label">Colour</div>
      <div class="pd-opt-chips">${colors.map(c=>`<div class="pd-chip" onclick="selectChip(this,'color','${c}')" style="font-size:20px;padding:5px 12px">${c}</div>`).join('')}</div>
    </div>`;

  // CTA
  const inWish = wishlist.has(id);
  document.getElementById('pd-cta').innerHTML =
    `<button class="pd-cart-btn" onclick="addToCart(${id})">🛒 Add to Cart — $${p.price}</button>
     <div class="pd-wish-btn" id="pd-wish-btn" onclick="toggleWish(${id});renderWishIcon(${id})">${inWish?'❤️':'🤍'}</div>`;

  // Tabs — reset to description
  switchTab('desc', document.querySelector('[data-tab="desc"]'));
  buildDescTab(det);
  buildReviewsTab(p);
  buildQATab(p);

  // Similar
  const similar = PRODUCTS.filter(x => x.category === p.category && x.id !== id).slice(0,4);
  document.getElementById('pd-similar').innerHTML = similar.map(x => makeCard(x)).join('');

  showPage('product');
}

function renderWishIcon(id) {
  const btn = document.getElementById('pd-wish-btn');
  if (btn) btn.innerHTML = wishlist.has(id) ? '❤️' : '🤍';
}

function selectThumb(el, emoji) {
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('pd-main-emoji').textContent = emoji;
}

function selectChip(el, type, val) {
  const group = el.closest('.pd-options').querySelectorAll('.pd-chip');
  group.forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  if (type === 'size')  selectedSize  = val;
  if (type === 'color') selectedColor = val;
}

function switchTab(name, btn) {
  document.querySelectorAll('.pd-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pd-tab-panel').forEach(p => p.style.display = 'none');
  if (btn) btn.classList.add('active');
  const panel = document.getElementById('tab-' + name);
  if (panel) { panel.style.display = 'block'; panel.classList.add('active'); }
}

function buildDescTab(det) {
  document.getElementById('tab-desc').innerHTML = `
    <div style="font-size:14px;color:#aaa;line-height:1.75;margin-bottom:24px">${det.long}</div>
    <div class="pd-features">
      ${det.features.map(f=>`
        <div class="pd-feature">
          <div class="pd-feature-icon">${f.icon}</div>
          <div><div class="pd-feature-title">${f.t}</div><div class="pd-feature-sub">${f.s}</div></div>
        </div>`).join('')}
    </div>
    <div style="margin-top:24px;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px 24px">
      <div style="font-family:var(--serif);font-size:18px;font-style:italic;margin-bottom:14px">Specifications</div>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        ${[['Material','Premium blend, ethically sourced'],['Weight','380g'],['Dimensions','Standard'],['Country of Origin','Portugal'],['Warranty','12 months'],['SKU','SZ-'+Math.floor(Math.random()*90000+10000)]].map(([k,v])=>`
          <tr style="border-bottom:1px solid var(--border)">
            <td style="padding:10px 12px;color:var(--muted);width:40%">${k}</td>
            <td style="padding:10px 12px;font-weight:500">${v}</td>
          </tr>`).join('')}
      </table>
    </div>`;
}

function buildReviewsTab(p) {
  const dist = [72,15,8,3,2]; // % for 5→1 stars
  const barsHtml = dist.map((pct,i) => `
    <div class="pd-bar-row">
      <span class="pd-bar-label">${5-i}★</span>
      <div class="pd-bar-track"><div class="pd-bar-fill" style="width:${pct}%"></div></div>
      <span class="pd-bar-pct">${pct}%</span>
    </div>`).join('');

  const bigStars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5-Math.round(p.rating));
  const reviewsHtml = REVIEWS_DATA.map(r => {
    const rs = '★'.repeat(r.stars) + '☆'.repeat(5-r.stars);
    return `
      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-info">
            <div class="reviewer-avatar" style="background:${r.avatar}">${r.name[0]}</div>
            <div>
              <div class="reviewer-name">${r.name}</div>
              <div class="reviewer-date">${r.date}</div>
            </div>
          </div>
          ${r.verified ? `<div class="review-verified">✅ Verified purchase</div>` : ''}
        </div>
        <div class="review-stars">${rs}</div>
        <div class="review-title">${r.title}</div>
        <div class="review-body">${r.body}</div>
        <div class="review-helpful">Helpful? <button class="helpful-btn" onclick="this.textContent='👍 '+( parseInt(this.textContent.replace(/\D/g,''))+1 )">👍 ${r.helpful}</button></div>
      </div>`;
  }).join('');

  document.getElementById('tab-reviews').innerHTML = `
    <div class="pd-review-summary">
      <div class="pd-big-rating">
        <div class="pd-big-num">${p.rating}</div>
        <div class="pd-big-stars">${bigStars}</div>
        <div class="pd-big-count">${p.reviews.toLocaleString()} reviews</div>
      </div>
      <div>${barsHtml}</div>
    </div>
    ${reviewsHtml}
    <div class="write-review">
      <h3>Write a Review</h3>
      <div class="pd-opt-label">Your Rating</div>
      <div class="star-picker" id="star-picker">
        ${[1,2,3,4,5].map(n=>`<span data-n="${n}" onmouseover="hoverStar(${n})" onmouseout="hoverStar(0)" onclick="pickStar(${n})">★</span>`).join('')}
      </div>
      <input class="input" style="width:100%;margin-bottom:12px" placeholder="Review title"/>
      <textarea class="input" rows="4" style="width:100%;resize:vertical;margin-bottom:12px" placeholder="Share your experience…"></textarea>
      <button class="add-btn" style="padding:10px 24px;font-size:13px" onclick="showToast('✅ Review submitted! (demo)')">Submit Review</button>
    </div>`;
}

function buildQATab(p) {
  const qaHtml = QA_DATA.map(q => `
    <div class="qa-item">
      <div class="qa-q"><span class="qa-q-badge">Q</span>${q.q}</div>
      <div class="qa-a">${q.a}</div>
      <div class="qa-meta">Asked by ${q.asker} · ${q.date} · Answered by ${q.answerer}</div>
    </div>`).join('');

  document.getElementById('tab-qa').innerHTML = `
    ${qaHtml}
    <div class="ask-box">
      <h3>Ask a Question</h3>
      <input class="input" style="width:100%;margin-bottom:12px" placeholder="Type your question…"/>
      <button class="add-btn" style="padding:10px 24px;font-size:13px" onclick="showToast('✅ Question submitted! (demo)')">Submit Question</button>
    </div>`;
}

function hoverStar(n) {
  reviewStarHover = n;
  paintStars();
}
function pickStar(n) {
  reviewStarPick = n;
  paintStars();
}
function paintStars() {
  const active = reviewStarHover || reviewStarPick;
  document.querySelectorAll('#star-picker span').forEach(s => {
    s.classList.toggle('lit', +s.dataset.n <= active);
  });
}
function initHero() {
  const dotsEl = document.getElementById('banner-dots');
  dotsEl.innerHTML = BANNERS.map((_,i) => `<div class="banner-dot" onclick="setBanner(${i})" style="width:${i===0?'24':'7'}px;background:${i===0?BANNERS[0].accent:'#333'}"></div>`).join('');
  setBanner(0);
  bannerTimer = setInterval(() => setBanner((bannerIdx+1)%BANNERS.length), 4000);
}
function setBanner(i) {
  bannerIdx = i;
  const b = BANNERS[i];
  const hero = document.getElementById('hero');
  hero.style.background = b.bg;
  document.getElementById('hero-glow').style.background = `radial-gradient(circle,${b.accent}18 0%,transparent 70%)`;
  document.getElementById('hero-badge').style.background = b.accent+'22';
  document.getElementById('hero-badge').style.border = `1px solid ${b.accent}55`;
  document.getElementById('hero-badge').style.color = b.accent;
  document.getElementById('hero-title').textContent = b.title;
  document.getElementById('hero-sub').textContent = b.sub;
  document.getElementById('hero-emoji').textContent = b.emoji;
  document.querySelectorAll('.banner-dot').forEach((d,idx) => {
    d.style.width = idx===i ? '24px' : '7px';
    d.style.background = idx===i ? b.accent : '#333';
  });
}

/* ── Home grids ────────────────────────────────────────────────── */
function renderHome() {
  const featured = PRODUCTS.filter(p=>p.tag).slice(0,8);
  const trending = [...PRODUCTS].sort((a,b)=>b.rating-a.rating).slice(0,8);
  document.getElementById('home-featured').innerHTML = featured.map(p=>makeCard(p)).join('');
  document.getElementById('home-trending').innerHTML = trending.map(p=>makeCard(p)).join('');
}

/* ── Chat ──────────────────────────────────────────────────────── */
let chatInit = false;
function initChat() {
  if (chatInit) return; chatInit = true;
  appendBotMsg("Hi there! 👋 Welcome to shopZest support. How can I help you today?");
}
function appendBotMsg(text) {
  const t = new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});
  const el = document.getElementById('chat-messages');
  el.insertAdjacentHTML('beforeend', `
    <div class="msg-wrap bot chat-msg">
      <div class="msg-sender">🤖 Support Agent</div>
      <div class="bubble bot">${text}</div>
      <div class="msg-time">${t}</div>
    </div>`);
  el.scrollTop = el.scrollHeight;
}
function appendUserMsg(text) {
  const t = new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});
  const el = document.getElementById('chat-messages');
  el.insertAdjacentHTML('beforeend', `
    <div class="msg-wrap user chat-msg">
      <div class="bubble user">${text}</div>
      <div class="msg-time">${t} <span style="color:var(--green)">✓✓</span></div>
    </div>`);
  el.scrollTop = el.scrollHeight;
}
function showTyping() {
  const el = document.getElementById('chat-messages');
  el.insertAdjacentHTML('beforeend', `
    <div class="typing-wrap" id="typing-ind">
      <div class="typing-label">🤖 Support Agent is typing…</div>
      <div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>
    </div>`);
  el.scrollTop = el.scrollHeight;
}
function hideTyping() { const t = document.getElementById('typing-ind'); if (t) t.remove(); }
function sendMessage() {
  const inp = document.getElementById('chat-input');
  const txt = inp.value.trim(); if (!txt) return;
  appendUserMsg(txt); inp.value = ''; updateSendBtn();
  showTyping();
  setTimeout(() => {
    hideTyping();
    appendBotMsg(BOT_REPLIES[botIdx++ % BOT_REPLIES.length]);
  }, 900 + Math.random()*700);
}
function chatKeydown(e) { if (e.key==='Enter'&&!e.shiftKey) { e.preventDefault(); sendMessage(); } }
function setInput(val) {
  document.getElementById('chat-input').value = val; updateSendBtn();
  document.querySelectorAll('.quick-btn').forEach(b => b.classList.toggle('active', b.textContent===val));
}
function updateSendBtn() {
  const has = document.getElementById('chat-input').value.trim().length > 0;
  const btn = document.getElementById('send-btn');
  btn.textContent = has ? '➤' : '🎤';
  btn.classList.toggle('idle', !has);
}

/* ── Auth ──────────────────────────────────────────────────────── */
function toggleAuthMode() {
  isSignup = !isSignup;
  document.getElementById('name-field').style.display = isSignup ? 'block' : 'none';
  document.getElementById('forgot-row').style.display = isSignup ? 'none' : 'block';
  document.getElementById('auth-btn').textContent = isSignup ? 'Create Account' : 'Log In';
  document.getElementById('auth-sub').textContent = isSignup ? 'Create your account' : 'Welcome back!';
  document.getElementById('auth-switch').innerHTML = isSignup
    ? 'Already have an account? <span onclick="toggleAuthMode()">Log In</span>'
    : 'Don\'t have an account? <span onclick="toggleAuthMode()">Sign Up</span>';
}
function doAuth() {
  const email = document.getElementById('inp-email').value.trim();
  const pass  = document.getElementById('inp-pass').value.trim();
  const name  = document.getElementById('inp-name').value.trim();
  if (!email || !pass || (isSignup && !name)) { showToast('⚠️ Please fill all fields'); return; }
  currentUser = {name: name || email.split('@')[0], email};
  isLoggedIn = true;
  showToast(isSignup ? '🎉 Account created!' : '✅ Welcome back!');
  renderProfile();
}
function doLogout() {
  isLoggedIn = false; currentUser = null;
  document.getElementById('auth-view').style.display = 'block';
  document.getElementById('profile-view').style.display = 'none';
  document.getElementById('inp-email').value = '';
  document.getElementById('inp-pass').value = '';
  document.getElementById('inp-name').value = '';
  showToast('👋 Logged out');
}
function togglePass() {
  const inp = document.getElementById('inp-pass');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}
function renderProfile() {
  if (isLoggedIn && currentUser) {
    document.getElementById('auth-view').style.display = 'none';
    document.getElementById('profile-view').style.display = 'block';
    document.getElementById('profile-avatar').textContent = currentUser.name[0].toUpperCase();
    document.getElementById('profile-name').textContent = currentUser.name;
    document.getElementById('profile-email').textContent = currentUser.email;
  } else {
    document.getElementById('auth-view').style.display = 'block';
    document.getElementById('profile-view').style.display = 'none';
  }
}

/* ── Search Page ───────────────────────────────────────────────── */
const TRENDING_SEARCHES = ['Wireless Earbuds','Sneakers','Serum Kit','Smart Watch','Yoga Mat','Running Shoes','Mechanical Keyboard','Canvas Backpack','Night Cream','Espresso Machine'];
const FLASH_KEYWORDS    = ['SALE items','Under $30','Top Rated','New Arrivals','Best Sellers','Free Shipping','HOT deals','4-star+'];

let spFilter   = 'All';
let spQuery    = '';
let spTabOpen  = 'text';
let cameraStream = null;

function initSearchPage() {
  // Popular grid
  const popular = [...PRODUCTS].sort((a,b) => b.reviews - a.reviews).slice(0, 8);
  document.getElementById('sp-popular').innerHTML = popular.map(p => makeCard(p)).join('');

  // Trending
  document.getElementById('sp-trending-list').innerHTML = TRENDING_SEARCHES.map((t,i) => `
    <div class="sp-trending-item" onclick="spSearch('${t}')">
      <div class="sp-trending-rank ${i<3?'top':''}">${i+1}</div>
      <span style="flex:1;font-size:13px">${t}</span>
      <span style="font-size:11px;color:var(--muted)">↗</span>
    </div>`).join('');

  document.getElementById('sp-flash-list').innerHTML = FLASH_KEYWORDS.map(k => `
    <div class="sp-trending-item" onclick="spSearch('${k}')">
      <span style="font-size:16px">⚡</span>
      <span style="flex:1;font-size:13px">${k}</span>
    </div>`).join('');

  // Top rated
  const topRated = [...PRODUCTS].sort((a,b) => b.rating - a.rating).slice(0, 8);
  document.getElementById('sp-top-rated').innerHTML = topRated.map(p => makeCard(p)).join('');

  // Visual tab how-it-works (HTML uses template literal in page HTML directly)
  spRenderHistory();

  // Recent products
  spRenderRecentProducts();
}

function spOnInput(val) {
  spQuery = val;
  document.getElementById('sp-clear').style.display = val ? 'inline' : 'none';
  if (val.trim()) {
    spSwitchTab('text', document.querySelector('[data-stab="text"]'));
    spRunSearch(val);
  } else {
    spShowDefault(true);
  }
}

function spKeydown(e) {
  if (e.key === 'Enter') spSearch(document.getElementById('sp-input').value);
  if (e.key === 'Escape') spClear();
}

function spSearch(q) {
  if (!q.trim()) return;
  document.getElementById('sp-input').value = q;
  spQuery = q;
  document.getElementById('sp-clear').style.display = 'inline';
  saveHistory(q);
  spSwitchTab('text', document.querySelector('[data-stab="text"]'));
  spRunSearch(q);
}

function spRunSearch(q) {
  spShowDefault(false);
  let results = PRODUCTS
    .map(p => ({ ...p, _score: Math.max(fuzzyScore(p.name,q)*1.5, fuzzyScore(p.category,q)*0.8, p.tag?fuzzyScore(p.tag,q)*0.5:0) }))
    .filter(p => p._score > 0)
    .sort((a,b) => b._score - a._score);

  if (spFilter !== 'All') results = results.filter(p => p.category === spFilter);

  const meta = document.getElementById('sp-result-meta');
  const grid = document.getElementById('sp-results');
  const none = document.getElementById('sp-no-results');

  if (results.length === 0) {
    grid.innerHTML = '';
    none.style.display = 'block';
    meta.textContent = '';
  } else {
    none.style.display = 'none';
    meta.textContent = `${results.length} result${results.length!==1?'s':''} for "${q}"`;
    grid.innerHTML = results.map(p => makeCard(p)).join('');
  }
}

function spSetFilter(cat, el) {
  spFilter = cat;
  document.querySelectorAll('.sp-filter').forEach(f => f.classList.remove('active'));
  el.classList.add('active');
  if (spQuery) spRunSearch(spQuery);
}

function spClear() {
  spQuery = '';
  document.getElementById('sp-input').value = '';
  document.getElementById('sp-clear').style.display = 'none';
  document.getElementById('sp-result-meta').textContent = '';
  document.getElementById('sp-results').innerHTML = '';
  document.getElementById('sp-no-results').style.display = 'none';
  spShowDefault(true);
}

function spShowDefault(show) {
  document.getElementById('sp-default-view').style.display = show ? 'block' : 'none';
}

function spSwitchTab(name, btn) {
  spTabOpen = name;
  document.querySelectorAll('[data-stab]').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  ['text','trending','history','visual'].forEach(n => {
    const p = document.getElementById('sp-panel-'+n);
    if (p) p.style.display = n === name ? 'block' : 'none';
  });
  if (name === 'history') spRenderHistory();
}

function spRenderHistory() {
  const list = document.getElementById('sp-history-list');
  if (!list) return;
  if (!searchHistory.length) {
    list.innerHTML = '<div style="text-align:center;padding:32px 0;color:var(--muted);font-size:13px">No recent searches</div>';
    return;
  }
  list.innerHTML = searchHistory.map(h => `
    <div class="sp-history-item">
      <span style="font-size:16px;opacity:.4">🕐</span>
      <span class="sp-history-text" onclick="spSearch('${h.replace(/'/g,"\\'")}')">  ${h}</span>
      <span class="sp-history-del" onmousedown="spRemoveHistory(event,'${h.replace(/'/g,"\\'")}')">✕</span>
    </div>`).join('');
  spRenderRecentProducts();
}

function spRemoveHistory(e, q) {
  e.stopPropagation();
  searchHistory = searchHistory.filter(h => h !== q);
  try { localStorage.setItem('szHistory', JSON.stringify(searchHistory)); } catch(e){}
  spRenderHistory();
}

function spClearHistory() {
  searchHistory = [];
  try { localStorage.setItem('szHistory', JSON.stringify([])); } catch(e){}
  spRenderHistory();
}

function spRenderRecentProducts() {
  const el = document.getElementById('sp-recent-products');
  if (!el) return;
  const items = recentViewed.length ? recentViewed.slice(0,4) : PRODUCTS.slice(0,4);
  el.innerHTML = items.map(p => makeCard(p)).join('');
}

/* ── Image / Camera Search ────────────────────────────────────── */
function spSetMode(mode) {
  const panel = document.getElementById('sp-img-panel');
  const camMode = document.getElementById('sp-camera-mode');
  const upMode  = document.getElementById('sp-upload-mode');

  panel.style.display = 'block';
  camMode.style.display = mode === 'camera' ? 'block' : 'none';
  upMode.style.display  = mode === 'upload' ? 'block' : 'none';

  document.querySelectorAll('.sp-mode-btn').forEach(b => b.classList.remove('active'));
  const modeBtn = document.getElementById('sp-mode-' + mode);
  if (modeBtn) modeBtn.classList.add('active');

  if (mode === 'camera') spStartCamera();

  // Scroll to panel
  panel.scrollIntoView({ behavior:'smooth', block:'center' });
}

function spCloseImgPanel() {
  document.getElementById('sp-img-panel').style.display = 'none';
  spStopCamera();
  document.querySelectorAll('.sp-mode-btn').forEach(b => b.classList.remove('active'));
}

async function spStartCamera() {
  const video = document.getElementById('sp-video');
  const startBtn = document.getElementById('sp-start-cam');
  const snapBtn  = document.getElementById('sp-snap-btn');
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode:'environment' } });
    video.srcObject = cameraStream;
    video.style.display = 'block';
    startBtn.style.display = 'none';
    snapBtn.style.display  = 'inline-block';
  } catch(err) {
    showToast('📷 Camera access denied — please allow in browser settings');
  }
}

function spStopCamera() {
  if (cameraStream) { cameraStream.getTracks().forEach(t => t.stop()); cameraStream = null; }
  const video = document.getElementById('sp-video');
  if (video) { video.srcObject = null; video.style.display = 'none'; }
  const snapBtn = document.getElementById('sp-snap-btn');
  const startBtn = document.getElementById('sp-start-cam');
  if (snapBtn)  snapBtn.style.display  = 'none';
  if (startBtn) startBtn.style.display = 'inline-block';
}

function spSnap() {
  const video  = document.getElementById('sp-video');
  const canvas = document.getElementById('sp-canvas');
  const preview = document.getElementById('sp-cam-preview');
  const img   = document.getElementById('sp-cam-img');
  canvas.width  = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  img.src = canvas.toDataURL('image/jpeg');
  preview.style.display = 'block';
  spStopCamera();
  showToast('📸 Photo captured! Running visual search…');
  setTimeout(() => spVisualResults(), 1400);
}

function spHandleDrop(e) {
  e.preventDefault();
  e.currentTarget.style.borderColor = 'var(--dim)';
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) spHandleFile(file);
}

function spHandleFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    document.getElementById('sp-upload-img').src  = ev.target.result;
    document.getElementById('sp-upload-name').textContent = file.name + ' · ' + (file.size/1024).toFixed(1) + ' KB';
    document.getElementById('sp-upload-preview').style.display = 'block';
    document.getElementById('sp-img-search-btn').style.display = 'inline-block';
  };
  reader.readAsDataURL(file);
}

function spImageSearch() {
  showToast('🔍 Analysing image…');
  setTimeout(() => spVisualResults(), 1600);
}

function spVisualResults() {
  spCloseImgPanel();
  spSwitchTab('text', document.querySelector('[data-stab="text"]'));
  spShowDefault(false);
  const randomCat = CATEGORIES[Math.floor(Math.random() * (CATEGORIES.length - 1)) + 1];
  const results = PRODUCTS.filter(p => p.category === randomCat).slice(0, 8);
  document.getElementById('sp-result-meta').textContent = `Visual search — ${results.length} similar products found`;
  document.getElementById('sp-results').innerHTML = results.map(p => makeCard(p)).join('');
  document.getElementById('sp-no-results').style.display = 'none';
  showToast('✅ Visual search complete!');
}

/* ── Voice Search ─────────────────────────────────────────────── */
function spStartVoice() {
  if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
    showToast('🎤 Voice search not supported in this browser');
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR();
  rec.lang = 'en-US'; rec.interimResults = false;
  showToast('🎤 Listening… speak now');
  rec.start();
  rec.onresult = (e) => {
    const t = e.results[0][0].transcript;
    document.getElementById('sp-input').value = t;
    spSearch(t);
    showToast('🎤 Heard: "' + t + '"');
  };
  rec.onerror = () => showToast('🎤 Could not hear clearly — try again');
}

/* ── Init ──────────────────────────────────────────────────────── */
initHero();
renderHome();
renderShop();



