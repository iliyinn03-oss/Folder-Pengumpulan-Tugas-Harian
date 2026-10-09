// Program pencatatan data usaha
// Dibuat oleh rekan sebelumnya

// LANGKAH 1

const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = 2020; // FIX: sebelumnya string "2020", sehingga "2020" + 1 menjadi "20201"
const TARIF_PAJAK = 0.11;

let statusBuka = true; // FIX: menambahkan titik koma yang hilang
let website = null; // FIX: deklarasi ganda `let website;` dihapus, cukup satu deklarasi
let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];
let jumlahProduk = produk.length; // FIX: `var` diganti `let`, dipindah setelah array produk, dan dihitung dari produk.length (tidak hardcode)

console.log(namaUsaha); // FIX: `namausaha` -> `namaUsaha` (JavaScript case-sensitive)
console.log("Kota: " + kotaUsaha); // FIX: `Console` -> `console`
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1)); // hasil: 2021



let hargaKopiSetelahPajak = Math.round(hargaProduk[0] * (1 + TARIF_PAJAK));
// FIX: `TARIF_PAJAK = 0.12;` dihapus karena const tidak boleh diberi nilai ulang
// FIX: operator `x` diganti `*`, dan hasil dibulatkan agar bebas error floating point
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(...hargaProduk);
// FIX: memakai spread agar berlaku untuk semua elemen array, tidak hanya 3 indeks pertama
console.log("Termurah: " + hargaTermurah);

// FIX: produk[3] tidak ada (indeks 0-2), jadi sebelumnya mencetak "undefined"
let produkKe4 = produk[3] !== undefined
  ? produk[3]
  : "(tidak ada, hanya " + jumlahProduk + " produk)";
console.log("Produk ke-4: " + produkKe4);

// Cetak status usaha
// FIX: komentar blok `/*` tidak pernah ditutup sehingga menelan sisa kode; diganti komentar satu baris
console.log("Status buka: " + statusBuka);
// FIX: karakter backtick (`) nyasar di akhir file dihapus


//1.Kesalahan penulisan karena perbedaan huruf besar/kecil salah satu penyebab error, javasrcipt 
//memiliki beberapa aturan penulisan yang harus diikuti secara konsisten.

//2.Baris TARIF_PAJAK = 0.12; ditolak sementara perubahan pada statusBuka diperbolehkan karena
//perbedaan cara JavaScript memperlakukan kata kunci const dan let saat mendeklarasikan sebuah variabel.

//3.terjadi karena adanya fitur JavaScript yang bernama Type Coercion (pemaksaan tipe data secara otomatis).
//Penggabungan String (Concatenation): Menempelkan dua teks jika salah satu atau kedua data bertipe string (teks).


/*=================================================================================================================*/

// LANGKAH 2

const usaha = {
  nama: "Angkringan Sore",
  pemilik: "Pak Lek",
  kota: "Yogyakarta",
  tahunBerdiri: 2020,
  statusBuka: true,
  nomorWhatsApp: "08123456789",
  website: null
};


const daftarProduk = [
  { nama: "Kopi Susu", harga: 18000 },
  { nama: "Es Teh Manis", harga: 7500 },
  { nama: "Roti Bakar", harga: 15000 },
  { nama: "Cokelat Panas", harga: 16000 }
];


console.log("Nama usaha: " + usaha.nama);


console.log("Kota: " + usaha["kota"]);

console.log("Produk pertama: " + daftarProduk[0].nama);
console.log("Produk terakhir: " + daftarProduk[daftarProduk.length - 1].nama);

