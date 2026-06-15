class Perpustakaan {
    constructor(
    public nama: string,
    public buku: string,
    private jumlahPinjam: number
    ) {}

    tampilkanInfo(): void {
    console.log(
        `${this.nama} meminjam buku ${this.buku}`
    );
    }

    lihatJumlahPinjam(): void {
    console.log(`Jumlah buku yang dipinjam: ${this.jumlahPinjam}`);
    }
}

const varel = new Perpustakaan(
    "Varel",
    "3726 MDPL",
    1
);

varel.tampilkanInfo();
varel.lihatJumlahPinjam();

class Karyawan extends Perpustakaan{
    constructor(
    nama: string,
    buku: string,
    jumlahPinjam: number,
    private karyawan: string
    ){
    super(nama,buku,jumlahPinjam)
}run2():void{
    console.log(`karyawan yang berjaga di perpustakaan saat itu adalah ${this.karyawan}`)
}
}

const alex = new Karyawan (
    'alex',
    'konspirasi alam semesta',
    2,
    'jainab'
)
alex.tampilkanInfo();
alex.lihatJumlahPinjam();
alex.run2()