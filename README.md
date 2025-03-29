# 📚 MANUAL BOOK

## 🔧 BE Setup
- 📦 Pastikan [nodejs](https://nodejs.org/en/) sudah terinstall di komputer
- 🔄 Pastikan [git](https://git-scm.com/) sudah terinstall di komputer
- 💻 Pastikan [vscode](https://code.visualstudio.com/) sudah terinstall di komputer, bebas menggunakan editor lain
- 🧩 Bisa menginstall extension [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) dan [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) di vscode untuk membantu format kode
- 🗄️ Pastikan sudah mendatar dan sudah di invite di [MongoDB Atlas](https://www.mongodb.com/atlas/database) untuk database
- 📥 Clone repository ini
- 📂 Pindah ke folder Backend
- ⚙️ Install dependency dengan perintah `npm install`
- 📄 Copy .env.example ke .env
- ✏️ Ubah isi .env sesuai dengan database yang digunakan (secret key lihat di atlas)
- 🔄 Jalankan perintah `npx prisma migrate` untuk migrasi database atau pertama kali setup
- 🚀 Jalankan perintah `npm run start:dev` untuk menjalankan server

## 📋 Panduan mengerjakan task
- 👀 Cek task di clickup dan di [Github Issues](https://github.com/ITDEVECS2025-2026/Backend/issues) untuk detail task yang diberikan
- 🌿 Pastikan membuat branch baru dengan nama sesuai dengan task yang diberikan, misalnya `menambahkan-fitur-x`
- 🔍 Pastikan branch diambil dari branch **`dev`**
  > 📝 **Note:** pastikan branch `dev` sudah diupdate dengan branch `main` sebelum membuat branch baru
- ✅ Setelah selesai mengerjakan task, pastikan untuk melakukan pull request ke branch **`dev`**
- 📝 Pastikan untuk menambahkan deskripsi pada pull request yang menjelaskan perubahan yang dilakukan
- 👥 Tunggu review dari rekan tim sebelum melakukan merge ke branch **`dev`**

## 💬 Panduan penamaan commit
- ✨ Gunakan format `feat: <deskripsi>` untuk menandai penambahan fitur baru.
- 🐛 Gunakan format `fix: <deskripsi>` untuk menandai perbaikan bug.
- 📝 Gunakan format `docs: <deskripsi>` untuk menandai perubahan pada dokumentasi.
- 💄 Gunakan format `style: <deskripsi>` untuk menandai perubahan pada gaya kode (misalnya, format, spasi, dll) yang tidak mempengaruhi logika.
- ♻️ Gunakan format `refactor: <deskripsi>` untuk menandai perubahan pada kode yang tidak mempengaruhi fungsionalitas tetapi meningkatkan struktur atau pembacaan kode.
- 🧪 Gunakan format `test: <deskripsi>` untuk menandai penambahan atau perubahan pada pengujian.
- 🔧 Gunakan format `chore: <deskripsi>` untuk menandai perubahan yang tidak termasuk dalam kategori di atas, seperti pembaruan dependensi atau tugas pemeliharaan lainnya.

## 🌿 Branch yang perlu diperhatikan
| Branch | Deskripsi |
|--------|-----------|
| 🔨 dev    | branch untuk development |
| 🚀 main   | branch untuk versi stabil yang siap di deploy |



## 📁 BE Folder Structure
yang perlu diperhatikan secara umum [referensi](https://docs.nestjs.com/modules)
```
prisma   - folder untuk menyimpan file schema.prisma dan migrasi database
src      - folder utama untuk menyimpan file source code
  ├── modules - folder untuk menyimpan sub module 
  ├──── .controller.ts - file yang menangani request dan response dari client
  ├──── .service.ts - file untuk menyimpan logika dari program dan menghubungkan ke repository
  ├──── .module.ts - file untuk mendeklarasikan module dan menghubungkan controller dan service
```

## 🛠️ BE tools yang digunakan
- 🗄️ [Prisma](https://www.prisma.io/docs/) - ORM untuk database
- 🏗️ [NestJS](https://docs.nestjs.com/) - framework untuk membangun aplikasi backend
- 📜 [TypeScript](https://www.typescriptlang.org/) - bahasa pemrograman yang digunakan
- 🗃️ [MongoDB](https://www.mongodb.com/) - database yang digunakan
- 🧪 [Postman](https://www.postman.com/) - tools untuk testing API , bisa juga menggunakan [Insomnia](https://insomnia.rest/) atau [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) di vscode

## 🔐 BE Environment Variables
- `DATABASE_URL` - URL untuk menghubungkan ke database

## API response ketika ada error
```json
{
  "success": false,
  "error_code": 23,
  "message": "error message",
  "data": null
}
```
**error_code** berguna untuk mempermudah debugging, random tapi usahakan jangan sama dengan error_code pada error yang lain

## API response ketika sukses
```json
{
  "success": true,
  "error_code": null,
  "message": "success message",
  "data": {
    // data yang dikembalikan
  }
}
```
