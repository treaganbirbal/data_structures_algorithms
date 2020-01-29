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

    // dequeue(){
    //     if(!this.length){
    //         return null
    //     }
    //     else {

    //     }
    // }
}

let q = new Queue()
q.enqueue(1)
console.log(q.enqueue(2))
console.log(q)