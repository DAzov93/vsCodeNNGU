

/* const myArray = [1,() => console.log('123'), 'string']; */

// console.log(Array.isArray(myArray));  // провемяем массив это или нет!!!!


/* const user = {
    id: 1,
    name : 'Vasya',
    data : [1,3,5,4,]
} */

/* const users = [
    {id:1, name: 'Vasya'},
    {id:2, name: 'Kate'},
    {id:3, name: 'Dima'},
    {id:4, name: 'Gera'},
    {id:5, name: 'Igor'},
] */

/* const newArray = new Array(5); */

// console.log(newArray);

//многомерные массивы 
/* let myArr = [
['один','два'], // индекс 0
['три','четыре'], // индекс 1
['пять','шесть','семь', ['семь', 'восемь']]
]

console.log(myArr[2][3]); */

// let myArray = ['один', "два", "три", "четыре", "пять"];

/* myArray.push('шесть','семь', "восемь"); // добавляе элемент в конец массива;
myArray.unshift('ноль'); // добавляет элемент в начало массива
myArray.shift() // удаляет первый элемент из начала массива с индексом 0;
myArray.pop()// удаляетс  элемент в конце массива
console.log(myArray); */

/* myArray.reverse().push('ноль');
myArray.reverse()                       // добавили и перевернули массив

console.log(myArray); */


// полезные методы массивов

//find

/* const myArr =[ "один", "два", "три", "четыре"];


// let foundItem = '';
// for(let i = 0; i< myArr.length;i++){
//     if (myArr[i] == 'два') foundItem += myArr[i];
// }
const foundItem =  myArr.find((elem) => elem === 'два');  // вернем тру или фолс

console.log(foundItem); */

/* const users = [
    {id:1, name: 'Vasya'},
    {id:2, name: 'Kate'},
    {id:3, name: 'Dima'},
    {id:4, name: 'Gera'},
    {id:5, name: 'Igor'},
];

let foundItem = users.find((user) => user.id == 1)

console.log(foundItem); */



//filter
/* const users = [
    {id:1, name: 'Vasya', isAdmin: false},
    {id:2, name: 'Kate', isAdmin: false},
    {id:3, name: 'Dima',isAdmin: false},
    {id:4, name: 'Gera',isAdmin: true},
    {id:5, name: 'Igor',isAdmin: false},
]; */

// const number = [1,2,3,4,5,6]

// const notAdminUsers = users.filter((user) => !user.isAdmin);

/* let notAdminUsers = [];
for(let i = 0; i< users.length;i++){
    if(!users[i].isAdmin) notAdminUsers.push(users[i]);
}

console.log(notAdminUsers); */

/* const evenNumbersArray = number.filter((numbers) => numbers % 2=== 0)
console.log(evenNumbersArray); */



//map

/* const users = [
    {id:1, name: 'Vasya', isAdmin: false},
    {id:2, name: 'Kate', isAdmin: false},
    {id:3, name: 'Dima',isAdmin: false},
    {id:4, name: 'Gera',isAdmin: true},
    {id:5, name: 'Igor',isAdmin: false},
];

// const modifiedUsesrs = users.map((user) => user.name);

const modifiedUsesrs = users.map((user) => {
    return {ID: user.id, userName: user.name}
});
console.log(modifiedUsesrs); */


//forEach

/* const users = [
    {id:1, name: 'Vasya', isAdmin: false},
    {id:2, name: 'Kate', isAdmin: false},
    {id:3, name: 'Dima',isAdmin: false},
    {id:4, name: 'Gera',isAdmin: true},
    {id:5, name: 'Igor',isAdmin: false},
]; */


//проверял filter
let myArray = [1,2,4,6,-2,-13];

let myFuncFilt = myArray.filter((elem) => elem > 0);
console.log(myFuncFilt);
