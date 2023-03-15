

document.getElementById('deposit-btn').addEventListener("click", function (){

    const newDepositAmount = getInputIdValueId ('input-field');
  
    const previousDepositTotal = getElementByValueId('deposit-amount');

    const totalAmount = previousDepositTotal + newDepositAmount;
     
    getTextElementValueById ('deposit-amount', totalAmount);

    const balanceTotalAmount = getElementByValueId ('balance-total');
    const newBalanceAmount = balanceTotalAmount + newDepositAmount;
    getTextElementValueById('balance-total', newBalanceAmount);

})