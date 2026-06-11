const dummyUser = { username: "Kelompok 3", email: "kelompok3@gmail.com", password: "12345678", phone: "" };

const festivalData = {
  international: [
    { name: "Coachella 2026", place: "Indio, USA", date: "10-12 & 17-19 Apr 2026", price: "From US$649", lineup: "Sabrina Carpenter, Justin Bieber, Karol G", genre: "Pop, hip-hop, EDM, indie", summary: "A bucket-list desert festival with huge pop headliners, fashion moments, art installations, and two packed weekends in California.", ticketUrl: "https://www.coachella.com/", officialUrl: "https://www.coachella.com/", image: "assets/International/coachella.PNG" },
    { name: "Tomorrowland Belgium 2026", place: "Boom, Belgium", date: "17-19 & 24-26 Jul 2026", price: "From €129", lineup: "Martin Garrix, Calvin Harris, The Chainsmokers", genre: "EDM, house, techno", summary: "One of the world's biggest electronic music festivals, known for cinematic stages, DreamVille, and massive global EDM crowds.", ticketUrl: "https://belgium.tomorrowland.com/", officialUrl: "https://belgium.tomorrowland.com/", image: "assets/International/tommorowland.PNG" },
    { name: "Lollapalooza", place: "Chicago, USA", date: "30 Jul - 2 Aug 2026", price: "From US$399", lineup: "Pop, rock, hip-hop, EDM acts", genre: "Pop, rock, hip-hop, EDM", summary: "A major multi-genre city festival with global editions, big-name artists, and a classic Grant Park festival atmosphere.", ticketUrl: "https://www.lollapalooza.com/", officialUrl: "https://www.lollapalooza.com/", image: "assets/International/lollapalgza.PNG" },
    { name: "Glastonbury", place: "Somerset, UK", date: "2026 fallow year", price: "No 2026 tickets", lineup: "Legendary past performers: Adele, David Bowie, Coldplay", genre: "Rock, pop, electronic, performing arts", summary: "A legendary UK festival, but the official site says 2026 is a fallow year, so this is listed as reference only.", ticketUrl: "", officialUrl: "https://www.glastonburyfestivals.co.uk/", image: "assets/International/glastonbury.PNG" },
    { name: "EDC Las Vegas", place: "Las Vegas, USA", date: "May 2026", price: "From US$339", lineup: "Tiesto, Armin van Buuren, Illenium", genre: "EDM", summary: "A massive electronic dance carnival with neon stages, rides, fireworks, and one of America's biggest EDM crowds.", ticketUrl: "https://lasvegas.electricdaisycarnival.com/", officialUrl: "https://lasvegas.electricdaisycarnival.com/", image: "assets/International/edclasvegas.jpeg" },
    { name: "Ultra Music Festival Miami", place: "Miami, USA", date: "Mar 2026", price: "From US$399.95", lineup: "Hardwell, David Guetta, Afrojack", genre: "EDM, house, techno", summary: "Miami's iconic electronic festival, famous for high-energy DJ sets and a global dance music audience.", ticketUrl: "https://ultramusicfestival.com/", officialUrl: "https://ultramusicfestival.com/", image: "assets/International/ultramusicfestivalmiami.PNG" },
    { name: "Burning Man", place: "Black Rock Desert, Nevada", date: "Aug-Sep 2026", price: "From US$675", lineup: "Art, music, camps, survival culture", genre: "Art, experimental, electronic", summary: "More than a music festival: Burning Man is an art-driven temporary city built around creativity, community, and radical self-expression.", ticketUrl: "https://burningman.org/", officialUrl: "https://burningman.org/", image: "assets/International/burningman.WEBP" }
  ],
  local: [
    { name: "Hammersonic Festival 2026", place: "Jakarta", date: "2-3 May 2026", price: "Rp 550.000", lineup: "Parkway Drive, Jinjer, Counterparts, Of Mice & Men, Dashboard Confessional, Hawthorne Heights, New Found Glory", genre: "Rock, metal, hardcore", summary: "Indonesia's loudest rock and metal festival, bringing international heavy bands and a massive Jakarta crowd.", ticketUrl: "https://www.hammersonic.com/tickets.html", officialUrl: "https://www.hammersonic.com/", image: "assets/Local/hammersonic.jpeg" },
    { name: "LaLaLa Festival 2026", place: "JIExpo Jakarta", date: "22-23 Aug 2026", price: "From Rp 1.250.000", lineup: "Rex Orange County, Steve Lacy, Kodaline, Two Door Cinema Club, Summer Salt, Lee Seung Yoon", genre: "Indie, pop, alternative", summary: "A dreamy Jakarta festival for indie and pop fans, mixing international names with a relaxed festival mood.", ticketUrl: "https://www.lalalafest.com/", officialUrl: "https://www.lalalafest.com/", image: "assets/Local/lalalafest.PNG" },
    { name: "Soundrenaline 2026", place: "Jakarta, Makassar, Palembang, Yogyakarta, Bandung", date: "Jul-Nov 2026", price: "From Rp 350.000", lineup: "Phase 1 lineup revealed gradually", genre: "Multi-genre", summary: "A multi-city Indonesian festival tour with different local scenes, big stages, and genre-spanning lineups.", ticketUrl: "https://www.soundrenaline.id/", officialUrl: "https://www.soundrenaline.id/", image: "assets/Local/soundrenaline.PNG" },
    { name: "Boardang Boarding Fest 2026", place: "Edutown Arena, BSD Tangerang", date: "4-5 Jul 2026", price: "From Rp 145.000", lineup: "Local multi-genre artists", genre: "Indie, electronic, acoustic", summary: "A two-day local festival with a travel-inspired concept, outdoor stages, food stalls, and a relaxed weekend vibe.", ticketUrl: "https://www.boardangboarding.com/", officialUrl: "https://www.boardangboarding.com/", image: "assets/Local/boardangboarding.jpeg" },
    { name: "Allo Bank Festival 2026", place: "Indonesia Arena GBK", date: "20 Jun 2026", price: "From Rp 490.000", lineup: "CORTIS, Mahalini, Rizky Febian", genre: "Pop, K-pop, Indonesian pop", summary: "A big Jakarta arena festival combining Indonesian pop acts with international/K-pop energy and official ticketing.", ticketUrl: "https://ticket.allobankfest.com/", officialUrl: "https://ticket.allobankfest.com/", image: "assets/Local/allobank.PNG" },
    { name: "SOD Festival 2026", place: "Surabaya", date: "1-2 Aug 2026", price: "From Rp 150.000", lineup: "Multi-genre nostalgia, pop, indie", genre: "Pop, indie, nostalgia", summary: "A Surabaya festival focused on multi-genre nostalgia and easygoing crowd energy.", ticketUrl: "https://sodfestival.com/", officialUrl: "https://sodfestival.com/", image: "assets/Local/sodfestival.PNG" }
  ]
};

