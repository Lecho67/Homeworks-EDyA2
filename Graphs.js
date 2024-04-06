const { array } = require("prop-types");

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
        this.adjList? console.log(this.adjList[value]): console.log("el grafo está vacío");
    }
}


const citiesandfriends = new graph();

citiesandfriends.addnode("Cali");
citiesandfriends.addnode("Caucasia");
citiesandfriends.addnode("Bogota");
citiesandfriends.addnode("Jamundi");
citiesandfriends.addnode("Medellin");

citiesandfriends.addnode("Juan")
citiesandfriends.addnode("Paula")
citiesandfriends.addnode("Yisel")
citiesandfriends.addnode("Andrea")
citiesandfriends.addnode("Sofia")
citiesandfriends.addnode("Esteban")
citiesandfriends.addnode("Julian")
citiesandfriends.addnode("Dora")
citiesandfriends.addnode("Sara")
citiesandfriends.addnode("Luis")

citiesandfriends.addedge("Cali", "Juan")
citiesandfriends.addedge("Cali", "Sara")
citiesandfriends.addedge("Jamundi", "Yisel")
citiesandfriends.addedge("Jamundi", "Andrea")
citiesandfriends.addedge("Bogota", "Paula")
citiesandfriends.addedge("Bogota", "Dora")
citiesandfriends.addedge("Caucasia", "Julian")
citiesandfriends.addedge("Caucasia", "Luis")
citiesandfriends.addedge("Medellin", "Sofia")
citiesandfriends.addedge("Medellin", "Esteban")

citiesandfriends.printgraph()
citiesandfriends.printAdjList("Cali")