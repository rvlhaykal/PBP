// Import modul
const tambah = require('./modules/tambah');
const kurang = require('./modules/kurang');
const kali = require('./modules/kali');
const bagi = require('./modules/bagi');

// Logika utama
const a = 20;
const b = 5;

console.log("=== Aplikasi Operasi Matematika ===");
console.log(`Angka 1: ${a}`);
console.log(`Angka 2: ${b}`);
console.log("----------------------------");
console.log(`Hasil Tambah: ${tambah(a, b)}`);
console.log(`Hasil Kurang: ${kurang(a, b)}`);
console.log(`Hasil Kali: ${kali(a, b)}`);
console.log(`Hasil Bagi: ${bagi(a, b)}`);