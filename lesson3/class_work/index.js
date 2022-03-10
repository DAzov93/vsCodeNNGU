"use strict";

// const myVar1 = 5;
// const myVar2 = 10;

// // if (myVar1 > myVar2) {
// //   console.log(`Верно ${myVar1} больше ${myVar2}`);
// // } else if (myVar1 < myVar2) {
// //   console.log(`${myVar1} меньше ${myVar2}`);
// // } else {
// //   console.log("end");
// // }

// if (myVar1 > myVar2) {
//     console.log(`Верно ${myVar1} больше ${myVar2}`);
//   } else {
//     console.log("end");
//   }

// let resalt = (myVar1 > myVar2)? console.log(true) : console.log(false); // Тернарный оператор
// // часто используется (когда ттолько есть одно определение тру или фолз)



//switch case -   подходит для больших деревьев (обязательно break ставить) ОБЯЗАТЕЛЬНО НУЖНА!

// const userRole = "adfgfdh";

// switch (userRole) {
//   case "student":
//     console.log("текущий пользователь - Студент");
//     break;
//   case "admin":
//     console.log("текущий пользователь админ");
//     break;
//   case "normal_user":
//     console.log("Текущий пользователь user");
//     break;
//     default:
//         console.log('нет такого пользователя');
//         break;
// }


//логические операторы
// && - и  (в выражении оба аргумента должны быть true )
// || - или
// !=   - не

// console.log(1 || 0 || 4); // 1 ищет истинное значение
// console.log(1 && 0); // 0  ищет ложное значени


// //  что делает JS пошагово :
// if (1 && 0) {    // в if будет false
//     console.log(resalt); 

// }


//логическое НЕ !=   (не часто используется)
//1. приводит значение после ! к булевому типу
//2. ! меняет полученный тип на противоположный

// const myVar = 5;

// if (!myVar){
//     console.log('TRUE');
// }

// console.log(null || 0 || "" || undefined); // ниодного тру не было

// console.log('яблоко' && true && null && 1);// null - первое ложное

// console.log(0 || true && 'false' || null);

// console.log((0 && true) || ('123' && null)); 

// console.log(!0 && !!1); //  1 
// console.log(!(null || (!'апельсин' && true)));

//1
// const intervalOne = 5;
// const intervalTwo = 8;
// const intervalThree = 18;

// if (intervalOne > intervalTwo && intervalOne >intervalThree){
//     console.log(`самый большой отрезок ${intervalOne}`);
// }else if (intervalTwo > intervalOne && intervalTwo > intervalThree){
//     console.log(`самый большой отрезок ${intervalTwo}`);
// }else if (intervalThree > intervalOne && intervalThree > intervalTwo){
//     console.log(`самый большой отрезок ${intervalThree}`);
// }





//2 свич не использовать
// const currentTpm = -20;

// if (currentTpm < -30) {
//     console.log('оставайтесь дома');
// }else if(currentTpm <= -10 && currentTpm >= -30) {
//     console.log('сегодня холодно');
// }else if (currentTpm > -10 && currentTpm < +5){
//     console.log('не холодно');
// }else if (currentTpm > +5 && currentTpm <= +15)  {
//     console.log('тепло');
// }else if (currentTpm > +15 || currentTpm < +25) {
//     console.log('очень тепло');
// }


//циклы   // распространенный цикл for!!!1
// let myVar = 0;
// while (myVar >= 0 && myVar <= 10) {
//     console.log(myVar += 1); // myVar =  myVar + 1
// }

// do{
//     console.log(myVar +=1);
// }while (false)

// const myVar = 10;

// for(let i = 0; i <= myVar; i++ ){
//     console.log(i);
// }

//можно сделать вот такое прерывание

// const myVar = 10;

// for(let i = 0; i <= myVar; i++ ){
//     console.log(i);
//     if (i === 5){
//         break;
//     }
// }




//1задачу решить через while dp0while , for

// let age = 'двадцать восемь';
// let limit = 5;
// let myNumber = 1;
// // while (myNumber <= limit) {
// //     console.log(age);
// //     myNumber++;
// // }

// // do {
// //     console.log(age);
// //     myNumber++;
// // }while (myNumber <= limit);


// for (let myNumber1 = 1; myNumber1 <= limit; myNumber1++){
//     console.log(age);
// }






// // //задача 2 
let carsAmount = 60; // кол во машин   N
const minCarsAmout = 10 // 10 машин минимальное M

for (let day = 1; carsAmount > minCarsAmout; day++ ){
    carsAmount /= 2;

    if (carsAmount < minCarsAmout){
        console.log(`На ${day} день`);
        break;
    }
}





// //задача 3
// //год номер которогоро кратен 400 - високосный 234234%400 = 0
// //остальные годы, номер которых кратен  100 -  не високосные
// // остальные годы, номер которых кратен 4 - високосные

const startYear = 1800;
const endYear = 2020;

let leapYearsAmount = 0;
// const firsrSpaceTripYear = 1961;

// for(let counter = startYear; counter <= endYear; counter++) {
//     if (counter === firsrSpaceTripYear) {
//         console.log(`первый полет в космос в ${firsrSpaceTripYear}`);
//         console.log(`итераций ${counter - startYear}`);
//         break;
//     }
// }

for(let year = startYear; year <= endYear; year++){
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ){
        console.log(year);
        leapYearsAmount += 1;
    }
    if (endYear === year) {
        console.log(`кол во високосных лет ${leapYearsAmount}`);
    console.log(`итераций ${year - startYear}`);
    }
}
