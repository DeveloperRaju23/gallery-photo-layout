
// alert('How Are You')

showAlert = () => {
    alert('Bhai kicu taka dar dibe!!!')
}

showButton = () => {
   const result =  confirm('Bhai tui amar vhai kicu taka de !!!!')
   console.log(result)
    if(result === true){
        alert('tumi amar janner dos!!!')
    }
    else{
        alert('tor shate ar kotha bolbo na tui kicu taka dar dis ne!!!')
    }
}


const getInfo = () => {
  const name =  prompt('Tell Me Your Name')
  if(name === null){
    alert('Name na dile kam nai ja fooooot !!!!')
  }
  else{
    alert('Welcome to this world')
  }
}