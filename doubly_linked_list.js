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

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        let removedNode = this.tail
        if(!this.head){
            return null
        } else {
           this.tail = this.tail.prev
           this.tail.next = null
           removedNode.prev = null
        }
        this.length--
        return removedNode
    }
}

// let node1 = new Node(1)
// let node2 = new Node(2)
// let node3 = new Node(3)
// node1.next = node2
// node2.next = node3

let dll = new DoublyLinkedList()
dll.push(1).push(2).push(3).push(4)
console.log(dll.pop())
console.log(dll)