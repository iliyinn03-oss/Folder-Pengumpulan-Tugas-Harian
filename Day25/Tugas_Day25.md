1. Jelaskan dua arah aliran kode antara komputer lokal dan GitHub (push dan pull). Berikan 1 contoh situasi nyata kapan kamu perlu melakukan push, dan 1 situasi kapan kamu perlu melakukan pull!

2. Jelaskan fungsi perintah git push. Lalu jelaskan:
a. Apa fungsi opsi -u pada git push -u origin main?
b. Apa yang terjadi jika opsi -u tidak disertakan pada push pertama?
c. Mengapa setelah -u ditetapkan, kita cukup menjalankan git push saja?

3. Jelaskan perbedaan mendasar antara git clone dan git init. Mengapa setelah git clone, kita tidak perlu menjalankan git init lagi?

4. Jelaskan fungsi perintah git pull. Mengapa perintah ini sangat penting dalam kerja tim? Sebutkan 2 momen spesifik kapan sebaiknya menjalankan git pull

5. Tuliskan alur kerja harian yang direkomendasikan dalam bentuk urutan  (command). Jelaskan mengapa setiap langkah dalam urutan tersebut penting

6. Apa itu Fork? Sebutkan minimal 2 situasi nyata di mana seseorang perlu melakukan fork. Apa perbedaan mendasar antara fork dan clone?

7. Jelaskan 6 langkah alur kontribusi pada proyek open source menggunakan Fork + Pull Request. Untuk setiap langkah, jelaskan tujuannya masing-masing!

8. Apa yang dimaksud dengan Pull Request? Jelaskan peran PR dalam kerja tim — mengapa tim profesional tidak langsung merge setiap perubahan ke main, tetapi harus melalui PR terlebih dahulu? Sebutkan minimal 2 keuntungan menggunakan PR!

9. Perhatikan skenario berikut:
Andi dan Budi mengerjakan proyek yang sama. Andi push perubahan ke GitHub pagi ini. Budi kemarin terakhir pull, lalu pagi ini langsung mengedit file style.css di komputernya dan berusaha push.
a. Apa yang kemungkinan besar terjadi saat Budi mencoba push?
b. Mengapa hal ini bisa terjadi? Kaitkan dengan konsep git pull.
c. Apa yang seharusnya Budi lakukan sebelum mulai mengedit file tersebut?
d. Tuliskan urutan perintah yang seharusnya dilakukan Budi sejak pagi hari!

10. Studi Kasus — Alur Kerja Lengkap: Perhatikan urutan perintah berikut:
```git clone https://github.com/andi/proyek.git
cd proyek
git switch -c perbaikan-bug
touch fix.js
git add fix.js
git commit -m "Memperbaiki bug pada validasi form"
git push origin perbaikan-bug```

Analisislah skenario tersebut dengan menjawab:
a. Apa yang dilakukan oleh perintah git clone pada baris pertama?
b. Mengapa pengguna membuat branch perbaikan-bug sebelum mulai bekerja? Mengapa tidak langsung di main?
c. Apa tujuan git push origin perbaikan-bug — mengapa tidak git push saja?
d. Setelah perintah terakhir dijalankan, langkah apa yang harus dilakukan di antarmuka web GitHub untuk mengajukan perubahan ke pemilik repo?
e. Jika pemilik repo meminta revisi, apa yang harus dilakukan pengguna? Jelaskan alurnya!



    <!--=============== Jawaban ================-->



1.)
a. Push (Lokal ➔ GitHub)
• Penjelasan: Proses mengirimkan atau mengunggah (upload) riwayat perubahan kode (commit) yang telah Anda buat di komputer lokal ke repositori jarak jauh (remote repository) di GitHub.
• Situasi Nyata: Anda baru saja selesai menambahkan fitur "Lupa Password" pada aplikasi yang sedang Anda kembangkan di laptop sendiri. Setelah memastikan fitur tersebut berjalan lancar tanpa eror, Anda membuat commit. Anda kemudian melakukan push agar kode terbaru tersebut tersimpan aman di GitHub, sehingga klien atau rekan kerja Anda bisa melihat progresnya.
b. Pull (GitHub ➔ Lokal)
• Penjelasan: Proses mengambil dan mengunduh (download) perubahan kode terbaru dari GitHub, sekaligus langsung menggabungkannya (merge) ke dalam proyek yang ada di komputer lokal Anda.
• Situasi Nyata: Sebelum mulai menulis kode baru di pagi hari, Anda membuka laptop dan melakukan pull. Langkah ini penting karena semalam rekan tim Anda telah memperbarui fungsi database di GitHub. Dengan melakukan pull, proyek di laptop Anda menjadi selaras dengan versi terbaru dan Anda terhindar dari bentrokan kode (code conflict).

