function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-input-field')
    const phoneNumberString = phoneNumberField.value;
    const phoneNumberAdd = parseInt(phoneNumberString);

    let  newPhoneNumber;
        if(isIncrease){
            newPhoneNumber = phoneNumberAdd + 1;
        }
        else{
            newPhoneNumber = phoneNumberAdd - 1;
        }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function newPhoneUpdate (newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219 ;
   const phoneTotalElement = document.getElementById('phone-total');
     phoneTotalElement.innerText = phoneTotalPrice;
}

function getTextElementTextValue (elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseFloat(currentPhoneString);
     return currentPhoneTotal;
}

function setTextElementValueId (elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal (){
    const currentPhoneTotal = getTextElementTextValue ("phone-total")
    const currentCaseTotal = getTextElementTextValue ("case-total")
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
 
 //    phone total 
 setTextElementValueId ('sub-total', currentSubTotal);
    // tex 
    const texAmountString = (currentSubTotal * 0.1).toFixed(2);
    const texAmount = parseFloat(texAmountString );
    setTextElementValueId ('tax-amount', texAmount);

    const finalAmount = currentSubTotal + texAmount;
    setTextElementValueId ('final-total',finalAmount )
}



document.getElementById('phone-btn-plus').addEventListener('click', function(){
   const newPhoneNumber =  updatePhoneNumber (true)
   newPhoneUpdate (newPhoneNumber)
   calculateSubTotal ()
})


document.getElementById('phone-btn-minus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber (false)
   newPhoneUpdate (newPhoneNumber)
   calculateSubTotal ()
})