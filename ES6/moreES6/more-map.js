const numbers = [12, 40, 30, 60, 36]
const half = numbers.map(n => n/2);
const third = numbers.map(x => x/3);
// console.log(half)
// console.log(third);

const friends = ['tom Hanks', 'tom cruise', 'tom brady', 'tom'];

friends.forEach(friend => console.log(friend))
const firstLetter = friends.map (friend => friend[0])
console.log(firstLetter)

const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths)


const products = [
    {id : 1, name: 'laptop', price: 23000},
    {id : 1, name: 'mobile', price: 73000},
    {id : 1, name: 'watch', price: 3000},
    {id : 1, name: 'tablet', price: 67000},
];

const items = products.map(product => product.name)
const price = products.map(p => p.price)
console.log(items)
console.log(price)

  