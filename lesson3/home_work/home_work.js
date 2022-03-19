'use strict';

//работа с if else
//1

/* let a = 0;

if (a === 0) {
    console.log('верно');
} else {
    console.log('не верно');
} */


//2

/* let a = -3;

if (a > 0){
    console.log('верно');
}else{
    console.log('не верно');
} */


//3

/* let a = -3;

if (a < 0){
    console.log('верно');
}else{
    console.log('не верно');
} */


//4

/* let a = -3;

if (a >= 0){
    console.log('верно');
}else{
    console.log('не верно');
} */


//5

/* let a = -3;

if (a <= 0){
    console.log('верно');
}else{
    console.log('не верно');
} */


//6

/* let a = -3;

if (a != 0){
    console.log('верно');
}else{
    console.log('не верно');
} */


//7

/* let a = 'test';

if(a === 'test'){
    console.log('верно');
}else{
    console.log('не верно');
} */


//8

/* let a = '1';

if (a === '1'){
    console.log('верно');
}else{
    console.log('не верно');
} */



//работа с логическими переменными
//1

/* let test = true; */

/* if (test){
    console.log('верно');
}else{
    console.log('не верно');
} */

/* let resultTest = (test)? 'верно' : 'не верно';
console.log(resultTest); */


//2

/* let test = 0;

if (test != true){
    console.log('верно');
}else{
    console.log('не верно');
} */


//работа с && и ||
//1

// let a = 3;

/* let result = (a > 0 && a < 5)? 'верно' : "не верно";
console.log(result); */

/* if (a > 0 && a < 5){
    console.log('верно');
}else{
    console.log('не верно');
} */


//2

// let a = 5;
// let d;
/* let result = (a === 0 || a === 2)? a +=7 : a /= 10;
console.log(result); */

/* if (a === 0 || a === 2 ){
    d = a +=7; // d = a + 7
}else{
    d = a /= 10; // d = a / 10
}

console.log(d); */


//3

/* let a = 3;
let b = 5;

let result = (a <= 1 && b >= 3)? a+b : a-b;
console.log(result); */


//4
/* let a = 1;
let b = 8;

let result = (a > 2 && a < 11 || b >= 6 && b < 14)? 'верно' : ' не верно';
console.log(result); */


// на switch-case

/* let num = +'2';
let result = null;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
    default:
        break;
}
console.log(result); */


//общие задачи

//1
// let day = 31;

/* if (day >= 1 && day <= 10){
    console.log('первая декада');
}else if (day > 10 && day <= 20) {
    console.log('вторая декада');
}else if (day > 20 && day <= 31){
    console.log('третья декада');
} */

/* let result = (day >= 1 && day <= 10)? 'первая декада' : (day > 10 && day <= 20 )? 'вторая декада': (day > 20 && day <=31)? 'третьядекада' : 'не то число';
console.log(result); */

//2 

/* let mounth = 11;
if (mounth == 12 || mounth >=1 && mounth <= 2){
    console.log('зима');
}else if (mounth >=3 && mounth <= 5){
    console.log('весна');
}else if (mounth >=6 && mounth <= 8){
    console.log('лето');
}else if (mounth >=9 && mounth <= 11) {
    console.log('осень');
} */


//3
/* 
let strocks = 'abcde';
let result = (strocks[0] == 'a')? 'верно' : 'не верно';
console.log(result); */

//4

/* let strocks = '12345';
let result = (strocks[0] === '1' && strocks[1] === '2' && strocks[2] === '3')? 'да' : 'нет';
console.log(result); */

//5
/* let strocks = '123';
let result = +strocks[0] + +strocks[1] + +strocks[2];
console.log(result); */

//6 
/* let strocks = '123123';
let result = (+strocks[0] + +strocks[1] + +strocks[2] === +strocks[3] + +strocks[4] + +strocks[5])? 'да' : 'нет';
console.log(result); */

/* let strocks = '123123';
if (+strocks[0] + +strocks[1] + +strocks[2] === +strocks[3] + +strocks[4] + +strocks[5]){
    console.log('верно');
} else{
    console.log('не верно');
} */

//циклы

//1
/* let num = 1;
while (num <=100){
    console.log(num);
    num++;
} */

/* for(let num = 1; num <= 100; num++){
    console.log(num);
} */

//2
/* let num = 1;
while (num <=100){
    if (num >= 11 && num <= 33){
        console.log(num);
    }
    num++;
} */

/* let num = 11;
while (num <=33){
    console.log(num);
    num++;
} */

/* for(let num = 11; num <= 33; num++){
    console.log(num);
} */


//3
/* let num = 0;
while (num <= 100){
    if (num % 2 == 0){
        console.log(num);
    }
    num++
} */

/* for(let num = 0; num <= 100; num++){
    if (num % 2 == 0){
        console.log(num);
    }
} */

//4
/* let num = 1;
let sumNumber = 0;

while (num <= 100){
    sumNumber += num;
    if (num >= 100){
        console.log(sumNumber);
    }
    num++;
} */

/* let sumNumber = 0;

for(let num = 1; num <= 100; num++){
    sumNumber += num;
    if (num >= 100){
        console.log(sumNumber);
    }
} */



//обязательно изучить!!!!!
/* let myArray = [10, 20, 30, 50, 235, 3050];

for(let i = 0; i < myArray.length; i++){
    let firstArrayElement = myArray[i].toString();
    if (firstArrayElement[0] === '1' || firstArrayElement[0] === '2' || firstArrayElement[0] ==='5'){
        console.log(firstArrayElement);
    }
} */