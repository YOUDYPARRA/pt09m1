"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad:
   el parámetro puede ser un valor o un callback.
    En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; 
    en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
  constructor(head){
    if(head){
      this.head=new Node(head);
    }else{
      this.head=null;
    }
    
  }  
}
LinkedList.prototype.add=function(n){/*Agrega un nuevo nodo al final de la lista*/    
  //recorrer el listado y colocar al ultimo*/
  let nuevo=new Node(n);
  console.log('INSTANCIA DE NODE: '+nuevo instanceof Node);
  let tiene_algo=this.head
  if(this.head){//si head tiene nodo recorrer nodos hasta encontrar un null y agregar
      let actual=this.head;
      while(actual.next){
          actual=actual.next;
      }
      actual.next=nuevo;            
  }else{//si head no tiene nodos, agregar nodo a head
      this.head=new Node(nuevo);
  }
  };
  LinkedList.prototype.remove=function(){/*ir al ultimo y antes de eliminar regresar su valor*/
    //recorrer el listado 
    //guardar el valor en variable temporal
    //colocar en null el valor siguiente
    //regresar el valor
    if(!this.head){
      return;
    }else{
      let actual=this.head;
      apuntador=0;
      while(actual.next){
        apuntador++;
          actual=next.siguiente;
      }
      actual=this.head;
      contador=0;
      let regresar;
      while(actual.next){
        contador++;
        if(contador==apuntador){
          regresar=actual.next;
        }
      }
      actual.next=null;
      return regresar;
    }


  };
  LinkedList.prototype.search=function(v){//search(3) busca un nodo cuyo valor sea 3
    //recorrer ccada elemento y verificar en cada dato si vale 3 en caso de ser numerico el valor

  };
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
    return {
      data:data,
      next:null
    };
  }
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
