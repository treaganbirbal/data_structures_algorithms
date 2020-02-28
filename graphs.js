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

  removeVertex(vertex){
    this.adjacencyList[vertex].forEach(v => {
        this.removeEdge(vertex, v)
    })
    delete this.adjacencyList[vertex];
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
graph.removeVertex(3)


console.log(graph)


// class Graph {
//     constructor() {
//       this.adjacencyList = {}
//     }
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
//     }
//     addEdge(v1, v2) {
//       this.adjacencyList[v1].push(v2)
//       this.adjacencyList[v2].push(v1)
//     }
//     removeEdge(v1, v2) {
//       this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
//   ​
//       this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1) 
//     }
//     removeVertex(vtx) {
//       this.adjacencyList[vtx].forEach(v => {
//         this.removeEdge(vtx, v);
//       })
//       delete this.adjacencyList[vtx]
//     }
// }  


// class Graph {
//     constructor() {
//       this.adjacencyList = {}
//     }
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
//     }
//     addEdge(v1, v2) {
//       this.adjacencyList[v1].push(v2)
//       this.adjacencyList[v2].push(v1)
//     }
//     removeEdge(v1, v2) {
//       this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
//   ​
//       this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1) 
//     }
//     removeVertex(vtx) {
//       this.adjacencyList[vtx].forEach(v => {
//         this.removeEdge(vtx, v);
//       })
//       delete this.adjacencyList[vtx]
//     }
//     DFS(vtx) {
//       const stack = [vtx];
//       const visited = {};
//       const result = [];
//       while (stack.length) {
//         const currentNode = stack.pop();
//         if (visited[currentNode]) continue;
//         visited[currentNode] = true;
//         result.push(currentNode);
//         this.adjacencyList[currentNode].forEach(n => {
//           stack.push(n);
//         });
//       }
//       return result;
//     }
//   ​
//   }
//   ​
//   const graph = {
//     0: [4, 5, 6], //6
//     1: [2, 6],
//     2: [1, 3, 6],
//     3: [2, 4, 6],
//     4: [3, 5],
//     5: [0, 4],
//     6: [0, 1, 2, 3],
//   }
//   ​
//   const visited = {
//     0: true,
//     4: true,
//     5: true,
//     6: true,
//     3: true,
//     1: true,
//     2: true,
//   ​
//   }
//   ​
//   // const visited = {
//   //   0: true,
//   //   4: true,
//   //   3: true,
//   //   2: true,
//   //   1: true,
//   //   6: true,
//   // }
//   // list.removeVertex(0)
//   // list.removeEdge(0, 4)
//   // list.addVertex(0)
//   // list.addVertex(1)
//   // list.addVertex(2)
//   // list.addVertex(3)
//   // list.addVertex(4)
//   // list.addVertex(5)
//   // list.addVertex(6)
//   ​
//   const g = new Graph();
//   g.adjacencyList = graph;
//console.log(g.DFS(0));

  

