"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Perpustakaan {
    constructor(nama, buku, jumlahPinjam) {
        this.nama = nama;
        this.buku = buku;
        this.jumlahPinjam = jumlahPinjam;
    }
    tampilkanInfo() {
        console.log(`${this.nama} meminjam buku ${this.buku}`);
    }
    lihatJumlahPinjam() {
        console.log(`Jumlah buku yang dipinjam: ${this.jumlahPinjam}`);
    }
}
const varel = new Perpustakaan("Varel", "3726 MDPL", 1);
varel.tampilkanInfo();
varel.lihatJumlahPinjam();
class Karyawan extends Perpustakaan {
    constructor(nama, buku, jumlahPinjam, karyawan) {
        super(nama, buku, jumlahPinjam);
        this.karyawan = karyawan;
    }
    run2() {
        console.log(`karyawan yang berjaga di perpustakaan saat itu adalah ${this.karyawan}`);
    }
}
const alex = new Karyawan('alex', 'konspirasi alam semesta', 2, 'jainab');
alex.tampilkanInfo();
alex.lihatJumlahPinjam();
alex.run2();
//# sourceMappingURL=tugasOOP.js.map