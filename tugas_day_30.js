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
// - Pada Potongan C, kenapa yang tercetak dua baris? Apa yang harus ditambahkan agar hanya satu baris yang tercetak?
//   Jawab: Karena tidak ada break pada case "sabtu", terjadi fall-through ke case berikutnya; tambahkan break setelah tiap case untuk menghentikan eksekusi.g