const merchandiseData = [
  { name: "NIGAKU Desert Tee", nameId: "Kaus Desert NIGAKU", place: "Unisex", placeId: "Uniseks", date: "All Size", dateId: "Semua Ukuran", price: "Rp 180.000", image: "assets/Merchandise/nigakudeserttee.png" },
  { name: "Festival Tote Bag", nameId: "Tas Tote Festival", place: "Canvas", placeId: "Kanvas", date: "Limited", dateId: "Terbatas", price: "Rp 95.000", image: "assets/Merchandise/Festival Tote Bag.png" },
  { name: "Wristband Pack", nameId: "Paket Gelang Festival", place: "3 Pieces", placeId: "3 Buah", date: "Glow", dateId: "Menyala", price: "Rp 70.000", image: "assets/Merchandise/Wristband Pack.png" },
  { name: "NIGAKU Cap", nameId: "Topi NIGAKU", place: "Adjustable", placeId: "Bisa Diatur", date: "Green", dateId: "Hijau", price: "Rp 135.000", image: "assets/Merchandise/NIGAKU Cap.png" },
  { name: "Lineup Poster", nameId: "Poster Lineup", place: "18 x 24", placeId: "18 x 24", date: "Collectible", dateId: "Koleksi", price: "Rp 120.000", image: "assets/Merchandise/Lineup Poster.png" },
  { name: "Festival Hoodie", nameId: "Hoodie Festival", place: "Oversized", placeId: "Oversized", date: "Pre-order", dateId: "Praorder", price: "Rp 320.000", image: "assets/Merchandise/Festival Hoodie.png" }
];

const ticketOptions = {
  "Coachella 2026": [{ name: "General Admission", price: "US$649", note: "Weekend pass" }, { name: "GA + Shuttle", price: "US$779", note: "Weekend pass with shuttle" }, { name: "VIP", price: "US$1,399", note: "VIP weekend pass" }],
  "Tomorrowland Belgium 2026": [{ name: "Day Pass", price: "€129", note: "Single-day access" }, { name: "Full Madness Pass", price: "€304", note: "Full weekend access" }, { name: "DreamVille Package", price: "€476", note: "Festival + camping package" }],
  "Lollapalooza": [{ name: "4-Day GA", price: "US$399", note: "General admission" }, { name: "4-Day GA+", price: "US$735", note: "GA with added comfort" }, { name: "4-Day VIP", price: "US$1,599", note: "VIP access" }],
  "Glastonbury": [{ name: "2026 Tickets", price: "Not available", note: "2026 is a fallow year" }],
  "EDC Las Vegas": [{ name: "GA", price: "US$339", note: "General admission" }, { name: "GA+", price: "US$519", note: "Enhanced GA" }, { name: "VIP", price: "US$969", note: "VIP experience" }],
  "Ultra Music Festival Miami": [{ name: "GA", price: "US$399.95", note: "General admission" }, { name: "Premium GA", price: "US$649.95", note: "Premium access" }, { name: "VIP", price: "US$1,499.95", note: "VIP access" }],
  "Burning Man": [{ name: "Main Sale Ticket", price: "US$675", note: "Standard ticket" }, { name: "FOMO Ticket", price: "US$1,500", note: "Higher-tier ticket" }, { name: "Vehicle Pass", price: "US$150", note: "Required for vehicles" }],
  "Hammersonic Festival 2026": [{ name: "2-Day Pass", price: "Rp 550.000", note: "Free standing, excludes tax and services" }],
  "LaLaLa Festival 2026": [{ name: "Daily Pass", price: "Rp 1.250.000", note: "Single-day access" }, { name: "2-Day Pass", price: "Rp 2.200.000", note: "Full festival access" }],
  "Soundrenaline 2026": [{ name: "City Pass", price: "Rp 350.000", note: "Selected city access" }, { name: "Festival Pass", price: "Rp 650.000", note: "Festival access" }],
  "Boardang Boarding Fest 2026": [{ name: "Daily Pass", price: "Rp 145.000", note: "Single-day access" }, { name: "2-Day Pass", price: "Rp 250.000", note: "Full weekend access" }],
  "Allo Bank Festival 2026": [{ name: "Festival Pass", price: "From Rp 490.000", note: "Official ticketing" }],
  "SOD Festival 2026": [{ name: "Daily Pass", price: "Rp 150.000", note: "Single-day access" }, { name: "2-Day Pass", price: "Rp 250.000", note: "Full festival access" }]
};

const hotels = {
  "Coachella 2026": "Embassy Suites by Hilton La Quinta Hotel & Spa", "Tomorrowland Belgium 2026": "Hotel Ter Elst, Edegem", "Lollapalooza": "Palmer House, a Hilton Hotel", "Glastonbury": "The Swan Hotel, Wells", "EDC Las Vegas": "Aliante Casino + Hotel + Spa", "Ultra Music Festival Miami": "InterContinental Miami", "Burning Man": "Whitney Peak Hotel, Reno",
  "Hammersonic Festival 2026": "Mercure Convention Center Ancol", "LaLaLa Festival 2026": "Grand Mercure Jakarta Kemayoran", "Soundrenaline 2026": "Grand Mercure Bandung Setiabudi", "Boardang Boarding Fest 2026": "Hotel Santika Premiere ICE BSD City", "Allo Bank Festival 2026": "HARRIS Suites fX Sudirman", "SOD Festival 2026": "Four Points by Sheraton Surabaya"
};

const stageMap = { "Coachella 2026": "Coachella Stage", "Tomorrowland Belgium 2026": "Mainstage", "Hammersonic Festival 2026": "Hammer Stage", default: "Main Stage" };

