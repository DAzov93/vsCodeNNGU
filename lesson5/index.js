'use strict';

/* const goToThePlace = (place) => {
    console.log(`иду в ${place}! хэхей`);
}

const user = {
    name: 'Ivan',
    age: 18,
    goToUniversity: () => goToThePlace('универ'),
}

user.goToUniversity () */

/* const nameKey = 'nameererer';
const user = {
    [nameKey]: 'Ivan',
    age: 18,
}

console.log(user); */

/* const nameKey = 'nameererer';
const user = {
    name: 'Ivan',
    age: 18,
}
user.name = 'Pete';

delete user.age;


console.log(user.age); */

//проверить

/* const myFavoriteFilm = {
    name: 'Astral',
    startDate : 2011,
    producer: 'James Wan',
    contry: 'USA',
}

myFavoriteFilm.revenue = "28млн";


myFavoriteFilm.showName = () => console.log(myFavoriteFilm.name);

delete myFavoriteFilm.startDate;

myFavoriteFilm.showName()

console.log(myFavoriteFilm);
 */

/* const myNumber = 10.1234;

console.log(myNumber.toFixed(2));   //toFixed   - нужна чтобы сократить числа после точки
 */


/* const myNumber = 23e4;
console.log(myNumber);      // e - добавляем числа */

/* const myNumber = 2.3e4;
console.log(myNumber);      // e - добавляем числа */

//pareInt - для целых чисел
//parseFloat - для доробных ( с тоякой 12.5);

/* console.log(parseInt('123asd23')); // выводит число до букв 
console.log(parseFloat('123.45adf23')); */

// console.log(parseInt('123',8));

//const myNumber = 123;
/* if(typeof myNumber === 'number'){
    console.log('число');
} */

/* if (!isNaN(myNumber)){
    console.log('число');
} */

/* const myNumber = 123.3

console.log(Math.ceil(myNumber));
console.log(Math.floor(myNumber));
console.log(Math.random(myNumber)); */

/* const myArray = [1,23,55,63,2];
console.log(Math.max(...myArray)); */

/* let userName = '  Vasua  ';
console.log(userName.trim ());  */

/* const myString = 'Widget with id';
const idIndex = (myString.indexOf('id',2));
const newString = myString.slice(idIndex);

console.log(newString); */

//задачи из практики

//1
/* const myFunc = (min,max) => {
 const result = Math.random() * (ma-min) + min;
 return result.toFixed();
}

console.log(myFunc(1,20)); */


//2
/* const myStr = 'сТрока';

const isCharBig = (str, pos) =>{
    if (!str[pos]){
        return 'Ошибка';
    }
    if (str[pos] === str[pos].toUpperCase()){
        return 'заглавная';
    }else{
        return 'не заглавная'
    }
}

console.log(isCharBig(myStr,1)); */

//3

const myConst = 'awile aj wa ds word asokd word aks';

const replaceFunc = (str, findValue, replaceValue) => {
    return str.replaceAll(findValue, replaceValue);
}

console.log(replaceFunc(myConst, 'word', 'WORD'));
