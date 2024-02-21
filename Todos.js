

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = new node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    print(){
        let iterador = this.head;
        while (iterador!= null) {
            console.log(`${iterador.value.title} -------- ${iterador.value.description}`);
            iterador = iterador.next;
        }
    }
}

class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const generateRandomString = (num) => {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1 = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
      result1 +=
        characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result1;
}
let TODOS = new LinkedList();
for (let i = 0; i < 10; i++) {
    let TODO = {title : `Título random: ${generateRandomString(10)}`, description : `Descripción random: ${generateRandomString(30)}`}  
    TODOS.append(TODO); 
}
TODOS.print();