const SERVICE_RATE = 0.09;
const AVAILABILITY_DATE = new Date(2026, 5, 5);
const festivalEndDates = {
  "Coachella 2026": new Date(2026, 3, 19),
  "Tomorrowland Belgium 2026": new Date(2026, 6, 26),
  "Lollapalooza": new Date(2026, 7, 2),
  "Glastonbury": new Date(2026, 0, 1),
  "EDC Las Vegas": new Date(2026, 4, 31),
  "Ultra Music Festival Miami": new Date(2026, 2, 31),
  "Burning Man": new Date(2026, 8, 30),
  "Hammersonic Festival 2026": new Date(2026, 4, 3),
  "LaLaLa Festival 2026": new Date(2026, 7, 23),
  "Soundrenaline 2026": new Date(2026, 10, 30),
  "Boardang Boarding Fest 2026": new Date(2026, 6, 5),
  "Allo Bank Festival 2026": new Date(2026, 5, 20),
  "SOD Festival 2026": new Date(2026, 7, 2)
};

const translations = {
  en: {
    navTicket: "Tickets", navMerchandise: "Merch", navGallery: "Gallery", navAbout: "About Us",
    homeEyebrow: "", homeIntro: "Next Interactive Gateway for Access to Konser Universe.",
    choiceInternationalLabel: "International", choiceInternationalTitle: "Festival World", choiceInternationalDesc: "Singapore, Tokyo, Seoul, Bangkok, and more.", choiceLocalTitle: "Festival Indonesia", choiceLocalDesc: "Jakarta, Bali, Bandung, Jogja, Surabaya, and more.",
    ticketsEyebrow: "Tickets", pickCategory: "Pick a Category", ticketHeadingInternational: "International Festivals", ticketHeadingLocal: "Local Festivals", buyTicket: "Buy Ticket", downloadTicket: "Download Ticket", buyMerch: "Buy Merch", ticketUnavailable: "Ticket link is not available for this festival.", ticketOpened: "Opening ticket page for", available: "Available", unavailable: "Unavailable", addedCheckout: "added to checkout.",
    rulesTitle: "18+ Entry and Festival Rules", rulesIntro: "This website is intended for visitors aged 18 and above.", rulesEyebrow: "Important Notice", rules: ["Tickets are personal and must match the buyer identity at entry.", "Bring a valid ID and follow the organizer security screening.", "Outside food, drinks, weapons, and illegal substances are not allowed.", "Respect other visitors, staff, artists, and venue property.", "Event schedules, gates, and refund policies can change by organizer decision."], accept: "Accept Cookies",
    officialWebsite: "Official Website", detailDate: "Date", detailLocation: "Location", detailLineup: "Lineup", ticketOptions: "Ticket Options", ticketComingSoon: "Tickets Coming Soon", ticketComingSoonDesc: "Official prices are not available yet. Please check the official website for updates.",
    checkoutEyebrow: "Checkout", checkoutFestival: "Festival", checkoutTicket: "Ticket", checkoutQty: "Quantity", checkoutService: "Service Fee", checkoutTotal: "Total", checkoutBonus: "Bonus", noBonus: "No bonus yet", freeTickets: "free ticket(s)", totalTickets: "total ticket(s)", hotelVoucher: "Hotel Voucher", hotelVoucherDesc: "4-star hotel voucher near the festival location", ticketIssued: "Ticket Issued", back: "Back", continuePayment: "Continue to Payment",
    paymentEyebrow: "Payment", paymentTitle: "Choose a Payment Method", qrisDesc: "Scan and pay with any QRIS-supported app.", scanQris: "Scan QRIS", checkStatus: "Check Status", paymentSuccess: "Payment Successful", paymentDone: "Payment Complete", redirectTicket: "Your ticket will appear in {count} seconds.", ticketBackLabel: "Ticket",
    merchEyebrow: "Official Merch", merchTitle: "Merch Festival", merchIntro: "Template merch cards for add-ons, apparel, and festival goods.",
    galleryEyebrow: "Moments", galleryTitle: "Gallery", galleryIntro: "Festival moments from the crowd, stage, lights, gates, camping area, and sunset sets.", galleryCrowd: "Crowd Wave", galleryStage: "Main Stage", galleryLight: "Light Show", galleryGate: "Festival Gate", galleryCamping: "Camping Area", gallerySunset: "Sunset Set",
    aboutEyebrow: "About Us", aboutTitle: "Your gateway to festival days worth remembering.", aboutIntro: "NIGAKU stands for Next Interactive Gateway for Access to Konser Universe. It helps festival lovers find tickets for local and international festivals in one simple place, with clear event choices and an easy path from browsing to booking.", aboutAdminLabel: "Admin", aboutPhoneLabel: "Phone",
    profileLanguage: "Language", profileTitle: "Settings", phoneLabel: "Phone number", resetPassword: "Reset Password", changeAccount: "Change Account", signOut: "Sign Out", cookiesAccepted: "Cookies accepted. Enjoy NIGAKU.", resetPasswordToast: "The reset password form can be added later.", changeAccountToast: "Choose another account to continue.", languageChanged: "Language changed to English."
  },
  id: {
    navTicket: "Tiket", navMerchandise: "Merch", navGallery: "Galeri", navAbout: "Tentang Kami",
    homeEyebrow: "", homeIntro: "Next Interactive Gateway for Access to Konser Universe.",
    choiceInternationalLabel: "Internasional", choiceInternationalTitle: "Festival Dunia", choiceInternationalDesc: "Singapura, Tokyo, Seoul, Bangkok, dan lainnya.", choiceLocalTitle: "Festival Indonesia", choiceLocalDesc: "Jakarta, Bali, Bandung, Jogja, Surabaya, dan lainnya.",
    ticketsEyebrow: "Tiket", pickCategory: "Pilih Kategori", ticketHeadingInternational: "Festival Internasional", ticketHeadingLocal: "Festival Lokal", buyTicket: "Beli Tiket", downloadTicket: "Unduh Tiket", buyMerch: "Beli Merch", ticketUnavailable: "Link tiket belum tersedia untuk festival ini.", ticketOpened: "Membuka halaman tiket untuk", available: "Tersedia", unavailable: "Tidak tersedia", addedCheckout: "ditambahkan ke checkout.",
    rulesTitle: "Akses 18+ dan Peraturan Festival", rulesIntro: "Website ini ditujukan untuk pengunjung berusia 18 tahun ke atas.", rulesEyebrow: "Pemberitahuan Penting", rules: ["Tiket bersifat pribadi dan harus sesuai dengan identitas pembeli saat masuk.", "Bawa kartu identitas yang valid dan ikuti pemeriksaan keamanan dari penyelenggara.", "Makanan, minuman, senjata, dan zat terlarang dari luar area tidak diperbolehkan.", "Hormati pengunjung lain, staf, artis, dan fasilitas venue.", "Jadwal acara, akses gerbang, dan kebijakan refund dapat berubah sesuai keputusan penyelenggara."], accept: "Terima Cookies",
    officialWebsite: "Website Resmi", detailDate: "Tanggal", detailLocation: "Lokasi", detailLineup: "Lineup", ticketOptions: "Pilihan Tiket", ticketComingSoon: "Tiket Segera Tersedia", ticketComingSoonDesc: "Harga resmi belum tersedia. Silakan cek website resmi untuk pembaruan terbaru.",
    checkoutEyebrow: "Checkout", checkoutFestival: "Festival", checkoutTicket: "Tiket", checkoutQty: "Jumlah", checkoutService: "Biaya Layanan", checkoutTotal: "Total", checkoutBonus: "Bonus", noBonus: "Belum ada bonus", freeTickets: "tiket gratis", totalTickets: "total tiket", hotelVoucher: "Voucher Hotel", hotelVoucherDesc: "Voucher hotel bintang 4 dekat lokasi festival", ticketIssued: "Tiket Terbit", back: "Kembali", continuePayment: "Lanjut ke Pembayaran",
    paymentEyebrow: "Pembayaran", paymentTitle: "Pilih Metode Pembayaran", qrisDesc: "Scan dan bayar dengan aplikasi yang mendukung QRIS.", scanQris: "Scan QRIS", checkStatus: "Cek Status", paymentSuccess: "Pembayaran Berhasil", paymentDone: "Pembayaran Selesai", redirectTicket: "Tiket kamu akan muncul dalam {count} detik.", ticketBackLabel: "Tiket",
    merchEyebrow: "Produk Resmi", merchTitle: "Merchandise", merchIntro: "Template kartu merchandise untuk add-on, pakaian, dan perlengkapan festival.",
    galleryEyebrow: "Momen", galleryTitle: "Galeri", galleryIntro: "Momen festival dari penonton, panggung, cahaya, gerbang, area kemah, dan sesi senja.", galleryCrowd: "Ombak Penonton", galleryStage: "Panggung Utama", galleryLight: "Pertunjukan Cahaya", galleryGate: "Gerbang Festival", galleryCamping: "Area Kemah", gallerySunset: "Sesi Senja",
    aboutEyebrow: "Tentang Kami", aboutTitle: "Gerbang menuju hari festival yang layak dikenang.", aboutIntro: "NIGAKU adalah Next Interactive Gateway for Access to Konser Universe. Website ini membantu pencinta festival menemukan tiket lokal dan internasional dalam satu tempat, dengan pilihan acara yang jelas dan proses pemesanan yang mudah.", aboutAdminLabel: "Admin", aboutPhoneLabel: "Nomor telepon",
    profileLanguage: "Bahasa", profileTitle: "Pengaturan", phoneLabel: "Nomor telepon", resetPassword: "Atur Ulang Password", changeAccount: "Ganti Akun", signOut: "Keluar", cookiesAccepted: "Cookie diterima. Selamat menikmati NIGAKU.", resetPasswordToast: "Form atur ulang password bisa ditambahkan nanti.", changeAccountToast: "Pilih akun lain untuk melanjutkan.", languageChanged: "Bahasa diubah ke Indonesia."
  }
};

