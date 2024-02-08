a = [1,2,3,4,5,6,7,8,9]
b = [10,11,12,13,14,15,16,17,18];
m = [1,2,[3,4,5,[6,7,8,9]]];
console.log(a.concat(b));

console.log(a.copyWithin(0,3,5));

iterator = a.entries()

iterator.forEach(x => console.log(x));

console.log(a.every(x => x < 10));

console.log(a.fill("hola",4));

console.log(a.filter(x => x % 2 == 0));

console.log(a.find(x => x + 2 == 4));

console.log(a.findIndex(x => x % 3 == 0));

console.log(m.flat());

console.log(m.flatMap(x => x == 3 ? "jaja soy un tre": `soy un ${x}`));

console.log(a.includes(2));

console.log(a.indexOf(8));

console.log(a.join());

iterador = a.keys()
iterador.forEach(x => console.log(x));

console.log(a.lastIndexOf(1));

console.log(a.map(x => x+(x/2)));

console.log(b.pop());

console.log(a.push(10));

console.log(a.reduce((x, y) => x + y), 0);

console.log(a.reduceRight((x, y) => x - y,100));

console.log(a.reverse());

console.log(a.shift());

console.log(a.slice(0,2));

console.log(a.some(x => x == 11));

console.log(a.sort());

console.log(a.splice(0,0,1));

console.log(a.toLocaleString("es-CO", { style: "currency", currency: "COP" })); 

console.log(a.toString());

console.log(a.unshift("inicio del array"));

iterador = a.values();

iterador.forEach(x => console.log(x));