/*============================================================================
1. Nomor WhatsApp lebih tepat disimpan sebagai string.
   Alasan konkret: nomor telepon diawali angka 0. Kalau disimpan sebagai
   number, 08123456789 akan kehilangan angka 0 di depannya dan menjadi
   8123456789, sehingga nomornya rusak dan tidak bisa dihubungi. Selain
   itu, nomor telepon tidak pernah dijumlahkan atau dikalikan, jadi tidak
   butuh tipe number.

2. website diberi null karena null berarti "sengaja dikosongkan": kita
   tahu properti itu ada, dan usaha ini memang belum punya website.
   Kalau dibiarkan tanpa nilai (seperti `let website;` di kode awal),
   JavaScript otomatis mengisinya dengan undefined, yang berarti "belum
   diberi nilai", dan pembaca kode tidak tahu apakah itu disengaja atau
   lupa diisi.
   Perbedaannya:
   - undefined: nilai bawaan JavaScript untuk variabel/properti yang
     belum diisi (typeof-nya "undefined").
   - null: nilai kosong yang diberikan programmer secara eksplisit
     (typeof-nya "object", ini quirk lama JavaScript).

3. Indeks array dimulai dari 0, jadi array dengan 4 elemen hanya
   punya indeks 0, 1, 2, 3. Produk ke-4 ada di daftarProduk[3], bukan
   [4]. Indeks [4] sebenarnya elemen ke-5 yang tidak ada, sehingga
   mengaksesnya mencetak: undefined. Kalau ditulis daftarProduk[4].nama,
   program malah error TypeError karena mencoba membaca properti dari
   undefined.

Output program:
  Nama usaha: Kopi Senja
  Kota: Yogyakarta
  Produk pertama: Kopi Susu
  Produk terakhir: Cokelat Panas
  =========================================================================*/

// ===== DATA (dari langkah sebelumnya) =====
const TARIF_PAJAK = 0.11;
const tahunSekarang = 2026;

const usaha = {
  nama: "Kopi Senja",
  pemilik: "Budi Santoso",
  kota: "Yogyakarta",
  tahunBerdiri: 2020,
  statusBuka: true,
  nomorWhatsApp: "08123456789",
  website: null
};

const daftarProduk = [
  { nama: "Kopi Susu", harga: 18000 },
  { nama: "Es Teh Manis", harga: 7500 },
  { nama: "Roti Bakar", harga: 15000 },
  { nama: "Cokelat Panas", harga: 16000 }
];

// ===== PERHITUNGAN =====
// Math.round menghindari hasil desimal ekor panjang akibat floating point
const hitungHargaPajak = (harga) => Math.round(harga * (1 + TARIF_PAJAK));

const daftarHargaPajak = daftarProduk.map((produk) => hitungHargaPajak(produk.harga));
const hargaTermurah = Math.min(...daftarHargaPajak);
const hargaTermahal = Math.max(...daftarHargaPajak);
const usiaUsaha = tahunSekarang - usaha.tahunBerdiri;

// ===== PERSIAPAN TAMPILAN =====
const statusTeks = usaha.statusBuka ? "Buka" : "Tutup";
const websiteTeks = usaha.website ?? "belum ada"; // null -> "belum ada"
const barisProduk = daftarProduk
  .map((produk, i) => `${i + 1}. ${produk.nama.padEnd(14)}: Rp ${daftarHargaPajak[i]}`)
  .join("\n");

const kartu = `===== KARTU USAHA =====
Nama Usaha  : ${usaha.nama}
Pemilik     : ${usaha.pemilik}
Kota        : ${usaha.kota}
Usia Usaha  : ${usiaUsaha} tahun
Status      : ${statusTeks}
Website     : ${websiteTeks}

Daftar Produk (harga + PPN ${TARIF_PAJAK * 100}%):
${barisProduk}

Termurah : Rp ${hargaTermurah}
Termahal : Rp ${hargaTermahal}
=======================`;

console.log(kartu);

// ===== BUKTI UNTUK JAWABAN NOMOR 3 =====
daftarProduk[0].harga = 20000; // harga Kopi Susu diubah SETELAH kartu tercetak

console.log("\n--- Setelah harga Kopi Susu diubah menjadi 20000 ---");
console.log(`Teks kartu lama (tidak berubah) : ${barisProduk.split("\n")[0]}`);
console.log(`Array hasil lama (tidak berubah): Rp ${daftarHargaPajak[0]}`);
console.log(`Dihitung ulang                  : Rp ${hitungHargaPajak(daftarProduk[0].harga)}`);

