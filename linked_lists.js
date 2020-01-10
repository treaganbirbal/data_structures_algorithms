class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null
        this.length = 0
    }
    push(val){
        const addedNode = new Node(val)
        if(!this.head){
            this.head = addedNode
            this.tail = addedNode
        }
        else{
            this.tail.next = addedNode
            this.tail = addedNode;
        }
        this.length++
        return this
    }

    pop
}

// let newNode1 = new Node(1)
// let newNode2 = new Node(2)
// let newNode3 = new Node(3)
// let newNode4 = new Node(4)
// let newNode5 = new Node(5)

// newNode1.next = newNode2
// newNode2.next = newNode3
// newNode3.next = newNode4
// newNode4.next = newNode5

const sll = new SinglyLinkedList();

sll.push(1).push(2).push(4)


console.log(sll)