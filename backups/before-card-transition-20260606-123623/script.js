const dummyUser = { username: "Kelompok 3", email: "kelompok3@gmail.com", password: "12345678", phone: "" };

const festivalData = {
  international: [
    { name: "Coachella 2026", place: "Indio, USA", date: "10-12 & 17-19 Apr 2026", price: "From official waitlist", lineup: "Sabrina Carpenter, Justin Bieber, Karol G", genre: "Pop, hip-hop, EDM, indie", summary: "A bucket-list desert festival with huge pop headliners, fashion moments, art installations, and two packed weekends in California.", ticketUrl: "https://www.coachella.com/", officialUrl: "https://www.coachella.com/" },
    { name: "Tomorrowland Belgium 2026", place: "Boom, Belgium", date: "17-19 & 24-26 Jul 2026", price: "Sold out / official info", lineup: "Martin Garrix, Calvin Harris, The Chainsmokers", genre: "EDM, house, techno", summary: "One of the world's biggest electronic music festivals, known for cinematic stages, DreamVille, and massive global EDM crowds.", ticketUrl: "https://belgium.tomorrowland.com/", officialUrl: "https://belgium.tomorrowland.com/" },
    { name: "Lollapalooza", place: "Chicago, USA", date: "30 Jul - 2 Aug 2026", price: "Official site", lineup: "Pop, rock, hip-hop, EDM acts", genre: "Pop, rock, hip-hop, EDM", summary: "A major multi-genre city festival with global editions, big-name artists, and a classic Grant Park festival atmosphere.", ticketUrl: "https://www.lollapalooza.com/", officialUrl: "https://www.lollapalooza.com/" },
    { name: "Glastonbury", place: "Somerset, UK", date: "2026 fallow year", price: "No 2026 tickets", lineup: "Legendary past performers: Adele, David Bowie, Coldplay", genre: "Rock, pop, electronic, performing arts", summary: "A legendary UK festival, but the official site says 2026 is a fallow year, so this is listed as reference only.", ticketUrl: "", officialUrl: "https://www.glastonburyfestivals.co.uk/" },
    { name: "EDC Las Vegas", place: "Las Vegas, USA", date: "May 2026", price: "Official site", lineup: "Tiesto, Armin van Buuren, Illenium", genre: "EDM", summary: "A massive electronic dance carnival with neon stages, rides, fireworks, and one of America's biggest EDM crowds.", ticketUrl: "https://lasvegas.electricdaisycarnival.com/", officialUrl: "https://lasvegas.electricdaisycarnival.com/" },
    { name: "Ultra Music Festival Miami", place: "Miami, USA", date: "Mar 2026", price: "Official site", lineup: "Hardwell, David Guetta, Afrojack", genre: "EDM, house, techno", summary: "Miami's iconic electronic festival, famous for high-energy DJ sets and a global dance music audience.", ticketUrl: "https://ultramusicfestival.com/", officialUrl: "https://ultramusicfestival.com/" },
    { name: "Burning Man", place: "Black Rock Desert, Nevada", date: "Aug-Sep 2026", price: "Official site", lineup: "Art, music, camps, survival culture", genre: "Art, experimental, electronic", summary: "More than a music festival: Burning Man is an art-driven temporary city built around creativity, community, and radical self-expression.", ticketUrl: "https://burningman.org/", officialUrl: "https://burningman.org/" }
  ],
  local: [
    { name: "Hammersonic Festival 2026", place: "Jakarta", date: "2-3 May 2026", price: "Official tickets", lineup: "Parkway Drive, Jinjer, Counterparts, Of Mice & Men, Dashboard Confessional, Hawthorne Heights, New Found Glory", genre: "Rock, metal, hardcore", summary: "Indonesia's loudest rock and metal festival, bringing international heavy bands and a massive Jakarta crowd.", ticketUrl: "https://www.hammersonic.com/tickets.html", officialUrl: "https://www.hammersonic.com/" },
    { name: "LaLaLa Festival 2026", place: "JIExpo Jakarta", date: "22-23 Aug 2026", price: "Official site", lineup: "Rex Orange County, Steve Lacy, Kodaline, Two Door Cinema Club, Summer Salt, Lee Seung Yoon", genre: "Indie, pop, alternative", summary: "A dreamy Jakarta festival for indie and pop fans, mixing international names with a relaxed festival mood.", ticketUrl: "https://www.lalalafest.com/", officialUrl: "https://www.lalalafest.com/" },
    { name: "Soundrenaline 2026", place: "Jakarta, Makassar, Palembang, Yogyakarta, Bandung", date: "Jul-Nov 2026", price: "Official tickets", lineup: "Phase 1 lineup revealed gradually", genre: "Multi-genre", summary: "A multi-city Indonesian festival tour with different local scenes, big stages, and genre-spanning lineups.", ticketUrl: "https://www.soundrenaline.id/", officialUrl: "https://www.soundrenaline.id/" },
    { name: "Boardang Boarding Fest 2026", place: "Edutown Arena, BSD Tangerang", date: "4-5 Jul 2026", price: "From Rp 145.000", lineup: "Local multi-genre artists", genre: "Indie, electronic, acoustic", summary: "A two-day local festival with a travel-inspired concept, outdoor stages, food stalls, and a relaxed weekend vibe.", ticketUrl: "https://www.boardangboarding.com/", officialUrl: "https://www.boardangboarding.com/" },
    { name: "Allo Bank Festival 2026", place: "Indonesia Arena GBK", date: "20 Jun 2026", price: "From Rp 490.000", lineup: "CORTIS, Mahalini, Rizky Febian", genre: "Pop, K-pop, Indonesian pop", summary: "A big Jakarta arena festival combining Indonesian pop acts with international/K-pop energy and official ticketing.", ticketUrl: "https://ticket.allobankfest.com/", officialUrl: "https://ticket.allobankfest.com/" },
    { name: "SOD Festival 2026", place: "Surabaya", date: "1-2 Aug 2026", price: "Official site", lineup: "Multi-genre nostalgia, pop, indie", genre: "Pop, indie, nostalgia", summary: "A Surabaya festival focused on multi-genre nostalgia and easygoing crowd energy.", ticketUrl: "https://sodfestival.com/", officialUrl: "https://sodfestival.com/" }
  ]
};

