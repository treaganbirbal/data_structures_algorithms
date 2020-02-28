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
      let value1 = this.adjacencyList[v1];
      value1.push(v2)
      let value2 = this.adjacencyList[v2];
      value2.push(v1)
  }

  removeEdge(v1, v2){
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
  }

}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1,2);
graph.addEdge(2,3);

graph.removeEdge(2, 3);


console.log(graph)

