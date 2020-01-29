class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Queue{
    constructor(){
        this.length = 0;
        this.first = null
        this.last = null
    }

    enqueue(value){
        let newNode = new Node(value)
        if(!this.length){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length+=1
        return newNode
    }

    dequeue(){
        let returnedNode 
        if(!this.length){
            return null
        }
        else {
            returnedNode = this.first
            this.first = this.first.next
            returnedNode.next = null
        }
        this.length--
        return returnedNode

    }
}

let q = new Queue()
q.enqueue(1)
q.enqueue(2)
console.log(q.dequeue())
console.log(q)