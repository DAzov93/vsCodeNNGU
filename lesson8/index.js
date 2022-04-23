
        //прототип и __proto__
// const user = {
//     name: 'Vasua',
//     age: 23
// };

// console.log(user);

// const str = new String ('строка');
// console.log(str);


/* const user = new Object ( {
        name: 'Vasua',
        age: 23
    });

    // console.log(user);

const admin = {
    __proto__: user, 
};

console.log(admin) */



//добавляем новый метод в прототип
/* const user = new Object( {
        name: 'Vasua',
        age: 23,
    });
const user2 = {
    name: 'Petya',
    age:29,  
};

Object.prototype.sayHi = function(){
    console.log(`Hello ${this.name}`);
};
console.log(user);
console.log(user2);

user.sayHi();
user2.sayHi(); */


// создаем обьект animal - это общий обьект;
//__proto__  - это как вложенный обьект, те в обьекте вложенный обьект
/* const animal = {
    jumps: 'Прыжок!'
};

const rabbit = {
    __proto__:animal,
    jumps: 'заяц прыгнул'
};

console.log(rabbit.jumps);
delete rabbit.jumps;
console.log(rabbit.jumps); */


//чуть чуть практики по прототипам
// Object.prototype.sayHi = function (){
//     console.log(`Hello, I  am robot ${this.model}`)
// };


// const robot = {
//      model: 'R2D2',
//      created: 2018,
//      move: function () {
//          console.log(`${this.model} just moved`);
//      },
// };

// const terminator = {
//     model: "T800",
//     sayHi: function (){
//         console.log('I will be back');
//     }
// };

// Object.setPrototypeOf(terminator,robot);


// console.log(robot);
// console.log(terminator);

// robot.sayHi();
// terminator.sayHi();
// terminator.move()





//повторял сам то что изучил!!!!!            
/* let myFuncGetObj = function (name,age) {
    return {
        name:name,
        age:age,
        love:'Dima'
    }
}

const myObjUserKate = myFuncGetObj('Kate',23);
console.log(myObjUserKate); */

/* let MyFuncGetObj = function (name,age){
    this.name = name;
    this.age = age;
    this.myFunc = function () {
        console.log(this.name + ' ' + this.age);
    }
}

let userKate = new MyFuncGetObj ('Катя', 23);
console.log(userKate);
userKate.myFunc()
 */




///////
//у обьекта из функции конструктора сразу же создается прототип!
// function CreateUser (name,age) {
//     this.name = name;
//     this.age = age;
// }

// CreateUser.prototype.showName = function () {
//     console.log(this.name);
// };

// CreateUser.prototype.showAge = function () {
//     console.log(this.age);
// };

// CreateUser.prototype.createEacy = function () {    // добавили метод к прототипу CreateUser на добавлелие цвета глаз
//     this.eacy = 'голубой';
// }

// const userVasya = new CreateUser ('Вася', 32);
// const userPetya = new CreateUser ('Петя', 19);
// userPetya.createEacy()

// console.log(userVasya); 
// console.log(userPetya); 

// userVasya.showName();
// userPetya.showAge()





// //практика по функциям конструкторам
// let CreateCard = function (from,to,show) {
//     this.from = from;
//     this.to = to;
//     this.show = show;
// };

// let showFuncCard = function () {
//     return `от: ${this.from} кому: ${this.to}`;
// }

// CreateCard.prototype.recordFromCard = function (from) {
//     this.from = from;
// };

// let card = new CreateCard('Татьяны', 'Дмитрию', showFuncCard);

// // card.show();
// // card.recordFromCard('Екатерины');
// // card.show()

// console.log(card.show());
// card.recordFromCard('Екатерины');
// console.log(card.show());



//практика по функциям конструкторам
//моэно сделать и так , тоже самое только в функцие конструкторе сразу же встроен метод
// let CreateCard = function (from,to) {
//     this.from = from;
//     this.to = to;
//     this.show = function () {
//         return `от: ${this.from} кому: ${this.to}`;
//     };
// };


// CreateCard.prototype.recordFromCard = function (from) {
//     this.from = from;
// };

// let card = new CreateCard('Татьяны', 'Дмитрию');

// card.show();
// card.recordFromCard('Екатерины');
// card.show()

// console.log(card.show());
// card.recordFromCard('Екатерины');
// console.log(card.show());



        //классы  

// let CreateCard = function (from,to) {   // просто сверяли на схожесть с функкцией конструктором
//     this.from = from;
//     this.to = to;
// };   

