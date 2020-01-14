class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null

    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
}

// let node1 = new Node(1)
// let node2 = new Node(2)
// let node3 = new Node(3)
// node1.next = node2
// node2.next = node3

let dll = new DoublyLinkedList()
console.log(dll)