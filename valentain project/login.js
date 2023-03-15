// const submitBtn = document.getElementById('submit-btn').addEventListener ('click', function(){
        
//     const userEmail = document.getElementById('email-user');
//     const user = userEmail.value;

//     const userPassword = document.getElementById('password-user');
//     const password = userPassword.value;
 
//     if(user === 'abc@gmail.com' && password === 'abc'){
//         window.location.href = 'index.html';
//     }
//     else{
//         alert('Wrong Password')
//     }

// })




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
     if(userEmailClick === 'abc@gmail.com' && userPasswordClick === 'abc'){
        window.location.href='project.html'; 
        
     }
     else{
      alert('Invalid Password')
     }
   
})