let currentUser = readJSON("nigakuUser", dummyUser);
let activeLanguage = sessionStorage.getItem("nigakuLanguage") || "en";
let activeCategory = sessionStorage.getItem("nigakuCategory") || "international";
let selectedFestivalName = sessionStorage.getItem("nigakuFestivalName") || festivalData[activeCategory]?.[0]?.name || "Coachella 2026";
let selectedTicketIndex = Number(sessionStorage.getItem("nigakuTicketIndex") || 0);
let selectedMerchIndex = Number(sessionStorage.getItem("nigakuMerchIndex") || 0);
let signinAttempts = Number(sessionStorage.getItem("nigakuSigninAttempts") || 0);

const page = document.body.dataset.page || "home";
const routes = {
  home: "index.html",
  tickets: "tickets.html",
  detail: "festival-detail.html",
  checkout: "checkout.html",
  payment: "payment-method.html",
  qris: "qris.html",
  success: "payment-success.html",
  visual: "ticket-visual.html",
  merch: "merchandise.html",
  gallery: "gallery.html",
  about: "about.html",
  profile: "profile.html"
};
const navigationEntry = performance.getEntriesByType?.("navigation")?.[0];
if (navigationEntry?.type === "reload") sessionStorage.removeItem("nigakuTransactions");

