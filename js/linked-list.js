/**
 * @linked-list.js
 * This is an example of a linked-list implemented in JavaScript.
 *
 * Linked-list will be the first example for an algorithm in JS I will cover.
 * Author: A. Laszlo Lazuer
 * Date: 12/07/2016
 */

function SingleLinkedList(){
  this.head = null;
  this.tail = null;
  this._length = 0;
}

function Node (data){
  this.data = data;
  this.next = null;
}

SingleLinkedList.prototype.add = function (data){
  var node = new Node(data), currentNode = this.head;
  if (!currentNode) {
    this.head = node;
    this._length++;
    return node;
  }
  while (currentNode.next){
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this._length++;
  return node;
}

SingleLinkedList.prototype.searchNodeAt = function (position) {
  var currentNode = this.head, count = 1;
  while (count < position){
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
}

var linkedList = new SingleLinkedList();
linkedList.add("1");
linkedList.add("2");
linkedList.add("3");
linkedList.add("4");
linkedList.add("5");
linkedList.add("6");
linkedList.add("7");
linkedList.add("8");
linkedList.add("9");
linkedList.add("10");
linkedList.add("11");

document.getElementById("demo").innerHTML = "linkedList Head: " + linkedList.head.data
+ "<br>linkedList Last Item: " + linkedList.searchNodeAt(linkedList._length).data
+ "<br>linkedList Length: " + linkedList._length
;
