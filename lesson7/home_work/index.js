
'use strict'
//1
//с использованием setInterval
/* let showTimer = function (startTimer,endTimer) {
    
    let timer = setInterval(() => {
        console.log(startTimer);
        if (startTimer == endTimer){
            clearInterval(timer);
            console.log(`таймер равен ${startTimer}, таймер завершил свою работу`);
        }
        startTimer --;
    },2000)
        
}
showTimer(6,2) */

//с использованием setTimeout
/* let showTimer = (startTimer,endTimer) => {
    let timer = setTimeout (c = ()=>{
        console.log(startTimer);
        timer = setTimeout(c,2000);
        if (startTimer == endTimer){
            clearTimeout(timer);
            console.log(`таймер равен ${startTimer}, таймер завершил свою работу`);
        }
        startTimer--;
    },2000);

}

showTimer(8,2) */




//2 что выведет функция
/* function f(){
    console.log(this);
}

let user = {
    g:f.bind(null)
};
user.g() */ //null, тк если стоит null - то this == null




//3 задача можем ли мы изменить this дополнительным связыванием
/* function f() {
    console.log(this.name);
}

f = f.bind({name: 'Вася'});
f() */



//4
/* function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;
   
let bound = sayHi.bind({
    name: "Вася"
});
   
bound(); */



//5 
//Вызов askPassword() в приведённом ниже коде должен проверить пароль 
//и затем вызвать user.loginOk/loginFail в зависимости от ответа.
//Однако, его вызов приводит к ошибке. Почему?
/* 
function askPassword (ok,fail) {
    let password = prompt('введите пароль');
    if (password == 'rocstar') {
        return ok();
    }else return fail();
};

let user = {
    name: 'Вася',
    
    loginOk: function () {
        alert(`${this.name} logged in`);
    },

    loginFail: function () {
        alert(`${this.name} failed `)
    },
};

//тут мы использовали bindAll  - используется для привязки сразу нескольких методов обьекта с помощью for in c 
//помощью переопреденения  функции
// for (let prop in user){
//     if (typeof user[prop] == 'function'){
//         user[prop] = user[prop].bind(user)
//     }
// };

//обычная привязка
// let okeyF = user.loginOk.bind(user);
// let failF = user.loginFail.bind(user);

//либо 
// user.loginOk = user.loginOk.bind(user);
// user.loginFail = user.loginFail.bind(user);

// askPassword(user.loginOk,user.loginFail) 
//но можно и так
//в этом случае это привязки будут значениями аргументов передаваемых в функцию
//ok = user.loginOk.bind(user)
//fail = user.loginFail.bind(user)
askPassword(user.loginOk.bind(user),user.loginFail.bind(user)) */



//6
function askPassword (ok,fail) {
    let password = prompt('введите пароль');
    if (password == 'rocstar') {
        return ok();
    }else return fail();
};

let user = {
    name: 'Вася',
    
    login: function(result) {
        alert(this.name + ' ' +  (result ? 'logged in' : 'failed'))
    },
};

// askPassword(() => user.login(true), () => user.login(false));
//можно написать и так 
askPassword(user.login.bind(user,true), user.login.bind(user,false))



//7 
//Напишите в указанном месте конструкцию с методом bind() так, 
//чтобы this внутри функции func всегда указывал на value.
// Eсть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem.

/* let elem = {
    value: 'Привет',
};

let func = function (surname, name){
    console.log(this.value + ' ' + surname + ' ' + name);
};

let user = {
    value:'Kate'
}

//сейчас навсегда привяжем контекст value к функции переопределение func
func = func.bind(elem);
func('Иванов','Иван'); */


//8
//Есть функция которая складывает три числа.Выполните каррирование.
//const sum = (a, b, c) => a + b + c

/* const sum = (a) => {
    return (b) =>{
        return (c) => {
            return a + b + c
        }
    }
}

console.log(sum(3)(5)(2)); */