const merchandiseData = [
  { name: "NIGAKU Desert Tee", nameId: "Kaus Desert NIGAKU", place: "Unisex", placeId: "Uniseks", date: "All Size", dateId: "Semua Ukuran", price: "Rp 180.000" },
  { name: "Festival Tote Bag", nameId: "Tas Tote Festival", place: "Canvas", placeId: "Kanvas", date: "Limited", dateId: "Terbatas", price: "Rp 95.000" },
  { name: "Wristband Pack", nameId: "Paket Gelang Festival", place: "3 Pieces", placeId: "3 Buah", date: "Glow", dateId: "Menyala", price: "Rp 70.000" },
  { name: "NIGAKU Cap", nameId: "Topi NIGAKU", place: "Adjustable", placeId: "Bisa Diatur", date: "Green", dateId: "Hijau", price: "Rp 135.000" },
  { name: "Lineup Poster", nameId: "Poster Lineup", place: "18 x 24", placeId: "18 x 24", date: "Collectible", dateId: "Koleksi", price: "Rp 120.000" },
  { name: "Festival Hoodie", nameId: "Hoodie Festival", place: "Oversized", placeId: "Oversized", date: "Pre-order", dateId: "Praorder", price: "Rp 320.000" }
];

const ticketOptions = {
  "Coachella 2026": [{ name: "General Admission", price: "US$649", note: "Weekend pass" }, { name: "GA + Shuttle", price: "US$779", note: "Weekend pass with shuttle" }, { name: "VIP", price: "US$1,399", note: "VIP weekend pass" }],
  "Tomorrowland Belgium 2026": [{ name: "Day Pass", price: "Official pricing TBA", note: "Single-day access" }, { name: "Full Madness Pass", price: "Official pricing TBA", note: "Full weekend access" }, { name: "DreamVille Package", price: "See official shop", note: "Festival + camping package" }],
  "Lollapalooza": [{ name: "4-Day GA", price: "Official pricing TBA", note: "General admission" }, { name: "4-Day GA+", price: "Official pricing TBA", note: "GA with added comfort" }, { name: "4-Day VIP", price: "Official pricing TBA", note: "VIP access" }],
  "Glastonbury": [{ name: "2026 Tickets", price: "Not available", note: "2026 is a fallow year" }],
  "EDC Las Vegas": [{ name: "GA", price: "Official pricing TBA", note: "General admission" }, { name: "GA+", price: "Official pricing TBA", note: "Enhanced GA" }, { name: "VIP", price: "Official pricing TBA", note: "VIP experience" }],
  "Ultra Music Festival Miami": [{ name: "GA", price: "Official pricing TBA", note: "General admission" }, { name: "Premium GA", price: "Official pricing TBA", note: "Premium access" }, { name: "VIP", price: "Official pricing TBA", note: "VIP access" }],
  "Burning Man": [{ name: "Main Sale Ticket", price: "Official pricing TBA", note: "Standard ticket" }, { name: "Vehicle Pass", price: "Official pricing TBA", note: "Required for vehicles" }],
  "Hammersonic Festival 2026": [{ name: "2-Day Pass", price: "Rp 550.000", note: "Free standing, excludes tax and services" }],
  "LaLaLa Festival 2026": [{ name: "Daily Pass", price: "See official ticket page", note: "Single-day access" }, { name: "2-Day Pass", price: "See official ticket page", note: "Full festival access" }],
  "Soundrenaline 2026": [{ name: "City Pass", price: "See official ticket page", note: "Selected city access" }, { name: "Festival Pass", price: "See official ticket page", note: "Festival access" }],
  "Boardang Boarding Fest 2026": [{ name: "Daily Pass", price: "From Rp 145.000", note: "Single-day access" }, { name: "2-Day Pass", price: "See official ticket page", note: "Full weekend access" }],
  "Allo Bank Festival 2026": [{ name: "Festival Pass", price: "From Rp 490.000", note: "Official ticketing" }],
  "SOD Festival 2026": [{ name: "Daily Pass", price: "See official ticket page", note: "Single-day access" }, { name: "2-Day Pass", price: "See official ticket page", note: "Full festival access" }]
};

const hotels = {
  "Coachella 2026": "Embassy Suites by Hilton La Quinta Hotel & Spa", "Tomorrowland Belgium 2026": "Hotel Ter Elst, Edegem", "Lollapalooza": "Palmer House, a Hilton Hotel", "Glastonbury": "The Swan Hotel, Wells", "EDC Las Vegas": "Aliante Casino + Hotel + Spa", "Ultra Music Festival Miami": "InterContinental Miami", "Burning Man": "Whitney Peak Hotel, Reno",
  "Hammersonic Festival 2026": "Mercure Convention Center Ancol", "LaLaLa Festival 2026": "Grand Mercure Jakarta Kemayoran", "Soundrenaline 2026": "Grand Mercure Bandung Setiabudi", "Boardang Boarding Fest 2026": "Hotel Santika Premiere ICE BSD City", "Allo Bank Festival 2026": "HARRIS Suites fX Sudirman", "SOD Festival 2026": "Four Points by Sheraton Surabaya"
};

