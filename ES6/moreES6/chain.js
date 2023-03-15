const users = [
        {
            id: 1,
            name : 'abul',
            job : 'webdeveloper'
        }
]
// console.log(users[0].name);   

const data = {
    count : 5000,
    data: [
        {id:1, name:'babul', job:'leader'},
        {id:2, name:'dabul', job:'leader'}
    ]
}

const firstJob = data.data[0].job;
console.log(firstJob)

const user = {
    id : 5001,
    name : 'Raju Halder',
    address : {
        street : {
            first : 'dhaka, mirpur, 3/4',
            second : 'third floor',
            third : 'right side',
        },
        postOffice : 'cantonment',
        city : 'dhaka',
    }
}
const userFloor = user.address.street.second

console.log(userFloor)
