"use strict";
//примитивные типы данных:

// Number
// console.log(1 / 0); // infinity - бесконечность
//NAN - Not-a-Number («не число»), но тип равно число

// оператор typeoff показыавает тип данных
// число: NaN, number, infinity

//СТрока
//string

// const myString = "строка";
// console.log(myString);
// let age = 28;
// const templateString = `ему ${age} лет`; //Шаблонная строка
// console.log(templateString);

//boolean
// const isAdmin = true;
// const user = false;

//null

// const newUser = null;

//undefined
/* const userName;
console.log(userName) */

//Непримитивные типы данных
//Object

// let homeName = "Petya";
// const user = {
//   name: homeName,
//   lastName: "Ivanov",
//   age: 23,
//   citizenship: "Russian",
//   newObject: {
//     newProperty: "это",
//   },
// };

// const abracadabra = user.name;

// console.log(user.newObject.newProperty);
// console.log(abracadabra);

//оператор typeof

// console.log(typeof homeName);

//tupeof null - Всегда обьект! это ошибка JS
// console.log(typeof null);

//преобразование типов данных
//строковое преобразование

/* const myVar = 123;

const costVarToString = String(myVar);  //приобразоввываем число в строку
console.log(typeof costVarToString); */

//числовое преобразование
// const myVar = '123';
// const myVarToNumber = Number(myVar);
// console.log(myVarToNumber);
// console.log(typeof myVarToNumber);

//Логическое преобразование
// ! -не  , !! - не, а потом снова Да
// const myVar = 1;
// console.log(!!myVar);

//метематичесаие операторы
//бинарный +

// const myNimber = 1;
// const newNumber = 2;
// const myString = "строка";

// // console.log(myNimber + newNumber);
// console.log(newNumber + myString); // Бинарный +

// сравнение строк - плохая практика
/* const string1 = "строка";
const string2 = "солнце";
console.log(string1 == string2); // false тк разные строки */

// всеглда сравниваем строгим сравнением !!!
/* const userTypes = {
  admin: "admin",
  user: "user",
  teatcher: "teatcher",
  contentManager: "contentManager",
};

const constServerData = "user";

if (constServerData === userTypes.admin) {
  console.log("показать весть контент");
} else {
  console.log("показать огранияяенный контент");
} */


