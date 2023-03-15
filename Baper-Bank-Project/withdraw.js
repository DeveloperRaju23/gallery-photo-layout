
// Step Number : 1
document.getElementById('withdraw-btn').addEventListener('click', function(){
   
    // Step Number : 2
    const withdrawElement = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawElement.value;
    const withdrawAmountString = parseFloat(withdrawAmount);
    withdrawElement.value = '';
    if(isNaN(withdrawAmountString)){
        
    }
    
 // Step Number : 7

      // Step Number : 3
    const withdrawTotalElement =  document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
 // Step Number : 5
    const balanceTotalElement = document.getElementById('balance-amount');
    const balanceTotalAmount = balanceTotalElement.innerText;
    const balanceTotalString = parseFloat(balanceTotalAmount);

    if(withdrawAmountString > balanceTotalString ){
        alert('Baap Er Bank e eto Taka Nai  !!!!')
        return;
    }
              // Step Number : 4
              const currentWithdrawTotal = withdrawTotal + withdrawAmountString;
              withdrawTotalElement.innerText = currentWithdrawTotal;
     // Step Number : 6
     const newTotalBalance = balanceTotalString - withdrawAmountString;
     balanceTotalElement.innerText = newTotalBalance;






})