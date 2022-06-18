// Задача 1

// Напиши функцию logItems(array), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const items = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

// const items = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// const logItems = function (array) {
//   for(let i = 0; i < array.length; i += 1){

//       console.log(i +1 , items[i])
//   }
// };
// logItems(items)

// ============================================================================================================
// ============================================================================================================

// Задача 2

// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// let text = 'I play football on beautiful plays';

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const messageToArray = message.split(' ');
//    return messageToArray.length * pricePerWord

// };

// console.log(calculateEngravingPrice(text, 10))

//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80

//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   );

// ============================================================================================================
// ============================================================================================================

// Задача 3

// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
// let text = 'I play football on beautiful plays';

// const findLongestWord = function(string) {
//     const stringToArray = string.split(' ')
//     let lengthOfWord = 0
//     let index
//     for(let i = 0; i<stringToArray.length; i +=1){

//         if(lengthOfWord < stringToArray[i].length){
//             lengthOfWord = stringToArray[i].length
//             index = i
//         }else{
//             continue
//         }

//     }
//     console.log(stringToArray[index])
//   };

//   findLongestWord(text)
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

//   console.log(findLongestWord('Google do a roll')); // 'Google'

//   console.log(findLongestWord('May the force be with you'));

// Задание 4

// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...',
// после чего возвращает укороченную версию.

// const strin = 'Curabitur ligula  non.'

// const formatString = function (string) {

//     if( string.length > 40){
//        return string.slice(0, 40) + '...'
//     } else{
//         return string
//     }
// };

// console.log(formatString(strin))

// ============================================================================================================
// ============================================================================================================

// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true,
// если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//   let messageToLowerCase = message.toLowerCase();
//   messageToLowerCase = messageToLowerCase.split(' ')
//   if(messageToLowerCase.includes('sale')){
//     return true
//   }
//   if(messageToLowerCase.includes('spam')){
//     return true
//   }
//   return false

// };

// console.log(checkForSpam('Latest technology sale news'));

// Задание 6

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
//  необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of.
//  После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь,
// в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input
// let numbers = []
// let total = 0
// while(true){
//     console.log(numbers)
//     input = prompt('Введите число')

//     if( input === null){

//         if (numbers.length > 0){
//             for(let item of numbers){
//                 total += item
//             }
//             alert(total)
//         }else{
//             alert('Массив пустой')
//         }

//         break
//     }
//     input = Number(input)
//     if(typeof input === 'number'){
//         numbers.push(input)
//     }else{
//         continue
//     }

// }

// function countNumber() {
//     let  = prompt('Введите число');
//     let enteredToNumber;
//     let total = 0;

//     while (enterNumber !== null) {
//       enteredToNumber = Number(enterNumber);
//       if (typeof enteredToNumber !== 'number') {
//         alert('Было введено не число, попробуйте еще раз');
//       }
//       total = total + enteredToNumber;
//       enterNumber = prompt('Введите число');
//     }

//     alert(`Общая сумма чисел равна ${total}`);
//   }

//   countNumber();

// ============================================================================================================
// ============================================================================================================

// Задание 7

// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того,
//  попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры
// и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно.
// Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.
// При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// function isLoginValid(login) {
//   let loginToLowerCase = login.toLowerCase();
//   if (loginToLowerCase.length >= 4 && loginToLowerCase.length < 16) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // console.log(isLoginValid('Ped'));

// function isLoginUnique(allLogins, login) {

//   return allLogins.includes(login);
   
// }
// // console.log(isLoginUnique(logins, 'Poly'));

// function addLogin(addLogins, login){
//     if(!isLoginValid(login)){
//         return 'Ошибка! Логин должен быть от 4 до 16 символов'
//     }

//     if(isLoginUnique(addLogins, login)){
//         return 'Такой логин уже используется!'
//     }
//     addLogins.push(login)
//     return addLogins
// }

// console.log(addLogin(logins, 'Genna'))

// console.log(addLogin(logins, 'Genna'))