let allData;
const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showAllData(data.slice(0,3)))

}

const showAllData = (allData) => {
    const container = document.getElementById('container-info')  
    container.innerHTML = '';
    allData.forEach(country => {
        //   console.log(country.cca2)
          const div = document.createElement('div')
          div.innerHTML = `
          <div class="card card-compact w-full h-96 bg-base-100 shadow-xl">
          <figure><img class="h-50 w-full" src="${country.flags.png}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Country Name : ${country.name.common} </h2>
            <p>Population : ${country.population}</p>
            <p>languages : ${country.languages.eng}</p>
            <p>Region  : ${country.region}</p>
            <div class="card-actions justify-center">
              <button onclick= "showDetails('${country.cca2}')" class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
          `;
          container.appendChild(div)
    });

}

const showDetails = (id) =>{
        const URL = `https://restcountries.com/v3.1/alpha/${id}`
        fetch(URL)
        .then(res => res.json())
        .then(data => console.log(data))
        // console.log(id)
} 


loadData()

const showAllDataTogether = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showAllData(data))
}









// https://restcountries.com/v3.1/alpha/${id}`


