"use strict";

//1
// console.log('Hello World');

//2
// let userName = 'Dmitry';
// let usegAge = 28;
// let bol = true;
// let myDog = null;
// let myCat;

//3 
// console.log(userName);
// console.log(usegAge);
// console.log(bol);
// console.log(myDog);
// console.log(myCat);

//4
// console.log(typeof(userName));
// console.log(typeof(userAge));
// console.log(typeof(bol));
// console.log(typeof(myDog));
// console.log(typeof(myCat));

//5
// const planet = 'Земля';
// console.log(planet);

//6
// const user = {
//     userName: 'Dmitry',
//     lastName: 'Azov',
//     userAge: '28',
// }
// delete user.lastName;

// // user = 'Dima';

// console.log(user);
// console.log(typeof(user));


//7
// let user = {
//     userName: 'Dmitry',
//     lastName: 'Azov',
//     userAge: '28',
// }
// delete user.lastName;

// user = 'Dima';

// console.log(user);
// console.log(typeof(user));


//
console.log('кот' > 'код'); // true т больше д
console.log('2' + 2 * '2'); // 24 string
console.log(undefined == null); // true, всегда равны друг другу и не равны никому больше
console.log(undefined != null);// false тк они равны
console.log(null == 0); // false ,  null равен только undefined и ничему больше
console.log(2 > '3'); //false строковое 3 приравнялось к числу
console.log(null - false + true); // 0 - - + 1 = 1
console.log(1 / 'i'); // NaN строковое 'i' не удалось привестись к числу поэтому NaN
console.log('2' * '3');//6 number строки преобразовались в числа при умножении
console.log(4 + 5 + 'o');// 9o string , сначала сложение потом бинарный + со строкой
console.log('i' + 4 + 5); // i45 string 
console.log('4' - 2); // 2 number , строковое значение привелось к цифровому
console.log('4' - '4px');// NaN строковое не сможет привестить к числовому
console.log('23' == 23);// true
console.log(null == false); // false null раавен только underfined
console.log('-4' / 0 + 1);// -infinity 4 /0 сразу даст инфинити
console.log(null + 1);// 1 получается   0 +1 при численном выражении
console.log(undefined + null);// NaN , тк при числовом выражении undefined становится NaN а null 0
console.log(1 === '1');// false - разные типы
console.log('2' > 10);//false приводится к числам
console.log(NaN == undefined);//false undefined == только null








/* console.log(5 > 4); //true
console.log("ананас" > "яблоко"); //false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); //2 все к числу переводится
console.log("2" * "3"); //6 если есть возсожность, товсе приведется к числу
console.log(4 + 5 + 'px'); // 9px сначала работает бинарный + потом унарный видит строку и складывает
console.log('$' + 4 + 5); // $45 унарный + все сложит
console.log("4" - 2); //2 приведет к number
console.log('4px' - 2); // NaN не получится привести к number, поэтому будет NaN
console.log(7/0); // infinity бесконечность
console.log('-9' + 5); // -95 унарный + 
console.log("-9" - 5); // -14 приведет к числу и будет -9 -5 = -14
console.log(null + 1); //1  в числовом преобразовании null становится 0 
console.log(undefined + 1); // NaN , в числовом преобразовании undefined становится NaN
 */

// let a = null
// console.log(a);
// console.log(NaN == undefined);

