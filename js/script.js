function searchProduct() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const products = document.getElementsByClassName('product-card');

  for (let i = 0; i < products.length; i++) {
    const productName = products[i].getAttribute('data-name');

    if (productName.toLowerCase().includes(input)) {
      products[i].style.display = "flex"; 
    } else {
      products[i].style.display = "none"; 
    }
  }
}

function filterCategory(category) {
  const products = document.getElementsByClassName('product-card');

  for (let i = 0; i < products.length; i++) {
    const productCat = products[i].getAttribute('data-category');

    if (category === 'all' || productCat === category) {
      products[i].style.display = "flex"; 
    } else {
      products[i].style.display = "none"; 
    }
  }
}

function hitungsTotal() {
  const hargaProduk = parseInt(document.getElementById('produk').value) || 0;
  const durasi = parseInt(document.getElementById('durasi').value) || 1;
  
  const total = hargaProduk * durasi;

  document.getElementById('totalHarga').innerText = 'Rp ' + total.toLocaleString('id-ID');
}

function handleOrder(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const hp = document.getElementById('hp').value;

    const e = document.getElementById('produk');

    const namaProduk = e.options[e.selectedIndex].text;
    
    const durasi = document.getElementById('durasi').value;
    const total = document.getElementById('totalHarga').innerText;

    const dataTransaksi = {
        nama: nama,
        hp: hp,
        produk: namaProduk, 
        durasi: durasi,
        total: total,
        noInv: "INV/" + new Date().getFullYear() + "/" + Math.floor(1000 + Math.random() * 9000)
    };

    localStorage.setItem('lastTransaction', JSON.stringify(dataTransaksi));
    window.location.href = 'invoice.html';
}
