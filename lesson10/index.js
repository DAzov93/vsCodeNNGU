
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

// console.log(userDima.animal.voice);
// console.log(newObj.animal.voice);


// https://httpstat.us/
// "https://jsonplaceholder.typicode.com/users";

//работа с API
//запрос на сервер XHR

let url = "https://jsonplaceholder.typicode.com/users"
let xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.send();





