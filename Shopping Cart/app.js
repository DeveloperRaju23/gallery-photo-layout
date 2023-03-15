function getCaseNumberUpdate(isIncrease){
    const inputCaseNumber = document.getElementById('input-value');
    const inputCaseNumberValue = inputCaseNumber.value;
    const inputValueString = parseInt(inputCaseNumberValue);
    let newInputCaseNumber;
        if(isIncrease){
            newInputCaseNumber = inputValueString  + 1;
        }
        else{
            newInputCaseNumber = inputValueString  - 1;
        }
    inputCaseNumber.value = newInputCaseNumber;
    return newInputCaseNumber;
}

function updateCaseTotalNumber (newInputCaseNumber){
    const caseTotalPrice = newInputCaseNumber * 59
    const caseTotal = document.getElementById('case-total');
    const caseTotalElement = caseTotal.innerText;
     caseTotal.innerText = caseTotalPrice;
}


document.getElementById('plush-btn').addEventListener('click', function(){
   const newInputCaseNumber = getCaseNumberUpdate(true);
   updateCaseTotalNumber (newInputCaseNumber)
   calculateSubTotal ()

})

document.getElementById('minus-btn').addEventListener('click', function (){
    const newInputCaseNumber =  getCaseNumberUpdate(false)
    updateCaseTotalNumber (newInputCaseNumber)
    calculateSubTotal ()
})