function $(selector, root = document) { return root.querySelector(selector); }
function $$(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }
function setText(selector, value, root = document) { const el = $(selector, root); if (el) el.textContent = value ?? ""; }
function show(el) { if (el) el.classList.remove("hidden"); }
function hide(el) { if (el) el.classList.add("hidden"); }
function readJSON(key, fallback) { try { return JSON.parse(sessionStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function writeJSON(key, value) { sessionStorage.setItem(key, JSON.stringify(value)); }
function go(route) { window.location.href = route; }
function allFestivals() { return [...festivalData.international, ...festivalData.local]; }
function getFestival(name = selectedFestivalName) { return allFestivals().find((item) => item.name === name) || festivalData[activeCategory]?.[0] || festivalData.international[0]; }
function getTickets(festival = getFestival()) { return ticketOptions[festival.name] || [{ name: "General Admission", price: festival.price, note: "Festival access" }]; }
function getTicket(festival = getFestival()) { return getTickets(festival)[selectedTicketIndex] || getTickets(festival)[0]; }
function purchaseType() { return sessionStorage.getItem("nigakuPurchaseType") || "ticket"; }
function getMerchItem() { return merchandiseData[selectedMerchIndex] || merchandiseData[0]; }
function merchName(item = getMerchItem()) { return activeLanguage === "id" ? item.nameId : item.name; }
function merchDetail(item = getMerchItem()) { return `${activeLanguage === "id" ? item.placeId : item.place} - ${activeLanguage === "id" ? item.dateId : item.date}`; }
function categoryOf(festival) { return festivalData.local.includes(festival) ? "local" : "international"; }
function moneyNumber(text) {
  const raw = String(text || "");
  if (raw.includes("Rp")) return Number(raw.replace(/[^0-9]/g, "") || 0);
  const value = raw.replace(/[^0-9.]/g, "").replace(/,(?=\d{3})/g, "");
  return Number(value || 0);
}
function formatRupiah(value) { return `Rp ${Math.round(value).toLocaleString("id-ID")}`; }
function formatTicketMoney(price, value) {
  if (String(price).includes("US$")) return `US$${value.toLocaleString("en-US", { minimumFractionDigits: price.includes(".") ? 2 : 0, maximumFractionDigits: 2 })}`;
  if (String(price).includes("€")) return `€${value.toLocaleString("de-DE", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
  return formatRupiah(value);
}
function isUnavailable(festival) {
  const end = festivalEndDates[festival.name];
  return !festival.ticketUrl || festival.name === "Glastonbury" || (end && end < AVAILABILITY_DATE);
}
function ticketTotalText(ticket, qty) {
  const n = moneyNumber(ticket.price);
  if (!n) return ticket.price;
  const total = n * qty;
  const fee = Math.round(total * SERVICE_RATE);
  return formatTicketMoney(ticket.price, total + fee);
}
function merchTotalText(item, qty) {
  const n = moneyNumber(item.price);
  return n ? formatTicketMoney(item.price, n * qty) : item.price;
}
function currentTotalText() {
  const stored = sessionStorage.getItem("nigakuTotalText");
  if (stored && stored !== "-") return stored;
  if (purchaseType() === "merch") {
    const item = getMerchItem();
    const qty = Number(sessionStorage.getItem("nigakuQty") || 1);
    const total = merchTotalText(item, qty);
    sessionStorage.setItem("nigakuTotalText", total);
    return total;
  }
  const festival = getFestival();
  const ticket = getTicket(festival);
  const qty = Number(sessionStorage.getItem("nigakuQty") || 1);
  const total = ticketTotalText(ticket, qty);
  sessionStorage.setItem("nigakuTotalText", total);
  return total;
}
function heroTextClass(festival) {
  const lightText = new Set(["Tomorrowland Belgium 2026", "LaLaLa Festival 2026", "Soundrenaline 2026", "Boardang Boarding Fest 2026", "Allo Bank Festival 2026", "SOD Festival 2026", "EDC Las Vegas", "Burning Man"]);
  return lightText.has(festival.name) ? "text-light" : "text-dark";
}
function imagePosition(festival) {
  const positions = {
    "Coachella 2026": "center 52%",
    "Tomorrowland Belgium 2026": "center 50%",
    "Lollapalooza": "center 58%",
    "Glastonbury": "center 54%",
    "EDC Las Vegas": "center 52%",
    "Ultra Music Festival Miami": "center 56%",
    "Burning Man": "center 52%",
    "Hammersonic Festival 2026": "center 50%",
    "LaLaLa Festival 2026": "center 52%",
    "Soundrenaline 2026": "center 52%",
    "Boardang Boarding Fest 2026": "center 50%",
    "Allo Bank Festival 2026": "center 52%",
    "SOD Festival 2026": "center 52%"
  };
  return positions[festival.name] || "center";
}
function openMaps(place) { window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`, "_blank"); }
function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  show(el);
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => hide(el), 2200);
}

function updateStaticCopy() {
  const lang = translations[activeLanguage] || translations.en;
  $$(`[data-i18n]`).forEach((node) => {
    const key = node.dataset.i18n;
    const value = lang[key];
    if (typeof value === "string") node.textContent = value;
  });
  const rules = $("#rulesList");
  if (rules && Array.isArray(lang.rules)) rules.innerHTML = lang.rules.map((item) => `<li>${item}</li>`).join("");
  document.documentElement.lang = activeLanguage === "id" ? "id" : "en";
}

function setupCommon() {
  document.body.classList.toggle("home-video-active", page === "home");
  updateStaticCopy();
  $("#profileButton")?.addEventListener("click", () => go(routes.profile));
  const syncScrollState = () => {
    const scrolled = window.scrollY > 8;
    $("#topNav")?.classList.toggle("is-visible", scrolled);
    document.body.classList.toggle("home-scrolled", page === "home" && scrolled);
  };
  syncScrollState();
  window.addEventListener("scroll", syncScrollState, { passive: true });
}

function setupAuth() {
  const auth = $("#authScreen");
  const app = $("#appShell");
  const gate = $("#languageGate");
  const home = $("#homePage");
  const mode = sessionStorage.getItem("nigakuAuthMode") || "signin";
  const signedIn = sessionStorage.getItem("nigakuSignedIn") === "true";

  function showAuth(which) {
    show(auth); hide(app);
    $("#authTabs")?.classList.toggle("signup-active", which === "signup");
    $("#authTabs")?.classList.toggle("reset-active", which === "reset");
    $$(".auth-tab").forEach((tab) => tab.classList.toggle("active", tab.id.toLowerCase().includes(which)));
    $$(".auth-form").forEach((form) => form.classList.remove("active"));
    $(`#${which}Form`)?.classList.add("active");
    $("#authTabs")?.classList.toggle("hidden", which === "reset");
  }
  function showApp() {
    hide(auth); show(app);
    if (sessionStorage.getItem("nigakuLanguageChosen") === "true") { hide(gate); show(home); }
    else { show(gate); hide(home); }
  }

  $("#signinTab")?.addEventListener("click", () => showAuth("signin"));
  $("#signupTab")?.addEventListener("click", () => showAuth("signup"));
  $("#resetBackButton")?.addEventListener("click", () => { sessionStorage.setItem("nigakuAuthMode", "signin"); showAuth("signin"); });
  $("#signinForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = $("#signinEmail").value.trim();
    const password = $("#signinPassword").value;
    if (email === currentUser.email && password === currentUser.password) {
      signinAttempts = 0;
      sessionStorage.setItem("nigakuSigninAttempts", "0");
      sessionStorage.setItem("nigakuSignedIn", "true");
      sessionStorage.removeItem("nigakuAuthMode");
      showApp();
      return;
    }
    signinAttempts += 1;
    sessionStorage.setItem("nigakuSigninAttempts", String(signinAttempts));
    setText("#signinError", `Wrong email or password. Attempt ${signinAttempts}/3.`);
    if (signinAttempts >= 3) { sessionStorage.setItem("nigakuAuthMode", "reset"); showAuth("reset"); }
  });
  $("#signupForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    currentUser = { username: $("#signupUsername").value.trim() || "Kelompok 3", email: $("#signupEmail").value.trim(), password: $("#signupPassword").value, phone: $("#signupPhone").value.trim() };
    writeJSON("nigakuUser", currentUser);
    sessionStorage.setItem("nigakuSignedIn", "true");
    showApp();
  });
  $("#resetForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const next = $("#resetPassword").value;
    const confirm = $("#resetConfirmPassword").value;
    if (next.length < 8 || next !== confirm) { setText("#resetError", "Password must match and contain at least 8 characters."); return; }
    currentUser.password = next;
    writeJSON("nigakuUser", currentUser);
    sessionStorage.setItem("nigakuSigninAttempts", "0");
    sessionStorage.setItem("nigakuAuthMode", "signin");
    setText("#signinError", "Password reset successful. Please sign in again.");
    showAuth("signin");
  });
  $$(`[data-language]`).forEach((button) => button.addEventListener("click", () => {
    activeLanguage = button.dataset.language;
    sessionStorage.setItem("nigakuLanguage", activeLanguage);
    sessionStorage.setItem("nigakuLanguageChosen", "true");
    updateStaticCopy();
    hide(gate); show(home); show($("#rulesModal"));
  }));
  $("#acceptRulesButton")?.addEventListener("click", () => hide($("#rulesModal")));
  $$(`[data-category-choice]`).forEach((button) => button.addEventListener("click", () => {
    activeCategory = button.dataset.categoryChoice;
    sessionStorage.setItem("nigakuCategory", activeCategory);
    go(routes.tickets);
  }));

  if (signedIn && mode !== "reset") showApp(); else showAuth(mode === "reset" ? "reset" : "signin");
}

