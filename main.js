const input = require("readline-sync");
console.log("-----------------------------");
console.log(       "1. Penjumalahan       ");
console.log(       "2. Pengurangan        ");
console.log(       "3. Perkalian          ");
console.log(       "4. Pembagian          ");
console.log("-----------------------------");
console.log(" ")

const pil = input.question("Silahkan pilih nomor: ");

if ( pil ==  1 ) {
    const jum1 = input.question("Masukan angka ke 1: ");
    const jum2 = input.question("Masukan angka ke 2: "); 
    
    const inputanJum1 = jum1;
    const inputanJum2 = jum2;
    const hasilJum = inputanJum1 + inputanJum2;

    console.log("Hasil Dari Penjumlahan " + inputanJum1 + " Dan " + inputanJum2 + " Adalah " + hasilJum);
} 
