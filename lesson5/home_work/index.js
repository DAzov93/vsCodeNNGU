'use strict';

//1

/* let myStr = "привет я JS";

let stringToarray = (str) =>{
   str =  str.split(' ')
    return str;
}

console.log(stringToarray(myStr)); */

//2
/* let deleteCharacters = (str, length) => {
   return str = str.slice(0,length);
}

console.log(deleteCharacters('привет', 4)); */

//3
/* let insertDash = (str) => {
    str 
  return str =  str.toUpperCase().split('').join("-") // чейнинг написание через
}

console.log(insertDash('ПриВеТТ')); */

//4
//вариант перевода строки в массив
/* let str2 = 'привет';

let myFunc = (str) =>{
    let str1 = str.split('');
    str1[0] = str[0].toUpperCase();

    return str1.join('');
}

console.log(myFunc('андрей')); */

//вариант без перевода строки в массив
/* let str2 = 'привет';

let myFunc = (str) =>{
   return str = str[0].toUpperCase () + str.slice(1);
}

console.log(myFunc(str2)); */

//5
/* let myString= 'сегодня мы отправляемся с вокзала утром'
let myFunc = (str) => {
    let myArrayStr = str.split(' ');
    let newMyStrUp = '';
for(let i = 0; i < myArrayStr.length; i++){
    newMyStrUp += myArrayStr[i][0].replace(myArrayStr[i][0], myArrayStr[i][0].toUpperCase()) + myArrayStr[i].slice(1) + " ";
}
    return newMyStrUp

};
console.log(myFunc(myString)); */

//проверка replace
/* let age = ['двадцать восемь'];
let y = age[0][0].replace(age[0][0], "D") + age[0].slice(1)
console.log(y); */

//6


// можно еще решить остатком от деления, допустим нечетные маленькие, а четные большие, но это не правильно
/* let changeRegister = (str) => {
    let myStr = ''
    for (let i = 0; i < str.length; i++){
        if (str[i] == str[i].toUpperCase()){
            myStr += str[i].toLowerCase(); 
        }else myStr +=str[i].toUpperCase()
    }
    return myStr;
}

console.log(changeRegister('КаЖдЫй ОхОтНиК')); */

//7

//8
/* let zeros = (num,len) =>{
   let numStr = num.toString()
    for(let i = 0; numStr.length < len; i++ ){
        numStr += "0"

    }

    return Number(numStr);
}

console.log(zeros(22,13)); */

//9
/* let comparison = (str1, str2) => {
    let str1Func = str1.toLowerCase();
    let str2Func = str2.toLowerCase();

    if (str1Func === str2Func) {
        return 'равны';
    } else return 'не равны';
};

console.log(comparison('Катя', 'каТd'));
 */




//10

/* let insensitiveSearch = (str1,str2) => {
  let strLower1 = str1.toLowerCase();
    let strLower2 = str2.toLowerCase();
   strLower1 =  strLower1.indexOf(strLower2);
    return strLower1;
    
}

console.log(insensitiveSearch("Привет, это я",'то')); */


//11 
/* let myStr = 'привет это я';
let initCap = (str) =>{
   let myArrayStr = str.split(' ');
    let myNewStr = '';
    for(let i = 0; i < myArrayStr.length; i++){
        myNewStr += myArrayStr[i][0].replace(myArrayStr[i][0], myArrayStr[i][0].toUpperCase()) + myArrayStr[i].slice(1);
    }
    return myNewStr
}


console.log(initCap(myStr)); */


//12
let myStr = 'ПривиТТТ это ДимА';
let initSnake = (str) =>{
    let myNewStr = ''
    let myArrayStr = str.toLowerCase().split(' ');
    for(let i = 0; i < myArrayStr.length; i++){
        if (i< myArrayStr.length -1){
        myNewStr += myArrayStr[i] + "_";
    }else myNewStr += myArrayStr[i]
    }

    return myNewStr
}

console.log(initSnake(myStr));

//13

/* let repeatStr = (str, n) =>{
    return (str + "\n").repeat(n);
}

console.log(repeatStr('приветR', 7)); */

//14

//15
/* let myObj = {
    name: 'Дима',
    age: 28,
    country: 'Россия',
    endsWith1: function (str, str1) {
        return str.endsWith(str1);
    }
}

console.log(myObj.endsWith1('привет', 'т')); */

