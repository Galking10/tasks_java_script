// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



let counterValue= 0;

const plusButtonRef = document.querySelector('button[data-action="increment"]')
const minusButtonRef = document.querySelector('button[data-action="decrement"]')
const valueRef = document.querySelector("#value")

function increment(e) {
    ++counterValue
   valueRef.textContent = counterValue
  
 
};
function decrement(){
    if(counterValue >0){
        --counterValue 
        valueRef.textContent = counterValue
    }
  
   
}


plusButtonRef.addEventListener('click', increment)
minusButtonRef.addEventListener('click', decrement)