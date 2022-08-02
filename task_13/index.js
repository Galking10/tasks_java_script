const inputRef = document.querySelector('input')
const buttonRef = document.querySelector('button')
const outputRef = document.querySelector('ul')

inputRef.addEventListener('input', (e)=>{
   
debounce(()=>{
    console.log(inputRef.value)}, 2000)

   
    
    // if(inputRef.value.length > 5){
    //     console.log(inputRef.value)
    // }
})