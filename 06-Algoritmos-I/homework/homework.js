'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
 
  let factores = [1];
  let divi = 2;
  while( num !== 1 ){
    if( num%divi === 0 ){
      factores.push(divi); num = num/divi;
} else {
      divi = divi +1;
}

  }
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // [5, 1, 4, 2, 8]
  
  let bandera = true;
  
  while( bandera ){ 
    bandera = false;  
    let aux = 0;
  for (let i = 0; i < array.length-1; i++){
    if( array[i] > array[i+1] ){
      aux = array[i+1];
      array[i+1] = array[i];
      array[i] = aux;
      bandera = true;
    } 
  }
}
return array;
}
 




function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  
    let j, pos = 0;
  
    for ( let i = 1; i < array.length; i++ ) {
      pos = array[ i ];
      j = i;
      while ( (j > 0) && (  (array[ j - 1 ])  >  pos  )) {
        array[ j ] = array[ j - 1 ];
           j--;
      }
           array[ j ] = pos;
    }
  
        return array;
  };


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
 
  for (let i = 0; i < array.length; i++) {

        let minimo = i;
    
    for (let j = i+1; j < array.length; j++) {
        
        if( array[j] < array[minimo] ) {

          minimo = j;

        }
         
      }  
      
      let aux = array[i];
      array[i] = array[minimo];
      array[minimo] = aux;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
