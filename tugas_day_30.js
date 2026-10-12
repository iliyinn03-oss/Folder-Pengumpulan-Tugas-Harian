// ---------------------------
// Langkah 1: Tebak Dulu, Baru Cek (20 poin)
// ---------------------------

// POTONGAN A
// Tebakan (sebelum dijalankan):
// 1: 0 -> false, jadi tidak tercetak
// 2: "0" -> string non-empty truthy, tercetak "2: masuk"
// 3: "" -> empty string falsy, tidak tercetak
// 4: [] -> array/object truthy, tercetak "4: masuk"
// 5: null -> falsy, tidak tercetak
// 6: -1 -> non-zero number truthy, tercetak "6: masuk"

// Jalankan kode:
if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}

// Hasil asli (yang tercetak saat dijalankan):
// 2: masuk
// 4: masuk
// 6: masuk

// Penjelasan singkat:
// "0" adalah string non-kosong sehingga truthy; [] adalah object/array sehingga truthy meskipun kosong secara visual.
// Nilai falsy di JS: false, 0, -0, 0n, "", null, undefined, NaN.

// ---------------------------
// POTONGAN B
// Tebakan (sebelum dijalankan):
// belanja = 120000 -> saya menebak "Diskon 15%"
// (tapi kode salah urutan, jadi tebakan saya bisa meleset)

// Kode asli:
let belanja = 120000;

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

// Hasil asli saat dijalankan:
// Diskon 5%

// Penjelasan:
// Karena urutan else if dimulai dari yang paling kecil (>=25000) maka kondisi pertama true dan cabang lain tidak diperiksa.
// Perbaikan: cek dari yang terbesar ke terkecil (>=100000, >=50000, >=25000) sehingga belanja besar mendapat diskon yang sesuai.

// ---------------------------
// POTONGAN C
// Tebakan (sebelum dijalankan):
// hari = "sabtu" -> akan mencetak "Promo Akhir Pekan" (mungkin juga "Promo Keluarga" jika fall-through)

// Kode asli:
let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

// Hasil asli saat dijalankan:
// Promo Akhir Pekan
// Promo Keluarga

// Penjelasan:
// Karena tidak ada break setelah case "sabtu", eksekusi jatuh ke case "minggu" (fall-through) sehingga dua baris tercetak.
// Untuk hanya mencetak satu baris, tambahkan break di akhir setiap case (kecuali kalau memang ingin fall-through).

// ---------------------------
// Pertanyaan Langkah 1 (jawaban singkat di komentar):
// - Pada Potongan A, kenapa "0" dan [] tetap masuk ke dalam if, padahal terlihat seperti kosong?
//   Jawab: "0" adalah string non-kosong => truthy. [] adalah object (array) => truthy. Visual kosong bukan berarti falsy di JS.
// - Pada Potongan B, belanja bernilai 120000 tetapi hasilnya bukan "Diskon 15%". Kenapa? Bagaimana cara memperbaikinya?
//   Jawab: Karena urutan pengecekan if...else if salah (dimulai dari 25000), kondisi pertama sudah true jadi cabang lain tidak diperiksa. Perbaiki dengan mengecek dari nilai terbesar ke kecil (>=100000, >=50000, >=25000).
// - Pada Potongan C, kenapa yang tercetak dua baris? Apa yang harus ditambahkan agar hanya satu baris yang tercetak?.
//   Jawab: Karena tidak ada break pada case "sabtu", terjadi fall-through ke case berikutnya; tambahkan break setelah tiap case untuk menghentikan eksekusi.g

