/* 

Goal: take singly linked list --> Circular Linked List --> Understand its state as circular, break back into singly linked list


Explore: 

Node: 
(unit of information)
Value: 0
Next: null/empty, another node

class Node(
constructor(value, next = null)(
this.value = value;
  )
 )
 
 LinkedList ==> Node
 
 const list = new Node(0, new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))));
 
 //
 let sentinel = new Node(null);
 
 // create a current pointer
 let curr =  sentinel
 
 function createLinkedList(array) (
 // input is array
 
 for (let i; i < array.length; ++i)(
// work done
 const node = new Node(array[i]);
 curr.next = node;
 curr = curr.next;
 )
 //result is linked list
 return sentinel.next
 )
 \console.log(createLinkedList([0,1,2,3,4,5])



LinkedList ==
this.next = next;


Brainstorm: 


Plan:  

Implement: 
*/