2.) Fungsi git push

git push mengirim commit yang sudah ada di repositori lokal ke repositori remote (misalnya GitHub), sehingga perubahan kita bisa dilihat dan diambil oleh anggota tim lain.
a. Fungsi -u pada git push -u origin main
Opsi -u (kependekan dari --set-upstream) menghubungkan branch lokal main dengan branch main di remote origin. Hubungan ini disebut upstream tracking.
b. Jika -u tidak disertakan pada push pertama
Commit tetap terkirim ke remote, tetapi branch lokal belum terhubung dengan branch remote. Akibatnya, saat berikutnya menjalankan git push atau git pull saja, Git akan menampilkan pesan error seperti "There is no tracking information for the current branch" atau "The current branch has no upstream branch". Kita harus menulis lengkap git push origin main setiap kali.
c. Mengapa cukup git push setelah -u ditetapkan
Karena Git sudah menyimpan informasi di konfigurasi bahwa branch main lokal melacak origin/main. Git sudah "tahu" tujuan pengiriman, sehingga nama remote dan branch tidak perlu disebutkan lagi.

3.) Perbedaan git clone dan git init
	git init	git clone
Fungsi	Membuat repositori Git baru dari nol di folder lokal	Menyalin repositori yang sudah ada dari remote
Isi	Kosong, belum ada riwayat commit	Berisi seluruh file, riwayat commit, dan semua branch
Remote	Belum ada, harus ditambahkan manual (git remote add)	Otomatis terhubung ke remote bernama origin
Setelah git clone, kita tidak perlu git init karena proses clone sudah mencakup inisialisasi. Clone membuat folder .git (yang berisi database repositori), mengunduh seluruh riwayat, dan mengatur remote origin secara otomatis. Menjalankan git init lagi tidak perlu dan tidak ada gunanya.

4.) Fungsi git pull

git pull mengambil perubahan terbaru dari remote lalu langsung menggabungkannya ke branch lokal. Pada dasarnya ia adalah gabungan dari git fetch (mengunduh) dan git merge (menggabungkan).
Pentingnya dalam kerja tim: beberapa orang mengubah proyek yang sama pada waktu berbeda. Tanpa git pull, kode lokal kita akan ketinggalan dari versi terbaru di remote, sehingga rawan terjadi konflik dan push akan ditolak.
Dua momen untuk menjalankan git pull:
Sebelum mulai bekerja (awal hari), agar kita mengedit di atas versi terbaru.
Sebelum melakukan git push, atau ketika push ditolak karena remote lebih maju, supaya perubahan orang lain digabung terlebih dahulu.

5.) Alur Kerja Harian yang Direkomendasikan
bash
git pull                          # 1
# ... mengedit file ...
git status                        # 2
git add .                         # 3
git commit -m "Pesan yang jelas"  # 4
git pull                          # 5
git push                          # 6
Langkah	Mengapa penting
git pull	Memastikan kita bekerja di atas kode terbaru, mencegah konflik sejak awal.
git status	Memeriksa file apa saja yang berubah agar tidak ada yang tertinggal atau ikut tanpa sengaja.
git add	Memilih perubahan yang akan dimasukkan ke commit (staging area).
git commit	Menyimpan perubahan sebagai titik riwayat yang jelas dan bisa ditelusuri/dikembalikan.
git pull (lagi)	Menggabungkan perubahan rekan yang mungkin masuk selama kita bekerja, sebelum mengirim.
git push	Mengirim hasil kerja ke remote agar tim bisa melihatnya dan sebagai cadangan.

6.) Fork

Fork adalah menyalin repositori milik orang lain ke akun GitHub kita sendiri. Salinan ini bersifat independen, sehingga kita bebas mengubahnya tanpa memengaruhi repositori asli.
Situasi nyata untuk fork:
Ingin berkontribusi ke proyek open source yang tidak kita miliki akses tulisnya.
Ingin mengembangkan proyek sendiri berdasarkan proyek orang lain (misalnya memodifikasi template atau library sesuai kebutuhan).
Ingin bereksperimen/belajar dengan kode orang lain tanpa risiko merusak aslinya.
Perbedaan fork dan clone:
Fork terjadi di sisi GitHub (server): membuat salinan repositori di akun kita di GitHub.
Clone terjadi di sisi lokal: mengunduh repositori ke komputer kita.
Keduanya sering dipakai berurutan: fork dulu di GitHub, lalu clone hasil fork ke komputer.

