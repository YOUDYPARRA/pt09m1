"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order").
    Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(root){
    this.tree=root;
    this.left=null;
    this.rigth=null;
    this.arr=new Array();
    this.cont=0;
  }
contar(o){
  let num=[];
  if(o.left){
    num=this.contar(o.left);
  }else if(o.rigth){ num=this.contar(o.rigth)}


}
  size(){
        if(this.tree){
          this.cont=this.cont+1;
          //let cl=this.left.size();
        }
        if(this.left){
          //this.cont ++;
          this.cont=this.cont +this.left.size();
        }
        if(this.rigth){
          this.cont=this.cont +this.rigth.size();
        }
        return this.cont;
  }

  insert(parametro){
    //colocar derecha
    if(parametro>this.tree){
      if(this.rigth==null){
        this.rigth=new BinarySearchTree(parametro);
      }else{
        let r=this.rigth;
        r.insert(parametro);
      }
    }else if(parametro<this.tree){
      //colocar a la izquierda
      if(this.left==null){
        this.left=new BinarySearchTree(parametro);
        }else{
          this.left.insert(parametro);
        }

    }
  }
  contains(){}
  checar(){
    console.log('checar')
    console.log(this);
  }
  depthFirstForEach(){}
  breadthFirstForEach(){

  }


}
var arbolito=new BinarySearchTree(20);
arbolito.insert(25);

arbolito.insert(21);
arbolito.insert(19);
arbolito.insert(10);
//arbolito.insert(4);
//arbolito.insert(5);
//arbolito.insert(15);
//arbolito.insert(15);
//console.log(arbolito.size());
//arbolito.checar();
console.log(arbolito.size());

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};