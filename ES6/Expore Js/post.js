
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => allDataUsers(data))



function allDataUsers (posts){
    const postContainer = document.getElementById('posts-container')
    for(const post of posts){
        console.log(post)
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4> Users---${post.userId} </h4>
        <h5> Post :${post.title} </h5>
        <p>Post Description ${post.body}  </p>
        `;

        postContainer.appendChild(postDiv)
    }
}

