document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : `<i>tidak ada informasi yang tersedia`;

    // Menampilkan data di dalam modal
    document.getElementById("modal-gambar").src = gambar;
    document.getElementById("modal-harga").innerHTML = harga;
    document.getElementById("modal-judul").innerHTML = judul;
    document.getElementById("modal-deskripsi").innerHTML = deskripsi;

    // Update URL WhatsApp saat tombol Beli Produk di klik
    document.getElementById("btnBeli").addEventListener("click", function () {
      let nomorWhatsApp = "6281238020621";
      let pesan = `Halo, saya ingin membeli produk ${judul} dengan harga ${harga}. Apakah masih tersedia?`;
      let urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodeURIComponent(
        pesan
      )}`;

      // Redirect ke WhatsApp
      window.open(urlWhatsApp, "_blank");
    });

    // Tampilkan modal
    let modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  });
});
