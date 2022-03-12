'use strict';

//повтрор по теме

/* console.log(null == undefined); // true ,  null == undefained  и не равны больше ничему при нестрогом сравнении

// console.log(nyll > 0); //false,  Ошибка - этого быть не может

console.log("0" === false); // false , тк это строгое значение и тут сравниваются типы
console.log('0' == false);// true, тут типы не сравниваются, поэтому "0" приводится к числу

console.log(undefined == false); // false, нет, тк undefined == null  и только
 */

// if_else

// const age = 20;

// if(age < 18) {
//     console.log('доступ запрещен');
// }else if (age >= 18) {
//     console.log('доступ разрешен');
// }  else {
//     alert('укажите свой возраст');
// }

/* let sectionA = 7;
let sectionB = 2025;
let sectionC = 2021;
let sectionD = 12; */

/* if (sectionA > sectionB && sectionA > sectionC && sectionA > sectionD ) {
    console.log(`выводим секшен ${sectionA}`);
} else if (sectionB > sectionA && sectionB > sectionC && sectionB > sectionD) {
    console.log(`выводим секшен ${sectionB}`);
}else if (sectionC > sectionA && sectionC > sectionB && sectionC > sectionD) {
    console.log(`выводим секшен ${sectionC}`);
}else if (sectionD > sectionA && sectionD > sectionB && sectionD > sectionC) {
    console.log(`выводим секшен ${sectionD}`);
} */

/* let section = (sectionA > sectionB && sectionA > sectionC && sectionA > sectionD)? (`выводим секшен ${sectionA}`) : (sectionB > sectionA && sectionB > sectionC && sectionB > sectionD)? 'да больше Б' : 'нет б не больше';

console.log(section); */

/* let temperature = -14;

if (temperature < -30) {
    console.log('оставайтесь дома');
}else if (temperature >= -30 && temperature <= -10) {
    console.log('сегодня холодно и даже очень');
}else if (temperature >= -10 &&  temperature <= +5) {
    console.log('не холодно для прогулки');
}else if (temperature >= +5 && temperature <= +15) {
    console.log('тепло и прекрасное время для прогулки');
}else if (temperature >= +15 && temperature <= +25) {
    console.log('ну тут уже месяц май');
}else if (temperature >= +25 && temperature <= +35){
    console.log('ну тут уже жаркий июль');
}else if (temperature >= +35){
    console.log('ПЕКЛООООО');
} */

/* let admin = {
    eye: 'зеленый',
    user: 'админ',
    homan: 'кот',
};

let userK = {
    eye: 'тоже зеленый',
    user: 'Катя',
    homan: 'человек',
}


let user = 'user';

switch (user) {
    case 'admin':
        console.log(`это наш ${admin.user}`);
        break;
    case 'user':
        console.log(`это наша ${userK.user}`);
    default:
        break;
}
 */


/* let user = 'user2';
let admin = 'это наш Админ';
let userK = 'это юзер Катя';
let userD = 'это юзер Дима';

switch (user) {
    case 'admin':
        console.log(admin);
        break;

    case 'user1':
        console.log(userK);
        break;

    case 'user2':
        console.log(userD);
        break;
    default:
        console.log('нет такого пользователя');
        break;
} */

/* console.log(null || 0 || '' || undefined); // undefined  // последнее ложное значение false
console.log('яблоко' && true && null && 1);// null  // ложное значение false
console.log(0 || true && "false" || null);// 'false' вернула первое истеннео строковое выпажение
console.log(0 && true || "false" && null); // null   // 
console.log(!0 && !!1);// true  1 
console.log(!(null || !'апельсин' && true)); // true */



/* let n = 0;

while (n <= 5) {
    console.log(n);
    n++;
} */

/* for(let n = 0; n <=5; n++){
    console.log(n);
} */



/* let carsAmount = 60; // кол во машин   N
const minCarsAmout = 10 ;// 10 машин минимальное M
let day = 0; */

/* for(let day = 1; carsAmount > minCarsAmout; day++){
    carsAmount /=2;
    if (minCarsAmout >= carsAmount){
        console.log(`на ${day} день`);
    }
}
 */

/* while (carsAmount >minCarsAmout) {
    carsAmount /= 2;                //  в случае с while начало итерации начинаем с 0
    day ++;
    if (minCarsAmout >= carsAmount) {
        console.log(day);
    }
} */


/* const startYear = 1800;
// let startYearDay = startYear;
const endYear = 2020;
const firstFlightToSpace = 1961;
let leapYear = 0; */
/* for (let startYearDay = startYear; startYearDay < endYear; startYearDay++){
    if (startYearDay === firstFlightToSpace){
        console.log(`первый полет в космос в ${startYearDay}`);
        console.log(`итераций ${startYearDay - startYear}`);
        break;
    }
} */

