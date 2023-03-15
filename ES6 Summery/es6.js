// Template String 
const numbers = [20, 40, 60, 80];
const students = {
    name : 'Sakib Khan',
    age : 32,
    movie : ['King khan', 'Dhakar Mastan']
}
const about = `My Name is ${students.name} age of ${students.age} has Number ${students.movie[1]}`
console.log(about)

// Arrow Function 
const getNumberFive = () => 40;
const addSixNumber = num => num + 40;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1 , num2) => {
    const  sum = num1 + num2
    return sum;
}

// Spread Operator 
const newNumber = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(newNumber)
console.log(numbers)

// Create a new array from an older array and add an element 
const currentNumber = [...numbers, 44]
console.log(currentNumber)