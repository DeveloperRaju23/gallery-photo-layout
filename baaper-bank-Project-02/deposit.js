// Step 01 
document.getElementById("deposit-btn").addEventListener('click', function(){
    // Step 02

    const inputFieldElement = document.getElementById('input-field');
    const inputFieldValue = inputFieldElement.value;
    const inputField = parseFloat(inputFieldValue);
    inputFieldElement.value = '';
        // Step 03
    const depositAmountElement = document.getElementById('deposit-amount');
    const depositAmountString = depositAmountElement.innerText;
    const depositAmount = parseFloat(depositAmountString);
  // Step 04
    const totalAmount = depositAmount  + inputField;
    depositAmountElement.innerText = totalAmount;
    // Step 05 balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
     // Step 06 balance total 
    const newTotalBalance = balanceTotal + inputField;
    balanceTotalElement.innerText = newTotalBalance;
})

 