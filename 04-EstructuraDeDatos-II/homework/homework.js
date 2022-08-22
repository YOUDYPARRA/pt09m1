"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad:
   el parámetro puede ser un valor o un callback.
    En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 
    en el segundo, buscamos un nodo cuyo valor,
     al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
  constructor(head){
      this.head=null;
  }  
}
LinkedList.prototype.add=function(n){/*Agrega un nuevo nodo al final de la lista*/    
  //recorrer el listado y colocar al ultimo*/
  let nuevo=new Node(n);
  let tiene_algo=this.head
  if(this.head){//si head tiene nodo recorrer nodos hasta encontrar un null y agregar
      let actual=this.head;
      while(actual.next){
          actual=actual.next;
      }
      actual.next=nuevo;            
  }else{//si head no tiene nodos, agregar nodo a head
      this.head=nuevo;
  }
  };
  LinkedList.prototype.remove=function(){/*ir al ultimo y antes de eliminar regresar su valor*/
    if(!this.head){
      return null;
    }else{
      let actual=this.head;
      let apuntador=0;
      while(actual.next){
        apuntador++;
          actual=actual.next;
      }
      //console.log('apuntador: '+apuntador);
      let eliminar=this.head;
      for (let index = 0; index <= apuntador; index++) {
        //console.log('entre a for eliminar: '+eliminar.value);
        if (apuntador==index) {
          var devolver=eliminar.value;
          //console.log('a eliminar: '+eliminar.value);
        }
        
        let temp=eliminar.next;
        eliminar.next=null;
        if(apuntador==0){
          this.head=null;
          temp=this.head;
        }
        eliminar=temp;
      }
      return devolver;
    }

  };
  LinkedList.prototype.search=function(v){//search(3) busca un nodo cuyo valor sea 3
    //recorrer ccada elemento y verificar en cada dato si vale 3 en caso de ser numerico el valor
    let actual=this.head;
    //console.log("buscar: "+v);
    while (actual) {
      //console.log('actual: '+actual.value);
      if(actual.value==v){
        //console.log('encontrado: '+ actual.value);
        
        return actual.value;
        
      }else if(typeof v === 'function'){
        //console.log('buscar');
        //console.log(v(actual.value));
        if(v(actual.value)){
          return actual.value;
        }

      }
      actual=actual.next;
      
    }
    return null;

  };
  LinkedList.prototype.checar=function(){
    console.log(this.head);
  }
  LinkedList.prototype.ultimo=function(){
    let ultimo=head.siguiente;
    while(ultimo){
      ultimo=siguiente.siguiente
      console.log(ultimo);
    }
    this.head
  };

class Node{
  constructor(data){
      this.value=data;
      this.next=null;
    }
}
/**var x = new LinkedList();
x.add('one');
x.add('two');
x.add(3);
**/
//x.checar();
//console.log(x.search(function(valor){
//  return 'one'==valor;
//}));
//x.checar();
//console.log(x.search('two'));
//x.remove();
//x.remove();
//x.remove();

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets 
(slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información),
 donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
  pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro 
  al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. 
  Recibe un input alfabético, suma el código numérico de cada caracter del input
   (investigar el método charCodeAt de los strings)
    y calcula el módulo de ese número total por la cantidad de buckets;
     de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), 
  hashea la clave invocando al método hash, 
  y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket
   correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable {
  constructor(){
    this.numBuckets = 35;
    this.arrBucket= new Array(this.numBuckets);
  }
  

  hash(i){
    var sumador=0;
    for (let index = 0; index < i.length; index++) {
      let s=i[index];
      sumador=sumador+s.charCodeAt();
            
    }
    return sumador % 35;
    console.log(sumador % 35);
    
  };
  set(clave, valor){
    if(typeof clave=='string') {
      let bucket=this.hash(clave);
      if(this.arrBucket[bucket]){
        this.arrBucket[bucket][clave]=valor;
      }else{
        this.arrBucket[bucket]={};
        this.arrBucket[bucket][clave]=valor;
      }
      
      //console.log(this.arrBucket[bucket]);
    }else{
      throw new TypeError('Keys must be strings');
    }
    

  };
  get(clave){
    let res;
    this.arrBucket.forEach(element => {
      res=element[clave];
    });
    return res;
  };
  hasKey(){};
  
}
var x =new HashTable('foo');
x.set('foo','xxx');
x.set('ofo','xxx1');
console.log(x.get('foo'));
console.log(x.get('ofo'));
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