function cardMarkup(item, unavailable) {
  const status = unavailable ? translations[activeLanguage].unavailable : translations[activeLanguage].available;
  const price = unavailable ? "" : item.price;
  return `<div class="event-art" style="background-image:url('${item.image || ""}');background-position:${imagePosition(item)}"><h2>${item.name}</h2></div><div class="event-body"><p>${item.place} - ${item.date}</p><div class="card-meta"><strong>${price}</strong><strong>${status}</strong></div><button class="primary-button" type="button">${translations[activeLanguage].buyTicket}</button></div>`;
}
function renderTickets() {
  const list = festivalData[activeCategory] || festivalData.international;
  setText("#ticketHeading", activeCategory === "local" ? translations[activeLanguage].ticketHeadingLocal : translations[activeLanguage].ticketHeadingInternational);
  const grid = $("#ticketGrid");
  const input = $("#ticketSearchInput");
  function paint() {
    const q = (input?.value || "").toLowerCase();
    grid.innerHTML = list.filter((item) => [item.name, item.place, item.genre].join(" ").toLowerCase().includes(q)).map((item) => {
      const unavailable = isUnavailable(item);
      return `<article class="event-card festival-card${unavailable ? " is-unavailable" : ""}" data-name="${item.name}">${cardMarkup(item, unavailable)}</article>`;
    }).join("");
    $$(".festival-card", grid).forEach((card) => card.addEventListener("click", () => {
      const item = getFestival(card.dataset.name);
      if (isUnavailable(item)) { toast(translations[activeLanguage].ticketUnavailable); return; }
      sessionStorage.setItem("nigakuFestivalName", item.name);
      sessionStorage.setItem("nigakuCategory", categoryOf(item));
      go(routes.detail);
    }));
  }
  paint();
  input?.addEventListener("input", paint);
  $("#searchTrigger")?.addEventListener("click", () => { $("#navSearch")?.classList.toggle("open"); input?.focus(); });
  $("#ticketsBackButton")?.addEventListener("click", () => go(routes.home));
}

function setupDetail() {
  const festival = getFestival();
  const unavailable = isUnavailable(festival);
  setText("#detailGenre", festival.genre);
  setText("#detailTitle", festival.name);
  setText("#detailSummary", festival.summary);
  setText("#detailDateValue", festival.date);
  setText("#detailPlaceValue", festival.place);
  setText("#detailLineupValue", festival.lineup);
  const hero = $("#detailHero");
  if (hero) {
    hero.classList.remove("text-light", "text-dark");
    hero.classList.add(heroTextClass(festival));
    const overlay = hero.classList.contains("text-light") ? "linear-gradient(rgba(8,52,65,.22),rgba(8,52,65,.16))" : "linear-gradient(rgba(251,247,238,.16),rgba(251,247,238,.12))";
    hero.style.backgroundImage = `${overlay},url('${festival.image}')`;
    hero.style.backgroundPosition = imagePosition(festival);
  }
  $("#backToTicketsButton")?.addEventListener("click", () => go(routes.tickets));
  $("#detailOfficialButton")?.addEventListener("click", () => festival.officialUrl && window.open(festival.officialUrl, "_blank"));
  $("#detailMapButton")?.addEventListener("click", () => openMaps(festival.place));
  const list = $("#ticketOptionList");
  list.innerHTML = getTickets(festival).map((ticket, index) => `<article class="ticket-option-card"><div><h3>${ticket.name}</h3><p>${ticket.note}</p><strong>${unavailable ? translations[activeLanguage].unavailable : ticket.price}</strong></div><button class="primary-button" type="button" data-ticket-index="${index}" ${unavailable ? "disabled" : ""}>${translations[activeLanguage].buyTicket}</button></article>`).join("");
  $$(`[data-ticket-index]`, list).forEach((button) => button.addEventListener("click", () => {
    selectedTicketIndex = Number(button.dataset.ticketIndex);
    sessionStorage.setItem("nigakuTicketIndex", String(selectedTicketIndex));
    sessionStorage.setItem("nigakuFestivalName", festival.name);
    sessionStorage.setItem("nigakuPurchaseType", "ticket");
    sessionStorage.setItem("nigakuQty", "1");
    sessionStorage.removeItem("nigakuTotalText");
    sessionStorage.removeItem("nigakuSuccessRecorded");
    go(routes.checkout);
  }));
}

