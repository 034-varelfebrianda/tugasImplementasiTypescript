"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mahaSiswa = [
    { id: 1, nama: "denis", jurusan: "TI", semester: 4, ipk: 3.6, aktif: true },
    { id: 2, nama: "bayu", jurusan: "SI", semester: 2, ipk: 2.1, aktif: true },
    { id: 2, nama: "asep", jurusan: "IT", semester: 2, ipk: 3.1, aktif: true },
    { id: 2, nama: "doni", jurusan: "TI", semester: 2, ipk: 1.6, aktif: true },
    { id: 2, nama: "adit", jurusan: "IT", semester: 2, ipk: 3.6, aktif: true },
];
let beasiswa = mahaSiswa.map(x => ({
    ...x,
    aktif: x.ipk > 3,
    status: x.ipk > 3 ? "mendapat beasiswa" : "tidak dapat beasiswa"
}));
let munculkanNama = beasiswa
    .filter(x => x.aktif === true)
    .map(x => x.nama)
    .join('-');
console.log(mahaSiswa); //memunculkan array asli
console.log(beasiswa); //untuk memunculkan semua data dan menampilkan status beasiswa
console.log(munculkanNama); //memunculkan nama yang mendapatkan beasiswa
//# sourceMappingURL=tugas.js.map