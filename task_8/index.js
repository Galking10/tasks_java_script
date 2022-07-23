// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controlsRef = document.querySelector("#controls")
const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')
const divBoxRef = document.querySelector("#boxes")
const inputRef = controlsRef.firstChild

renderBtn.addEventListener('click', ()=>{
    createBoxes(inputRef.nextElementSibling.value)

})

destroyBtn.addEventListener('click', ()=>{
    divBoxRef.innerHTML = ''
})

function createBoxes(amount){
    let divSize = 30
    for(let i =0; i<amount; ++i){
        let randomNumber = Math.round(Math.random() *100) 
        divBoxRef.insertAdjacentHTML('afterbegin', `<div style="width:${divSize}px; height:${divSize}px; background-color:rgb(${255-randomNumber},${155-randomNumber},0); margin-bottom:5px;"></div>`);
        divSize += 10

    }
}