
// step : 1 
const depositButtonElement = document.getElementById('deposit-btn').addEventListener('click', function(){
    
    // step : 2

    const inputDepositElement = document.getElementById('input-deposit');
    const depositInput = inputDepositElement.value;
    const depositInputString = parseFloat(depositInput);
    inputDepositElement.value = '';
    if(isNaN(depositInputString)){
        alert('Wrong Number');
        return;
    }

        // step : 3
        const depositTotalElement = document.getElementById ("deposit-total");
        const depositTotal = depositTotalElement.innerText;
        const totalAmountString = parseFloat(depositTotal);
            // step :  4 add number +++++
        const totalAmountCount = totalAmountString  + depositInputString;

        depositTotalElement.innerText = totalAmountCount;
        
           // step : 5

    const balanceTotalAmount = document.getElementById('balance-amount');
    const totalBalanceString = balanceTotalAmount.innerText;
    const totalBalance = parseFloat(totalBalanceString);
  // step : 6   
    
    const currentBalanceTotal =  totalBalance + depositInputString ;
    balanceTotalAmount.innerText = currentBalanceTotal;
})