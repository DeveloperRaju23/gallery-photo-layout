


const submitButton = document.getElementById('submit_btn').addEventListener('click', function(){
    
    const userInputField = document.getElementById('user_name')
    const userField = userInputField.value;

    const userPasswordField = document.getElementById('user_password')
    const passwordField = userPasswordField.value;

    userInputField.value = '';
    userPasswordField.value = '';
    if(userField === 'admin@gmail.com' && passwordField === 'admin'){
        window.location.href = 'resume.html'
    }
    else{
        alert('Invalid Password')
    }
})


