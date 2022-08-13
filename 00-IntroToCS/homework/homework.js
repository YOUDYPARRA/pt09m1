'use strict'

function BinarioADecimal(num) { // 1001 = 9 
    // tu codigo aca
    var binarios=num.toString().split('').reverse().join('');
     let decimal = 0;
     for (let i = 0; i < binarios.length; i++) {
         decimal = decimal + ((binarios[i]) * (Math.pow(2, i)))
     }
     return decimal

}




// function binToDec( num ){
//     let arreglo = num.split('').reverse();
//     console.log(arreglo);
//     let dec = 0;
//     let base = 2;

//     for( let i = 0; i < arreglo.length; i++ ){
//       dec = dec + ( arreglo[i] * base ** i );
//     }
//     dec = dec.join('');
//     return   dec 
//   }

//   var pasalo = binToDec();
//   pasalo(111);
//   var num = 111;












function DecimalABinario(num) {
    // tu codigo aca

    let bina = [];
    let resul = 0;
    let coci = 2;
    let resto = 0;

    while (num > 1) {

        resto = num % coci; // guardamos el resto
        num = Math.floor(num / coci); // Guardamos el cociente
        bina.unshift(resto); // vamos armando el numero binario
        // con los restos que obtenemos
        // de las divisiones sucesivas
    }

    bina.unshift(num) // este puede ser un 1 o un 0,
        // por ello lo agregamos al bina-rio
    return bina.join('');


}


module.exports = {
    BinarioADecimal,
    DecimalABinario,
}