// ---------------------------
// Langkah 2: Perbaiki 5 Kesalahan (25 poin)
// ---------------------------

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// Diskon berdasarkan total belanja. Seharusnya: 8000 (diskon 10%)
// FIX #1: Urutan pengecekan harus dari terbesar ke terkecil agar pelanggan dengan belanja besar mendapat diskon yg benar.
if (totalBelanja >= 100000) {
  // FIX: cek >=100000 dulu
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  // FIX: lalu >=50000
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// Potongan member. "gold" 5000, "silver" 2000, lainnya 0. Seharusnya untuk "gold": 5000
// FIX #2: nama variabel salah (jenismember -> harus jenisMember), FIX #3: tambahkan break agar tidak fall-through.
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break; // FIX: hentikan fall-through setelah gold
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// Voucher. Seharusnya tercetak: Voucher tidak dipakai
// FIX #4: jangan gunakan assignment (=) dalam kondisi; gunakan perbandingan (===) atau cek truthy/falsy.
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir. Seharusnya: 67000
let totalAkhir = totalBelanja - diskon - potonganMember;

// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
// FIX #5: kondisi harus >= supaya pembayaran sama dengan totalAkhir juga dianggap lunas.
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

// ---------------------------
// Jawaban pertanyaan Langkah 2 (singkat):
// - Kelima kesalahan (satu kalimat tiap kesalahan):
//   1) Urutan if diskon salah: harus cek dari yang terbesar ke yang terkecil; diperbaiki dengan menukar urutan kondisi. 
//   2) Pada switch, nama variabel salah (jenismember vs jenisMember): gunakan nama variabel yang benar jenisMember.
//   3) Pada switch, tidak ada break setelah case "gold", menyebabkan fall-through; tambahkan break agar hasilnya benar.
//   4) Pada if (kodeVoucher = "") digunakan assignment (=) bukan perbandingan; ganti ke === atau cek truthy/falsy sehingga tidak menimpa nilai variabel.
//   5) Pada pengecekan pembayaran, kondisi menggunakan > sehingga pembayaran sama tidak dianggap lunas; ubah menjadi >=.
// - Mana yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
//   Error di console terjadi ketika ada referensi nama variabel yang tidak ada (mis. jenismember) — itu runtime ReferenceError. Kesalahan lain (urutan if, tidak adanya break, assignment di kondisi) tidak selalu melempar error tapi menghasilkan log/fungsi yang salah.
// - Pada if (kodeVoucher = ""), apa bedanya =, ==, dan ===? Kenapa kodenya tidak error?
//   = adalah operator assignment (menetapkan nilai) — menulis (kodeVoucher = "") menetapkan string kosong ke kodeVoucher dan mengembalikan nilai "" untuk kondisi (falsy). == adalah perbandingan longgar (loose equality) melakukan konversi tipe sebelum membandingkan; === adalah perbandingan ketat (strict equality) tanpa konversi tipe. Kode if (kodeVoucher = "") tidak error karena assignment menghasilkan value (""), yang valid, sehingga if menerima value tersebut (dalam hal ini falsy) — tapi itu bug logic.


// ---------------------------
// Langkah 3: Bikin Kasir Sendiri (35 poin)
// ---------------------------
// Data awal (boleh diubah untuk skenario); gunakan nama variabel berbeda dari Langkah 1 & 2 (awali dengan kasir)
let kasirNamaPelanggan = "Rina";
let kasirTotalBelanja = 90000;
let kasirHari = "sabtu";
let kasirJenisMember = "silver";
let kasirKodeVoucher = "SENJA10";
let kasirUangBayar = 100000;

// 1) Data disimpan di variabel (sudah) -> 1 poin

// 2) Diskon berdasarkan total belanja: >=100000 =>15%, >=50000 =>10%, >=25000 =>5%, else 0
let kasirDiskon = 0;
if (kasirTotalBelanja >= 100000) {
  kasirDiskon = kasirTotalBelanja * 0.15;
} else if (kasirTotalBelanja >= 50000) {
  kasirDiskon = kasirTotalBelanja * 0.1;
} else if (kasirTotalBelanja >= 25000) {
  kasirDiskon = kasirTotalBelanja * 0.05;
} else {
  kasirDiskon = 0;
}

// 3) Potongan member: "gold" 5000, "silver" 2000, lainnya 0
let kasirPotonganMember = 0;
if (kasirJenisMember === "gold") {
  kasirPotonganMember = 5000;
} else if (kasirJenisMember === "silver") {
  kasirPotonganMember = 2000;
} else {
  kasirPotonganMember = 0;
}

// 4) Promo hari memakai switch: "jumat" potongan 3000, "sabtu" dan "minggu" potongan 5000 (kedua case digabung tanpa break di antaranya), selain itu 0. Case lain wajib break
let kasirPotonganHari = 0;
switch (kasirHari) {
  case "jumat":
    kasirPotonganHari = 3000;
    break;
  case "sabtu":
  case "minggu":
    // sengaja digabung agar kedua case dapat potongan yang sama (fall-through deliberate)
    kasirPotonganHari = 5000;
    break;
  default:
    kasirPotonganHari = 0;
    break;
}

// 5) Validasi nama memakai Truthy/Falsy: jika nama kosong, cetak peringatan
if (kasirNamaPelanggan) {
  console.log("Pelanggan: " + kasirNamaPelanggan);
} else {
  console.log("Nama pelanggan belum diisi");
}

// 6) Voucher memakai Truthy/Falsy: jika kode voucher terisi, potongan voucher 2000, jika kosong potongan 0. Cetak status voucher
let kasirPotonganVoucher = 0;
if (kasirKodeVoucher) {
  kasirPotonganVoucher = 2000;
  console.log("Voucher dipakai: " + kasirKodeVoucher);
} else {
  kasirPotonganVoucher = 0;
  console.log("Voucher tidak dipakai");
}

// 7) Total akhir = total belanja dikurangi diskon, potongan member, promo hari, potongan voucher
let kasirTotalAkhir = kasirTotalBelanja - kasirDiskon - kasirPotonganMember - kasirPotonganHari - kasirPotonganVoucher;

// 8) Status pembayaran dengan if...else if...else
if (kasirUangBayar > kasirTotalAkhir) {
  console.log(`Status: Lunas, kembalian Rp${kasirUangBayar - kasirTotalAkhir}`);
} else if (kasirUangBayar === kasirTotalAkhir) {
  console.log("Status: Lunas (uang pas)");
} else {
  console.log(`Status: Kurang Rp${kasirTotalAkhir - kasirUangBayar}`);
}

// 9) Hasil dicetak rapi dengan template literal
console.log(`
--- STRUK BELANJA ---
Pelanggan       : ${kasirNamaPelanggan}
Total Belanja   : Rp${kasirTotalBelanja}
Diskon (persen) : Rp${kasirDiskon}
Potongan Member : Rp${kasirPotonganMember}
Potongan Hari   : Rp${kasirPotonganHari}
Potongan Voucher: Rp${kasirPotonganVoucher}
Total Akhir     : Rp${kasirTotalAkhir}
Uang Bayar      : Rp${kasirUangBayar}
`);

// 10) Uji 3 skenario (tulis di komentar hasil tiap skenario)
// Skenario 1: (dipakai di atas)
// nama "Rina", belanja 90000, hari "sabtu", member "silver", voucher "SENJA10", bayar 100000
// Hasil:
// Pelanggan: Rina
// Voucher dipakai: SENJA10
// Total akhir: (90000 - 9000 (10%) - 2000 - 5000 - 2000) = 76000
// Status: Lunas, kembalian Rp24000

// Skenario 2: nama kosong, belanja 120000, hari "jumat", member "gold", voucher "" , bayar 120000
// ubah data untuk uji:
// kasirNamaPelanggan = "";
// kasirTotalBelanja = 120000;
// kasirHari = "jumat";
// kasirJenisMember = "gold";
// kasirKodeVoucher = "";
// kasirUangBayar = 120000;
// Hasil (dibayangkan setelah dijalankan):
// Nama pelanggan belum diisi
// Voucher tidak dipakai
// Diskon 15% => 18000
// Potongan member gold => 5000
// Potongan hari jum'at => 3000
// Total akhir = 120000 - 18000 - 5000 - 3000 - 0 = 94000
// Status: Lunas (uang pas) jika bayar 94000; dengan bayar 120000 status Lunas, kembalian Rp26000

// Skenario 3: nama "Andi", belanja 10000, hari "senin" (default), member "none", voucher "", bayar 5000
// kasirNamaPelanggan = "Andi";
// kasirTotalBelanja = 10000;
// kasirHari = "senin";
// kasirJenisMember = "none";
// kasirKodeVoucher = "";
// kasirUangBayar = 5000;
// Hasil:
// Pelanggan: Andi
// Voucher tidak dipakai
// Diskon 0, potongan member 0, potongan hari 0 => total akhir 10000
// Status: Kurang Rp5000

// Catatan: untuk menjalankan skenario 2 dan 3, ganti nilai variabel di atas dan ulangi logika (atau jalankan ulang file)

// Pertanyaan Langkah 3 (jawaban singkat):
// - Kenapa urutan else if pada diskon dimulai dari angka terbesar? Apa yang terjadi jika dibalik?
//   Jawab: Karena kondisi dievaluasi dari atas ke bawah, jika kita mulai dari yang kecil, kasus besar akan tertangkap oleh kondisi kecil pertama dan tidak mencapai pengecekan yg tepat; jadi harus mulai dari terbesar agar kondisi paling spesifik diproses dulu.
// - Kenapa promo hari lebih cocok memakai switch, bukan if...else if?
//   Jawab: Karena promo hari pilihannya diskrit berdasarkan nilai string hari, switch lebih jelas dan rapi untuk banyak case dan mudah menggabungkan case yang sama (fall-through) seperti "sabtu" dan "minggu".
// - Pada switch promo hari, di mana kamu sengaja tidak menulis break, dan kenapa hasilnya tetap benar?
//   Jawab: Saya sengaja menggabungkan case "sabtu" dan "minggu" tanpa break di antaranya (case "sabtu": case "minggu": ...) agar kedua nilai mendapat potongan yang sama; itu adalah penggunaan fall-through yang disengaja dan benar di situasi ini.
// - Sebutkan 3 nilai yang membuat if (namaPelanggan) bernilai false.
//   Jawab: "", null, undefined (juga false, 0, NaN, 0n termasuk falsy).
// - Jika jumlah beli bernilai -1, apa hasil if (jumlahBeli) dan if (jumlahBeli > 0)? Kenapa berbeda?
//   Jawab: if (jumlahBeli) akan mengevaluasi -1 sebagai truthy (karena bukan 0), sehingga true. Namun if (jumlahBeli > 0) akan false karena -1 > 0 itu false. Perbedaan karena kondisi pertama hanya melihat truthy/falsy dari nilai, bukan sign.

// ---------------------------
// Bonus (+5 poin): Jumlah hari dalam bulan dari angka bulan (1..12) memakai switch
// ---------------------------
function hariDalamBulan(bulan, tahun = null) {
  // tahun optional untuk cek tahun kabisat saat bulan==2
  switch (bulan) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30; // gabungkan case-case yang sama tanpa break di antaranya
    case 2:
      if (tahun) {
        // cek kabisat: tahun % 4 == 0 && (tahun % 100 != 0 || tahun % 400 == 0)
        let kabisat = (tahun % 4 === 0 && (tahun % 100 !== 0 || tahun % 400 === 0));
        return kabisat ? 29 : 28;
      } else {
        return 28; // default tanpa tahu tahun
      }
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    default:
      return "Bulan tidak valid";
  }
}

// Contoh pemakaian bonus:
console.log("Bulan 4 =>", hariDalamBulan(4)); // 30
console.log("Bulan 2 tahun 2020 =>", hariDalamBulan(2, 2020)); // 29 (kabisat)
console.log("Bulan 13 =>", hariDalamBulan(13)); // Bulan tidak valid

// Kenapa bisa menggabungkan beberapa case tanpa break di antaranya?
// Jawab: Karena kita ingin beberapa angka kasus menghasilkan output yang sama (misal 4,6,9,11 => 30 hari). Menulis case bertumpuk (case 4: case 6: ...) memanfaatkan fall-through sehingga satu blok kode berlaku untuk semua case tersebut.