
class Graph {
    constructor() {
        this.adjacency = {};
    }
    addVertex(vertex) {
        if (!Object.keys(this.adjacency).includes(vertex)) {
            this.adjacency[vertex] = [];

        } else {
            throw new Error("Adjacency list have already been containing same vertex!")
        }
    }
    addEdge(vertex1, vertex2) {
        const v1 = Object.keys(this.adjacency).includes(vertex1);
        const v2 = Object.keys(this.adjacency).includes(vertex2);
        if (!v1 || !v2) {
            throw new Error("Adjacency list doesn't contain vertex1 or vertex2, please check it!");
        }

        this.adjacency[vertex1].push(vertex2);
        this.adjacency[vertex2].push(vertex1);
    }
    //remove vertex
    removeVertex(vertex) {
        const ver = Object.keys(this.adjacency).includes(vertex);
        if(!ver){
            throw new Error(`There is no ${vertex} as vertex`);
        }
        delete this.adjacency[vertex];

        // clear edges from vertex
        Object.keys(this.adjacency).forEach(item => {
            let property = this.adjacency[item];
            if(property.includes(vertex)){
                this.adjacency[item] = property.filter(ver => ver !== vertex);
            }
        })
    }

    //remove edge
    removeEdge(vertex1, vertex2) {
        const v1 = Object.keys(this.adjacency).includes(vertex1);
        const v2 = Object.keys(this.adjacency).includes(vertex2);
        if (!v1 || !v2) {
            throw new Error("Adjacency list doesn't contain vertex1 or vertex2, please check it!");
        }

        this.adjacency[vertex1] = this.adjacency[vertex1].filter(item => item !== vertex2);
        this.adjacency[vertex2] = this.adjacency[vertex2].filter(item => item !== vertex1);
    }
    printGraph() {
        console.log(this.adjacency);
    }
}

const graph = new Graph();

graph.addVertex("Miami");
graph.addVertex("Warszawa");
graph.addVertex("Izmir");
graph.addVertex("Antalya");
graph.addVertex("Australia");
graph.addEdge("Miami", "Australia");
graph.addEdge("Izmir", "Australia");
graph.addEdge("Miami", "Antalya");
graph.addEdge("Izmir", "Warszawa");
graph.removeEdge("Izmir", "Warszawa");
graph.removeVertex("Australia");
graph.printGraph();