/*
=====================================================================
JAWABAN
=====================================================================

1. Pilihan const / let untuk setiap variabel
   Semuanya memakai const, dan itu tepat karena tidak ada variabel yang
   perlu diberi nilai baru (reassign) setelah dibuat.

   - TARIF_PAJAK        : const. Tarif PPN tetap, tidak boleh berubah di tengah program.
   - tahunSekarang      : const. Satu nilai tetap selama program berjalan.
   - usaha              : const. Variabelnya selalu menunjuk ke object yang sama.
   - daftarProduk       : const. Selalu menunjuk ke array yang sama.
   - hitungHargaPajak   : const. Fungsi tidak akan diganti dengan fungsi lain.
   - daftarHargaPajak   : const. Array hasil map(), dibuat sekali.
   - hargaTermurah      : const. Hasil Math.min, dihitung sekali.
   - hargaTermahal      : const. Hasil Math.max, dihitung sekali.
   - usiaUsaha          : const. Hasil pengurangan, dihitung sekali.
   - statusTeks         : const. Hasil ternary, ditentukan sekali.
   - websiteTeks        : const. Hasil operator ??, ditentukan sekali.
   - barisProduk        : const. String hasil map().join(), dibuat sekali.
   - kartu              : const. String template akhir, dibuat sekali.
   - produk, i (parameter di dalam map): otomatis baru untuk tiap
     pemanggilan fungsi, tidak perlu dideklarasikan lagi.

   Catatan: const hanya mengunci penunjuk variabel, bukan isi object atau
   array. Karena itu `daftarProduk[0].harga = 20000` tetap boleh,
   sedangkan `daftarProduk = []` akan error.
   let baru diperlukan jika nilainya memang diganti, misalnya penghitung
   di for-loop (`for (let i = 0; ...)`). Program ini memakai map(), jadi
   tidak butuh let.

2. Perhitungan manual (produk: Kopi Susu, harga 18000)
   Langkah 1: pajak  = 18000 x 11%  = 18000 x 0,11 = 1980
   Langkah 2: harga akhir = 18000 + 1980 = 19980
   (cara cepat: 18000 x 1,11 = 19980)
   Hasil program: Rp 19980.
   Jawabannya sama. Cek tambahan: Es Teh Manis 7500 x 1,11 = 8325, juga
   sama dengan output program.

3. Apakah hasil yang sudah tercetak ikut berubah?
   Tidak. Buktinya ada di kode bagian "BUKTI": setelah harga Kopi Susu
   diubah menjadi 20000, teks kartu lama dan daftarHargaPajak[0) tetap
   19980, sedangkan hitungan ulang menghasilkan 22200.
   Alasannya: console.log mencetak nilai pada saat dipanggil. Teks di
   `kartu` sudah terbentuk menjadi string jadi (snapshot), dan
   daftarHargaPajak berisi angka hasil hitung sebelumnya, bukan rumus
   yang terhubung ke object usaha. JavaScript tidak memperbarui hasil
   lama secara otomatis seperti rumus di spreadsheet. Agar hasilnya
   berubah, perhitungan harus dijalankan lagi (di sini lewat
   hitungHargaPajak).

Output program:
  ===== KARTU USAHA =====
  Nama Usaha  : Kopi Senja
  Pemilik     : Budi Santoso
  Kota        : Yogyakarta
  Usia Usaha  : 6 tahun
  Status      : Buka
  Website     : belum ada

  Daftar Produk (harga + PPN 11%):
  1. Kopi Susu     : Rp 19980
  2. Es Teh Manis  : Rp 8325
  3. Roti Bakar    : Rp 16650
  4. Cokelat Panas : Rp 17760

  Termurah : Rp 8325
  Termahal : Rp 19980
  =======================

  --- Setelah harga Kopi Susu diubah menjadi 20000 ---
  Teks kartu lama (tidak berubah) : 1. Kopi Susu     : Rp 19980
  Array hasil lama (tidak berubah): Rp 19980
  Dihitung ulang                  : Rp 22200
=====================================================================
*/
  
  