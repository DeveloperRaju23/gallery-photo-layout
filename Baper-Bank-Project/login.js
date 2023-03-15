
// Step By : 1 

const submitButtonClick = document.getElementById('submit-btn').addEventListener('click', function(){

    // const submitClick = document.getElementById('submit-btn').addEventListener('', function(){
    
    // })
       // Step By : 2  
    const userEmailElement = document.getElementById('user-email');
    const userEmailClick = userEmailElement.value;
    
   // Step By : 3 
   const userPasswordElement = document.getElementById('user-password');
   const userPasswordClick = userPasswordElement.value;
   
   userEmailElement.value = '';
   userPasswordElement.value = '';
     // Step By : 4 
     if(userEmailClick === 'sontan@baap.com' && userPasswordClick === 'secret'){
        window.location.href='bank.html'; 
        
     }
     else{
      alert('Invalid Password')
     }
   
})
