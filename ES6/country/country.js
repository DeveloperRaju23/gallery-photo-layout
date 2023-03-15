
const loadUser = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => allCountryData(data))
}

const allCountryData = country => {
    const allContainer = document.getElementById('all-country')
    // for(const contry of country){
     
    // }
    country.forEach(country => {
        console.log(country.cca2)
        const createDiv = document.createElement('div')
        createDiv.classList.add('country');
        createDiv.innerHTML =  `
            <h3>Name :${country.name.common} </h3>
            <p> Capital : ${country.capital} </p>
            <button onclick = "displayCountryDetails ('${country.cca2}')">  Details </button>
        `
        allContainer.appendChild(createDiv)
    });


}

const displayCountryDetails = code => {
    const url = `https://restcountries.com/v2/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data));
}

const showCountryDetails = country =>{
    const detailsContainer = document.getElementById('country-details')

    detailsContainer.innerHTML = `
    <h3>Name :${country.name.common} </h3>
    `
}

loadUser()