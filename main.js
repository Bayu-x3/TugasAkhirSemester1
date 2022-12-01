const input = require("readline-sync");
console.log("-----------------------------");
console.log(       "1. Penjumalahan       ");
console.log(       "2. Pengurangan        ");
console.log(       "3. Perkalian          ");
console.log(       "4. Pembagian          ");
console.log("-----------------------------");
console.log(" ")

const pil = input.questionInt("Silahkan pilih nomor: ");

if ( pil ==  1 ) {
    const jum1 = input.questionInt("Masukan angka ke 1: ");
    const jum2 = input.questionInt("Masukan angka ke 2: "); 
    
    const inputanJum1 = jum1;
    const inputanJum2 = jum2;
    const hasilJum = inputanJum1 + inputanJum2;

    console.log("Hasil Dari Penjumlahan " + inputanJum1 + " Dan " + inputanJum2 + " Adalah " + hasilJum);
} if ( pil == 2 ) {
    const peng1 = input.questionInt("Masukan angka ke 1: ");
    const peng2 = input.questionInt("Masukan angka ke 2: "); 
    const inputanPeng1 = peng1;
    const inputanPeng2 = peng2;
    const hasilPeng = inputanPeng1 - inputanPeng2;
    console.log("Hasil Dari Pengurangan " + inputanPeng1 + " Dan " + inputanPeng2 + " Adalah " + hasilPeng);
} if ( pil == 3 ) {
    const Per1 = input.questionInt("Masukan angka ke 1: ");
    const Per2 = input.questionInt("Masukan angka ke 2: "); 
    const inputanPer1 = Per1;
    const inputanPer2 = Per2;
    const hasilPer = inputanPer1 * inputanPer2;
    console.log("Hasil Dari Perkalian " + inputanPer1 + " Dan " + inputanPer2 + " Adalah " + hasilPer);
} if (pil == 4) {
    const Pem1 = input.questionInt("Masukan angka ke 1: ");
    const Pem2 = input.questionInt("Masukan angka ke 2: ");
    const inputanPem1 = Pem1;
    const inputanPem2 = Pem2
    const hasilPem = inputanPem1 / inputanPem2;
    console.log("Hasil Dari Pembagian " + inputanPem1 + " Dan " + inputanPem2 + " Adalah " + hasilPem);
}
