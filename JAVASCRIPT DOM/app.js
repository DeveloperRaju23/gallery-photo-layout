const clickButton = document.getElementById('click-button').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';

    const helloClick =document.getElementById('hello-javascript');
    helloClick.innerText = 'hello dom ki obostha';

       
});

function upperCase() {
    const inputField = document.getElementById('input-field');
    inputField.value = inputField.value.toUpperCase();
}

function clickMe (){
    document.write('Hi Raju How Are You !!!')
}



const submitButton = document.getElementById('submit-button').addEventListener('click', function(){
    const inputText = document.getElementById('input-text');
   const inputHello = inputText.value;
    const p = document.getElementById('hello-text');
    p.innerText = inputHello;
    inputText.value = '';
})

let pNode = document.querySelector('.pNode');
console.log(pNode.parentNode)


