'use strict';

//1

/* function getSquareNum (num) {
    return num ** 2;
}

console.log(getSquareNum(3)); */

//2

/* function getSum (x,n) {
    return (x + n);
}

let sum = getSum(3,9)

console.log(sum); */

//3

/* function getExpression (a,b,c){
    let exp = (a - b) / c;
    return exp;
}

console.log(getExpression(10,2,4)); */

/* let getExpression = (a, b, c) => {
   return (a - b) / c;
};

console.log(getExpression(12,2,2)); */

//4
/* function getDayOfWeek(n) {
    if (n === 1) {
        return 'понедельник';
    } else if (n === 2) {
        return 'вторник';
    } else if (n === 3) {
        return 'среда';
    }else if (n === 4){
        return 'четверг';
    }else if (n === 5){
        return 'пятница';
    }else if (n === 6){
        return 'суббота';
    }else if (n === 7){
        return 'воскресенье';
    }else{
        return 'число больше 7';
    }
}

let n = 2;

if (n !==0 || n <= 7){
    console.log(getDayOfWeek (n));
}else{
    console.log('число больше 7');
} */

/* function getDayOfWeek(n) {
    switch (+n) {
        case 1:
            return 'понедельник';

        case 2:
            return 'вторник';

        case 3:
            return 'среда';

        case 4:
            return 'четверг';
        case 5:
            return 'пятница';
        case 6:
            return 'суббота';
        case 7:
            return 'воскресенье';

        default:
            return 'не то число';
    }
}
 let n = '3'
console.log(getDayOfWeek(n)); */

/* let getDayOfWeek = (n) => {
 return (n === 1)? 'понедельник' : (n === 2)? 'вторник' : (n === 3)? 'среда' : (n === 4)? 'четверг' : (n === 5)? 'пятница': (n === 6)? 'суббота' : (n === 7)? 'воскресенье': 'не то число';
}

console.log(getDayOfWeek(6)); */

//5

/* function checkNumbersEqual(x,n) {
    if (x === n){
        return true;
    }else {
        return false;
    }
}
let numbersEqual = checkNumbersEqual (5,5);

if (numbersEqual){
    console.log('равны');
}else{
    console.log('не равны');
} */

//6

/* function checkSum (x,n){
    let sum = x + n;
    if (sum > 10){
        return true;
    }else{
        return false;
    }
}

let getSum = checkSum(5,2);

if (getSum){
    console.log('больше 10');
}else {
    console.log('меньше 10');
} */

//7

/* function getNum (n){
    if (Math.sign(n) === -1){
        return true;
    }else{
        return false;
    }
}

let num = getNum(-9);

console.log(num); */

//8

/* function isNumberInRange(n) {
    if (n > 0 && n < 10) {
        return true;
    }else{
        return false;
    }
}

console.log(isNumberInRange(12)); */

// 9

/* function isNumberInRange(n) {
    if (n > 0 && n < 10) {
        return true;
    } else {
        return false;
    }
}

let myArray = [3, 5, 11, 3, -8, 0, 13, 4, 6, 2];
let newMyArray = [];
for (let i = 0; i < myArray.length; i++) {
    let y = myArray[i];
    if (isNumberInRange(y)) {
        newMyArray.push(y);
    }
}

console.log(newMyArray); */

//проверочка как добавлять элементы по циклу в массив
/* let a = 1;
let b = 12;
let myArray = [];
myArray.push(a);
myArray.push(b);


console.log(myArray[1]); */

//10

/* function getDigitsSum(n) {
    let y = n.toString();
    let getSum = 0;
    for (let i = 0; i < y.length; i++) {
        getSum += +y[i];
    }
    return getSum;
}

console.log(getDigitsSum(2121)); */

//11

/* function getDigitsSum(n) {
    let y = n.toString();
    let getSum = 0;
    for (let i = 0; i < y.length; i++) {
        getSum += +y[i];
    }
    return getSum;
}

for (let i = 1; i <= 2020; i++){
    if (getDigitsSum(i) === 13){
        console.log(i);
    }
} */

//12

/* function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
 */


//13

/* function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


let myArray = [3,46,12,5,6,8,1,7,9];
let newMyArray = [];
for(let i = 0; i< myArray.length; i++){
    let y = myArray[i];
    if (isEven(y)) {
        newMyArray.push(y);
    }
}

console.log(newMyArray); */


//14

let newMyArray = []
function getDivisors (n){
    for(let i  = 1; i < n; i++){
        if (n % i == 0){
            newMyArray.push(i);
        }
    }
    return newMyArray;
}
getDivisors(8);
console.log(newMyArray);

//дорешать ОБЯЗАТЕЛЬНО 15 И 16 и еще в презентации последнюю   


/* //15

let myCalcSumFunction = (n) => {
    let y = n.toString();
    let calcSumStr = null;
    for (let i = 0; i < y.length; i++) {
        calcSumStr += +y[i];
    }

    if (calcSumStr > 9) {
        return myCalcSumFunction(calcSumStr);
    } else return calcSumStr;
}; */

/* let n = 99;
let getSumNum = (n) => {
    let y = n.toString ();
    let sumNum = null;
    for (let i = 0; i < y.length; i++){
        sumNum += + y[i];
    }

    if (sumNum > 9){
      return  getSumNum (sumNum);
    }else return sumNum;
}

console.log(getSumNum(9)); */

//16 с помощью цикла решение
//let userName = 'анна';

/* let myCheckFunction = (str) => {
    let getStrRev = '';
    for (let i = str.length; i >= 0; i--) {
        if (str[i] !== undefined) {
            getStrRev += str[i];
        }
    }
    if (getStrRev == str){
        return true;
    }else return false;
};


console.log(myCheckFunction(userName)); */

//16 с помощью метода
/* let userName = 'sos';

let getStrRev = (str) => {
    let strFunc = str.toLowerCase ();
    let y = strFunc.split('').reverse().join('');
    if (strFunc == y){
        return true
    }else return false;
}

console.log(getStrRev(userName)); */