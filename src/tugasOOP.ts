class Perpustakaan {
    constructor(
        public nama: string,
        public buku: string,
        public jumlahPinjam: number
    ) {
        console.log('data peminjaman buku di mulai')
    }

    tampilkanInfo() {
        console.log(`${this.nama} meminjam buku ${this.buku}`);
    }

    get jumlah(): number {
        return this.jumlahPinjam;
    }

    set jumlah(value: number) {
        if (value === 0) {
            this.jumlahPinjam = 0;
            console.log('buku tidak tersedia');
        } else if (value > 0) {
            this.jumlahPinjam = value;
            console.log(`${this.nama} meminjam buku sebanyak ${this.jumlah}`);
        } else {
            console.log('Nilai tidak valid');
        }
    }
}

const varel = new Perpustakaan(
    "Varel",
    "3726 MDPL",
    0
);
varel.tampilkanInfo();
varel.jumlah = 0; // setter

class Karyawan extends Perpustakaan{
    constructor(
    nama: string,
    buku: string,
    jumlahPinjam: number,
    private karyawan: string
    ){
    super(nama,buku,jumlahPinjam)
    }

    run2() {
        console.log(`karyawan yang berjaga di perpustakaan saat itu adalah ${this.karyawan}`)
    }
}

const alex = new Karyawan (
    'alex',
    'konspirasi alam semesta',
    0,
    'jainab'
)
alex.tampilkanInfo();
alex.run2()
alex.jumlah = 2 //setter