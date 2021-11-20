/* ToDo Стрелочные функции */
// function fu (x, y) {
//   return x + y;
// }

// var fu = (x, y) => {
//   return x + y;
// }

// есил один аргумент то можно без скобок
// var fu = x => {
//   this.x
//   return x;
// }
//
// function fu() {
//   console.log(this.x)
// }

// есил функци выполняет одну операцию то можно вернуть результат без 'return' без фигурных скобок
// var fu = x => x;
// var fu = (x, y) => x + y;
// var fu = (x, y) => (
//   x + y
// );

/* ToDo Дефолтные значения функции */
// function fu(x = 1, y = 2) {
//   console.log(x);
//   console.log(y);
// }
// fu();
// fu(10, 20);

/* ToDo шаблонные строки */
// var age = 30;
// var name = 'Kolya';
//
// var str = `Hello world! My name is ${name}, i'm ${30} `
// console.log(str);
// str = `hist height is ${ 10 + 20 } !`
// console.log(str);

/* ToDo Деструктуризация */
// 1) Деструктцризация объектов
// var obj = {
//   name: 'Nikolay',
//   age: 30,
//   height: 180,
//   weight: 70
// };
//
// var { name, age, ...other } = obj;
//
// console.log(name);
// console.log(age);
// console.log(other);
// console.log(obj);

// name = 'Vasiliy';
// console.log(obj);

// 2) Деструктцризация массивов
// var animals = ['dog', 'cat', 'lion', 'pig'];
// var [ firstAnimal, secondAnimal, ...otherAnimals ] = animals;
// console.log(firstAnimal);
// console.log(secondAnimal);
// console.log(otherAnimals);

/* ToDo var, let, const (их особенности) */
// /* 1) var */
// var x = 'x';
// console.log(x);

// function fu() {
//   var y = 10;
// }
// console.log(y);

// if (false) {
//   var z = 10;
// }
// console.log(z);
// var z = 20;

/* 3) const */
// const x = 10;
// x = 20;

// const obj = {
//   name: 'Kolya',
//   age: 30
// }
// obj.name = 'Vasya'

/* 2) let */
// if (false) {
  // let x = 10;
  // const y = 10;
// }
// console.log(x);
// console.log(y);


/* ToDo - Компиляция и поднятие */
/* 0) Компиляция */

/* 1) Поднятие */
// console.log(x);
// var x = 10;

/* 2) Поднятие let и const (врменная мёртвая зона) */
//
// {
//   let _nested = 'secret'
//   function nested () {
//     return _nested
//   }
// }
// console.log(_nested)
// console.log(nested())

/* 3) Объявление функции и функциональное выраженине */
// fu1();
// function fu1() {
//   console.log('fu1');
// }

// fu2();
// var fu2 = function() {
//   console.log('fu2');
// }

/* 4) Область видимости */
// function fu() {
//   debugger
//   function fu2() {
//     debugger
//     function fu3() {
//       var test = 'in last scope';
//       debugger
//     }
//     fu3();
//   }
//   fu2();
// }
// fu();


/* ToDo - Области видимости */
/* 1) Глобальная */
// var g = 'Глобальная';
// console.log(g);

/* 2) Функциональная */
// function fu() {
//   var f = 'Функциональная';
//   console.log(f);
// }

/* 3) Блочная */
// {
//   let b = 'Блочная';
//   console.log(b);
// }

/* 4) Блок try catch */
// try {
//   throw new Error('Блок try catch');
// } catch (err) {
//   console.log(err);
// }
// console.log(err);










