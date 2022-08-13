'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null; // el head tambien es un NODO
  this.largo = 0;
  return 
}

function Node(value){
  this.value = value;
  this.next = null;  // este next es el puntero al siguiente NODO
  return 
}

LinkedList.prototype.add = function( value ){
  var nuevoNodo = new Node(value);
  
 if( this.head === null ){   //   revisa que este vació el head
        this.head = nuevoNodo;
        return nuevoNodo;
  }
  var puntero = this.head;
  while( puntero.next !== null ){
    puntero = puntero.next
  }
  puntero.next = nuevoNodo
  return nuevoNodo;
  }


LinkedList.prototype.remove = function(){
  
  
  if(  this.head === null ) {  return this.head  } 

  var aux = this.head;
  if(this.aux.next === null ){  aux = null;  return aux.value;  }

  while( aux.next.next !== null){
    aux = aux.next;
  }

  var aux2 = aux.next;
  



LinkedList.prototype.search = function(value){
  let cabeza = this.head;

  if( cabeza.value === value ){
    
  }
      if ( typeof value === 'function'){    // devuelve un string

        var cb = value;
        if(cb(valorNodo)) { return valorNodo } else { if ( valorNodo === value ) return valorNodo }
      }
      if( valorNodo === value ){

        return valorNodo
      }
      }
      puntero = puntero.next;
  }
  return null
}



// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.contenedor = 35;
  this.conte = {};
}

HashTable.prototype.get = function( llave ){ 
  var auxLlave = this.hash(llave);
  var objeto = this.conte[auxLlave]
  return (objeto[llave]);


 }

HashTable.prototype.hash = function( string ){ 

  var acumulador = 0;
  for( let i=0; i < string.length; i++ ){
    acumulador = acumulador + string.charCodeAt(i)
  }
  return (acumulador % this.contenedor);
}



HashTable.prototype.hashKey = function( llave ){

    return !!this.get(llave);
 }




HashTable.prototype.set = function( llave, valor ){ 
  var aux1 = this.hash(llave);
  if( this.conte[aux1] ){
    var objeto = this.conte[ aux1 ]
    objeto[ llave ] = valor
  }
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
