let myVar = 5;
if(myVar){
    myVar = myVar * 100;

}
else{
    myVar =0
}
console.log(myVar)


const money = 800;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit'
}

console.log(food);


let food1 = money > 100 ? 'biryani' : 'cha biscuit'
console.log(food1)

let drink = (money > 100 && myVar > 100 ? 'coke' : 'filter water');
console.log(drink)

// number to string 
const num1 = 53;
console.log(num1)
const numStr = num1 + '';
console.log(numStr)

// string to number 
const input ='500'
const inputNum = + input
console.log(inputNum)

const isActive = true;
const showUser = () => console.log(('display user'))
const hideUser = () => console.log(('hide user'));

isActive ? showUser() : hideUser();
