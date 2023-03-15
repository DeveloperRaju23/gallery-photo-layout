const numbers  = [9,21, 40, 60,19,43, 50, 33, 25, 90, 32,6 ,1];
const filter = numbers.filter(Number => Number % 5 === 0)
const five = numbers.find(num => num % 5 === 0)
console.log(filter)
const products =[
    {id: 1, name: 'asus', price: 23900},
    {id: 1, name: 'dell', price: 43900},
    {id: 1, name: 'phone', price: 33900},
    {id: 1, name: 'levano', price: 21900},
    {id: 1, name: 'laptop', price: 19900},
];

const cheap = 