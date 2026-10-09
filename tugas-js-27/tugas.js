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


/*=================================================================================================================
 LANGKAH 2
=================================================================================================================*/

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
   undefined */

   /*================================================================================
   LANGKAH 3
   ================================================================================*/
   // === LANGKAH 3: Perhitungan dan Tampilan ===

const CURRENT_YEAR = 2026;
const usiaUsaha = CURRENT_YEAR - usaha.tahunBerdiri;

// Menghitung harga setelah pajak untuk tiap produk
const produkPajak = usaha.produk.map(p => ({
    nama: p.nama,
    hargaPajak: Math.round(p.harga * (1 + TARIF_PAJAK))
}));

// Mencari harga termurah dan termahal
const daftarHargaPajak = produkPajak.map(p => p.hargaPajak);
const termurah = Math.min(...daftarHargaPajak);
const termahal = Math.max(...daftarHargaPajak);

// Membuat format string daftar produk
let daftarProdukStr = "";
produkPajak.forEach((p, index) => {
    daftarProdukStr += `${index + 1}. ${p.nama.padEnd(14, ' ')} : Rp ${p.hargaPajak}\n`;
});

// Mencetak kartu usaha menggunakan template literal
const kartuUsaha = `
===== KARTU USAHA =====
Nama Usaha  : ${usaha.nama}
Pemilik     : ${usaha.pemilik}
Kota        : ${usaha.kota}
Usia Usaha  : ${usiaUsaha} tahun
Status      : ${usaha.status}
Website     : ${usaha.website}

Daftar Produk (harga + PPN 11%):
${daftarProdukStr.trim()}
Termurah : Rp ${termurah}
Termahal : Rp ${termahal}
=======================
`;

console.log(kartuUsaha);

/*
Catatan & Jawaban Langkah 3:
1. Alasan pemilihan const: 
   Semua variabel di langkah ini menggunakan `const` karena nilainya diinisialisasi sekali dan tidak pernah diubah ulang (re-assigned) di sepanjang program.
2. Perbandingan manual (Kopi Susu):
   - Harga dasar: Rp 18.000
   - PPN 11%: 18.000 * 0.11 = 1.980
   - Total: 18.000 + 1.980 = 19.980 (Sama persis dengan hasil program).
3. Apakah perubahan harga mengubah hasil tercetak otomatis?
   Tidak. Template literal mencetak string statis pada saat dieksekusi. 
   Contoh pembuktian:
   let harga = 18000;
   let teks = `Harga: ${harga}`;
   console.log(teks); // Harga: 18000
   harga = 25000;
   console.log(teks); // Tetap tercetak "Harga: 18000" (tidak otomatis berubah).
*/

   /*================================================================================
   LANGKAH 4
   ================================================================================*/
   // === LANGKAH 4: Detektif Tipe Data ===

// Tebakan: "number"
// Hasil asli: "number"  ✔
console.log(typeof 42);

// Tebakan: "string"
// Hasil asli: "string"  ✔
console.log(typeof "42");

// Tebakan: "boolean"
// Hasil asli: "boolean"  ✔
console.log(typeof true);

// Tebakan: "undefined"
// Hasil asli: "undefined"  ✔
console.log(typeof undefined);

// Tebakan: "object"
// Hasil asli: "object"  ✔ (Bug historis JavaScript)
console.log(typeof null);

// Tebakan: "object"
// Hasil asli: "object"  ✔ (Array adalah jenis object khusus di JS)
console.log(typeof [1, 2, 3]);

// Tebakan: "object"
// Hasil asli: "object"  ✔
console.log(typeof { nama: "Budi" });

// Tebakan: "53"
// Hasil asli: "53"  ✔ (Penggabungan string / concatenation)
console.log("5" + 3);

// Tebakan: 2
// Hasil asli: 2  ✔ (Type coercion otomatis mengubah string ke number pada operator pengurangan)
console.log("5" - 3);

// Tebakan: NaN
// Hasil asli: NaN  ✔ (Not a Number, karena "abc" tidak dapat dikonversi ke angka)
console.log("abc" * 2);

// Tebakan: Infinity
// Hasil asli: Infinity  ✔ (Pembagian angka dengan nol menghasilkan nilai Infinity di JS)
console.log(10 / 0);

// Tebakan: "object"
// Hasil asli: "object"  ✔ (karena nilai usaha.website adalah null)
console.log(typeof usaha.website);

/*
Catatan & Jawaban Langkah 4:
1. Penjelasan tebakan yang meleset: 
   (Jika ada tebakan yang meleset, umumnya terjadi pada `typeof null` yang mengembalikan `"object"` alih-alih `"null"`).
2. Apakah null adalah object?
   Secara teknis di JavaScript iya karena bug dari versi pertama bahasa ini, tetapi secara konseptual `null` adalah tipe data primitif khusus yang merepresentasikan ketiadaan nilai. Kepada teman, bisa dijelaskan sebagai "warisan bug masa lalu yang dipertahankan demi kompatibilitas".
3. Mengapa "5" + 3 dan "5" - 3 berbeda?
   Operator `+` melakukan penggabungan teks (string concatenation) jika salah satu sisinya adalah string. Sebaliknya, operator `-` atau `*` hanya untuk aritmatika, sehingga JavaScript secara otomatis memaksa string `"5"` berubah menjadi angka (`type coercion`) sebelum dikurangi.
*/