const students = {
    name : 'Sakib Khan',
    age : 32,
    movie : ['King khan', 'Dhakar Mastan']
}

const studentsJSON = JSON.stringify(students)
// 


const studentsObj = JSON.parse(studentsJSON)
console.log(studentsJSON)

// Fetch 

fetch('url')
.then(res => res.json)
.then(data => console.log(data))

// Keys , Value 
const keys = Object.keys(students)
const value = Object.values(students);

// For 

const numbers = [23, 40, 50, 60, 70];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2)

// for of on array like object 
// loop on an object using for in 