const stageMap = { "Coachella 2026": "Coachella Stage", "Tomorrowland Belgium 2026": "Mainstage", "Hammersonic Festival 2026": "Hammer Stage", default: "Main Stage" };

const SERVICE_RATE = 0.09;

const translations = {
  en: {
    navTicket: "Tickets", navMerchandise: "Merch", navGallery: "Gallery", navAbout: "About Us",
    homeEyebrow: "", homeIntro: "Next Interactive Gateway for Access to Konser Universe.",
    choiceInternationalLabel: "International", choiceInternationalTitle: "Global festival weekends", choiceInternationalDesc: "Singapore, Tokyo, Seoul, Bangkok, and more.", choiceLocalTitle: "Festival Indonesia", choiceLocalDesc: "Jakarta, Bali, Bandung, Jogja, Surabaya, and more.",
    ticketsEyebrow: "Tickets", pickCategory: "Pick a Category", ticketHeadingInternational: "International Festivals", ticketHeadingLocal: "Local Festivals", buyTicket: "Buy Ticket", downloadTicket: "Download Ticket", buyMerch: "Buy Merch", ticketUnavailable: "Ticket link is not available for this festival.", ticketOpened: "Opening ticket page for", available: "Available", unavailable: "Unavailable", addedCheckout: "added to checkout.",
    rulesTitle: "18+ Entry and Festival Rules", rulesIntro: "This website is intended for visitors aged 18 and above.", rulesEyebrow: "Important Notice", rules: ["Tickets are personal and must match the buyer identity at entry.", "Bring a valid ID and follow the organizer security screening.", "Outside food, drinks, weapons, and illegal substances are not allowed.", "Respect other visitors, staff, artists, and venue property.", "Event schedules, gates, and refund policies can change by organizer decision."], accept: "Accept Cookies",
    officialWebsite: "Official Website", detailDate: "Date", detailLocation: "Location", detailLineup: "Lineup", ticketOptions: "Ticket Options", ticketComingSoon: "Tickets Coming Soon", ticketComingSoonDesc: "Official prices are not available yet. Please check the official website for updates.",
    checkoutEyebrow: "Checkout", checkoutFestival: "Festival", checkoutTicket: "Ticket", checkoutQty: "Quantity", checkoutService: "Service Fee", checkoutTotal: "Total", checkoutBonus: "Bonus", noBonus: "No bonus yet", freeTickets: "free ticket(s)", totalTickets: "total ticket(s)", hotelVoucher: "Hotel Voucher", hotelVoucherDesc: "4-star hotel voucher near the festival location", ticketIssued: "Ticket Issued", back: "Back", continuePayment: "Continue to Payment",
    paymentEyebrow: "Payment", paymentTitle: "Choose a Payment Method", qrisDesc: "Scan and pay with any QRIS-supported app.", scanQris: "Scan QRIS", checkStatus: "Check Status", paymentSuccess: "Payment Successful", paymentDone: "Payment Complete", redirectTicket: "Your ticket will appear in {count} seconds.", ticketBackLabel: "Ticket",
    merchEyebrow: "Official Merch", merchTitle: "Merch Festival", merchIntro: "Template merch cards for add-ons, apparel, and festival goods.",
    galleryEyebrow: "Moments", galleryTitle: "Gallery", galleryIntro: "Festival moments from the crowd, stage, lights, gates, camping area, and sunset sets.", galleryCrowd: "Crowd Wave", galleryStage: "Main Stage", galleryLight: "Light Show", galleryGate: "Festival Gate", galleryCamping: "Camping Area", gallerySunset: "Sunset Set",
    aboutEyebrow: "About Us", aboutTitle: "Your gateway to festival days worth remembering.", aboutIntro: "NIGAKU stands for Next Interactive Gateway for Access to Konser Universe. It helps festival lovers find tickets for local and international festivals in one simple place, with clear event choices and an easy path from browsing to booking.", aboutAdminLabel: "Admin", aboutPhoneLabel: "Phone",
    profileLanguage: "Language", profileTitle: "Profile", phoneLabel: "Phone number", resetPassword: "Reset Password", changeAccount: "Change Account", signOut: "Sign Out", cookiesAccepted: "Cookies accepted. Enjoy NIGAKU.", resetPasswordToast: "The reset password form can be added later.", changeAccountToast: "Choose another account to continue.", languageChanged: "Language changed to English."
  },
  id: {
    navTicket: "Tiket", navMerchandise: "Merch", navGallery: "Galeri", navAbout: "Tentang Kami",
    homeEyebrow: "", homeIntro: "Next Interactive Gateway for Access to Konser Universe.",
    choiceInternationalLabel: "Internasional", choiceInternationalTitle: "Festival dunia", choiceInternationalDesc: "Singapura, Tokyo, Seoul, Bangkok, dan lainnya.", choiceLocalTitle: "Festival Indonesia", choiceLocalDesc: "Jakarta, Bali, Bandung, Jogja, Surabaya, dan lainnya.",
    ticketsEyebrow: "Tiket", pickCategory: "Pilih Kategori", ticketHeadingInternational: "Festival Internasional", ticketHeadingLocal: "Festival Lokal", buyTicket: "Beli Tiket", downloadTicket: "Unduh Tiket", buyMerch: "Beli Merch", ticketUnavailable: "Link tiket belum tersedia untuk festival ini.", ticketOpened: "Membuka halaman tiket untuk", available: "Tersedia", unavailable: "Tidak tersedia", addedCheckout: "ditambahkan ke checkout.",
    rulesTitle: "Akses 18+ dan Peraturan Festival", rulesIntro: "Website ini ditujukan untuk pengunjung berusia 18 tahun ke atas.", rulesEyebrow: "Pemberitahuan Penting", rules: ["Tiket bersifat pribadi dan harus sesuai dengan identitas pembeli saat masuk.", "Bawa kartu identitas yang valid dan ikuti pemeriksaan keamanan dari penyelenggara.", "Makanan, minuman, senjata, dan zat terlarang dari luar area tidak diperbolehkan.", "Hormati pengunjung lain, staf, artis, dan fasilitas venue.", "Jadwal acara, akses gerbang, dan kebijakan refund dapat berubah sesuai keputusan penyelenggara."], accept: "Terima Cookies",
    officialWebsite: "Website Resmi", detailDate: "Tanggal", detailLocation: "Lokasi", detailLineup: "Lineup", ticketOptions: "Pilihan Tiket", ticketComingSoon: "Tiket Segera Tersedia", ticketComingSoonDesc: "Harga resmi belum tersedia. Silakan cek website resmi untuk pembaruan terbaru.",
    checkoutEyebrow: "Checkout", checkoutFestival: "Festival", checkoutTicket: "Tiket", checkoutQty: "Jumlah", checkoutService: "Biaya Layanan", checkoutTotal: "Total", checkoutBonus: "Bonus", noBonus: "Belum ada bonus", freeTickets: "tiket gratis", totalTickets: "total tiket", hotelVoucher: "Voucher Hotel", hotelVoucherDesc: "Voucher hotel bintang 4 dekat lokasi festival", ticketIssued: "Tiket Terbit", back: "Kembali", continuePayment: "Lanjut ke Pembayaran",
    paymentEyebrow: "Pembayaran", paymentTitle: "Pilih Metode Pembayaran", qrisDesc: "Scan dan bayar dengan aplikasi yang mendukung QRIS.", scanQris: "Scan QRIS", checkStatus: "Cek Status", paymentSuccess: "Pembayaran Berhasil", paymentDone: "Pembayaran Selesai", redirectTicket: "Tiket kamu akan muncul dalam {count} detik.", ticketBackLabel: "Tiket",
    merchEyebrow: "Produk Resmi", merchTitle: "Merchandise", merchIntro: "Template kartu merchandise untuk add-on, pakaian, dan perlengkapan festival.",
    galleryEyebrow: "Momen", galleryTitle: "Galeri", galleryIntro: "Momen festival dari penonton, panggung, cahaya, gerbang, area kemah, dan sesi senja.", galleryCrowd: "Ombak Penonton", galleryStage: "Panggung Utama", galleryLight: "Pertunjukan Cahaya", galleryGate: "Gerbang Festival", galleryCamping: "Area Kemah", gallerySunset: "Sesi Senja",
    aboutEyebrow: "Tentang Kami", aboutTitle: "Gerbang menuju hari festival yang layak dikenang.", aboutIntro: "NIGAKU adalah Next Interactive Gateway for Access to Konser Universe. Website ini membantu pencinta festival menemukan tiket lokal dan internasional dalam satu tempat, dengan pilihan acara yang jelas dan proses pemesanan yang mudah.", aboutAdminLabel: "Admin", aboutPhoneLabel: "Nomor telepon",
    profileLanguage: "Bahasa", profileTitle: "Profil", phoneLabel: "Nomor telepon", resetPassword: "Atur Ulang Password", changeAccount: "Ganti Akun", signOut: "Keluar", cookiesAccepted: "Cookie diterima. Selamat menikmati NIGAKU.", resetPasswordToast: "Form atur ulang password bisa ditambahkan nanti.", changeAccountToast: "Pilih akun lain untuk melanjutkan.", languageChanged: "Bahasa diubah ke Indonesia."
  }
};

