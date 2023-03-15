const loadData = () => {
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => showData(data))
}


const showData = (data) => {
    // console.log(data.slice(0,5))
    for (const singleData of data.slice(0,10)){
        console.log(singleData)
        const container = document.getElementById('post-info')
        const div = document.createElement('div');
        div.innerHTML = `
            <h3 class = ''> Title : ${singleData.title} </h3>
            <h3> Id : ${singleData.id} </h3>
        `;
        container.appendChild(div)
    }
}



loadData() 


const b=6
b=6
console.log(b);