const numbers = [30, 40, 50, 600]
let salary = 400;
salary = 500
console.log(salary)


function calculateSalary (salary, tax = 0.25, bonus){
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total
}

const elementHTML = `
    <h3>Name : </h3>
    <p>Address : </p>
    <p>Salary : ${numbers[3]} </p>
    <p>Others : ${calculateSalary(4000, 0, 0)} </p>
`

const doubleIt = x => x * 2;
const calculateSalary2 = (salary , tax, bonus) => salary - salary * tax + bonus;


const ages = [30, 40, 50, 60, 70]
const newAge = [...ages, 22, 23, 24]

console.log(newAge);