let currentUser = { ...dummyUser }, activeCategory = "", activeLanguage = "en", failedSignInAttempts = 0, isSignedIn = false, ticketSearchQuery = "";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => root.querySelectorAll(selector);
const setText = (selector, value) => { $(selector).textContent = value; };
const on = (selector, event, handler) => { $(selector).addEventListener(event, handler); };
const fillText = (entries) => { entries.forEach(([selector, value]) => setText(selector, value)); };

const authScreen = $("#authScreen"), appShell = $("#appShell"), signinTab = $("#signinTab"), signupTab = $("#signupTab"), signinForm = $("#signinForm"), signupForm = $("#signupForm"), resetForm = $("#resetForm"), signinError = $("#signinError"), resetError = $("#resetError"), languageGate = $("#languageGate"), rulesModal = $("#rulesModal"), toast = $("#toast"), pages = $$(".app-page"), profilePhotoInput = $("#profilePhotoInput"), navSearch = $("#navSearch"), ticketSearchInput = $("#ticketSearchInput"), galleryLightbox = $("#galleryLightbox"), galleryLightboxPhoto = $("#galleryLightboxPhoto"), galleryLightboxTitle = $("#galleryLightboxTitle");
let activeFestival = null, activeTicket = null, detailBackRoute = "tickets", checkoutTotalText = "", paymentRedirectTimer = null, galleryCloseTimer = null;
const appRoutes = new Set(["language", "home", "tickets", "festivalDetail", "checkout", "paymentMethod", "qris", "paymentSuccess", "ticketVisual", "merchandise", "gallery", "about", "profile"]);

function updateHistoryState(state, replace = false) {
  const hash = state.screen === "auth" ? state.mode : state.route;
  const method = replace ? "replaceState" : "pushState";
  history[method](state, "", `#${hash}`);
}

