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

  addEdge(v1, v2){
      let value = this.adjacencyList[v1];
      value.push(v2)
      let value2 = this.adjacencyList[v2];
      value.push(v1)
  }
}

const graph = new Graph();

