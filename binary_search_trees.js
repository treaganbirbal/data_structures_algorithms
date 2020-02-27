class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class Binary_Search_Tree{
    constructor(){
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        // See if the tree is empty
        if(!this.root) {
          this.root = newNode;
          return;
        }
    
        let current = this.root;
    
        while(current) {
          if (current.value > newNode.value) {
            // Go to the left
            if (!current.left) {
              current.left = newNode;
              return;
            } else {
              current = current.left;
            }
          } else {
            // Go to the right
            if(!current.right) {
              current.right = newNode;
              return;
            } else {
              current = current.right;
            }
          }
        }
        
      }
}


let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);
let node8 = new TreeNode(8);
let node9 = new TreeNode(9);
// node1.next = node2;
// node2.prev = node1
// console.log(node1, node2)

const bst = new Binary_Search_Tree();

// bst.insert(node1);
bst.insert(node2);
// bst.insert(node3);
bst.insert(node1);


console.log(bst);