7.) Enam Langkah Kontribusi Open Source (Fork + Pull Request)
Fork repositori asli di GitHub. Tujuan: memiliki salinan sendiri yang boleh kita ubah dan push.
Clone hasil fork ke komputer (git clone <url-fork-kita>). Tujuan: mendapatkan kode di lokal agar bisa dikerjakan.
Buat branch baru (git switch -c nama-fitur). Tujuan: memisahkan pekerjaan dari main agar rapi dan aman.
Edit, add, dan commit perubahan. Tujuan: menyimpan perbaikan/fitur sebagai riwayat yang jelas.
Push branch ke fork kita (git push origin nama-fitur). Tujuan: mengunggah perubahan ke GitHub agar bisa diajukan.
Buka Pull Request dari branch fork ke repositori asli. Tujuan: meminta pemilik proyek meninjau dan menggabungkan perubahan kita.

8.) Pull Request
Pull Request (PR) adalah permintaan resmi di GitHub agar perubahan dari suatu branch ditinjau dan digabungkan (merge) ke branch lain, biasanya main.
Mengapa tim profesional tidak langsung merge ke main: branch main biasanya berisi kode yang stabil dan siap rilis. Jika semua orang bebas merge langsung, bug atau kode berkualitas rendah bisa langsung masuk dan merusak proyek. PR menjadi "gerbang pemeriksaan" sebelum kode masuk.
Keuntungan PR:
Code review: rekan tim dapat memeriksa kualitas, menemukan bug, dan memberi saran sebelum merge.
Menjaga stabilitas main: hanya kode yang sudah disetujui (dan lolos tes otomatis/CI) yang masuk.
Dokumentasi & diskusi: ada catatan jelas tentang apa yang diubah dan mengapa, lengkap dengan komentar.
Berbagi pengetahuan: anggota tim jadi tahu perkembangan proyek.

9.) Skenario Andi dan Budi
a. Yang kemungkinan terjadi: push Budi ditolak dengan pesan error seperti ! [rejected] main -> main (fetch first) atau "Updates were rejected because the remote contains work that you do not have locally."
b. Penyebabnya: Andi sudah push perubahan baru ke GitHub, sehingga remote lebih maju daripada salinan lokal Budi. Budi terakhir git pull kemarin, jadi repositori lokalnya tidak memuat commit Andi. Git menolak push karena akan menimpa/mengabaikan pekerjaan Andi. Inilah pentingnya git pull: menyelaraskan lokal dengan remote.
c. Yang seharusnya dilakukan Budi: menjalankan git pull sebelum mulai mengedit style.css, supaya ia bekerja di atas versi terbaru.
d. Urutan perintah Budi sejak pagi:

bash
git pull                              # ambil perubahan Andi
# ... edit style.css ...
git status
git add style.css
git commit -m "Memperbarui style.css"
git pull                              # cek lagi sebelum push
git push

10.) Studi Kasus Alur Kerja Lengkap
a. git clone https://github.com/andi/proyek.git
Mengunduh salinan lengkap repositori (file, riwayat commit, branch) dari GitHub ke komputer lokal, membuat folder proyek, dan otomatis menghubungkannya ke remote origin.
b. Mengapa membuat branch perbaikan-bug, bukan langsung di main?
Menjaga main tetap bersih dan stabil.
Perubahan terisolasi, sehingga jika gagal atau salah, main tidak terpengaruh.
Branch terpisah diperlukan untuk membuat Pull Request.
Memudahkan beberapa orang mengerjakan hal berbeda secara paralel.
c. Mengapa git push origin perbaikan-bug, bukan git push saja?
Branch perbaikan-bug baru dibuat secara lokal dan belum punya upstream di remote. git push saja akan menghasilkan error karena Git tidak tahu ke mana harus mengirimnya. Dengan git push origin perbaikan-bug, kita menyebutkan secara eksplisit remote (origin) dan nama branch yang akan dibuat di remote. (Bisa juga memakai git push -u origin perbaikan-bug agar selanjutnya cukup git push.)
d. Langkah di antarmuka GitHub untuk mengajukan perubahan:
Buka halaman repositori di GitHub. Biasanya muncul banner "Compare & pull request" untuk branch yang baru di-push, lalu klik tombol tersebut. (Atau buka tab Pull requests → New pull request.)
Pastikan base branch adalah main dan compare branch adalah perbaikan-bug.
Isi judul dan deskripsi yang menjelaskan perubahan.
Klik Create pull request.
Jika repositori adalah milik orang lain (lewat fork), base repository diarahkan ke repo asli milik Andi.
e. Jika pemilik repo meminta revisi:
Pengguna tidak perlu membuat PR baru. Alurnya:
Baca komentar/permintaan revisi pada PR.
Pastikan masih berada di branch yang sama: git switch perbaikan-bug.
Lakukan perbaikan pada file.
git add lalu git commit -m "Merevisi sesuai masukan".
git push origin perbaikan-bug.
PR akan otomatis terupdate dengan commit baru, lalu pemilik repo meninjau ulang. Proses ini diulang sampai PR disetujui dan di-merge.