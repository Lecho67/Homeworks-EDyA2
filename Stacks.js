class stack {
    constructor(){
        this.items = [];
        this.counter = 0;
    }
    pop(){
        this.counter--;
        res = this.items[this.counter];
        delete this.items[this.counter];
        return 
    }
    push(item){
        this.items.push(item);
        this.counter++;
    }
    peek(){
        return this.items[this.counter-1];
    }
    size(){
        return this.counter;
    }
    print(){
        this.items.forEach(element => {
            console.log(element.name, element.ISBN, element.Author, element.Editorial);
        });
    }
}

class libro {
    constructor(name, ISBN, Author, Editorial){
        this.name = name;
        this.ISBN = ISBN;
        this.Author = Author;
        this.Editorial = Editorial;
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

const libros = new stack();

for (let i = 0; i < 10; i++) {
    const ObjLibro = new libro(generateRandomString(10),Math.floor(Math.random()*100000),generateRandomString(10),generateRandomString(10));
    libros.push(ObjLibro);
}

libros.print();