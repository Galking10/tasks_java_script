// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

//   user.mood = 'happy'

//   user.hobby = 'skydiving'

//   user.premium = false

//   for(const key in user){
//       console.log(key, ':', user[key])
//   }

// const keysOfUser = Object.keys(user)

// for(const keyResult of keysOfUser){
//     console.log(keyResult, ':', user[keyResult])
// }

// ============================================================================================
// ============================================================================================

// Задача 2

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

//   const countProps = function(obj){
//     return Object.keys(obj).length

//   }

//   console.log(countProps(user))

// ============================================================================================
// ============================================================================================

// Задание 3

// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// const employers1 = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// const employers2 = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// const employers3 = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };

// function findBestEmployee(employees) {
//   let name;
//   let salary = 0;
//   for (let employee in employees) {
//     if (employees[employee] > salary) {
//       name = employee;
//       salary = employees[employee];
//     }
//   }
//   return name;
// }

// console.log(findBestEmployee(employers3));

// ============================================================================================
// ============================================================================================

// Задание 4

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее.

// const workers = {
//   mango: 100,
//   poly: 150,
//   alfred: 80,
//   kiwi: 200,
//   lux: 50,
//   chelsy: 150,
// };

// function countTotalSalary(employees) {

// Решение 1

// let allSalary = 0;
// for (let employee in employees) {

//   allSalary += employees[employee];
// }
// return allSalary;

// Решение 2

//   const salary = Object.values(employees);
//   let allSalary = 0;

//   for (let value of salary) {
//     allSalary += value;
//   }
//   return allSalary;
// }

// console.log(countTotalSalary(workers));

// ============================================================================================
// ============================================================================================

// Задание 5

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// function getAllPropValues(arr, prop) {
//   let property = [];

//   for (let array of arr) {
//       property.push(array[prop])

//   }
//   return property;
// }

// console.log(getAllPropValues(products, 'name'));

// ============================================================================================================
// ============================================================================================================

// Задача 6

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];

//   const calculateTotalPrice = function(allProducts, productName) {
//     let summery = 0
//     for(const product of allProducts){
//         if(product.name === productName){
//             summery = product.price * product.quantity
//         }
//     }
//     return summery
//   };

//   console.log(calculateTotalPrice(products, 'Захват'))

// ============================================================================================================
// ============================================================================================================

// Задача 7

// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// const transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [{ amount: 25, type: 'deposit', id: 777 }, { amount: 20, type: 'deposit', id: 779 }, { amount: 15, type: 'withdraw', id: 877 }],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     const transaction = { amount: amount, type: type, id: Date.now() };
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму транзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.createTransaction(amount, 'deposit');
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму транзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log('снятие такой суммы не возможно, недостаточно средств.');
//       return;
//     }
//     this.balance -= amount;
//     this.createTransaction(amount, 'withdraw');
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let summery = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         summery += transaction.amount;
//       }
//     }
//     return summery
//   },
// };

// // account.deposit(25);
// console.log(account.getTransactionTotal('withdraw'));

// ============================================================================================================
// ============================================================================================================

// Задача 8

// Корзина товаров.

// {name : 'lemon', price : 50}
// {name : 'apple', price : 60}
// {name : 'orange', price : 70}
// {name : 'banan', price : 40}

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quaontity += 1;
//         return;
//       }
//     }
//     product.quaontity = 1;
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];
//       if (productName === item.name) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const item of this.items) {
//       total += item.price * item.quaontity;
//     }
//     return total;
//   },
//   inreaseQuaontity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quaontity += 1;
//       }
//     }
//   },

//   decreaseQuaontity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.quaontity - 1 === 0) {
//           this.remove(productName);
//           return;
//         }
//         item.quaontity -= 1;
//       }
//     }
//   },
// };

// cart.add({ name: 'banan', price: 40 });

// cart.add({ name: 'orange', price: 70 });
// console.log(cart.getItems());
// cart.remove('banan');
// console.log(cart.getItems());
// cart.add({ name: 'apple', price: 60 });

// console.log(cart.getItems());
// console.log(cart.countTotalPrice());

// cart.inreaseQuaontity('banan')

// cart.decreaseQuaontity('banan')
// console.log(cart.getItems())