function setupCheckout() {
  const qtyInput = $("#checkoutQty");
  if (purchaseType() === "merch") {
    const item = getMerchItem();
    const labelProduct = $(`[data-i18n="checkoutFestival"]`);
    const labelDetail = $(`[data-i18n="checkoutTicket"]`);
    const labelBonus = $(`[data-i18n="checkoutBonus"]`);
    if (labelProduct) labelProduct.textContent = activeLanguage === "id" ? "Produk" : "Product";
    if (labelDetail) labelDetail.textContent = activeLanguage === "id" ? "Detail" : "Detail";
    if (labelBonus) labelBonus.textContent = activeLanguage === "id" ? "Catatan" : "Note";
    const summary = $(".checkout-summary");
    let hero = $("#merchCheckoutHero");
    if (!hero && summary) {
      hero = document.createElement("div");
      hero.id = "merchCheckoutHero";
      hero.className = "checkout-product-hero";
      summary.before(hero);
    }
    function updateMerch() {
      const qty = Math.max(1, Number(qtyInput.value || 1));
      if (hero) {
        hero.innerHTML = `<div class="checkout-product-image"><img src="${item.image}" alt="${merchName(item)}"></div><div class="checkout-product-copy"><p class="eyebrow">${activeLanguage === "id" ? "Produk Resmi" : "Official Merch"}</p><h2>${merchName(item)}</h2><p>${merchDetail(item)}</p><strong>${item.price}</strong></div>`;
      }
      setText("#checkoutFestival", merchName(item));
      setText("#checkoutTicket", `${merchDetail(item)} - ${item.price}`);
      setText("#checkoutService", "-");
      setText("#checkoutTotal", merchTotalText(item, qty));
      sessionStorage.setItem("nigakuQty", String(qty));
      sessionStorage.setItem("nigakuTotalText", merchTotalText(item, qty));
      hide($("#checkoutService")?.closest("p"));
      hide($("#checkoutBonus")?.closest("p"));
      hide($("#hotelVoucher"));
    }
    qtyInput?.addEventListener("input", updateMerch);
    $("#checkoutBackButton")?.addEventListener("click", () => go(routes.merch));
    $("#checkoutPayButton")?.addEventListener("click", () => go(routes.payment));
    updateMerch();
    return;
  }
  const festival = getFestival();
  const ticket = getTicket(festival);
  function update() {
    const qty = Math.max(1, Number(qtyInput.value || 1));
    const base = moneyNumber(ticket.price);
    show($("#checkoutService")?.closest("p"));
    show($("#checkoutBonus")?.closest("p"));
    setText("#checkoutFestival", festival.name);
    setText("#checkoutTicket", `${ticket.name} - ${ticket.price}`);
    setText("#checkoutService", base ? formatTicketMoney(ticket.price, Math.round(base * qty * SERVICE_RATE)) : "Included by official page");
    setText("#checkoutTotal", ticketTotalText(ticket, qty));
    setText("#checkoutBonus", qty >= 3 ? "Free hotel voucher included" : "Buy 3 tickets to unlock hotel voucher");
    sessionStorage.setItem("nigakuQty", String(qty));
    sessionStorage.setItem("nigakuTotalText", ticketTotalText(ticket, qty));
    $("#hotelVoucher")?.classList.toggle("hidden", qty < 3);
    setText("#hotelName", hotels[festival.name] || "Partner Hotel");
    setText("#hotelDesc", "Valid for one selected festival stay.");
  }
  qtyInput?.addEventListener("input", update);
  $("#checkoutBackButton")?.addEventListener("click", () => go(routes.detail));
  $("#checkoutPayButton")?.addEventListener("click", () => go(routes.payment));
  update();
}

function setupPayment() {
  setText("#paymentAmount", currentTotalText());
  $("#paymentBackButton")?.addEventListener("click", () => go(routes.checkout));
  $("#qrisPaymentButton")?.addEventListener("click", () => go(routes.qris));
}
function setupQris() {
  setText("#qrisAmount", currentTotalText());
  $("#qrisBackButton")?.addEventListener("click", () => go(routes.payment));
  $("#checkPaymentButton")?.addEventListener("click", () => go(routes.success));
}
function addTransaction() {
  const items = readJSON("nigakuTransactions", []);
  if (purchaseType() === "merch") {
    const item = getMerchItem();
    const qty = Number(sessionStorage.getItem("nigakuQty") || 1);
    items.unshift({ type: "merch", id: `NM-${Math.floor(10000000 + Math.random() * 89999999)}`, festival: merchName(item), ticket: "Merchandise", qty, total: sessionStorage.getItem("nigakuTotalText") || merchTotalText(item, qty), date: new Date().toLocaleString(activeLanguage === "id" ? "id-ID" : "en-US") });
    writeJSON("nigakuTransactions", items.slice(0, 8));
    return;
  }
  const festival = getFestival();
  const ticket = getTicket(festival);
  const qty = Number(sessionStorage.getItem("nigakuQty") || 1);
  items.unshift({ type: "ticket", id: `NG-${Math.floor(10000000 + Math.random() * 89999999)}`, festival: festival.name, ticket: ticket.name, qty, total: sessionStorage.getItem("nigakuTotalText") || ticketTotalText(ticket, qty), date: new Date().toLocaleString(activeLanguage === "id" ? "id-ID" : "en-US") });
  writeJSON("nigakuTransactions", items.slice(0, 8));
}
function setupSuccess() {
  setText("#successAmount", currentTotalText());
  if (purchaseType() === "merch") {
    if (!sessionStorage.getItem("nigakuSuccessRecorded")) {
      addTransaction();
      sessionStorage.setItem("nigakuSuccessRecorded", "1");
    }
    setText("#successCountdown", activeLanguage === "id" ? "Transaksi merchandise kamu sudah tersimpan di Settings." : "Your merchandise transaction has been saved in Settings.");
    const backButton = $("#successBackButton");
    if (backButton) {
      backButton.textContent = activeLanguage === "id" ? "Kembali ke Merch" : "Back to Merch";
      show(backButton);
      backButton.addEventListener("click", () => go(routes.merch));
    }
    return;
  }
  let seconds = 3;
  const number = $("#countdownNumber");
  const timer = setInterval(() => {
    seconds -= 1;
    if (number) number.textContent = String(seconds);
    if (seconds <= 0) { clearInterval(timer); addTransaction(); go(routes.visual); }
  }, 1000);
}

function visualMarkup() {
  const festival = getFestival();
  const ticket = getTicket(festival);
  const qty = Number(sessionStorage.getItem("nigakuQty") || 1);
  return { festival, ticket, qty, total: sessionStorage.getItem("nigakuTotalText") || ticketTotalText(ticket, qty), id: `NG-${Math.floor(10000000 + Math.random() * 89999999)}` };
}
function setupVisual() {
  const data = visualMarkup();
  setText("#visualFestival", data.festival.name);
  setText("#visualTicketId", data.id);
  setText("#visualStage", stageMap[data.festival.name] || stageMap.default);
  setText("#visualDay", data.ticket.note || "Festival Day");
  setText("#visualDate", data.festival.date);
  setText("#visualVenue", data.festival.place);
  setText("#visualQty", data.qty);
  setText("#visualTicketType", data.ticket.name);
  setText("#visualTotal", data.total);
  $("#visualHotelVoucher")?.classList.toggle("hidden", data.qty < 3);
  setText("#visualHotelName", hotels[data.festival.name] || "Partner Hotel");
  setText("#visualHotelDesc", "Show this voucher with your NIGAKU ticket at check-in.");
  $("#visualHomeButton")?.addEventListener("click", () => go(routes.home));
  $("#visualDownloadButton")?.addEventListener("click", () => { $("#printTicketSheet").innerHTML = $(".ticket-visual").outerHTML; window.print(); });
}

