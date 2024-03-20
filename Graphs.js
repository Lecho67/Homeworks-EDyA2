class graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }
    addnode(node) {
        this.nodes.push(node);
        this.adjList[node] = [];
    }
    addedge(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }
    printgraph() {
        console.log(this.adjList);
    }
    searchnode(value) {
        if (this.nodes.length){
            return this.nodes.find(node => node == value);
        }
        return;
    }
    printAdjList(value) {
        this.adjList.length? console.log(this.adjList[value]): console.log("el grafo está vacío");
    }
}