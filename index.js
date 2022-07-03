// const Manager = function(name, sales){
//     this.name = name
//     this.sales = sales
// }

// Manager.prototype.sell = function(){
//     this.sales +=1
// }

// const mango = new Manager('Mango', 5)

// console.dir(mango)

// mango.sell()

// console.log(mango)

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.description = "this is a Hero base class"

// Hero.showStats = function(hero){
//     console.log('logging stats: ', hero)
// }
// Hero.showStats('Mango')
// Hero.prototype.changeName = function (name) {
//   this.name = name;
// };

// const mango = new Hero('Mango', '1000');

// console.log(mango);

// class Hero{

//     static showStats(hero){
//         console.log('Show ', hero)
//     }
//     constructor(name, xp){
//         this._name = name
//         this.xp = xp
//     }

//     get name(){
//         this._name = newName
//     }

//     set name (newName){
//         this._name = newName
//     }

//     gainXp(amount){
//         this.xp += amount
//     }
// }

// class Warrior extends Hero{
//     constructor(_name, xp, weapon){
//         super(_name, xp)
//         this.weapon = weapon
//     }

//     attack(){
//         console.log(`${this._name} атакует используя ${this.weapon}`)
//     }
// }

// const mango = new Warrior ('Mango','1000','Allibarda')

// console.log(mango)

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// }

// class Animal{

//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice(){
//         console.log('Hey')
//     }
// }

// const animal = new Animal({
//         name: 'Animal',
//         age: 5,
//         hasTail: true,
// })

// console.log(animal)

// animal.voice()

// class Cat extends Animal{
//     static type = 'CAT'

//     constructor(options){
//         super(options)
//         this.color = options.color
//     }

//     get ageInfo(){
//         return this.age * 5
//     }

//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//         name: 'Cat',
//         age: 3,
//         hasTail: true,
//         color:'black',
// })

// cat.voice()

// console.log(cat)

// console.log(cat.ageInfo)

// cat.ageInfo = 5

// console.log(cat.ageInfo)

// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

// const Account = function(login, email){
//     this.login = login
//     this.email = email
// }

// Account.prototype.getInfo = function(){

//     console.log('Login:',this.login, 'Emeil: ', this.email)
// }

// // console.log(Account.prototype.getInfo); // function

// const mango = new Account('Mangozedog', 'mango@dog.woof');

// // const mango = new Account({
// //   login: 'Mangozedog',
// //   email: 'mango@dog.woof',
// // });

// console.log(mango)
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// ========================================================================================
// ========================================================================================

// Задание 2
// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// class User {
//   constructor(user) {
//     this.name = user.name;
//     this.age = user.age;
//     this.followers = user.followers;
//   }

//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
//     );
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// console.log(mango)

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// ========================================================================================
// ========================================================================================

// Задание 3
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент
// - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

// class Storage {
//     constructor(goods) {
//         this.items = goods;

//     }

//     getItems(){
//         return this.items
//     }

//     addItem(item){
//         this.items.push(item)
//     }

//     removeItem(item){
//       this.items = this.items.filter(good => good !== item)
//     }
// }

// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//   ]);

// //   console.log(storage)

//   const items = storage.getItems();
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

//   storage.addItem('Дроид');
//   console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

//   storage.removeItem('Пролонгер');
//   console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// ========================================================================================
// ========================================================================================

// Задача 4

// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало _value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// class StringBuilder{
//     constructor(str){
//         this._value = str
//     }

//     get value(){
//         return this._value
//     }

//     append(str){
//         this._value = this._value + str
//     }

//     prepend(str){
//         this._value = str + this._value
//     }
//     pad(str){
//         this._value = str + this._value + str
//     }

// }
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// ========================================================================================
// ========================================================================================

// Задание 5
// Напиши класс Car с указанными свойствами и методами.

class Car {
  static getSpecs(car) {
    console.log(car.maxSpeed, car.speed, car.isOn, car.distance, car.price);
  }

  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  constructor(car) {
    (this.maxSpeed = car.maxSpeed),
      (this.speed = 0),
      (this._price = car.price),
      (this.isOn = false),
      (this.distance = 0);
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    (this.isOn = false), (this.speed = 0);
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed += value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance = hours * this.speed + this.distance;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
console.log(mustang);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