// class Animal {
//     constructor(props) {
//         this.name = props.name;
//         this.age = props.age;
//         this.hasTail = props.hasTail;
//     };

//     voice() {
//         console.log('i am animal');
//     };

//     createName (name) {
//         this.name = name;
//     };

//     showName() {
//         console.log(this.name);
//     }
// };

// const myAnimal = new Animal({name: 'Animal', age: 5, hasTail: true}); // myAnimal - инстанс класса Animal

// // console.log(myAnimal);
// // myAnimal.voice()


// class Cat extends Animal {
//     constructor (props){
//         super(props);
//         this.color = props.color
//     }
// };

// const myCat = new Cat({name: 'cat', age: 10, hasTail: true,color: 'blie'});
// // console.log(myCat);

// class BritanCat extends Cat {
//     constructor (props){
//         super(props);
//          this.bread = 'британская';
//     }
// };

// const myCatBritan = new BritanCat ({name: 'Британский кот', age: 1, hasTail: true, color: 'ny22'});
// console.log(myCatBritan);




// геттер и сеттер
// class Animal {
//     #name = '';
//     constructor(props) {
//         this.#name = props.name;
//         this.age = props.age;
//         this.hasTail = props.hasTail;
//     };

//     voice() {
//         console.log('i am animal');
//     };

//     get getCateName () {
//         console.log(this.#name)
//     };

//     set setName (newName){
//         this.#name = newName;
//     }

// };

// const myAnimal = new Animal({name: 'Animal', age: 5, hasTail: true}); // myAnimal - инстанс класса Animal

 
// class Cat extends Animal {
//     constructor (props){
//         super(props);
//         this.color = props.color
//     }

//     voice() {
//         console.log('i am cat');
//     }

    

// };

// const myCat = new Cat({name: 'cat', age: 10, hasTail: true,color: 'blie'});

// myCat.setName = 'Catty';
// myCat.getCateName;
// console.log(myCat);





//практика по классам

// class People {
//     constructor (props) {
//         this.name = props.name;
//         this.surname = props.surname;
//     }

//     getFullName () {
//         return `полное имя человека : ${this.name} ${this.surname}`;
//     }


// }

// class Worker extends People {
//     constructor (props) {
//         super(props);
//         this.rate = props.rate;
//         this.day = props.day;
//     }

//     getSalary () {
//         return this.rate * this.day;
//     }
// }

// let userDimajob = new Worker({name:'Dima', surname: 'Azov', rate: 1500, day: 24});
// // console.log(userDimajob.getFullName())
// // console.log(userDimajob.getSalary());

// let userKateNailJob = new Worker ({name: 'Kate', surname: 'Azova', rate: 6000, day:18});
// console.log(userKateNailJob.getFullName());
// console.log(userKateNailJob.getSalary());


// мой второй вариант этой задачи из практики чтобы усвоить геттер и сеттер
/* class People {
    #name = "";
    constructor (props) {
        this.#name = props.name;
        this.surname = props.surname;
    }

    getFullName () {
        return `полное имя человека : ${this.getNameShow} ${this.surname}`;
    }

    getName = function(){
        console.log(`его фамилия ${this.surname}`);
    }
    get getNameShow () {
        return this.#name;
    };
    set createName (newName) {
        this.#name = newName
    }
}

class Worker extends People {
    constructor (props) {
        super(props);
        this.rate = props.rate;
        this.day = props.day;
    }

    getSalary () {
        return this.rate * this.day;
    }
}

let userDimajob = new Worker({name:'Dima', surname: 'Azov', rate: 1500, day: 24});
// console.log(userDimajob.getFullName())
// console.log(userDimajob.getSalary());
userDimajob.createName = 'Dmitry';
console.log(userDimajob.getFullName());


let userKateNailJob = new Worker ({name: 'Kate', surname: 'Azova', rate: 6000, day:18});
// console.log(userKateNailJob.getFullName());
// console.log(userKateNailJob.getSalary());  */




//пример работы с DOM-деревом


class Component {
    constructor (selector){
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none';
    }

    show(){
        this.$el.style.display = 'block';
    }

}

class Box extends Component {
    constructor (options) {
        super(options.selector);
        this.$el.style.width =  this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;

    }
}

const box1 = new Box ({selector: "#box1", size: 100,color: 'red'});
const box2 = new Box ({selector: "#box2", size: 80,color: 'blue'});

class Circle extends Box {
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = "50%";
    }
};

const myCircle = new Circle ({selector: '#circle', size: 70,color:'green'})
