class Node{
    constructor(value){
        this.value = value,
        this.left = null,
        this.right = null
    }
}

class Binary_Search_Tree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode
            return;
        } else {
            if(newNode < this.root){
                while(this.root.left){
                    if(newNode < this.root.left){
                        this.root.left = newNode
                    }
                }
            } 
            if(newNode > this.root){
                while(this.root.right){
                    if(newNode > this.root.right){
                        this.root.right = newNode;
                    }
                }
            }
        }
        return this;
    }
}


let node1 = new Node(1);
let node2 = new Node(2);
// node1.next = node2;
// node2.prev = node1
// console.log(node1, node2)

const bst = new Binary_Search_Tree();

bst.insert(node1)
bst.insert(node2)
console.log(bst)