/* while (startYearDay < endYear) {
    startYearDay++;
    if (startYearDay == firstFlightToSpace){
        console.log(`первый полет в космос в ${startYearDay}`);
        console.log(`итераций ${startYearDay - startYear}`);
        break;
    }
} */

/* for(let startYearDay = startYear; startYearDay <= endYear; startYearDay++){
    if (startYearDay % 400 == 0 || (startYearDay % 4 == 0 && startYearDay % 100 != 0)){
        leapYear += 1;
    }
    if (startYearDay >= endYear) {
        console.log(`високосных лет ${leapYear}`);
        console.log(`итераций ${startYearDay - startYear}`);
    }
} */

/* if('0'){
    console.log('привет');  //выведется, тк это не пустая строка
} */

/* let nameJS = prompt('какой офф название у JS ?');

if (nameJS == 'ECMAScript') {
    alert('верно');
} else {
    alert('не знаете? ECMAScript');
} */

/* let a = +'0';

if (a > 0){
    console.log(1);
}else if (a < 0) {
    console.log(-1);
}else if (a === 0){
    console.log(0);
} */

/* let a = 0;

let result = (a > 0)? 'вывод 1' : (a < 0)? 'вывод -1' : 'вывод 0';

console.log(result); */


/* let a = 2;
let b = 5;

let result = (a + b < 4)? 'мало': 'много';
console.log(result); */

/* let login = '';

let message = (login == 'сотрудник')? 'привет' : (login == 'Директор')?  'Здраствуйте' : (login == '')? 'нет логина' : ' ';
console.log(message); */

/* console.log(null || 2 || undefined); // 2 true
console.log(1 && null && 2); // null
console.log(null || 2 && 3 || 4); // 3 true
 */

let age = 22;

/* let result = (age >= 14 && age <= 90)? 'верно' : 'не верно';
console.log(result); */

/* if (age >= 14 && age <= 90){
    console.log('верно');
}else {
    console.log('не верно');
} */

/* if (!(age >= 14 && age <= 90)){
    console.log('верно');
}else {
    console.log('не верно');
} */

/* if (age >= 90 || age <= 14){
    console.log('не в диапазоне');
}else{
    console.log('в диапазоне');
} */

/* if (-1 || 0){
    console.log('first'); // выполнится -1
}

if (-1 && 0) {
    console.log('second');  //не выволнится, найдет ложное значение 0
}

if(null || -1 && 1){     //выполнится 1
    console.log('third');
} */

//проверка логина

/* let userName = prompt('кто там ?');

if (userName == 'Admin'){
    let password = prompt('пароль ?');
    if (password == 'Я главный') {
        alert('Здраствуйте');
    }else if (password == '' || password == null) {
        alert ('Отменено');
    }else {
        alert('неверный пароль');
    }

}else if (userName == '' || userName == null){
    alert('Отменено');
}else{
    alert ('я Вас не знаю');
}
 */


/* let browser = 'Firefox';

// let resultBrowser = (browser == 'Edge')? 'отлично, у вас Эдж' : (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera')? `окей, у вас ${browser}` : 'ну я тогда не знаю что у вас за браузер';

// console.log(resultBrowser);

if (browser == 'Edge'){
    console.log('отлично, у вас Эдж');
}else if ( browser == 'Chrome' || browser == "Firefox" || browser == 'Safari' || browser == 'Opera'){
    console.log(`окей, у вас ${browser}`);
}else{
    console.log('нет такого браузера');
} */

/* let number1 = +prompt('введите число от 0 до 3');

switch (number1) {
    case 0:
        alert('вы ввели число 0');
        break;
    case 1:
        alert('вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('вы ввели число 2 или 3');
        break;
    default:
        alert('вы ввели другое число');
        break;
} */

/* let i = 3;

while (i){
    console.log(i--); // 3,2,1
} */

/* let i = 0;
while (++i < 5){
    console.log(i);     // 1,2,3,4
} */

/* let i = 0;
while (i++ < 5){     // 1,2,3,4,5
    console.log(i);
} */

/* for(let i = 0; i <5; i++){  // 0,1,2,3,4
    console.log(i);
} */

/* for(let i = 0; i < 5; ++i){  // 0,1,2,3,4
    console.log(i); 
} */

/* for(let n = 2; n <= 10; n++){
    if (n % 2 == 0){
        console.log(n);
    }
} */

/* let i = 0;

while (i < 3){
    console.log(i);  // 0,1,2
    i++;
} */
let result;
do {
    result = prompt('введите число больше 100');
} while (result <= 100 || result == '' || result == null );
