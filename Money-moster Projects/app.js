document.getElementById('calculator-btn').addEventListener('click', function(){

     // income Part 
    const incomeField = document.getElementById('income');
    const incomeFieldValue = parseFloat (incomeField.value);
    // food part 
    const foodField = document.getElementById('food')
    const foodFieldValue = parseFloat(foodField.value)

    // rent part 
    const rentField = document.getElementById('rent');
    const rentFieldValue = parseFloat(rentField.value)

    // other part 
    const otherField = document.getElementById('other');
    const otherFieldValue = parseFloat(otherField.value)

    // if(isNaN(incomeField) || isNaN(foodField) || isNaN(rentField) || isNaN(otherField)){
    //     const warning = alert('please Enter Your Number')
    //     return warning;
    // }
    // Total Balance 
    const totalPrice = foodFieldValue + rentFieldValue + otherFieldValue 

    // total Expenses
    const totalAmount = document.getElementById('total');
    const totalAmountString = totalAmount.innerText;
    totalAmount.innerText = totalPrice;

    // balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;
    const newBalance = incomeFieldValue - totalPrice;
    balanceTotal.innerText = newBalance;



})


document.getElementById("save-amount").addEventListener('click', function(){

    const discountAmount = document.getElementById('discount')
    const discountString = parseFloat(discountAmount.value);


    const incomeField = document.getElementById('income');
    const incomeFieldValue = parseFloat (incomeField.value);

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountValue = parseFloat(savingAmount.innerText);
    const newSavingAmountString = discountString /  100  *  incomeFieldValue ;
    savingAmount.innerText = newSavingAmountString;

    const  remainingField = document.getElementById('remaining');
    const balanceTotal = document.getElementById('balance-total');
    const newBalance = parseFloat (balanceTotal.innerText);
    const remainingFieldString = newBalance - newSavingAmountString;
    remainingField.innerText = remainingFieldString;
})