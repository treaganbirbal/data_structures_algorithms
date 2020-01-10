class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class singlyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null
        this.length = 0
    }
}

let newNode1 = new Node(1)
let newNode2 = new Node(2)
let newNode3 = new Node(3)
let newNode4 = new Node(4)
let newNode5 = new Node(5)

newNode1.next = newNode2
newNode2.next = newNode3
newNode3.next = newNode4
newNode4.next = newNode5


console.log(newNode1)