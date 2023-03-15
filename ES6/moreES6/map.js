
const numbers = [2, 4, 6, 8, 10]



 function getDoubled (numbers){
    const output = [];
     for (const number of numbers){
        const doubled = number *  2;
        output.push(doubled)
     }
     return output
 }
const result = getDoubled (numbers);
// console.log(result)

const doubledIt = num => num * 2;
const makeDouble = numbers.map(doubledIt)

const makeDoubleDirect = numbers.map(num => num * 2)
console.log(makeDoubleDirect)
console.log(makeDouble)