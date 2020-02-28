class Graph {
  constructor() {
      this.adjacencyList = {}
  }

  addVertex(vertex){
      let list = this.adjacencyList;
      if(!this[vertex]){
          list[vertex] = [];
      }
  }
}
