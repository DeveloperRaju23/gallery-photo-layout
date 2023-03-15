const user = { id : 1, name: "Raju", job : 'web'}
const stringiFied = JSON.stringify(user)
// console.log(stringiFied)


const shop = {
    owner : 'Alia',
    address : {
        street : 'Kochukhet voot er goli',
        country : 'BD'
    },
    product : ['Phone', 'Monitor', 'KeyBoard', 'Mic'],
    revenue : 455000,
    isOpen : true,
    isNew : false,
}

// console.log(shop)

const shopJson = JSON.stringify(shop)
console.log(shopJson)

const shopObj = JSON.parse(shopJson)
console.log(shopObj)