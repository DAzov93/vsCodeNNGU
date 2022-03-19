'use strict';

//Function Declaration - обьявлении функции   // работает везде , в любом участке кода
//Function Expression  - функциональное выражение   / инициализируется по ходу скрипта
// Arrow Function - строковая функция
// патерн - некий шаблон которому нужно следовать

// function showMessage() {
//     console.log('hello');
// }

// showMessage();

/* let user ;


function greetUser(name = 'гость') {   // пишем значение по умолчанию
    console.log(`привет ${name}`);
}

greetUser(user); */

/* const user = {
    name: 'Vasya',
    age: 18,
};


function checkAccess(age){               // функция должна только проверять а не выводить значение
    if (age < 18){
        showDeniedMsg();
    }else{
        showAllowedMsg();
    }

}

function showAllowedMsg() {              // сделали вывод отдельно
    console.log('доступ разрешен');
}

function showDeniedMsg() {
    console.log('доступ запрещен');
}

checkAccess(user.age); */

/* const showAllowedMsg =  function () {              // function expression   
    console.log('доступ запрещен');
} */

//деректива return

/* function calcValue(a,b) {
    return a + b;                               // после ретерн доступа больше не к чему нет
    
}

const result = calcValue(3,5);
console.log(result); */

/* const user = {
    name: 'Vasya',
} */

// function getName(user){
//     return user.name || 'гость'
// }



/* const greetMsg = 'Привет';

function getName(user){
    return user.name || 'гость';
}

function sayHi(text, name = getName()){
    console.log((`${text}, ${name}!`));
}

sayHi(greetMsg, getName(user)) */


//колбек - это функция внутри функции

/* const name1 = 'vasya';

function showMessage() {
    console.log(name1);
} */


//задачи из практики;
//1
/* let user;

function userName (user = 'гость'){
    console.log(`привет ${user}`);
}

userName(); */


//2
/* function calcPower (a,b){
    return a ** b
}


console.log(calcPower(3,3)); */

//3
/* let calcPower = function (a,b = 1){
    return a ** b;
}

console.log(calcPower(3,3)); */

/* const myArray = [5,10,15];

const calcAverageValue = function(arr) {
    if(!arr.length){   // или myArray.length === 0
        return 'пустой массив';
    }
    let sum = 0;

    for(let i = 0; i< arr.length; i++){
        sum += arr[i]
    }

    return sum / arr.length
};

console.log(calcAverageValue(myArray)); */

//стрелочные функции; arrow function


// const calcValue = (a, b) => a + b;

/* const calcValue = (a, b) => {
    return  a + b
} */


// console.log(calcValue(3,5));

/* function check(text,n) {
    for(let i = 0; i < n; i++){
       console.log(text);
    }
}

check('привет',5); */

//задача моя
let check = function (text, n){         //не забыть написать if проверку!!!
    if (typeof text !== 'string' || typeof n !== 'number'){
        console.log('неправильное выражение');
    }else{
    for(let i = 0; i < n; i++){
        console.log(text);
        }
    }   
}
check('Олееег', 12);

//1 задача Павла решение
/* const count = 5;
const message = 'сообщение'
const showMessage = (msg, count) => {
    for (let i = 1; i <= count; i++){
        console.log(msg);
    }
}

showMessage(message, count); */

//2 

/* const myChar = 'а';

const isMyCharVowel = (char) => {
    const vowels = 'ауоыэяюёие';

    if(vowels.includes(char)) {
        return 'гласная';
    }

return 'не гласная'
}

console.log(isMyCharVowel(myChar)); */

// задача 3 на дом