function setAuthMode(mode, updateHistory = true) {
  const isSignin = mode === "signin";
  const isSignup = mode === "signup";
  const isReset = mode === "reset";
  signinTab.classList.toggle("active", isSignin);
  signupTab.classList.toggle("active", isSignup);
  signinForm.classList.toggle("active", isSignin);
  signupForm.classList.toggle("active", isSignup);
  resetForm.classList.toggle("active", isReset);
  signinTab.parentElement.classList.toggle("signup-active", isSignup);
  signinTab.parentElement.classList.toggle("reset-active", isReset);
  signinError.textContent = "";
  resetError.textContent = "";

  if (updateHistory) {
    updateHistoryState({ screen: "auth", mode });
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  window.setTimeout(() => toast.classList.add("hidden"), 2600);
}

function renderPage(route) {
  const safeRoute = appRoutes.has(route) ? route : "home";
  pages.forEach((page) => page.classList.add("hidden"));
  const page = safeRoute === "language" ? languageGate : $(`#${safeRoute}Page`);
  if (page) {
    page.classList.remove("hidden");
  }

  $$("[data-route]").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === safeRoute && link.getAttribute("href") !== "#home");
  });

  navSearch.classList.toggle("visible", safeRoute === "tickets" && Boolean(activeCategory));

  if (safeRoute !== "tickets") {
    navSearch.classList.remove("open");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showPage(route, updateHistory = true) {
  renderPage(route);
  if (updateHistory) updateHistoryState({ screen: "app", route });
}

function signIn(user) {
  isSignedIn = true;
  currentUser = user;
  updateProfile();
  authScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  renderPage("language");
  updateHistoryState({ screen: "app", route: "language" }, true);
  updateHistoryState({ screen: "app", route: "language" });
}

function updateProfile() {
  const copy = translations[activeLanguage];
  fillText([
    ["#profileName", currentUser.username || "New User"],
    ["#profileEmail", currentUser.email],
    ["#profilePhone", `${copy.phoneLabel}: ${currentUser.phone || "-"}`]
  ]);
}

function getItemText(item, key) {
  return activeLanguage === "id" && item[`${key}Id`] ? item[`${key}Id`] : item[key];
}

function updateStaticCopy() {
  const copy = translations[activeLanguage];
  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });
  fillText([
    ["#rulesTitle", copy.rulesTitle],
    ["#rulesIntro", copy.rulesIntro],
    ["#acceptCookiesButton", copy.accept]
  ]);
  $("#rulesList").innerHTML = copy.rules.map((rule) => `<li>${rule}</li>`).join("");
  updateProfile();
}

function createCard(item, actionLabel, backRoute = "tickets") {
  const copy = translations[activeLanguage];
  const name = getItemText(item, "name");
  const place = getItemText(item, "place");
  const date = getItemText(item, "date");
  const firstTicket = ticketOptions[item.name]?.[0]?.price || item.price;
  const card = document.createElement("article");
  card.className = "event-card";
  card.innerHTML = `
    <div class="event-art">${name}</div>
    <div class="event-body">
      <p>${place} - ${date}</p>
      <div class="card-meta">
        <span>${firstTicket}</span>
        <span>${item.ticketUrl ? copy.available : copy.unavailable}</span>
      </div>
      <button class="primary-button" type="button">${actionLabel}</button>
    </div>
  `;
  card.addEventListener("click", () => showFestivalDetail(item, true, backRoute));
  card.querySelector("button").addEventListener("click", (event) => {
    event.stopPropagation();
    showFestivalDetail(item, true, backRoute);
  });
  return card;
}

function showFestivalDetail(item, updateHistory = true, backRoute = detailBackRoute) {
  const copy = translations[activeLanguage];
  const options = ticketOptions[item.name] || [];
  activeFestival = item;
  detailBackRoute = backRoute;
  fillText([
    ["#detailTitle", item.name],
    ["#detailGenre", item.genre],
    ["#detailSummary", item.summary],
    ["#detailDateValue", item.date],
    ["#detailPlaceValue", item.place],
    ["#detailLineupValue", item.lineup],
    ["#detailOfficialButton", copy.officialWebsite]
  ]);
  $("#ticketOptionList").innerHTML = options.length ? options.map((ticket, index) => {
    const canBuy = priceValue(ticket.price);

    return `
    <article class="ticket-option-card">
      <div>
        <h3>${ticket.name}</h3>
        <p>${ticket.note}</p>
        <strong>${ticket.price}</strong>
      </div>
      ${canBuy ? `<button class="primary-button" type="button" data-ticket-index="${index}">${copy.buyTicket}</button>` : ""}
    </article>
  `;
  }).join("") : `
    <article class="ticket-coming-soon">
      <h3>${copy.ticketComingSoon}</h3>
      <p>${copy.ticketComingSoonDesc}</p>
    </article>
  `;
  showPage("festivalDetail", updateHistory);
}

function showCheckout(ticket) {
  const copy = translations[activeLanguage];
  activeTicket = ticket;
  fillText([
    ["#checkoutTitle", copy.checkoutEyebrow],
    ["#checkoutFestival", activeFestival.name],
    ["#checkoutTicket", `${ticket.name} - ${ticket.note}`],
    ["#checkoutPayButton", copy.continuePayment]
  ]);
  $("#checkoutQty").value = 1;
  updateCheckout();
  showPage("checkout");
}

function priceValue(price) {
  if (!price || /TBA|See|Not available/i.test(price)) return null;
  const amount = Number(price.replace(/[^\d]/g, ""));
  if (!amount) return null;
  return { amount, currency: price.includes("US$") ? "US$" : "Rp" };
}

function formatPrice(value, currency) {
  if (!value) return activeTicket?.price || "-";
  return currency === "US$" ? `US$${value.toLocaleString("en-US")}` : `Rp ${value.toLocaleString("id-ID")}`;
}

