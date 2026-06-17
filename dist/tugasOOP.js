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
    get jumlah() {
        return this.jumlahPinjam;
    }
    set jumlah(value) {
        if (value === 0) {
            this.jumlahPinjam = 0;
            console.log("buku tidak tersedia");
        }
        else if (value > 0) {
            this.jumlahPinjam = value;
            console.log(`${this.nama} meminjam buku sebanyak ${this.jumlah}`);
        }
        else {
            console.log("Nilai tidak valid");
        }
    }
}
const varel = new Perpustakaan("Varel", "3726 MDPL", 0);
varel.tampilkanInfo();
varel.jumlah = 0; // setter
class Karyawan extends Perpustakaan {
    constructor(nama, buku, jumlahPinjam, karyawan) {
        super(nama, buku, jumlahPinjam);
        this.karyawan = karyawan;
    }
    run2() {
        console.log(`karyawan yang berjaga di perpustakaan saat itu adalah ${this.karyawan}`);
    }
}
const alex = new Karyawan('alex', 'konspirasi alam semesta', 0, 'jainab');
alex.tampilkanInfo();
alex.run2();
alex.jumlah = 2; //setter
//# sourceMappingURL=tugasOOP.js.map