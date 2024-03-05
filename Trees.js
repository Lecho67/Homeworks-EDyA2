class node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null

    }
    isleaf(){
        return (this.left == null && this.right == null)
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    instert(value){
        const NewNode = node(value)
        if (!this.root){
            this.root = NewNode
        }
        else{
            let current = this.root
            let isFound = false
            while(!isFound){
                if(current.value === value){
                    isFound = true
                    return null
                }
                if(current.value > value){
                    if(!current.left){
                        current.left = NewNode
                        isFound = true
                        return this
                    }
                    else{
                        current = current.left
                    }
                }
            }
        }
    }
}