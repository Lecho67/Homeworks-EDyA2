class node {
    constructor(value){
        this.value = value
        this.children = []
    }
    isleaf(){
        return (this.children.length === 0)
    }
}

class NaryTree {
    constructor(){
        this.root = null;
    }
    search(value, node = this.root){
        if(JSON.stringify(this.root.value) == JSON.stringify(value)){
            return this.root;
        }else{
            const inchildren = node.children.find(item => JSON.stringify(item.value) == JSON.stringify(value));
            if (inchildren){
                return inchildren
            }else{
                let found = false;
                node.children.forEach((item) => {
                    if(!found){
                        found = this.search(value, item)
                    }else{
                        return found
                    }
                })
            }
        }
    }

    insert(value, parent){
        const newNode = new node(value);
        if (!parent){
            if (!this.root){
                this.root = newNode
            }else{
                return null
            }
        }else{
            const parentNode = this.search(parent);
            parentNode.children.push(newNode);
        }
    }

    preOrder(node = this.root){
        if(!node){
            return
        }
        console.log(node.value)
        node.children.forEach(child => this.preOrder(child))
    }
    postOrder(node = this.root){
        if(!node){
            return
        }
        node.children.forEach(child => this.postOrder(child))
        console.log(node.value)
    }
    inOrder(node = this.root){
        if(!node){
            return
        }
        if(node.children.length){
            this.inOrder(node.children[0])
            console.log(node.value)
            for(let i = 1 ; i < node.children.length; i++){
                this.inOrder(node.children[i])
            }
        }else{
            console.log(node.value)
        }
    }
}


const ftree = new NaryTree

ftree.insert({name:"Juan Pablo Castaño",bd:"15/10"})
ftree.insert({name:"Luz Enith Campo",bd:"7/9"},{name:"Juan Pablo Castaño",bd:"15/10"})
ftree.insert({name:"Juan Carlos Castaño",bd:"5/11"},{name:"Juan Pablo Castaño",bd:"15/10"})
ftree.insert({name:"Emilio Campo",bd:"19/2"},{name:"Luz Enith Campo",bd:"7/9"})
ftree.insert({name:"Dora Sarria", bd:"5/5"},{name:"Luz Enith Campo",bd:"7/9"}) 
ftree.insert({name:"Juan Manuel Castaño",bd:"9/2"},{name:"Juan Carlos Castaño",bd:"5/11"})
ftree.insert({name:"Paulina Ceballos",bd:"10/12"},{name:"Juan Carlos Castaño",bd:"5/11"})



console.log("--------Preorder--------")
ftree.preOrder()
console.log("--------Postorder-------")
ftree.postOrder()
console.log("--------Inorder---------")
ftree.inOrder()