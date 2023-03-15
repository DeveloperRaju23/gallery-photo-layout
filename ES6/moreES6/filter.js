const numbers  = [9,21, 40, 60,19,43, 50, 33, 25, 90, 32,6 ,1];
const bigNumber = numbers.filter(Number => Number > 20)
const tiny = numbers.filter(number => number < 10)

const even = numbers.filter(num => num % 2 === 0)
console.log(even)


const products =[
    {id: 1, name: 'asus', price: 23900},
    {id: 1, name: 'dell', price: 43900},
    {id: 1, name: 'phone', price: 33900},
    {id: 1, name: 'levano', price: 21900},
    {id: 1, name: 'laptop', price: 19900},
];

const expensive = products.filter(product => product.price > 20000);
console.log(expensive)