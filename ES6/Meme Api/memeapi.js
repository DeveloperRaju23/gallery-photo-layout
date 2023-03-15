
const loadData = () =>{
    const URL = ('https://meme-api.com/gimme/20')
    fetch(URL)
    .then (res => res.json())
    .then(data => showMemeData(data.memes))
}

const showMemeData = (memes) =>{
       

        memes.slice(0,10).forEach(meme => {
            console.log(meme.url)
            const parentContainer = document.getElementById('parent-info')
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="card w-full bg-base-100 shadow-xl my-4">
            <figure><img class='w-full h-64' src="${meme.url}" alt="Shoes" /></figure>
          </div>

            
            `
            parentContainer.appendChild(div)
        });
}




loadData()