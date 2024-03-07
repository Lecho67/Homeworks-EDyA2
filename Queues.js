class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(item){
        this.items.push(item); 
    }
    dequeue(){
        return this.items.shift();
    }
    peek(){
        return this.items[0];
    }
    size(){
        return this.items.size();
    }
    print(){
        console.log(this.items);
    }
}

class person {
    constructor(name, arrivedtime){
        this.name = name;
        this.arrivedtime = arrivedtime;
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

const persons = new Queue();

for (let i = 0; i < 10; i++){
    persons.enqueue(new person(generateRandomString(10), i));
}

console.log(persons.print());