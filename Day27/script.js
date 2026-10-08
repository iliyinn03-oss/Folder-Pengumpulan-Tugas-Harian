const namaProduk = "Sepatu Lari";
const hargaSatuan = 350000;
const TARIF_PAJAK = 0.11;

let jumlahDibeli = 2;
let totalSebelumPajak = hargaSatuan * jumlahDibeli;
let pajak = totalSebelumPajak *TARIF_PAJAK;
let totalAkhir = totalSebelumPajak + pajak;

console.log("Produk      : ", namaProduk);
console.log("Harga       : Rp", hargaSatuan);
console.log("Jumlah      : ", jumlahDibeli);
console.log("Subtotal    : Rp", totalSebelumPajak);
console.log("Pajak (11%) : Rp", pajak);
console.log("Total       : Rp", totalAkhir);



let daftarBuah = ["Apel", "Jeruk", "Mangga"];
let nilaiUjian = [90, 85, 88, 100];
let campuran = ["Budi", 25, true]; // Array bisa menyimpan tipe data berbeda

console.log(daftarBuah[0]); //Output "Apel" indeks ke-0
console.log(daftarBuah[1]); // Output "Jeruk" indeks ke-1
console.log(daftarBuah[2]); // Output "Mangga" indeks ke-2