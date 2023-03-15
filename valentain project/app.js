document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
       const quantity = setValueText('kitkat-quantity');
        const quantityCost = quantity * 200;
     setInnerText('chocolateCost',quantityCost);
     total ()
})

document.getElementById('rose-buy-btn').addEventListener('click', function(){
    const quantity = setValueText('rose-quantity');
     const roseCost = quantity * 100;
     setInnerText('roseCost',roseCost);
     total ()
     
})

document.getElementById('diary-buy-btn').addEventListener('click', function(){
    const quantity = setValueText('diary-quantity');
     const diaryCost = quantity * 100;
    setInnerText('diaryCost',diaryCost);
    total ()
     
})


function setInnerText (id, value){
    document.getElementById(id).innerText = value;
}
function setValueText (id){
    const value = document.getElementById(id).value;
    return value;
}
function total (){
    const chocolateCostAmount = document.getElementById('chocolateCost').innerText;
    const roseCostAmount = document.getElementById('roseCost').innerText;
    const diaryCostAmount = document.getElementById('diaryCost').innerText;

    const totalPrice = parseFloat(chocolateCostAmount) + parseFloat(roseCostAmount)  + parseFloat(diaryCostAmount);
     document.getElementById('totalCost').innerText = totalPrice;
}

document.getElementById('apply-btn').addEventListener('click', function(){
    const promoCode = setValueText('promo-code');
    if(promoCode == 2323){
        const total = document.getElementById ('totalCost').innerText;
        const sum = total - parseFloat(total) * 0.2;
        setInnerText('all-cost', sum);
    }
    else{
        alert('Wrong Promo Code Please Try Again')
    }

})