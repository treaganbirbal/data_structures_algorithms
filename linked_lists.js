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

    pop(){
        //remove last elemnt in th SinglyLinkedList
        //return the node
        //if LinkedList is empty return null;
        if(!this.head || !this.tail){
            return null;
        }
        let current = this.head
        let prev = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
            this.length--
            return current
        }
        while(current){
            if(current.next === null){
                prev.next = null
                this.tail = prev
                this.length--
                return current  
            }
            prev = current
            current = current.next
        }
    }

    //get Value of node at that idx
    //If idx is invalid return null
    get(index){
        let counter = index;
        let current = this.head;
        //Deal with case if idx is invalid
        if(index < 0 || index >= this.length){
            return null;
        }
        while(counter){
            console.log(index)
            counter--
            current = current.next
        }
        return current
    }

    set(index, value){
        //Gets the node at the position and sets the value
        //to be the input
        //Use get method to get the node at index

    }
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

sll.push(1).push(2).push(3).push(4)
// console.log(sll)
// console.log(sll.pop())
console.log(sll.get(0))
