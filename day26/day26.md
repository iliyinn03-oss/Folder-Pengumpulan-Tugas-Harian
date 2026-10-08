1. Jelaskan mengapa Merge Conflict bisa terjadi. Sebutkan minimal 2 situasi yang memicunya, dan berikan 1 contoh skenario nyata (misal dua orang mengedit file yang sama)!

2. Perhatikan potongan kode berikut:
```<<<<<<< HEAD
<h1 style="color: red;">Selamat Datang</h1>
=======
<h1 style="color: blue;">Selamat Datang</h1>
>>>>>>> branch-teman```

a. Apa arti dari masing-masing penanda <<<<<<< HEAD, =======, dan >>>>>>> branch-teman?
b. Baris mana yang merupakan versi dari branch aktifmu?
c. Baris mana yang merupakan versi dari branch yang datang?

3. Jelaskan 2 cara menyelesaikan Merge Conflict: melalui Visual Studio Code dan melalui editor teks manual. Untuk masing-masing cara, sebutkan langkah-langkahnya! Mengapa VS Code direkomendasikan untuk pemula?

4. Setelah semua konflik diselesaikan secara manual, apa yang harus dijalankan di terminal untuk mencatat hasilnya? Tuliskan urutan perintahnya (minimal 3 perintah) dan jelaskan fungsi masing-masing!

5. Apa fungsi dari perintah git merge --abort? Sebutkan 1 situasi nyata di mana kamu sebaiknya menggunakan perintah ini daripada menyelesaikan konflik secara manual!

6. Sebutkan minimal 4 praktik terbaik untuk meminimalkan frekuensi Merge Conflict dalam kerja tim. Untuk masing-masing praktik, jelaskan mengapa praktik tersebut dapat mengurangi risiko konflik!

7. Jelaskan mengapa pesan commit yang jelas sangat penting. Berikan 3 contoh pesan commit yang buruk dan 3 contoh pesan commit yang baik!

8. Jelaskan format penulisan Conventional Commits. Sebutkan minimal 4 tipe commit beserta fungsinya, dan berikan 1 contoh pesan commit untuk masing-masing tipe!

9. Perhatikan 3 pesan commit berikut:
- git commit -m "update"
- git commit -m "fix bug tombol"
- git commit -m "feat: menambahkan fitur pencarian produk di navbar"
Mana yang paling baik? Jelaskan alasanmu berdasarkan prinsip penulisan pesan commit yang benar!

10. Apa fungsi file .gitignore dalam proyek Git? Sebutkan minimal 4 jenis file yang sebaiknya dimasukkan ke dalam .gitignore, dan jelaskan mengapa masing-masing jenis file tersebut tidak perlu di-upload ke GitHub!

11. Jelaskan format standar penamaan branch yang direkomendasikan. Berikan 3 contoh penamaan branch yang baik, beserta alasan mengapa format ini lebih baik dibanding penamaan yang bebas!

12. Jelaskan peran masing-masing dari ketiga teknologi web (HTML, CSS, JavaScript) dalam pengembangan website. 

13. Jelaskan 2 lingkungan tempat JavaScript dapat dijalankan.

14. Jelaskan perbedaan antara JavaScript dan ECMAScript (ES). Berikan 1 contoh perbandingan kode antara gaya lama dan gaya modern!




Jawaban




*1. Kenapa bisa berantem (Conflict)?*
Karena Git bingung, 2 orang ubah baris yang sama.
- Contoh: Kamu ubah tulisan jadi merah, temenmu ubah tulisan yang sama jadi biru. Git bingung milih mana.
- Pemicu: edit baris sama, atau 1 orang hapus file, 1 orang edit file itu.

*2. Arti tanda aneh itu*
`<<<<<<< HEAD` = ini punyamu
`=======` = batas tengah
`>>>>>>> branch-teman` = ini punya temanmu
- Punyamu: yang warna `red`
- Punya teman: yang warna `blue`

*3. Cara beresin*
- *Pakai VS Code (paling enak):* nanti ada tombol biru `Accept Current` (pilih punyamu) atau `Accept Incoming` (pilih punya teman). Tinggal klik.
- *Pakai manual:* hapus sendiri tulisan `<<<<<<<` `=======` `>>>>>>>` pakai keyboard, sisain yang kamu mau.
- Kenapa VS Code enak? Karena gak perlu hapus manual, tinggal klik.

*4. Habis beres, ketik ini:*
`git add .` -> bilang "udah beres kok"
`git commit -m "beresin berantem"` -> simpan
`git push` -> kirim ke GitHub

*5. `git merge --abort` itu apa?*
Buat batalin berantem. Kayak "yaudah gak jadi gabung dulu".
Pakai pas konfliknya kebanyakan dan kamu pusing, mending batal dulu tanya teman.

*6. Biar gak sering berantem*
1. Sering `git pull` -> biar filemu selalu baru
2. Jangan ngedit file yang sama barengan -> bagi tugas
3. Bikin branch sendiri-sendiri -> jangan semua di main
4. Sering commit -> jangan ditumpuk seminggu baru disimpan

*7. Pesan commit itu penting*
Biar orang lain tau kamu ngapain.
- Jelek: `update`, `benerin`, `coba`
- Bagus: `benerin tombol login yang gak bisa diklik`, `nambah halaman profil`, `rapiin warna header`

*8. Aturan nulis commit biar rapi*
Format: `jenis: apa yang kamu lakukan`
- `feat`: nambah fitur baru -> `feat: nambah fitur cari`
- `fix`: benerin rusak -> `fix: benerin bug tombol`
- `docs`: nulis dokumentasi -> `docs: nulis cara install`
- `style`: benerin tampilan -> `style: ganti warna jadi biru`

*9. Mana yang paling bagus?*
`feat: menambahkan fitur pencarian produk di navbar` -> paling bagus.
Soalnya paling jelas. Yang `update` itu gak jelas update apa.

*10. `.gitignore` itu apa?*
Itu daftar "jangan ikut ke-upload".
- `node_modules`: filenya banyak banget, berat.
- `.env`: isinya password, bahaya.
- `build`: file jadi, gak perlu.
- `.DS_Store`: file sampah laptop.

*11. Nama branch yang bagus*
Jangan asal `coba1`, `baru`.
Bagus: `feat/halaman-login`, `fix/header-rusak`, `docs/readme`
Jadi orang langsung tau itu branch buat apa.

*12. HTML, CSS, JS itu apa?*
- HTML = tulangnya, kerangkanya.
- CSS = bajunya, biar cantik.
- JS = otaknya, biar bisa diklik, gerak.

*13. JS bisa jalan dimana?*
1. Di Browser Chrome -> buat website.
2. Di http://Node.js -> buat di server / belakang layar.

*14. JS vs ES?*
Gampangannya ES itu versi baru-nya JS.
- Dulu: `var nama = "Andi"`
- Sekarang: `const nama = "Andi"` -> lebih bagus.