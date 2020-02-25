class Node{
    constructor(value, next, prev){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;
node2.prev = node1
console.log(node2)