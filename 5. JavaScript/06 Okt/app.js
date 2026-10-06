// Import fungsi dari controller.js
import { lihatData, tambahData, hapusData } from "./controller.js";

console.log("=== APLIKASI MANAJEMEN DATA ===");

// Tampilkan data awal (10 data)
lihatData();

// Tambahkan minimal 2 data baru menggunakan proses push
tambahData({ 
    nama: "Rumaisha", 
    umur: 20, 
    alamat: "Jl. NF Academy No. 11", 
    email: "rumaisha@sttnf.ac.id" 
});

tambahData({ 
    nama: "Mentor Keren", 
    umur: 28, 
    alamat: "Jl. Fullstack No. 12", 
    email: "mentor@nfacademy.id" 
});

console.log("\n--- SETELAH PENAMBAHAN DATA ---");
lihatData();

// Hapus 1 data untuk tes fungsi hapus
hapusData("Budi Santoso");

console.log("\n--- SETELAH PENGHAPUSAN DATA ---");
lihatData();