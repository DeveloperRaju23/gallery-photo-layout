// step 1
document.getElementById('withdraw-btn').addEventListener('click', function(){
            // step 2
    const withdrawInputElement = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInputElement.value;
    const newWithdrawInput = parseFloat(withdrawInputString);
    // step 3
    const withdrawAmountElement = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmountElement.innerText;
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    // step 4

    const totalWithdraw = newWithdrawAmount + newWithdrawInput;
    withdrawAmountElement.innerText = totalWithdraw;

    // step 5 
    const balanceElement = document.getElementById ('balance-total');
    const balanceElementString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(balanceElementString);
 // step 5 
    const TotalBalance = previousBalanceTotal - newWithdrawInput;
    balanceElement.innerText = TotalBalance;

    withdrawInputElement.value = ' ';

})