function ticketRank(ticket, type) {
  const options = ticketOptions[activeFestival.name] || [];
  const prices = options.map((option) => priceValue(option.price)?.amount).filter(Boolean);
  const current = priceValue(ticket.price)?.amount;
  if (!prices.length) return type === "min" ? options.indexOf(ticket) === 0 : options.indexOf(ticket) === options.length - 1;
  if (!current || !prices.length) return false;
  return type === "min" ? current === Math.min(...prices) : current === Math.max(...prices);
}

function updateCheckout() {
  const copy = translations[activeLanguage];
  const qty = Math.max(1, Number($("#checkoutQty").value) || 1);
  const parsed = priceValue(activeTicket.price);
  const freeTickets = ticketRank(activeTicket, "min") ? Math.floor(qty / 3) : 0;
  const hotelCount = ticketRank(activeTicket, "max") ? Math.floor(qty / 3) : 0;
  const service = parsed ? Math.round(parsed.amount * qty * SERVICE_RATE) : null;
  const total = parsed ? parsed.amount * qty + service : null;
  const bonuses = [];

  if (freeTickets) bonuses.push(`${freeTickets} ${copy.freeTickets} (${qty + freeTickets} ${copy.totalTickets})`);
  if (hotelCount) bonuses.push(`${hotelCount}x ${copy.hotelVoucher}`);

  checkoutTotalText = parsed ? formatPrice(total, parsed.currency) : activeTicket.price;
  fillText([
    ["#checkoutService", parsed ? formatPrice(service, parsed.currency) : "-"],
    ["#checkoutTotal", checkoutTotalText],
    ["#checkoutBonus", bonuses.join(" + ") || copy.noBonus],
    ["#hotelName", hotels[activeFestival.name] || "-"],
    ["#hotelDesc", `${copy.hotelVoucherDesc}. ${hotelCount ? `${hotelCount} voucher.` : ""}`]
  ]);
  $("#hotelVoucher").classList.toggle("hidden", !hotelCount);
}

function issueTicket() {
  const copy = translations[activeLanguage];
  const qty = Math.max(1, Number($("#checkoutQty").value) || 1);
  const parsed = priceValue(activeTicket.price);
  const service = parsed ? Math.round(parsed.amount * qty * SERVICE_RATE) : null;
  const total = parsed ? parsed.amount * qty + service : null;
  const hotelCount = ticketRank(activeTicket, "max") ? Math.floor(qty / 3) : 0;

  fillText([
    ["#visualFestival", activeFestival.name],
    ["#visualTicketId", `NG-${Date.now().toString().slice(-8)}`],
    ["#visualStage", stageMap[activeFestival.name] || stageMap.default],
    ["#visualDay", activeFestival.date.includes("&") ? "Weekend" : "Festival Day"],
    ["#visualDate", activeFestival.date],
    ["#visualVenue", activeFestival.place],
    ["#visualQty", qty],
    ["#visualTicketType", activeTicket.name],
    ["#visualTotal", checkoutTotalText || (parsed ? formatPrice(total, parsed.currency) : activeTicket.price)],
    ["#visualHotelName", hotels[activeFestival.name] || "-"],
    ["#visualHotelDesc", `${copy.hotelVoucherDesc}. ${hotelCount} voucher.`]
  ]);
  $("#visualHotelVoucher").classList.toggle("hidden", !hotelCount);
  showPage("ticketVisual");
}

function ticketVisualMarkup(festival, ticket, qty = 1, totalText = ticket.price, showDownloadButton = true) {
  const ticketId = `NG-${Date.now().toString().slice(-8)}`;
  const day = festival.date.includes("&") ? "Weekend" : "Festival Day";
  const stage = stageMap[festival.name] || stageMap.default;

  return `
    <article class="ticket-visual">
      <div class="ticket-main">
        <h1>${festival.name}</h1>
        <div class="visual-meta">
          <p><span>Ticket ID</span><strong>${ticketId}</strong></p>
          <p><span>Stage</span><strong>${stage}</strong></p>
          <p><span>Day</span><strong>${day}</strong></p>
          <p><span>Date</span><strong>${festival.date}</strong></p>
          <p><span>Venue</span><strong>${festival.place}</strong></p>
          <p><span>Qty</span><strong>${qty}</strong></p>
        </div>
      </div>
      <div class="ticket-stub">
        <div class="dummy-qr" aria-label="Dummy QR code"></div>
        <p>${ticket.name}</p>
        <strong>${totalText}</strong>
        ${showDownloadButton ? `<button class="secondary-button download-ticket-button" type="button">${translations[activeLanguage].downloadTicket}</button>` : ""}
      </div>
    </article>
  `;
}

function downloadTicket(ticket) {
  const sheet = $("#printTicketSheet");
  const qty = Math.max(1, Number($("#checkoutQty").value) || 1);
  sheet.innerHTML = ticketVisualMarkup(activeFestival, ticket, qty, checkoutTotalText || ticket.price, false);
  window.print();
}

function showPaymentSuccess() {
  const redirectText = $("#redirectTicketText");
  let count = 3;

  if (paymentRedirectTimer) {
    window.clearInterval(paymentRedirectTimer);
  }

  $("#successAmount").textContent = checkoutTotalText;
  redirectText.innerHTML = translations[activeLanguage].redirectTicket.replace("{count}", `<strong id="redirectCountdown">${count}</strong>`);
  showPage("paymentSuccess");

  paymentRedirectTimer = window.setInterval(() => {
    count -= 1;
    $("#redirectCountdown").textContent = count;

    if (count <= 0) {
      window.clearInterval(paymentRedirectTimer);
      paymentRedirectTimer = null;
      issueTicket();
    }
  }, 1000);
}

