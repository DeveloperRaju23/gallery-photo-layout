const products = [
    {name: 'laptop', price: 32090, brand: 'lenovo', color:'silver'},
    {name: 'phone', price: 60090, brand: 'iphone', color:'black'},
    {name: 'camera', price: 65000, brand: 'nikkon', color:'black'},
    {name: 'watch', price: 40090, brand: 'casio', color:'yellow'},
    {name: 'tablet', price: 70584, brand: 'asus', color:'white'},
    {name: 'computer', price: 239490, brand: 'dell', color:'gray'},
];

// Map Return 
const brands = products.map(product => product.brand);
// console.log(brands)
const prices = products.map(product => product.price);
// console.log(prices);

// add a new products 
const newProducts = {name : 'webcam', price : 700, brand: 'lal'};

const newProduct = [...products , newProducts];
// remove 
const remaining = products.filter(product => product.name !== 'phone');





// ForEach No Return 
// products.forEach(product => console.log(product.price))

products.forEach(product => {

})

// Filter 
const cheap = products.filter( product => product.price <= 50000)
// console.log(cheap)

const SpecificName = products.filter(product => product.name.includes('e'))
// console.log(SpecificName);

// Find 
const special = products.find(product => product.name.includes('e'))
console.log(special)