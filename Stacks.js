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
        console.log(this.items);
    }
}