function openExternal(url) {
  if (!url) {
    showToast(translations[activeLanguage].ticketUnavailable);
    return;
  }

  window.open(url, "_blank", "noopener");
}

function setActiveCategory(category) {
  activeCategory = category;
  renderTickets();
  navSearch.classList.add("visible");
}

function updateLanguageButtons() {
  const languageActions = $(".profile-language-actions");
  languageActions.classList.toggle("id-active", activeLanguage === "id");
  $$("[data-profile-language]").forEach((button) => {
    button.classList.toggle("active", button.dataset.profileLanguage === activeLanguage);
  });
}

function renderTickets() {
  const grid = $("#ticketGrid");
  const heading = $("#ticketHeading");
  const copy = translations[activeLanguage];
  const query = ticketSearchQuery.trim().toLowerCase();

  grid.innerHTML = "";
  if (!activeCategory) {
    heading.textContent = copy.pickCategory;
    navSearch.classList.remove("visible", "open");
    return;
  }

  heading.textContent =
    activeCategory === "international"
      ? copy.ticketHeadingInternational
      : copy.ticketHeadingLocal;

  festivalData[activeCategory].filter((item) => {
    if (!query) return true;
    return [item.name, item.place, item.date, item.lineup, item.genre, item.summary]
      .join(" ")
      .toLowerCase()
      .includes(query);
  }).forEach((item) => {
    grid.appendChild(createCard(item, copy.buyTicket, "tickets"));
  });
}

function renderMerchandise() {
  const copy = translations[activeLanguage];
  const grid = $("#merchGrid");
  grid.innerHTML = "";
  merchandiseData.forEach((item) => grid.appendChild(createCard(item, copy.buyMerch, "merchandise")));
}

function openGalleryLightbox(tile) {
  window.clearTimeout(galleryCloseTimer);
  const source = tile.getBoundingClientRect();
  galleryLightboxTitle.textContent = tile.textContent.trim();
  galleryLightboxPhoto.style.backgroundImage = `url("${tile.dataset.image}")`;
  galleryLightbox.classList.remove("hidden", "closing", "is-open");
  galleryLightboxPhoto.style.transition = "none";
  galleryLightboxPhoto.style.setProperty("--gallery-x", "0px");
  galleryLightboxPhoto.style.setProperty("--gallery-y", "0px");
  galleryLightboxPhoto.style.setProperty("--gallery-scale-x", "1");
  galleryLightboxPhoto.style.setProperty("--gallery-scale-y", "1");
  const target = galleryLightboxPhoto.getBoundingClientRect();
  galleryLightboxPhoto.style.setProperty("--gallery-x", `${source.left - target.left}px`);
  galleryLightboxPhoto.style.setProperty("--gallery-y", `${source.top - target.top}px`);
  galleryLightboxPhoto.style.setProperty("--gallery-scale-x", `${source.width / target.width}`);
  galleryLightboxPhoto.style.setProperty("--gallery-scale-y", `${source.height / target.height}`);
  galleryLightboxPhoto.offsetWidth;
  galleryLightboxPhoto.style.transition = "";
  window.requestAnimationFrame(() => galleryLightbox.classList.add("is-open"));
}

function closeGalleryLightbox() {
  if (galleryLightbox.classList.contains("hidden") || galleryLightbox.classList.contains("closing")) return;
  galleryLightbox.classList.remove("is-open");
  galleryLightbox.classList.add("closing");
  galleryCloseTimer = window.setTimeout(() => {
    galleryLightbox.classList.add("hidden");
    galleryLightbox.classList.remove("closing");
    galleryLightboxPhoto.style.backgroundImage = "";
  }, 470);
}

function applyLanguage(language) {
  activeLanguage = language;
  updateStaticCopy();
  renderTickets();
  renderMerchandise();
  updateLanguageButtons();
  languageGate.classList.add("hidden");
  showPage("home");
  rulesModal.classList.remove("hidden");
}

function changeLanguage(language) {
  activeLanguage = language;
  updateStaticCopy();
  renderTickets();
  renderMerchandise();
  if (activeFestival && !$("#festivalDetailPage").classList.contains("hidden")) showFestivalDetail(activeFestival, false);
  if (activeTicket && !$("#checkoutPage").classList.contains("hidden")) updateCheckout();
  updateLanguageButtons();
  showToast(translations[activeLanguage].languageChanged);
}

function stateFromHash() {
  const hash = window.location.hash.replace("#", "");
  if (hash === "signin" || hash === "signup" || hash === "reset") {
    return { screen: "auth", mode: hash };
  }
  if (hash) {
    return { screen: "app", route: hash };
  }
  return { screen: "auth", mode: "signin" };
}

function showAuthScreen(mode) {
  isSignedIn = false;
  appShell.classList.add("hidden");
  authScreen.classList.remove("hidden");
  activeCategory = "";
  setAuthMode(mode, false);
}

window.addEventListener("popstate", (event) => {
  const state = event.state || stateFromHash();

  if (state.screen === "auth") {
    if (isSignedIn) {
      renderPage("language");
      updateHistoryState({ screen: "app", route: "language" }, true);
      return;
    }

    showAuthScreen(state.mode || "signin");
    return;
  }

  if (!isSignedIn) {
    showAuthScreen("signin");
    updateHistoryState({ screen: "auth", mode: "signin" }, true);
    return;
  }

  authScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  renderPage(state.route || "home");
});

signinTab.addEventListener("click", () => setAuthMode("signin"));
signupTab.addEventListener("click", () => setAuthMode("signup"));

signinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = $("#signinEmail").value.trim();
  const password = $("#signinPassword").value;

  if (email === dummyUser.email && password === dummyUser.password) {
    failedSignInAttempts = 0;
    signIn({ ...dummyUser });
    return;
  }

  failedSignInAttempts += 1;

  if (failedSignInAttempts >= 3) {
    failedSignInAttempts = 0;
    $("#resetEmail").value = email;
    setAuthMode("reset");
    showToast("Too many failed attempts. Please reset your password.");
    return;
  }

  const attemptsLeft = 3 - failedSignInAttempts;
  signinError.textContent = `Invalid email or password. ${attemptsLeft} attempt${attemptsLeft === 1 ? "" : "s"} left.`;
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    username: $("#signupUsername").value.trim(),
    email: $("#signupEmail").value.trim(),
    password: $("#signupPassword").value,
    phone: $("#signupPhone").value.trim()
  };
  signIn(user);
  showToast("Account created. Welcome to NIGAKU.");
});

resetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = $("#resetEmail").value.trim();
  const password = $("#resetPassword").value;
  const confirmPassword = $("#resetConfirmPassword").value;

  if (!email) {
    resetError.textContent = "Please enter your account email.";
    return;
  }
  if (password !== confirmPassword) {
    resetError.textContent = "New password and confirmation do not match.";
    return;
  }

  dummyUser.email = email;
  dummyUser.password = password;
  setAuthMode("signin");
  $("#signinEmail").value = email;
  $("#signinPassword").value = "";
  resetForm.reset();
  showToast("Password reset. Please sign in with your new password.");
});

$$("[data-language]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
on("#resetBackButton", "click", () => setAuthMode("signin"));
$$("[data-category-choice]").forEach((button) => button.addEventListener("click", () => { setActiveCategory(button.dataset.categoryChoice); showPage("tickets"); }));
on("#acceptCookiesButton", "click", () => { rulesModal.classList.add("hidden"); showToast(translations[activeLanguage].cookiesAccepted); });
on("#closeRulesButton", "click", () => rulesModal.classList.add("hidden"));
[["#ticketsBackButton", "home"], ["#checkoutBackButton", "festivalDetail"], ["#checkoutPayButton", "paymentMethod"], ["#paymentBackButton", "checkout"], ["#qrisBackButton", "paymentMethod"], ["#visualHomeButton", "home"], ["#profileTrigger", "profile"], ["#profileBackButton", "home"]].forEach(([selector, route]) => on(selector, "click", () => showPage(route)));
on("#backToTicketsButton", "click", () => showPage(detailBackRoute));
on("#detailOfficialButton", "click", () => openExternal(activeFestival?.officialUrl));
on("#ticketOptionList", "click", (event) => {
  const buyButton = event.target.closest("[data-ticket-index]");
  if (!activeFestival) return;

  if (buyButton) {
    showCheckout(ticketOptions[activeFestival.name][Number(buyButton.dataset.ticketIndex)]);
  }
});

on("#checkoutQty", "input", updateCheckout);
on("#qrisOptionButton", "click", () => {
  $("#qrisAmount").textContent = checkoutTotalText;
  showPage("qris");
});
on("#checkPaymentButton", "click", showPaymentSuccess);
on("#ticketVisualPage", "click", (event) => {
  if (event.target.closest(".download-ticket-button")) {
    downloadTicket(activeTicket || { name: "-", price: "-" });
  }
});
on("#galleryPage", "click", (event) => {
  const tile = event.target.closest(".gallery-tile");
  if (tile) openGalleryLightbox(tile);
});
on("#galleryLightboxBack", "click", closeGalleryLightbox);
galleryLightbox.addEventListener("click", (event) => {
  if (!event.target.closest(".gallery-lightbox-photo") && !event.target.closest(".gallery-lightbox-header")) closeGalleryLightbox();
});

on("#resetPasswordButton", "click", () => {
  $("#resetEmail").value = currentUser.email;
  appShell.classList.add("hidden");
  authScreen.classList.remove("hidden");
  setAuthMode("reset");
  updateHistoryState({ screen: "auth", mode: "reset" }, true);
});
on("#editPhotoButton", "click", () => profilePhotoInput.click());

profilePhotoInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const imageUrl = URL.createObjectURL(file);
  $("#profilePhotoLarge").src = imageUrl;
  $(".profile-trigger img").src = imageUrl;
});

$$("[data-profile-language]").forEach((button) => button.addEventListener("click", () => changeLanguage(button.dataset.profileLanguage)));

on("#changeAccountButton", "click", () => {
  showAuthScreen("signin");
  updateHistoryState({ screen: "auth", mode: "signin" }, true);
  showToast(translations[activeLanguage].changeAccountToast);
});

on("#signOutButton", "click", () => {
  showAuthScreen("signin");
  updateHistoryState({ screen: "auth", mode: "signin" }, true);
});

on("#searchTrigger", "click", () => {
  if (!activeCategory || $("#ticketsPage").classList.contains("hidden")) {
    showToast(activeLanguage === "id" ? "Search hanya tersedia di halaman tiket." : "Search is only available on the tickets page.");
    return;
  }

  navSearch.classList.toggle("open");
  if (navSearch.classList.contains("open")) {
    ticketSearchInput.focus();
  }
});

ticketSearchInput.addEventListener("input", (event) => { ticketSearchQuery = event.target.value; renderTickets(); });
$$("[data-route]").forEach((link) => link.addEventListener("click", (event) => { event.preventDefault(); showPage(link.dataset.route); }));

renderTickets();
renderMerchandise();
updateLanguageButtons();
updateStaticCopy();
const initialState = stateFromHash();
if (initialState.screen === "auth") {
  setAuthMode(initialState.mode || "signin", false);
  updateHistoryState(initialState, true);
} else {
  updateHistoryState({ screen: "auth", mode: "signin" }, true);
}
