// console.log(this);

/* const myobj = {
    name: 'Vasya',
    call: function (){
        console.log(this);
        console.log(this.name);
        
    }
} */

//мой вариант
/* let city = {
    name: 'Boston',
    number: 235000,
    myFuncName: function (){
        return this.name;
    },
    myFuncNumber: function (){
        return this.number;
    },
    newFuncName: function (name){
        this.name = name;
    }
}

city.newFuncName('Denver');
console.log(city); */

//мой отредактированный с использованием защиты!!!!  ОБЯЗАТЕЛЬНО ПОСМОТРЕТЬ
/* let city = {
    name: 'Boston',
    number: 235000,
    myFuncName: function () {
        return this.name;
    },
    myFuncNumber: function () {
        return this.number;
    },
    newFuncName: function (key, newValue) {
        switch (key) {
            case 'name':
                this.name = newValue;
                return;
            default:
                return 'ключ не найдет';
        }
    },
};

city.newFuncName('name','Denver');
console.log(city); */

/* const myobj = {
    name: 'Vasya',
    callName: function (){
        console.log(this);
        console.log(this.name);
        
    }
}

const myNewObj = {
    name: 'Petya',
}

myobj.callName.call(myNewObj) */

/* const say = function (phrase,phrase2){
    console.log(`${this.name} : ${phrase}`);
    console.log(phrase2);
};

const myobj = {
    name: 'Vasya',
};

const myNewObj = {
    name: 'Petya',
};

say.call(myobj, 'привет', 'phrase');
let newFunc = say.bind(myobj, 'привет', 'phrase') */

const myCity = {
    name: 'Moscow',
    population: 10000000,
    showName: function () {
        console.log(this.name);
    },
    showPopulation: function () {
        console.log(this.population);
    },

    changeKeyValue: function (key, newValue) {
        switch (key) {
            case 'name':
                this.name = newValue;
                return;
            case 'population':
                this.population = newValue;
                return;
            default:
                console.log('Ключ не найден');
                return;
        }
    },
};

const newMyCity = {
    name: 'Colorado',
    population: 50000000,
}

// myCity.showName.call(newMyCity)
// myCity.showPopulation.call(newMyCity)
// myCity.changeKeyValue.call(newMyCity, 'name','NY')
// myCity.changeKeyValue.apply(newMyCity, ['population',5000])
// let newF =  myCity.changeKeyValue.bind(newMyCity, 'name','NY');
// newF();
// console.log(newMyCity);


//замыкание

/* const myFunc = () =>{
    const myVar = 5;
    return (param) => {
        console.log(myVar + param);
    }
}

myFunc()(10) */

//Каррирование

// const myFunc = (a) => {
//     return (b) => {
//         return (c) =>{
//             return a + b + c;
//         }
//     }
// }

// console.log(myFunc(2)(3)(10));



//проверка замыкания:
/* const myFunc = () =>{
    const height = 5;

    return (width,length) => {
        console.log(height * width * length);
    }
}

myFunc()(3,5) */

//проверка Каррирования
/* const myFunc = (a) => {
    return (b) => {
        return (c) =>{
            return a * b * c;
        }
    }
}

console.log(myFunc(2)(3)(10)); */


