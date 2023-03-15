

const searchAllData = () => {
    const inputElement = document.getElementById('search-input')
    const inputValue = inputElement.value;

    // console.log(inputValue)
    const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`;

    fetch(URL)
    .then(res => res.json())
    .then(data => showDataPlayers(data.player))
}

const showDataPlayers = (player) =>{
    const container = document.getElementById('player-info')
    player.forEach(players => {
        console.log(players)
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="card h-100">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> Name : </h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
    `;
    container.appendChild(div)
    });


}

searchAllData()