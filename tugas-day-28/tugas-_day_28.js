/*=================================================================================================
LANGKAH 1
=================================================================================================*/
// Tebakan: 13
// Hasil asli: 13 ✔
// Penjelasan: Perkalian (*) dieksekusi lebih dulu daripada penjumlahan (+). Jadi, 7 + (3 * 2) = 7 + 6 = 13.
console.log(7 + 3 * 2);

// Tebakan: 20
// Hasil asli: 20 ✔
// Penjelasan: Tanda kurung () mengubah urutan prioritas. Penjumlahan di dalam kurung dihitung dulu. Jadi, (7 + 3) * 2 = 10 * 2 = 20.
console.log((7 + 3) * 2);

// Tebakan: 2
// Hasil asli: 2 ✔
// Penjelasan: Operator Modulus (%) menghasilkan sisa pembagian. 17 dibagi 5 adalah 3, dengan sisa hasil bagi 2.
console.log(17 % 5);

// Tebakan: 8
// Hasil asli: 8 ✔
// Penjelasan: Operator Eksponensial (**) berarti pangkat. 2 pangkat 3 (2 * 2 * 2) adalah 8.
console.log(2 ** 3);

// Tebakan: true
// Hasil asli: true ✔
// Penjelasan: Operator perbandingan longgar (==) hanya mengecek nilai setelah melakukan konversi tipe data (coercion). Angka 5 sama nilainya dengan string "5".
console.log(5 == "5");

// Tebakan: false
// Hasil asli: false ✔
// Penjelasan: Operator perbandingan ketat (===) mengecek nilai SEKALIGUS tipe datanya. Angka 5 (Number) tidak sama tipe datanya dengan "5" (String).
console.log(5 === "5");

// Tebakan: false
// Hasil asli: false ✔
// Penjelasan: Operator logika AND (&&) menghasilkan true HANYA JIKA kedua kondisi bernilai true. Karena salah satunya false, hasilnya false.
console.log(true && false);

// Tebakan: true
// Hasil asli: true ✔
// Penjelasan: Operator logika OR (||) menghasilkan true jika SALAH SATU atau kedua kondisi bernilai true.
console.log(true || false);

// Tebakan: false
// Hasil asli: false ✔
// Penjelasan: Operator logika NOT (!) membalikkan nilai boolean. Kebalikan dari true adalah false.
console.log(!true);

// Tebakan: false
// Hasil asli: false ✔
// Penjelasan: Evaluasi dari (10 > 5) bernilai true, sedangkan (3 > 8) bernilai false. Menggunakan logika AND: true && false menghasilkan false.
console.log(10 > 5 && 3 > 8);

/*jawaban
1. Tantangan Tebakan Paling Sulit

Karena seluruh tebakan di atas berhasil dijawab dengan 100% benar (✔), tidak ada tebakan yang meleset. Namun, tebakan yang menurut saya paling memerlukan ketelitian tinggi adalah 5 == "5" dan 5 === "5".
Alasannya: Bagi siapa pun yang baru belajar atau berpindah dari bahasa pemrograman ber-tipe ketat (seperti Java atau C++), perilaku Type Coercion (konversi tipe data otomatis) di JavaScript ini sering kali menjadi jebakan. Mengetahui kapan JavaScript "mengalah" mengubah string menjadi angka dan kapan ia menolaknya membutuhkan pemahaman mendalam tentang spesifikasi bahasa itu sendiri.

2. Kenapa 7 + 3 * 2 hasilnya 13, bukan 20?

Hasilnya 13 karena JavaScript menerapkan aturan Operator Precedence (Prioritas Operator) yang diadopsi langsung dari hukum matematika standar (KABATAKU — Kali, Bagi, Tambah, Kurang).
- Di dalam hirarki JavaScript, operator perkalian (*) memiliki tingkat prioritas yang lebih tinggi daripada operator penjumlahan (+).
- Proses Evaluasi:
	1. JavaScript mendahulukan 3 * 2 yang menghasilkan 6.
	2. Baru kemudian hasil tersebut dijumlahkan dengan angka di depannya: 7 + 6.
	3. Hasil akhir = 13.
Jika Anda ingin hasilnya menjadi 20, Anda wajib memaksa JavaScript mendahulukan penjumlahan menggunakan tanda kurung (), karena tanda kurung memiliki prioritas tertinggi dari segala operator: (7 + 3) * 2.

3. Kenapa 5 == "5" bernilai true, tetapi 5 === "5" bernilai false?

Perbedaan ini terjadi karena kedua operator tersebut menggunakan metode pembandingan yang sama sekali berbeda:
- == (Abstract Equality / Perbandingan Longgar):
Operator ini hanya membandingkan nilainya saja. Jika tipe datanya berbeda (yang satu Number angka 5, yang satu String teks "5"), JavaScript akan melakukan Type Coercion secara implisit. Ia akan mengubah string "5" menjadi angka 5 terlebih dahulu di latar belakang sebelum membandingkannya. Karena angka 5 sama dengan 5, hasilnya true.
- === (Strict Equality / Perbandingan Ketat):
Operator ini membandingkan nilai SEKALIGUS tipe datanya tanpa ada toleransi atau konversi otomatis.
	- Tipe data sisi kiri: Number (Angka)
	- Tipe data sisi kanan: String (Teks)
Karena jenis tipe datanya sudah berbeda sejak awal, JavaScript langsung menghentikan pengecekan dan menyatakan hasilnya false, tidak peduli meskipun karakter teks di dalamnya terlihat mirip.
/*=================================================================================================
LANGKAH 2
=================================================================================================*/

