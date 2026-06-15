"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mahaSiswa = [
    { id: 1, nama: "denis", jurusan: "TI", semester: 4, ipk: 3.6, aktif: true },
    { id: 2, nama: "bayu", jurusan: "SI", semester: 2, ipk: 2.1, aktif: true },
    { id: 3, nama: "asep", jurusan: "IT", semester: 2, ipk: 3.1, aktif: true },
    { id: 4, nama: "doni", jurusan: "TI", semester: 2, ipk: 1.6, aktif: true },
    { id: 5, nama: "adit", jurusan: "IT", semester: 2, ipk: 3.6, aktif: true },
];
const beasiswa = mahaSiswa.map(x => ({
    ...x,
    aktif: x.ipk > 3,
    status: x.ipk > 3 ? "mendapat beasiswa" : "tidak dapat beasiswa"
}));
const munculkanNama = beasiswa
    .filter(x => x.aktif === true)
    .map(x => x.nama)
    .join('-');
console.log(mahaSiswa);
console.log(beasiswa);
console.log(munculkanNama);
//# sourceMappingURL=tugas.js.map