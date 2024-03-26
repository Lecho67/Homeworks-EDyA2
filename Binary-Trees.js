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
    insert(value){
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
                if(current.value < value){
                    if(!current.right){
                        current.right = NewNode
                        isFound = true
                        return this
                    }
                    else{
                        current = current.right
                    }
                }
            }
        }
    }

    preorder(node = this.root){
        if(!node){
            return;
        }
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }
    postorder(node = this.root){
        if (!node){
            return;
        }
        this.preorder(node.left);
        this.preorder(node.right);
        console.log(node.value);
    }
    inorder(node = this.root){
        if (!node){
            return;
        }
        this.preorder(node.left);
        console.log(node.value);
        this.preorder(node.right);
    }
    
}
