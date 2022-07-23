// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("#name-input")
const outputRef = document.querySelector("#name-output")

inputRef.addEventListener('input', (e)=>{
    console.dir(e.target.value)
    if(e.target.value === ''){
        outputRef.textContent = 'незнакомец'
        return
    }
    outputRef.textContent = e.target.value
    console.dir(e)
})



// outputRef.textContent = inputRef.value