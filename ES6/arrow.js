function add (first , second){
    const total = first + second 
    return total
}

const result = add (10, 20)
console.log(result)


const add4 = function (first , second){
    return first + second;
}

const add5 = (first, second) => first + second;
const result1 = add5 (30, 40)
console.log(result1)