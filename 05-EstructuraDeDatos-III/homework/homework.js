'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value){

  this.value = value;
  this.right = null;
  this.left = null;

}

// ---------------------- INSERT ----------------------------
BinarySearchTree.prototype.insert = function (value){

  
  if(value > this.value){   // comparo el valor de entrada con el del ARBOL.
    
    // si el valor de entrada es mayor, vamos por la derecha
    if(this.right !== null){     // por la derecha pregunto si hay algo..??

      this.right.insert(value);    // inserto valor
    }else{                          
      this.right = new BinarySearchTree(value); // sino creo un nodo nuevo....un arbol
    }
  }

  if(value < this.value){     // comparo nuevamente pero de sentido contrario

    if(this.left !== null){    // si en el nodo hay algo 
      this.left.insert(value);    // inserto el valor
    }else{
      this.left = new BinarySearchTree(value);    // creo un arbol nuevo
    }
  }
};

// ---------------------- CONTAINS ------------------------------------

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if(value > this.value) {
    if (this.right === null) { // si no tiene nodo derecho
      return false;
    } else {                    // si tiene nodo derecho  
      return this.right.contains(value);
    }
  } else {
    if (this.left === null) { // si no tiene nodo izquierdo retorno FALSE
      return false;
    } else {                    // si tiene nodo izquierdo 
      return this.left.contains(value);
    }
  }
};


// ----------------------------- SIZE -----------------------------------------
BinarySearchTree.prototype.size = function (){
  // CASO BASE
  if(this.right === null && this.left === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.right !== null && this.left === null) return 1 + this.right.size();
  if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size();
};




// -------------------------------- depthFirstForEach ----------------------------

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if(order === 'pre-order'){
    // root - izq - der
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }else if(order === 'post-order'){
    // izq - der - root
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }else{
    // in order
    // izq - root - der
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
};


// ---------------------------- breadthFirstForEach ----------------------------------

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]){

  if(this.left !== null){
    array.push(this.left);
  }

  if(this.right !== null){
    array.push(this.right);
  }

  cb(this.value);

  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array);
  }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};