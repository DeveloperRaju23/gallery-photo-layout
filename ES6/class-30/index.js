document.getElementById('clicked-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends){
        friend.style.backgroundColor = 'red'
    }
})


document.getElementById('clicked-center').addEventListener('click', function(){
    const textAlign = document.getElementById('center')
       textAlign.style.textAlign = 'center'
})


document.getElementById('add').addEventListener('click', function(){
   const friendContainer  =   document.getElementById('friend-container');
   const friend = document.createElement('div')
   friend.classList.add('friend')
   friend.innerHTML = `
   <h3 class="friends-name">friend-4</h3>
   <p>Magnam facere tenetur labore neque.</p>
   `
   friendContainer.appendChild(friend);
})