const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
// FIX 2: Mengubah uangDiterima dari string menjadi number (51000) agar tipe data perbandingannya sama persis
let uangDiterima = 51000;

// FIX 1: Memperbaiki rumus dengan menambahkan operator perkalian dan tanda kurung untuk 2 kopi dan 2 teh
let totalPesanan = (hargaKopi * 2) + (hargaTeh * 2);

// FIX 2 (Lanjutan): Menggunakan === (strict equality) karena diinginkan "sama persis" (nilai dan tipe data)
let uangPas = uangDiterima === totalPesanan;

// FIX 3: Menambahkan assignment (=) agar hasil perhitungan jumlahMember + 1 disimpan kembali ke variabel
jumlahMember = jumlahMember + 1;

// FIX 4: Mengganti operator && (AND) dengan || (OR) sesuai syarat "ATAU"
let dapatDiskon = sudahMember || totalPesanan > 100000;

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);
// Output akhir: 51000 true 6 true
/*
1. Empat Kesalahan dan Perbaikannya

    Kesalahan 1 (totalPesanan): Rumus salah karena kurang operator perkalian dan tanda kurung (hargaKopi + hargaTeh 2). Perbaikan: Diubah menjadi (hargaKopi * 2) + (hargaTeh * 2).

    Kesalahan 2 (uangPas): Variabel uangDiterima bertipe string ("51000"), padahal untuk mengecek "sama persis" (===) tipe data harus sama dengan totalPesanan (number). Perbaikan: Mengubah uangDiterima menjadi number (51000) atau menambahkan konversi Number().

    Kesalahan 3 (jumlahMember): Operasi jumlahMember + 1 tidak disimpan kembali ke variabel. Perbaikan: Menambahkan penugasan nilai (jumlahMember = jumlahMember + 1 atau jumlahMember++).

    Kesalahan 4 (dapatDiskon): Menggunakan operator && (AND) padahal ketentuan soal adalah ATAU. Perbaikan: Mengganti && dengan || (OR).

2. Perbandingan Menggunakan ===

    Kenapa hasilnya false? Karena operator === (strict equality) memeriksa nilai DAN tipe data. uangDiterima awalnya bertipe string ("51000"), sedangkan totalPesanan bertipe number (51000). Meskipun nilainya sama, tipe datanya berbeda sehingga bernilai false.

    Apa yang harus diubah? Ubah nilai uangDiterima menjadi tipe data number (let uangDiterima = 51000;) atau lakukan konversi tipe data saat membandingkannya (misal: Number(uangDiterima) === totalPesanan).

3. Perbedaan && (AND) dan || (OR)

    && (AND): Akan menghasilkan true hanya jika semua kondisi di sisi kiri dan kanan bernilai true. Jika ada satu saja yang false, hasilnya false.

    || (OR): Akan menghasilkan true jika salah satu atau kedua kondisi bernilai true.

    Contoh pada kode dapatDiskon: sudahMember || totalPesanan > 100000. Karena sudahMember bernilai true, penggunaan || membuat dapatDiskon langsung bernilai true (meskipun totalPesanan > 100000 bernilai false). Jika menggunakan &&, hasilnya akan false karena kedua kondisi harus benar secara bersamaan.
	*/
	/*=================================================================================================
    LANGKAH 3
    =================================================================================================*/

	// --- PROGRAM KASIR TOKO BURGER ---

