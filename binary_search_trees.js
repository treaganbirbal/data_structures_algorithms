class Node{
    constructor(value){
        this.value = value,
        this.left = null,
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode
        }
    }
}

// let node1 = new Node(1);
// let node2 = new Node(2);
// node1.next = node2;
// node2.prev = node1
// console.log(node1, node2)