/* =========================================
   ADITYA OUTDOOR GEAR - JAVASCRIPT LOGIC
   ========================================= */

// 1. FUNGSI PENCARIAN PRODUK (LIVE SEARCH)
function searchProduct() {
  // Ambil teks dari input pencarian dan ubah ke huruf kecil
  const input = document.getElementById('searchInput').value.toLowerCase();
  // Ambil semua elemen kartu produk
  const products = document.getElementsByClassName('product-card');

  // Looping untuk mengecek tiap produk
  for (let i = 0; i < products.length; i++) {
    const productName = products[i].getAttribute('data-name');
    
    // Jika nama produk mengandung kata yang diketik
    if (productName.toLowerCase().includes(input)) {
      products[i].style.display = "flex"; // Tampilkan produk
    } else {
      products[i].style.display = "none"; // Sembunyikan produk
    }
  }
}

// 2. FUNGSI FILTER KATEGORI
function filterCategory(category) {
  const products = document.getElementsByClassName('product-card');

  for (let i = 0; i < products.length; i++) {
    const productCat = products[i].getAttribute('data-category');

    // Jika pilih 'all' atau kategori cocok dengan produk
    if (category === 'all' || productCat === category) {
      products[i].style.display = "flex"; // Tampilkan
    } else {
      products[i].style.display = "none"; // Sembunyikan
    }
  }
}
// 3. FUNGSI KALKULATOR TOTAL SEWA AUTOMATIS
function hitungsTotal() {
  const hargaProduk = parseInt(document.getElementById('produk').value) || 0;
  const durasi = parseInt(document.getElementById('durasi').value) || 1;
  
  const total = hargaProduk * durasi;
  
  // Format ke Rupiah
  document.getElementById('totalHarga').innerText = 'Rp ' + total.toLocaleString('id-ID');
}

// 4. FUNGSI SUBMIT FORM KE WHATSAPP
function handleOrder(event) {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  const hp = document.getElementById('hp').value;
  const e = document.getElementById('produk');
  const namaProduk = e.options[e.selectedIndex].text;
  const durasi = document.getElementById('durasi').value;
  const total = document.getElementById('totalHarga').innerText;

  const pesan = `Halo Aditya Outdoor Gear, saya ingin menyewa:%0A%0A- Nama: ${nama}%0A- No HP: ${hp}%0A- Alat: ${namaProduk}%0A- Durasi: ${durasi} Hari%0A- Total: ${total}`;
  
  // Buka WhatsApp
  window.open(`https://wa.me/6281234567890?text=${pesan}`, '_blank');
}