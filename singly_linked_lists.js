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
        let returnedNode = this.get(index)
        //if node is null that means we cannot find the node and we return false
        if(!returnedNode){
            return false
        }
        //Assign value of node
        returnedNode.value = value;
        //return true if successfull, false if failed
        return true
        }

    print(){
        let value = ''
        let current = this.head
        while(current){
            value += `${current.value} ->`
            current = current.next
        }
        return value += 'null'
    }
    //alternative print
    // let arr = []
    // let node = this.head
    // while(node){
    //     arr.push(node.value)
    //     node = node.next
    // }
    // arr.push('null')
    // console.log(arr.join('->'))
//   }
    reverse(){
        let node = this.head
        this.head = this.tail;
        this.tail = node;
        let next 
        let prev = null
        while(node){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
       return this
        // let currentNode = this.head
        // let temp
        // let prev
        // while(currentNode !== null){
        //     temp = currentNode.next
        //      currentNode.next = prev
        //      prev = currentNode
        //      currentNode = temp
        // }
        // return prev
    }

    getMiddleNode(){
        let current = this.head
        let index = 0
        if(!this.length){
            return null
        } else if(this.length <= 2){
            return this.head
        } else {
            while(current){
                index++
                current = current.next
                if(index === Math.floor((this.length/2))){
                    return current
                }
            }
        }
    }

    isALoop(){
        let fastPointer = this.head;
        let slowPointer = this.head;
        while(slowPointer && fastPointer && fastPointer.next){
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next
            if(slowPointer === fastPointer){
                return true
            }
        }
            return false
        }

    getStartOfLoop(){
        let slowPointer = this.head;
        let fastPointer = this.head;
    
        while(slowPointer && fastPointer){
            slowPointer = slowPointer.next
            //if hits null, then there is no loop;
            if(!fastPointer.next){
                return null
            }
            fastPointer = fastPointer.next.next
            if(slowPointer === fastPointer){
                slowPointer = this.head;
                while(slowPointer !== fastPointer){
                    slowPointer = slowPointer.next;
                    fastPointer = fastPointer.next;
                }
                return slowPointer

            }
            
        }
    }

    removeElement(value){
        console.log('here',this.head.value)
    }

}

// 
// let newNode1 = new Node(1)
// let newNode2 = new Node(2)
// let newNode3 = new Node(3)
// let newNode4 = new Node(4)s
// let newNode5 = new Node(5)

// newNode1.next = newNode2
// newNode2.next = newNode3
// newNode3.next = newNode4
// newNode4.next = newNode5

const sll = new SinglyLinkedList();

sll.push(1).push(2).push(3).push(4).push(5).push(6)
// console.log(sll)
// console.log(sll.pop())
// sll.set(4, 5)
// console.log(sll)
// console.log(sll.get(4))
// console.log(sll.print())
// console.log(sll.reverse())
sll.head.next.next.next.next.next = sll.head.next.next
// console.log(sll.isALoop())
// console.log(sll.getStartOfLoop())
// console.log(sll.getMiddleNode())
sll.removeElement()



