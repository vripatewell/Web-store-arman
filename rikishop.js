        // --- Konfigurasi ---
        const USERNAME_ADMIN = "ArmanGZOffc"; // Ganti dengan nomor WhatsApp admin Anda!
        const WA_SELLER_NUMBER = "6285820947960"; // Ganti dengan nomor WhatsApp seller Anda! (Bisa sama dengan admin)
        const CREATOR_USERNAME = "ARMAN GZ Official"; // Digunakan dalam menu bot, simulasikan config.creator

        // --- Elemen DOM ---
        const welcomeScreen = document.getElementById('welcomeScreen'); // Welcome screen
        const mainContainer = document.getElementById('mainContainer'); // Main content container

        const offcanvasMenu = document.getElementById('offcanvasMenu');
        const overlay = document.getElementById('overlay');
        const openMenuBtn = document.getElementById('openMenu');
        const closeMenuBtn = document.getElementById('closeMenu'); // Fixed typo
        const openCartBtn = document.getElementById('openCart');
        const cartCountSpan = document.getElementById('cartCount');
        const currentDateTimeSpan = document.getElementById('currentDateTime');
        const serviceItems = document.querySelectorAll('.service-item'); // All service items

        const serviceDetailPage = document.getElementById('service-detail-page');
        const homePage = document.getElementById('home-page');
        const cartPage = document.getElementById('cart-page');
        const chatAiPage = document.getElementById('chat-ai-page');

        const productListDiv = document.getElementById('productList');
        const productDetailViewDiv = document.getElementById('productDetailView');
        const serviceDetailPageTitle = document.getElementById('serviceDetailPageTitle');

        const detailProductName = document.getElementById('detailProductName');
        const detailProductDescriptionContent = document.getElementById('detailProductDescriptionContent'); // New container for description
        const detailProductPriceContainer = document.getElementById('detailProductPriceContainer'); // Container for price
        const detailProductPrice = document.getElementById('detailProductPrice');
        const detailProductActions = document.getElementById('detailProductActions'); // Container for buttons

        const cartItemsList = document.getElementById('cartItems');
        const cartTotalSpan = document.getElementById('cartTotal');
        const checkoutButton = document.getElementById('checkoutButton');
        const backArrows = document.querySelectorAll('.back-arrow');

        // Elemen Chat AI (untuk halaman)
        const chatAiMessagesPage = document.getElementById('chatAiMessagesPage');
        const chatAiInputPage = document.getElementById('chatAiInputPage');
        const sendChatAiBtnPage = document.getElementById('sendChatAiBtnPage');
        const chatAiLoadingPage = document.getElementById('chatAiLoadingPage');

        // Elemen Carousel Banner
        const bannerCarousel = document.getElementById('bannerCarousel');
        const bannerPagination = document.getElementById('bannerPagination');
        const bannerDots = document.querySelectorAll('.banner-dot');
        let currentBannerIndex = 0;
        let bannerInterval;

        // Elemen Modal Tentang Kami
        const aboutUsModal = document.getElementById('aboutUsModal');
        const openAboutUsModalBtn = document.getElementById('openAboutUsModal');
        const closeAboutUsModalBtn = document.getElementById('closeAboutUsModal');
        
        // Elemen Modal Generik Menu Script
        const genericScriptMenuModal = document.getElementById('genericScriptMenuModal');
        const genericScriptMenuTitle = document.getElementById('genericScriptMenuTitle');
        const genericScriptMenuContent = document.getElementById('genericScriptMenuContent');
        const closeGenericScriptMenuModalBtn = document.getElementById('closeGenericScriptMenuModal');
        
        // Data Produk
        const products = {
            "Panel": [
                { id: 1, nama: 'Panel Ram 1GB', harga: 1000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 2, nama: 'Panel Ram 2GB', harga: 2000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 3, nama: 'Panel Ram 3GB', harga: 3000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 4, nama: 'Panel Ram 4GB', harga: 4000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 5, nama: 'Panel Ram 5GB', harga: 5000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 6, nama: 'Panel Ram 6GB', harga: 6000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 7, nama: 'Panel Ram 7GB', harga: 7000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 8, nama: 'Panel Ram 8GB', harga: 8000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 9, nama: 'Panel Ram 9GB', harga: 9000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 10, nama: 'Panel Ram UNLIMITED', harga: 10000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 11, nama: 'Reseller Panel', harga: 15000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
                { id: 12, nama: 'Admin Panel', harga: 20000, deskripsiPanjang: `Syarat & Ketentuan : || 
Server private & kualitas terbaik! ||
Script bot dijamin aman (anti drama/maling) ||
Garansi 10 hari (1x replace) ||
Server anti delay/lemot! ||
Claim garansi wajib bawa bukti transaksi` },
            ],
            
            // Script akan memiliki satu item khusus untuk membuka menu bot
            "Script": [
                 { id: 25, nama: 'Script Bot WhatsApp', harga: 75000, deskripsiPanjang: '╭━〔 💎 *SCRIPT BOT* 💎 〕━╮||│||│ Halo Armani Gen Z Official, tertarik membeli *SC* ini?||│ *Hubungi developer sekarang Untuk membelinya*||│||│ ⚡ *Keuntungan Membeli SC Ini:*||│  ✅ Free Panel Selama Sebulan||│  ✅ Akses Grup Update & Diskusi Eksklusif||│  ✅ Type Plugin – Bebas Tambah Fitur||│  ✅ 100% NO ENC – Leluasa Dimodifikasi||│  ✅ Banyak fitur menggunakan scrape||│  ✅ API Premium aktif & diperpanjang otomatis||│  ✅ Total 1000+ fitur aktif||│  ✅ Bebas Request Fitur Khusus||│  ✅ Database Aman – Anti Pencurian SC||│||│ 💰 *Harga*: Rp 75.000||│||│ Mohon hargai developer yang telah membuatnya||│ dengan sepenuh hati! 😊||│||╰━━━━━━━━━━━━━━━━━━━━╯||> Berikut contact owner saya',
                 }
            ],
            
            "Jasa": [

                { id: 35, nama: 'Jasa raname script', harga: 15000, deskripsiPanjang: 'full raname, Terima jadi, foto, nomor, nama, link dan lain-lain sudah full milik mu, type case dan plugin beda hrga, jika case 15k jika plugin 20k.' }
            ],
                        "Suntik Sosmed": [
                { id: 40, nama: 'list suntik', deskripsiPanjang: `_*♻️S U N T I K  S O S I A L  M E D I A*_||
            [ NO REFILL]||
||

*INSTAGRAM FOLLOWERS*||
_100 FOLL : Rp 6.000_||
_500 FOLL : Rp 19.000_||
_1.000 FOLL : Rp 35.000_||
||
*INSTAGRAM LIKE*||
_100 LIKE : Rp 2.500_||
_500 LIKE : Rp 5.000_||
_1.000 LIKE : Rp 8.000_||
||
*INSTAGRAM VIEW*||
_1.000 VIEW : Rp 2.500_||
_2.000 VIEW : Rp 5.000_||
_3.000 VIEW : Rp 8.000_||
||
*TIKTOK FOLLOWERS*||
_100 FOLL : Rp 5.000_||
_500 FOLL : Rp 30.000_||
_1.000 FOLL : Rp 50.000_||
||
*TIKTOK LIKE*||
_100 LIKE : Rp 5.000_||
_500 LIKE : Rp 8.000_||
_1.000 LIKE : Rp 10.000_||
||
*TIKTOK VIEW*||
_20.000 VIEW : Rp 5.000_||
_50.000 VIEW : Rp 10.000_||
_100.000 VIEW : Rp 20.000_||
||
*FACEBOOK FOLLOWERS*||
_100 FOLL : Rp 5.000_||
_500 FOLL : Rp 10.000_||
_1.000 FOLL : Rp 20.000_||
||
*YOUTUBE LIKE*||
_100 LIKE : Rp 5.000_||
_500 LIKE : Rp 10.000_||
_1.000 LIKE : Rp 17.000_||
||
*SHOPEE FOLLOWERS*||
_100 FOLL : Rp 5.000_||
_500 FOLL : Rp 10.000_||
_1.000 FOLL : Rp 20.000_||
||
_*💳PEMBAYARAN*_||
_QRIS-PULSA_` }
            ],
            
            "Sewa Bot": [
                { id: 46, nama: 'SEWA ARMAN BOTzz || 📅 1 Minggu', harga: 5000, deskripsiPanjang: '💎 *KEUNTUNGAN:*||✅ Akses fitur *Premium*||✅ Invite bot ke grup kamu||✅ Fast Respon & No Delay||✅ Support 24 Jam' },
                { id: 47, nama: 'SEWA ARMAN BOTzz || 📅 2 Minggu', harga: 9000, deskripsiPanjang: '💎 *KEUNTUNGAN:*||✅ Akses fitur *Premium*||✅ Invite bot ke grup kamu||✅ Fast Respon & No Delay||✅ Support 24 Jam' },
                { id: 48, nama: 'SEWA ARMAN BOTzz || 📅 1 bulan', harga: 20000, deskripsiPanjang: '💎 *KEUNTUNGAN:*||✅ Akses fitur *Premium*||✅ Invite bot ke grup kamu||✅ Fast Respon & No Delay||✅ Support 24 Jam' },
                { id: 49, nama: 'SEWA ARMAN BOTzz || 📅 2 bulan', harga: 30000, deskripsiPanjang: '💎 *KEUNTUNGAN:*||✅ Akses fitur *Premium*||✅ Invite bot ke grup kamu||✅ Fast Respon & No Delay||✅ Support 24 Jam' },
                { id: 50, nama: 'SEWA ARMAN BOTzz || 📅 permanen', harga: 45000, deskripsiPanjang: '💎 *KEUNTUNGAN:*||✅ Akses fitur *Premium*||✅ Invite bot ke grup kamu||✅ Fast Respon & No Delay||✅ Support 24 Jam' }
            ]
        };

        let cart = JSON.parse(localStorage.getItem('rikishop_cart')) || [];
        let currentPage = 'home-page'; // Melacak halaman saat ini

        // --- Fungsi Pembantu ---

        // Fungsi untuk menampilkan halaman dan menyembunyikan halaman lain
        function showPage(pageId) {
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
            currentPage = pageId; // Perbarui pelacak halaman saat ini

            // Scroll ke atas halaman saat berganti halaman
            mainContainer.scrollTop = 0;
        }

        // Perbarui Tanggal dan Waktu untuk info-bar
        function updateDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };
            currentDateTimeSpan.textContent = now.toLocaleDateString('id-ID', options);
        }

        // Format angka ke mata uang Rupiah
        function formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(number);
        }

        // Fungsi untuk ucapan dinamis berdasarkan waktu
        function ucapan() {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                return "Selamat Pagi";
            } else if (hour >= 12 && hour < 18) {
                return "Selamat Siang";
            } else if (hour >= 18 && hour < 22) {
                return "Selamat Sore";
            } else {
                return "Selamat Malam";
            }
        }

        // --- Logika Carousel Banner ---
        function showBanner(index) {
            const offset = -index * 100;
            bannerCarousel.style.transform = `translateX(${offset}%)`;
            bannerDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentBannerIndex = index;
        }

        function nextBanner() {
            currentBannerIndex = (currentBannerIndex + 1) % bannerDots.length;
            showBanner(currentBannerIndex);
        }

        function startBannerAutoSlide() {
            bannerInterval = setInterval(nextBanner, 5000); // Ganti banner setiap 5 detik
        }

        function stopBannerAutoSlide() {
            clearInterval(bannerInterval);
        }

        bannerDots.forEach(dot => {
            dot.addEventListener('click', () => {
                stopBannerAutoSlide();
                showBanner(parseInt(dot.dataset.index));
                startBannerAutoSlide(); // Mulai kembali auto-slide setelah interaksi manual
            });
        });

        // --- Logika Menu Offcanvas ---
        openMenuBtn.addEventListener('click', () => {
            offcanvasMenu.classList.add('active');
            overlay.classList.add('active');
            mainContainer.style.transform = `translateX(${offcanvasMenu.offsetWidth}px)`; // Dorong konten utama
        });

        closeMenuBtn.addEventListener('click', () => {
            offcanvasMenu.classList.remove('active');
            overlay.classList.remove('active');
            mainContainer.style.transform = 'translateX(0)'; // Kembalikan konten utama
        });

        overlay.addEventListener('click', () => {
            closeMenuBtn.click(); // Tutup menu saat overlay diklik
        });

        // Tangani Klik Link Menu Offcanvas
        document.querySelectorAll('#offcanvasMenu a').forEach(link => {
            link.addEventListener('click', function(e) {
                // Jangan cegah default jika itu link About Us Modal
                if (this.id === 'openAboutUsModal') {
                    e.preventDefault();
                    aboutUsModal.style.display = 'block';
                    closeMenuBtn.click(); // Tutup menu samping
                } else if (this.href.includes('free-scripts.html')) {
                    // Ini adalah link ke halaman eksternal, biarkan default behavior
                    // Tutup menu offcanvas secara manual
                    closeMenuBtn.click();
                    return; 
                } else {
                    e.preventDefault();
                    const targetPageId = this.dataset.page;
                    showPage(targetPageId);
                    closeMenuBtn.click(); // Tutup menu setelah pemilihan
                }
            });
        });

        // --- Logika Modal "Tentang Kami" ---
        openAboutUsModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            aboutUsModal.style.display = 'block';
            closeMenuBtn.click(); // Tutup offcanvas menu
        });

        closeAboutUsModalBtn.addEventListener('click', () => {
            aboutUsModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == aboutUsModal) {
                aboutUsModal.style.display = 'none';
            }
        });

        // --- Logika Modal Generik Menu Script ---
        closeGenericScriptMenuModalBtn.addEventListener('click', () => {
            genericScriptMenuModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == genericScriptMenuModal) {
                genericScriptMenuModal.style.display = 'none';
            }
        });


        // --- Logika Tampilan Layanan/Produk ---

        // Tangani Klik Item Layanan (misalnya, mengklik "Panel", "VPS", "Script")
        serviceItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const serviceType = item.dataset.service;
                loadServiceProducts(serviceType);
                showPage('service-detail-page');
            });
        });

        // Muat Produk untuk Tipe Layanan ke dalam productListDiv
        function loadServiceProducts(serviceType) {
            serviceDetailPageTitle.textContent = serviceType;
            productListDiv.innerHTML = ''; // Hapus produk sebelumnya
            productDetailViewDiv.style.display = 'none'; // Sembunyikan tampilan detail saat menampilkan daftar

            const productData = products[serviceType];
            if (productData && productData.length > 0) {
                productData.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.classList.add('product-item');
                    
                    // Untuk item Script, tambahkan deskripsi singkat dan harga hanya jika bukan 'Lihat Menu Bot'
                    let productHtml = `<span class="product-name">${product.nama}</span>`;
                    if (serviceType === 'Script' && product.isBotMenu) {
                         // Tidak ada deskripsi singkat atau harga untuk "Lihat Menu Bot" di tampilan daftar
                         productHtml += `<p class="product-short-desc">${product.deskripsiPanjang}</p>`; // Show full short desc for "Lihat Menu Bot"
                    } else {
                        // Tampilkan deskripsi singkat (jika ada) dan harga
                        productHtml += `<p class="product-short-desc">${product.deskripsiPanjang ? product.deskripsiPanjang.split('||')[0].trim() + '...' : ''}</p>`;
                        productHtml += `<span class="product-price-list">${product.harga > 0 ? formatRupiah(product.harga) : 'Gratis'}</span>`;
                    }
                    productHtml += `<i class="fas fa-chevron-right arrow"></i>`;
                    productItem.innerHTML = productHtml;

                    // Tambahkan event listener ke item produk
                    productItem.addEventListener('click', () => {
                        showProductDetail(product, serviceType); // Lewatkan serviceType juga
                    });
                    productListDiv.appendChild(productItem);
                });
                productListDiv.style.display = 'block'; // Pastikan daftar terlihat
            } else {
                productListDiv.innerHTML = '<p style="text-align: center; color: var(--light-text-color); padding: 20px;">Produk akan segera hadir.</p>';
            }
        }

        // Tampilkan Detail Produk (saat produk tertentu di daftar diklik)
        function showProductDetail(product, serviceType) { // Terima serviceType sebagai argumen
            productListDiv.style.display = 'none'; // Sembunyikan daftar produk
            productDetailViewDiv.style.display = 'block'; // Tampilkan detail produk

            detailProductName.textContent = product.nama;
            
            // Bersihkan konten sebelumnya dan kelas
            detailProductDescriptionContent.innerHTML = '';
            detailProductDescriptionContent.className = ''; 

            // Atur visibilitas harga dan tombol aksi
            detailProductPriceContainer.style.display = 'block';
            detailProductActions.style.display = 'flex';
            detailProductActions.innerHTML = ''; // Clear previous buttons

            // Logika untuk menampilkan konten dan tombol berdasarkan tipe produk
            if (serviceType === 'Script' && product.isBotMenu) {
                // Ini adalah item "Lihat Menu Bot"
                detailProductDescriptionContent.classList.add('script-menu-display'); // Tambahkan kelas khusus
                detailProductDescriptionContent.innerHTML = product.menuContent.replace(/\n/g, '<br>'); // Tampilkan konten menu bot

                // Sembunyikan harga dan tombol Add/Buy
                detailProductPriceContainer.style.display = 'none';
                detailProductActions.style.display = 'none'; // Sembunyikan semua tombol aksi
            } else {
                // Ini adalah produk normal (termasuk script non-bot)
                detailProductDescriptionContent.innerHTML = product.deskripsiPanjang ? product.deskripsiPanjang.replace(/\|\|/g, '<br>').replace(/▪︎/g, '•') : 'Tidak ada deskripsi.';
                
                // Tampilkan harga
                detailProductPriceContainer.style.display = 'block';
                detailProductPrice.textContent = formatRupiah(product.harga);

                // Tambahkan tombol Add to Cart dan Buy Now
                const addToCartBtn = document.createElement('button');
                addToCartBtn.className = 'add-to-cart';
                addToCartBtn.textContent = 'Tambah ke Keranjang';
                addToCartBtn.dataset.productId = product.id;
                addToCartBtn.dataset.productName = product.nama;
                addToCartBtn.dataset.productPrice = product.harga;
                addToCartBtn.addEventListener('click', addToCart);
                detailProductActions.appendChild(addToCartBtn);

                const buyNowLink = document.createElement('a');
                buyNowLink.className = 'buy-now';
                buyNowLink.textContent = 'Beli Sekarang (WhatsApp)';
                buyNowLink.href = `https://wa.me/${WA_ADMIN_NUMBER}?text=${encodeURIComponent(`Halo admin Rikishopreal, saya tertarik dengan produk ini:\n\n*${product.nama}*\nHarga: ${formatRupiah(product.harga)}\n\nDeskripsi:\n${product.deskripsiPanjang ? product.deskripsiPanjang.replace(/\|\|/g, '\n').replace(/▪︎/g, '•') : 'Tidak ada deskripsi.'}\n\nMohon info detail pembayarannya.`)}`;
                buyNowLink.target = "_blank";
                buyNowLink.setAttribute("rel", "noopener noreferrer"); // Tambahkan rel untuk keamanan
                detailProductActions.appendChild(buyNowLink);

                // Tambahkan tombol "Cek Menu" hanya untuk produk Script yang memiliki menuContent
                if (serviceType === 'Script' && product.menuContent) { // Product is a script and has menuContent
                    const cekMenuBtn = document.createElement('button');
                    cekMenuBtn.className = 'cek-menu';
                    cekMenuBtn.textContent = 'Cek Menu';
                    cekMenuBtn.addEventListener('click', () => {
                        genericScriptMenuTitle.textContent = `Menu ${product.nama}`;
                        genericScriptMenuContent.innerHTML = product.menuContent.replace(/\n/g, '<br>');
                        genericScriptMenuModal.style.display = 'block';
                    });
                    detailProductActions.appendChild(cekMenuBtn);
                }
            }
        }


        // --- Logika Tombol Kembali ---
        backArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                const backToPageId = arrow.dataset.backTo;
                if (currentPage === 'service-detail-page' && productDetailViewDiv.style.display === 'block') {
                    // Jika saat ini melihat detail produk, kembali ke daftar produk
                    productListDiv.style.display = 'block';
                    productDetailViewDiv.style.display = 'none';
                } else if (backToPageId) {
                    // Kembali ke halaman yang ditentukan
                    showPage(backToPageId);
                } else {
                    // Default kembali ke halaman beranda jika tidak ditentukan
                    showPage('home-page');
                }
            });
        });

        // --- Logika Keranjang ---

        // Perbarui jumlah keranjang yang ditampilkan di header
        function updateCartCount() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountSpan.textContent = count;
            cartCountSpan.style.display = count > 0 ? 'inline-block' : 'none';
        }

        // Tambahkan produk ke keranjang
        function addToCart(event) {
            const productId = parseInt(event.target.dataset.productId);
            const productName = event.target.dataset.productName;
            const productPrice = parseInt(event.target.dataset.productPrice);

            const existingItemIndex = cart.findIndex(item => item.id === productId);

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }
            localStorage.setItem('rikishop_cart', JSON.stringify(cart));
            updateCartCount();
            alert(`${productName} telah ditambahkan ke keranjang!`);
        }

        // Render item keranjang di halaman keranjang
        function renderCart() {
            cartItemsList.innerHTML = ''; // Hapus item sebelumnya
            let total = 0;
            if (cart.length === 0) {
                cartItemsList.innerHTML = '<p style="text-align: center; color: var(--light-text-color); padding: 20px;">Keranjang Anda kosong.</p>';
            } else {
                cart.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <div class="item-info">
                            ${item.name} (${formatRupiah(item.price)}) x <span class="item-quantity">${item.quantity}</span>
                        </div>
                        <button class="remove-item" data-product-id="${item.id}"><i class="fas fa-trash"></i></button>
                    `;
                    cartItemsList.appendChild(listItem);
                    total += item.price * item.quantity;
                });
            }
            cartTotalSpan.textContent = formatRupiah(total);

            // Tambahkan event listener ke tombol hapus
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', removeFromCart);
            });
        }

        // Hapus item dari keranjang
        function removeFromCart(event) {
            const productId = parseInt(event.currentTarget.dataset.productId);
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('rikishop_cart', JSON.stringify(cart));
            updateCartCount();
            renderCart(); // Render ulang keranjang setelah penghapusan
        }

        // Buka halaman keranjang
        openCartBtn.addEventListener('click', () => {
            showPage('cart-page');
            renderCart(); // Render item keranjang saat halaman keranjang dibuka
        });

        // Tombol checkout untuk keranjang
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.');
                return;
            }

            let message = "Halo admin Rikishopreal, saya ingin memesan:\n\n";
            let totalOrder = 0;
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name} (${formatRupiah(item.price)}) x ${item.quantity}\n`;
                totalOrder += item.price * item.quantity;
            });
            message += `\nTotal Harga: ${formatRupiah(totalOrder)}\n\nMohon info detail pembayarannya.`;

            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${WA_ADMIN_NUMBER}?text=${encodedMessage}`, '_blank');

            // Opsional bersihkan keranjang setelah checkout
            cart = [];
            localStorage.setItem('rikishop_cart', JSON.stringify(cart));
            updateCartCount();
            renderCart();
            alert('Pesanan Anda akan dikirimkan ke WhatsApp admin. Silakan lanjutkan percakapan di WhatsApp.');
        });

        // --- Logika Chat AI ---
        async function handleSendChatMessagePage() {
            const userInput = chatAiInputPage.value.trim();
            if (!userInput) return;

            appendMessageToChatPage(userInput, 'user-message');
            chatAiInputPage.value = '';
            chatAiInputPage.style.height = 'auto'; // Reset tinggi textarea
            if (chatAiLoadingPage) chatAiLoadingPage.style.display = 'flex';
            chatAiMessagesPage.scrollTop = chatAiMessagesPage.scrollHeight; // Gulir ke bawah

            try {
                const encodedInput = encodeURIComponent(userInput);
                const apiUrl = `https://newapiriki.vercel.app/ai/openai?apikey=rikinew&text=${encodedInput}`; // API AI Anda

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`Gagal mengambil data, status: ${response.status}`);
                }

                const data = await response.json();
                const aiResponseText = data.result || "Maaf, saya tidak mendapat jawaban yang valid dari AI.";

                appendMessageToChatPage(aiResponseText, 'ai-message');

            } catch (error) {
                console.error('Error fetching AI response:', error);
                appendMessageToChatPage(`Terjadi kesalahan: ${error.message}. Silakan coba lagi nanti.`, 'ai-message');
            } finally {
                if (chatAiLoadingPage) chatAiLoadingPage.style.display = 'none';
                chatAiMessagesPage.scrollTop = chatAiMessagesPage.scrollHeight;
            }
        }

        function appendMessageToChatPage(text, className) {
            if (!chatAiMessagesPage) return;
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', className);
            messageDiv.innerHTML = text.replace(/\n/g, '<br>'); // Izinkan baris baru untuk pemformatan
            chatAiMessagesPage.appendChild(messageDiv);
            chatAiMessagesPage.scrollTop = chatAiMessagesPage.scrollHeight; // Gulir otomatis
        }

        if (sendChatAiBtnPage) {
            sendChatAiBtnPage.addEventListener('click', handleSendChatMessagePage);
            chatAiInputPage.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendChatMessagePage();
                }
            });
            chatAiInputPage.addEventListener('input', () => {
                chatAiInputPage.style.height = 'auto';
                chatAiInputPage.style.height = (chatAiInputPage.scrollHeight) + 'px';
            });
        }


        // --- Logika Visitor Counter ---
        const visitorCountKey = 'rikishop_visitor_count';
        const sessionCountedKey = 'rikishop_session_counted'; // Flag for current session
        let visitorCount = parseInt(localStorage.getItem(visitorCountKey)) || 0;
        const visitorCountDisplay = document.getElementById('visitorCountDisplay');

        function updateVisitorCountDisplay() {
            visitorCountDisplay.innerHTML = `<i class="fas fa-users"></i> By ARMAN GZ Official:`;
        }

        // Increment visitor count only once per browser session
        if (sessionStorage.getItem(sessionCountedKey) !== 'true') {
            visitorCount++;
            localStorage.setItem(visitorCountKey, visitorCount);
            sessionStorage.setItem(sessionCountedKey, 'true'); // Mark as counted for this session
        }
        updateVisitorCountDisplay(); // Initial display


        // --- Inisialisasi Saat Memuat ---
        document.addEventListener('DOMContentLoaded', () => {
            // Sembunyikan main container sampai welcome screen selesai
            mainContainer.style.display = 'none';

            // Bersihkan keranjang saat memuat jika ada item sebelumnya (default: kosong)
            cart = [];
            localStorage.setItem('rikishop_cart', JSON.stringify(cart));
            
            updateDateTime(); // Mulai update jam setiap detik
            setInterval(updateDateTime, 1000); // Pastikan jam terus bergerak
            
            updateCartCount(); // Jumlah keranjang awal (akan 0)
            
            // Tampilkan welcome screen
            welcomeScreen.style.display = 'flex'; // Pastikan terlihat
            
            // Setelah beberapa detik, fade out welcome screen
            setTimeout(() => {
                welcomeScreen.classList.add('fade-out');
                welcomeScreen.addEventListener('transitionend', () => {
                    welcomeScreen.style.display = 'none';
                    mainContainer.style.display = 'flex'; // Tampilkan main container setelah fade out
                    showPage('home-page'); // Mulai di halaman beranda
                    startBannerAutoSlide(); // Mulai auto-slide banner
                }, { once: true });
            }, 3000); // Tampilkan welcome screen selama 3 detik (bisa diubah)
        });