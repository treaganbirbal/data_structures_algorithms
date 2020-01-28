class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
  constructor(){
      this.length = 0;
      this.top = null
  }

  push(value){
    const newNode = new Node(value)

    if(!this.length){
        this.top = newNode
    } else {
        newNode.next = this.top;
        this.top = newNode
    }
    this.length += 1
    return newNode
  }

  pop(){
      if(!this.length){
          return null
      } else {
          let returnedNode = this.top
          returnedNode.next = this.top
          this.top = returnedNode.next
          return returnedNode
      }
      this.length--
  }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
console.log(stack)


