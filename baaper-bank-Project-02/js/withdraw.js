
 document.getElementById('withdraw-btn').addEventListener('click', function(){

    const newWithdrawAmount = getInputIdValueId('withdraw-input');
    const previousWithdrawTotal = getElementByValueId('withdraw-amount');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;
    getTextElementValueById('withdraw-amount', newWithdrawTotal)

    const previousBalanceTotal = getElementByValueId('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount ;

    getTextElementValueById('balance-total', newBalanceTotal);
 })