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
        if(this.root.value == value){
            return this.root;
        }else{
            const inchildren = node.children.find(item => item.value == value);
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
            const parentNode = this.search(parent)
            parentNode.children.push(newNode)
        }
    }

    preOrder(node = this.root){
        if(!node){
            return
        }
        console.log(node.value, node.children)
        node.children.forEach(child => this.preOrder(child))
    }
    postOrder(node = this.root){
        if(!node){
            return
        }
        node.children.forEach(child => this.postOrder(child))
        console.log(node.children, node.value)
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

