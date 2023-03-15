const loadCountry = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {
        const countryContainer = document.getElementById('all-country')
        countries.forEach(country => {
                console.log(country)
             const countryDiv = document.getElementById('div')
             countryDiv.classList.add('country');
             countryDiv.innerHTML = `
             <h3>Name : </h3>

             `;

             countryContainer.appendChild(countryDiv)
        });

}


loadCountry ()
