// Step ---------- 01 
function getInputIdValueId (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputValue;
}
// Step ---------- 02 
function getElementByValueId (elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const elementValue = parseFloat(elementFieldString);
    return elementValue;
}     
// Step SET FUNCTION ---------- 03
function getTextElementValueById (elementId , newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

