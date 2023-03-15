document.getElementById('submit-btn').addEventListener('click', function(){
    const value = document.getElementById('text-input').value;
 
    const container = document.getElementById('parent-container');
    const li = document.createElement('li');
    li.innerText = value;
    container.appendChild(li);
})