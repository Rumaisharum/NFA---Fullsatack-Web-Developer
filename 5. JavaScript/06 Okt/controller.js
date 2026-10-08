// TUGAS 6: CONTROLLER
// Berisi 3 perintah: Melihat, Menambah, Menghapus data

// Import data dari file data.js
import users from "./data.js";

// 1. Perintah Melihat Data (Menggunakan map())
const lihatData = () => {
    console.log("--- DAFTAR PENGGUNA ---");
    // Menggunakan map() untuk menampilkan data
    users.map((user, index) => {
        console.log(`${index + 1}. ${user.nama} | Umur: ${user.umur} | Email: ${user.email}`);
    });
    console.log("-----------------------");
};

// 2. Perintah Menambah Data (Menggunakan push())
const tambahData = (userBaru) => {
    users.push(userBaru);
    console.log(`[Berhasil] Data "${userBaru.nama}" berhasil ditambahkan.`);
};

// 3. Perintah Menghapus Data (Menggunakan filter())
const hapusData = (namaUser) => {
    // Mencari index data yang akan dihapus
    const index = users.findIndex(u => u.nama === namaUser);
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`[Berhasil] Data "${namaUser}" berhasil dihapus.`);
    } else {
        console.log(`[Gagal] Data "${namaUser}" tidak ditemukan.`);
    }
};

// Export ketiga fungsi tersebut
export { lihatData, tambahData, hapusData };