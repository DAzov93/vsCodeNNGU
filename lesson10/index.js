
// let user = {
//     name: 'Vasya',
//     surname: 'Ivanov',
//     age: 26,
// };

// let userStr = '{"name":"Vasya","surname":"Ivanov","age":26}';
// let myStr = 'dgsdgsdf'

// //JSON.stringify;  // преобразует данные в текст для отправки на сервер
// // console.log(JSON.stringify(user));
// // console.log(typeof JSON.stringify(user));

// //JSON.parse   // преобразует из текста в данные при получении с сервера
// // console.log(JSON.parse(userStr));

// try {
//     let newParst = (JSON.parse(myStr));
//     console.log(newParst);
// }catch(err) {
//     console.log(err);
// }




// //проверка копирования обьекта через JSON.stringify и JSON.parse
// let userDima = {
//     name: 'Dima',
//     surname: "Azov",
//     age: 28,
//     love: 'Kate',
//     animal:{
//         cat: 'shotland',
//         name: 'Sipa',
//         voice: 'мяо-мяо',
//     },
// };



// let newCopyStr = JSON.stringify(userDima);
// let newObj = JSON.parse(newCopyStr);

// userDima.animal.voice = 'гав-гав';

//можно было записать так:  let newObj = JSON.parse(JSON.stringify(userDima));

// console.log(userDima.animal.voice);
// console.log(newObj.animal.voice);


// https://httpstat.us/
// "https://jsonplaceholder.typicode.com/users";

//работа с API
//запрос на сервер XHR

// let url = "https://jsonplaceholder.typicode.com/users"
// let xhr = new XMLHttpRequest();

// xhr.open('GET', url);

// xhr.send();



// xhr.onload = () => console.log(JSON.parse(xhr.response));

// xhr.error = () => {
//     console.log('ошибка');
// };




// //=================================================
// //fetch
// let url = "https://jsonplaceholder.typicode.com/users";

// const sendRequest = function (url) {
//    fetch(url).then((response) => response.json()).then((res) => console.log(res))
// };

// sendRequest(url)




//Map 

// const myObj = {
//     name: 'Vasya',
//     surname: 'Ivanov',
// };

// const myObjToArray = [['name','Vasya'],['surname','Ivanov']];

// // console.log(Object.entries(myObj));
// // console.log(Object.fromEntries(myObjToArray));


// const mapUser = new Map (Object.entries(myObj));
// mapUser.set('newKey','newValue');
// console.log(mapUser);



// let newMap = new Map([['name','Vasya'],['surname','Ivanov']]);
// console.log(newMap.entries());



//Set

// const myArr = [1,2,3,4,5,6,5,5,6,10,11,11,14,14,12];
// const resultToSetMayArr = new Set (myArr);
// let myNewArr = [];
// for (let props of resultToSetMayArr){
//     myNewArr.push(props);
// };

// console.log(myNewArr);



//Уроки от Владлена Минина:  
