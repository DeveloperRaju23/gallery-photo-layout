const getData = new Promise ((resolve , reject) =>{
 
    const num = Math.random()*10
    console.log(num)
    if(num < 5){
     resolve (6548392)
    }else{
        reject('no data available')
    }
 
}) 

getData
.then(data => console.log(data + 34) )
.catch(err => console.error("ERR", err))