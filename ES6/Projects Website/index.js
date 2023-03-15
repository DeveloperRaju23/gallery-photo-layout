
const fetchCategories = () => {
    fetch ("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => showCategories(data.data))
}

const showCategories = (data) => {
    console.log(data )
    const menuContainer = document.getElementById('menu-container')
   data.news_category.forEach(singleCategory => {
    console.log(singleCategory)
    const linkContainer = document.createElement('p')
    menuContainer.innerHTML += ` <a class="nav-link" href="#" onclick="allNewsCategory('${singleCategory.category_id}', '${singleCategory.category_name}')">${singleCategory.category_name}</a>`

    menuContainer.appendChild(linkContainer)
   });
} 


const allNewsCategory = (category_id,category_name ) => {
        const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => allNewShow(data.data, category_name))
        
}

const allNewShow = (data, category_name) => {
        console.log(data,category_name)
        const newsCount = document.getElementById('news-count').innerText = data.length
        const categoryName = document.getElementById('category-name').innerText = category_name

            const allNewsDetails = document.getElementById('all-news')
            allNewsDetails.innerText = ''
        data.forEach(singleNews =>{
           const card = document.createElement('div');
           card.classList.add('card', 'mb-4')
           card.innerHTML = `
           <div class="row g-0 p-3">
           <div class="col-md-4">
             <img src="${singleNews.image_url}" class="img-fluid w-full h-full rounded-start" alt="...">
           </div>
           <div class="col-md-8 d-flex flex-column">
             <div class="card-body">
               <h5 class="card-title">${singleNews.title}</h5>
               <h5 class="card-title">Name : ${singleNews.author.name}</h5>
               <p class="card-text">${singleNews.details.slice(0,200)}...</p>
               <p class="card-text">${singleNews.details.slice(0,200)}...</p>
             </div>
             <div class=" ">
             
             </div>
           </div>
         </div>
           `;

           allNewsDetails.appendChild(card)
        })
} 


