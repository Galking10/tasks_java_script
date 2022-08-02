

const inputRef = document.querySelector('input')
const buttonRef = document.querySelector('button')
const outputRef = document.querySelector('.outside_ul')


buttonRef.addEventListener('click', (e)=>{
  let input = inputRef.value
  


  fetch(`https://restcountries.com/v2/name/${input}`)
  .then(response => response.json())
  .then(data => {
    data.map(item =>{
       outputRef.insertAdjacentHTML("afterbegin", `<ul class="list_item"><li>Name: ${item.name}</li>
     <li>Capital: ${item.capital}</li> <li>Region: ${item.region}</li> <li>Population: ${item.population}</li>
    <li >Flag: <img src="${item.flags.png}" style = "width: 30px; height: 15px"></li></ul>`   
    )
    })
    
  
  
    inputRef.value = ''
    
  })
    
})