function setupMerch() {
  const grid = $("#merchGrid");
  grid.innerHTML = merchandiseData.map((item, index) => `<article class="event-card merch-card"><div class="event-art merch-art"><img src="${item.image}" alt="${activeLanguage === "id" ? item.nameId : item.name}"></div><div class="event-body"><h2>${activeLanguage === "id" ? item.nameId : item.name}</h2><p>${activeLanguage === "id" ? item.placeId : item.place} - ${activeLanguage === "id" ? item.dateId : item.date}</p><div class="card-meta"><strong>${item.price}</strong><strong>${translations[activeLanguage].available}</strong></div><button class="primary-button" type="button" data-merch-index="${index}">${translations[activeLanguage].buyMerch}</button></div></article>`).join("");
  $$("[data-merch-index]", grid).forEach((button) => button.addEventListener("click", () => {
    selectedMerchIndex = Number(button.dataset.merchIndex);
    sessionStorage.setItem("nigakuPurchaseType", "merch");
    sessionStorage.setItem("nigakuMerchIndex", String(selectedMerchIndex));
    sessionStorage.setItem("nigakuQty", "1");
    sessionStorage.removeItem("nigakuTotalText");
    sessionStorage.removeItem("nigakuSuccessRecorded");
    go(routes.checkout);
  }));
}
function setupGallery() {
  const lightbox = $("#galleryLightbox");
  const photo = $("#galleryLightboxPhoto");
  const title = $("#galleryLightboxTitle");
  let origin = null;
  function open(tile) {
    origin = tile.getBoundingClientRect();
    const x = `${origin.left + origin.width / 2 - window.innerWidth / 2}px`;
    const y = `${origin.top + origin.height / 2 - window.innerHeight / 2}px`;
    photo.style.setProperty("--gallery-x", x);
    photo.style.setProperty("--gallery-y", y);
    photo.style.backgroundImage = `url('${tile.dataset.image}')`;
    title.textContent = tile.textContent.trim();
    show(lightbox);
    requestAnimationFrame(() => lightbox.classList.add("is-open"));
  }
  function close() {
    lightbox.classList.add("closing");
    lightbox.classList.remove("is-open");
    setTimeout(() => { hide(lightbox); lightbox.classList.remove("closing"); }, 330);
  }
  $$(".gallery-tile").forEach((tile) => tile.addEventListener("click", () => open(tile)));
  $("#galleryLightboxBack")?.addEventListener("click", close);
  lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) close(); });
}

function setupProfile() {
  setText("#profileNameDisplay", currentUser.username || "Kelompok 3");
  setText("#profileEmailDisplay", currentUser.email || "kelompok3@gmail.com");
  setText("#profilePhoneDisplay", currentUser.phone || "-");
  const items = readJSON("nigakuTransactions", []);
  const tickets = items.filter((item) => item.type !== "merch");
  const renderTransaction = (item) => `<article class="transaction-item"><strong>${item.festival}</strong><span>${item.ticket} x${item.qty} - ${item.total}</span><small>${item.id} • ${item.date}</small></article>`;
  const transactionMarkup = items.length ? items.map(renderTransaction).join("") : `<p class="empty-transactions">No transactions yet.</p>`;
  const activeMarkup = tickets.length ? tickets.map(renderTransaction).join("") : `<p class="empty-transactions">No active tickets yet.</p>`;
  if ($("#transactionList")) $("#transactionList").innerHTML = transactionMarkup;
  if ($("#activeTicketList")) $("#activeTicketList").innerHTML = activeMarkup;
  $$("[data-profile-tab]").forEach((button) => button.addEventListener("click", () => {
    $$("[data-profile-tab]").forEach((item) => item.classList.toggle("active", item === button));
    $$("[data-profile-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.profilePanel === button.dataset.profileTab));
  }));
  $("#profileBackButton")?.addEventListener("click", () => go(routes.home));
  $("#resetPasswordButton")?.addEventListener("click", () => { sessionStorage.setItem("nigakuAuthMode", "reset"); sessionStorage.removeItem("nigakuSignedIn"); go(routes.home); });
  $("#changeAccountButton")?.addEventListener("click", () => { sessionStorage.setItem("nigakuAuthMode", "signin"); sessionStorage.removeItem("nigakuSignedIn"); go(routes.home); });
  $("#signOutButton")?.addEventListener("click", () => { sessionStorage.clear(); window.location.replace(routes.home); });
  $("#editUsernameButton")?.addEventListener("click", () => {
    const next = window.prompt("Edit username", currentUser.username || "Kelompok 3");
    if (!next?.trim()) return;
    currentUser.username = next.trim();
    writeJSON("nigakuUser", currentUser);
    setText("#profileNameDisplay", currentUser.username);
  });
  $("#editPhoneButton")?.addEventListener("click", () => {
    const next = window.prompt("Edit phone number", currentUser.phone || "+62");
    if (next === null) return;
    currentUser.phone = next.trim();
    writeJSON("nigakuUser", currentUser);
    setText("#profilePhoneDisplay", currentUser.phone || "-");
  });
  $$(`[data-profile-language]`).forEach((button) => {
    button.classList.toggle("active", button.dataset.profileLanguage === activeLanguage);
    button.addEventListener("click", () => {
      activeLanguage = button.dataset.profileLanguage;
      sessionStorage.setItem("nigakuLanguage", activeLanguage);
      $$(`[data-profile-language]`).forEach((item) => item.classList.toggle("active", item === button));
      updateStaticCopy();
    });
  });
  $("#editPhotoButton")?.addEventListener("click", () => $("#profilePhotoInput")?.click());
  $("#profilePhotoInput")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { $("#profilePhotoLarge").src = reader.result; };
    reader.readAsDataURL(file);
  });
}

setupCommon();
if (page === "home") setupAuth();
if (page === "tickets") renderTickets();
if (page === "festival-detail") setupDetail();
if (page === "checkout") setupCheckout();
if (page === "payment-method") setupPayment();
if (page === "qris") setupQris();
if (page === "payment-success") setupSuccess();
if (page === "ticket-visual") setupVisual();
if (page === "merchandise") setupMerch();
if (page === "gallery") setupGallery();
if (page === "profile") setupProfile();
