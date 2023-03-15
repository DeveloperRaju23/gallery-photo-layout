let serial = 0;
// First Cart 
document.getElementById('first-cart').addEventListener('click', function(){
    serial += 1 
    const productName = document.getElementById('product-name').innerText;
    const productPrice = document.getElementById('product-price').innerText;
    const productQuantity = document.getElementById('product-quantity').innerText;
    const totalPrice = parseInt(productPrice) * parseInt(productQuantity )

    // common function 
    displayData (productName,productPrice, productQuantity,totalPrice );
    document.getElementById('first-cart').setAttribute('disabled', true);
})

// Second Cart 

document.getElementById('second-cart').addEventListener('click', function(event){
        serial += 1 
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText
    const sumTotal = parseInt(productPrice) + parseInt(productQuantity);
    displayData (productName,productPrice, productQuantity,sumTotal );
    document.getElementById('second-cart').setAttribute('disabled', true);
})

document.getElementById("third-cart").addEventListener('click', function(event){
    serial += 1 
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText
    const sumTotal = parseInt(productPrice) - parseInt(productQuantity);

    displayData (productName,productPrice, productQuantity,sumTotal );
    document.getElementById('third-cart').setAttribute('disabled', true);
})

document.getElementById("four-cart").addEventListener('click', function(event){
    serial += 1 
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText
    const Total = parseInt(productPrice) ** parseInt(productQuantity);

    displayData (productName,productPrice, productQuantity,Total );
    document.getElementById('four-cart').setAttribute('disabled', true);

})

document.getElementById('last-cart').addEventListener('click', function(){
         serial += 1 
        const productName = document.getElementById('product-title').innerText;
        const productPrice = document.getElementById('price-Input').value;
        const productQuantity = document.getElementById("quantity-Input").value;


        // if(priceInput == "" || quantityInput == ""){
        //   return alert('Invalid Number');
        // }
        if ( productPrice == "" || productQuantity == "" || productPrice <= 0 || productQuantity <= 0 ) {
            return alert("please enter any valid number");
          }
          if (isNaN(productQuantity) || isNaN(productPrice)) {
            return alert('please check the input field')
          }
        const inputStringValue = parseInt(productPrice) / parseInt (productQuantity);

        displayData(productName ,productPrice , productQuantity, inputStringValue.toFixed(2) )
        document.getElementById('last-cart').setAttribute('disabled', true);

})
// common function 
function displayData (productName,productPrice, productQuantity,totalPrice ){
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${totalPrice}</td>
 
    `
    container.appendChild(tr)
    document.getElementById('total-product').innerText = serial;
}