// 1. Variabel const (Nama barang, harga satuan, tarif pajak)
const namaBarang = "Burger Spesial";
const hargaSatuan = 25000;
const TARIF_PAJAK = 0.11;

// 2. Variabel let (Jumlah beli dan uang dibayar)
let jumlahBeli = 4;
let uangDibayar = 120000;

// 3. Menghitung subtotal, pajak, dan total bayar
// Syarat 9: Menggunakan tanda kurung () untuk memperjelas urutan hitungan
let subtotal = (hargaSatuan * jumlahBeli);
let pajak = subtotal * TARIF_PAJAK;
let totalBayar = subtotal + pajak;

// 4. Minimal 2 operator penugasan ringkas (shorthand assignment)
let potonganDiskon = 10000;
totalBayar -= potonganDiskon; // Shorthand 1 (-=): Mengurangi total bayar dengan diskon

let biayaLayanan = 2000;
biayaLayanan += 1000;          // Shorthand 2 (+=): Menambah biaya layanan
totalBayar += biayaLayanan;    // Memasukkan biaya layanan ke total bayar

// 5. Menghitung kembalian
let kembalian = uangDibayar - totalBayar;

// 6. Mengecek apakah jumlah beli genap menggunakan operator %
let jumlahGenap = jumlahBeli % 2 === 0;

// 7. Tiga variabel Boolean dari operator perbandingan dan logika
let uangCukup = uangDibayar >= totalBayar;
let gratisOngkir = subtotal >= 100000 && jumlahBeli >= 3;
let dapatHadiah = jumlahGenap || uangCukup;

// 8. Tampilkan semua hasil dengan console.log yang rapi
console.log("Barang      :", namaBarang);
console.log("Jumlah      :", jumlahBeli);
console.log("Subtotal    :", subtotal);
console.log("Pajak (11%) :", pajak);
console.log("Total bayar :", totalBayar);
console.log("Uang dibayar:", uangDibayar);
console.log("Kembalian   :", kembalian);
console.log("Uang cukup? :", uangCukup);
console.log("Jumlah genap?:", jumlahGenap);
console.log("Gratis ongkir?:", gratisOngkir);
console.log("Dapat hadiah?:", dapatHadiah);

/*
1. Penjelasan Variabel Boolean (gratisOngkir)

    Arti: Variabel gratisOngkir bernilai true jika pelanggan berbelanja minimal Rp100.000 dan membeli setidaknya 3 buah barang.

    Hasil saat ini: true.

    Kenapa? Karena subtotal bernilai Rp100.000 (25000 * 4) yang memenuhi syarat >= 100000, dan jumlahBeli bernilai 4 yang memenuhi syarat >= 3. Karena kedua kondisi benar (true && true), maka hasil akhirnya true.

2. Perubahan Operator && menjadi || pada gratisOngkir

Jika baris gratisOngkir diubah menjadi:
let gratisOngkir = subtotal >= 100000 || jumlahBeli >= 10; (mengganti && dengan || dan mengubah syarat jumlah beli menjadi 10).

    Sebelum (menggunakan &&): Hasilnya false jika salah satu syarat tidak terpenuhi (karena jumlahBeli >= 10 bernilai false).

    Sesudah (menggunakan ||): Hasilnya akan menjadi true karena operator OR (||) hanya membutuhkan salah satu kondisi saja yang bernilai benar. Karena subtotal >= 100000 sudah bernilai true, maka keseluruhan ekspresi langsung menghasilkan true meskipun syarat jumlah barang tidak tercapai.

3. Contoh Penggunaan Tanda Kurung () yang Mengubah Hasil Perhitungan

Contoh perhitungan diskon atau operasi matematika campuran:

    Tanpa kurung: let hitungSalah = 50000 + 10000 * 2;

        Hasil: 70000 (karena perkalian dikerjakan terlebih dahulu: 10000 * 2 = 20000, lalu ditambah 50000).

    Dengan kurung: let hitungBenar = (50000 + 10000) * 2;

        Hasil: 120000 (karena tanda kurung memaksa penjumlahan 50000 + 10000 = 60000 diselesaikan terlebih dahulu sebelum dikalikan 2).
*/		