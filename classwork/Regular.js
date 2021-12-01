//Первое задание + второе простым способом
const str = "Little Red Riding Hood’s mother says: 'Grandmother is ill in bed. Go to her house. Take her some bread and jam. But be careful! A wolf lives in the forest!' ";
let result = str.replace(/[\s']['\s]/g, '"');
console.log(result)


// //второе задание (попытка номер один)
// let regexp = /\B'/g;
// let regexp2 = /[!][']/g;
// result = str.replace(regexp, ' " ');
// result = str.replace(regexp2, '!"');
// console.log(result)