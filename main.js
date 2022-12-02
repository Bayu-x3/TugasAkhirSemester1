const input = require("readline-sync");
function index() {
    console.clear()
    console.log(" ")
    console.log("██╗░░██╗░█████╗░██╗░░░░░██╗░░██╗██╗░░░██╗██╗░░░░░░█████╗░████████╗░█████╗░██████╗░")
    console.log("██║░██╔╝██╔══██╗██║░░░░░██║░██╔╝██║░░░██║██║░░░░░██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗")
    console.log("█████═╝░███████║██║░░░░░█████═╝░██║░░░██║██║░░░░░███████║░░░██║░░░██║░░██║██████╔╝")
    console.log("██╔═██╗░██╔══██║██║░░░░░██╔═██╗░██║░░░██║██║░░░░░██╔══██║░░░██║░░░██║░░██║██╔══██╗")
    console.log("██║░╚██╗██║░░██║███████╗██║░╚██╗╚██████╔╝███████╗██║░░██║░░░██║░░░╚█████╔╝██║░░██║")
    console.log("╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝")
    console.log("=================================")
    console.log("         1. Penjumalahan       ");
    console.log("         2. Pengurangan        ");
    console.log("         3. Perkalian          ");
    console.log("         4. Pembagian          ");
    console.log("=================================");
    console.log(" ")
    pil = input.questionInt("root@pilih: ");
    if (pil === 1) {
        plus();
        pl();
    } else if (pil === 2) {
        mines();
        pn();
    } else if (pil === 3) {
        kali();
        pk();
    } else if (pil === 4) {
        bagi();
        pb();
    } else {
        console.log("Wrong Input")
        index();
    }
} index();
function plus() {
    const jum1 = input.questionInt("Masukan angka ke 1: ");
    const jum2 = input.questionInt("Masukan angka ke 2: ");
    const inputanJum1 = jum1;
    const inputanJum2 = jum2;
    const hasilJum = inputanJum1 + inputanJum2;
    console.log("Hasil Dari Penjumlahan " + inputanJum1 + " Dan " + inputanJum2 + " Adalah " + hasilJum);
} function pl() {
    const hai = input.question("Ingin melanjutkan penjumlahan? y/n/m  ");
    if (hai === "y") {
        plus();
    } else if (hai === "n") {
        return;
    } else if (hai === "m") {
        index();
    } else {
        pl();
    }
} function mines() {
    const peng1 = input.questionInt("Masukan angka ke 1: ");
    const peng2 = input.questionInt("Masukan angka ke 2: ");
    const inputanPeng1 = peng1;
    const inputanPeng2 = peng2;
    const hasilPeng = inputanPeng1 - inputanPeng2;
    console.log("Hasil Dari Pengurangan " + inputanPeng1 + " Dan " + inputanPeng2 + " Adalah " + hasilPeng);
 } function pn() {
        const hai1 = input.question("Ingin melanjutkan pengurangan? y/n/m  ");
        if (hai1 == "y") {
            mines();
        } else if (hai1 == "n") {
            return;
        }else if (hai1 == "m") {
            index();
        } else {
            pn();
        }
    } function kali() {
        const Per1 = input.questionInt("Masukan angka ke 1: ");
        const Per2 = input.questionInt("Masukan angka ke 2: ");
        const inputanPer1 = Per1;
        const inputanPer2 = Per2;
        const hasilPer = inputanPer1 * inputanPer2;
        console.log("Hasil Dari Perkalian " + inputanPer1 + " Dan " + inputanPer2 + " Adalah " + hasilPer);
    } function pk() {
            const hai3 = input.question("Ingin melanjutkan perkalian y/n/m  ");
            if (hai3 == "y") {
                kali();
            } else if (hai3 == "n") {
                return;
            } else if (hai3 == "m") {
                index();
            } else {
                pk();
            }
        } function bagi() {
            const Pem1 = input.questionInt("Masukan angka ke 1: ");
            const Pem2 = input.questionInt("Masukan angka ke 2: ");
            const inputanPem1 = Pem1;
            const inputanPem2 = Pem2
            const hasilPem = inputanPem1 / inputanPem2;
            console.log("Hasil Dari Pembagian " + inputanPem1 + " Dan " + inputanPem2 + " Adalah " + hasilPem);
        }function pb() {
                const hai4 = input.question("Ingin melanjutkan pembagian y/n/m  ");
          if (hai4 == "y") {
                    bagi();
                } else if (hai4 == "n") {
                    return;
                } else if (hai4 == "m") {
                    index();
                }  else {
                    pb();
                } }
