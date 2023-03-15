const addToLocalStorage =() => {
    const inputId = document.getElementById('storage-id');
    const id = inputId.value;
    const valueId = document.getElementById('storage-value');
    const value = valueId.value;

if(id && value){
    localStorage.setItem(id, value)
}
   
    inputId.value = '';
    valueId.value = '';
}