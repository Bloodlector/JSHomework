/* ToDo создание объектов */
// Литеральный синтаксис
// const fish = {
//   name: 'Nemo',
//   age: 15
// }

// Синтаксис на основе конструкторов
// const dog = new Object({
//   name: 'Sharik',
//   age: 10
// });

/* ToDo Совйства объектов */
// типы свойста
// const car = {
//   name: 'bmw',
//   maxSpeed: 260,
//   isElectricity: true,
//   move: function () {
//     console.log('car is moving!');
//   },
//   test() {
//     console.log(this.name);
//   },
//   leftDor: {
//     color: 'red',
//     open: true
//   },
//   rightDor: {
//     color: 'red',
//     open: false
//   },
//   tirePressure: [2, 2.1, 2, 1.9],
//   reinSensor: null
// };
// console.log(car);

// обращение к свойствам
// console.log(car.name);
// console.log(car.leftDor.color)
// console.log(car['name']);
// console.log(car[getName()])
// car.move();
// car.reinSensor = {
//   name: 'samsung'
// }
// function getName() {
//   return 'na' + 'me';
// }

/* ToDo Ссылочные типы  и их копирование */
// const obj = {
//   name: 'Kolya'
// }
// const obj2 = obj;
// obj2.name = 'Sasha';
// function fu(obj) {
//   obj.age = 20;
// }
// fu(obj);
//
// fu.prefix = 'myFu';

/* ToDo конструкторы объектов */
// Конструкторы
// function Car(name, color) {
//   this.name = name;
//   this.speed = color;
//   this.saySpeed = function () {
//     console.log(this.speed);
//   }
// }
// const lada = new Car('Lada', 'Eggplant');
// lada.saySpeed();

/* ToDo Прототипное наследование */
// function Car() {
//   this.wheelCount = 4;
//   this.engine = true;
// }
// function Hatchback() {
//   this.doorCount = 5;
// }
// Hatchback.prototype = new Car;
//
// const honda = new Hatchback();
// console.log(honda.engine);
//
// function OpelAstra(color) {
//   this.name = 'Opel';
//   this.color = color;
//   this.sayDoorCount = function () {
//     console.log(this.doorCount);
//   }
//   this.sayColor = function () {
//     console.log(this.color);
//   }
// }
// OpelAstra.prototype = new Hatchback();
// opelAstra = new OpelAstra('red');
// opelAstra.sayDoorCount();
// opelAstra.sayColor();

/* ToDo Синтаксис классов */
// class Animal {
//   constructor(type) {
//     this.type = type;
//     this.isAlive = false;
//   }
//
//   name = null;
//   toBorn = function () {
//     this.isAlive = true;
//   }
//   setName(name) {
//     this.name = name;
//   }
// }
// const dog = new Animal('dog');
// console.log(dog);
//
// class Cat extends Animal {
//   constructor() {
//     super('Cat');
//   }
//   sayMiau = function () {
//     console.log('miau!')
//   }
// }
//
// const murzik = new Cat();
// console.log(murzik)