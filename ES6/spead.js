const max = Math.max (12 , 86, 300, 20, 78)

const numbers = [12, 40, 500, 300,];
const largest = Math.max(...numbers)
console.log(...numbers)
console.log(largest)

const number2 = [...numbers];
numbers.push(33)
number2.push(333)
console.log(numbers)
console.log(number2)