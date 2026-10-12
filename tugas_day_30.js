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
