
//1
//Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), 
//surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. 
//И метод getFullName() - имя и фамиля работника.

//решение
// class Worker {
//     constructor (props) {
//         this.name = props.name;
//         this.surname = props.surname;
//         this.rate = props.rate;
//         this.days = props.days;
//     }

//     getSalary () {
//         return `зарплата ${this.name} ${this.surname} = ${this.rate * this.days}`;
//     }

//     getFullName () {
//         return `${this.name} ${this.surname}`;
//     }

// };

// let userKate = new Worker ({name: 'Kate', surname: 'Azova', rate: 4800, days: 20});

// console.log(userKate.getSalary());
// console.log(userKate.getFullName());





//2
//Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. 
//Появляется новые свойство: workers - количество работников. 
//И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней 
//и на количество работников.
// class Worker {
//     constructor (props) {
//         this.name = props.name;
//         this.surname = props.surname;
//         this.rate = props.rate;
//         this.days = props.days;
//     }

//     getSalary () {
//         return `зарплата ${this.name} ${this.surname} = ${this.rate * this.days}`;
//     }

//     getFullName () {
//         return `${this.name} ${this.surname}`;
//     }

// };

// let userKate = new Worker ({name: 'Kate', surname: 'Azova', rate: 4800, days: 20});

// // console.log(userKate.getSalary());
// // console.log(userKate.getFullName());

// class Boss extends Worker {
//     constructor (props) {
//         super(props);
//         this.workers = props.workers;
//     };

//     getSalary () {
//         return `зарплата всех работников = ${this.rate * this.days * this.workers}`;
//     }
// }

// let userDima = new Boss({name: 'Dima', surname: "Azov", rate: 1800, days: 24, workers: 35});

// console.log(userDima.getSalary());





//3
//Модифицируйте класс Worker из предыдущей задачи следующим образом: 
//сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
// class Worker {
//     #name = "";
//     #surname = "";
//     #rate = "";
//     #days = ""
//     constructor (props) {
//         this.#name = props.name;
//         this.#surname = props.surname;
//         this.#rate = props.rate;
//         this.#days = props.days;
//     }

//     getSalary () {
//         return `зарплата ${this.name} ${this.surname} = ${this.rate * this.days}`;
//     }

//     getFullName () {
//         return `${this.name} ${this.surname}`;
//     }

//     get getName () {
//        return this.#name;
//     };

//     get getSurname () {
//         return this.#surname;
//     };

//     get getRate () {
//         return this.#rate;
//     };

//     get getDays () {
//         return this.#days;
//     };

// };

// let userKate = new Worker ({name: 'Kate', surname: 'Azova', rate: 4800, days: 20});

// // console.log(userKate.getSalary());
// // console.log(userKate.getFullName());

// class Boss extends Worker {
//     constructor (props) {
//         super(props);
//         this.workers = props.workers;
//     };

//     getSalary () {
//         // return `зарплата всех работников = ${this.rate * this.days * this.workers}`;
//         return `зарплата всех работников = ${this.getRate * this.getDays * this.workers}`;
//     }
// }

// let userDima = new Boss({name: 'Dima', surname: "Azov", rate: 1800, days: 24, workers: 35});

// console.log(userDima.getSalary());




//4
//Модифицируйте класс Worker из предыдущей задачи следующим образом: 
//для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// class Worker {
//     #name = "";
//     #surname = "";
//     #rate = "";
//     #days = ""
//     constructor (props) {
//         this.#name = props.name;
//         this.#surname = props.surname;
//         this.#rate = props.rate;
//         this.#days = props.days;
//     }

//     getSalary () {
//         return `зарплата ${this.name} ${this.surname} = ${this.rate * this.days}`;
//     }

//     getFullName () {
//         return `${this.name} ${this.surname}`;
//     }

//     get getName () {
//        return this.#name;
//     };

//     get getSurname () {
//         return this.#surname;
//     };

//     get getRate () {
//         return this.#rate;
//     };

//     get getDays () {
//         return this.#days;
//     };

//     set setRate (newRate) {
//         this.#rate = newRate;
//     };

//     set setDays (newDays) {
//         this.#days = newDays;
//     }

// };

// let userKate = new Worker ({name: 'Kate', surname: 'Azova', rate: 4800, days: 20});

// // console.log(userKate.getSalary());
// // console.log(userKate.getFullName());

// class Boss extends Worker {
//     constructor (props) {
//         super(props);
//         this.workers = props.workers;
//     };

//     getSalary () {
//         // return `зарплата всех работников = ${this.rate * this.days * this.workers}`;
//         return `зарплата всех работников = ${this.getRate * this.getDays * this.workers}`;
//     }
// }

// let userDima = new Boss({name: 'Dima', surname: "Azov", rate: 1800, days: 24, workers: 35});
// userDima.setDays = 12;
// userDima.setRate  = 250; 

// console.log(userDima.getSalary());



//5
//Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде,
// метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, 
//сделав ее первую букву заглавной и метод ucWords, 
//который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {

//     reverse(str) {
//       return  str = str.split('').reverse().join('');
//     };

//     ucFirst(str) {
//     //   return  str = str.split('').map((elem,ind,arr) => ind == 0? elem.toUpperCase() : elem).join('')
//         return str = str.split(' ').map((elem,ind,arr) => elem[0].toUpperCase() + elem.slice(1)).join('');
//     };

//     ucWords (str) {
//         return str = str.split(' ').map((elem,ind,arr) => elem[0].toUpperCase() + elem.slice(1)).join(' ');
//     }

// }

// let myStr = new MyString;
// console.log(myStr.reverse('привет'));
// console.log(myStr.ucFirst('cat'));
// console.log(myStr.ucWords('привет, это олег'));




//6
//Реализуйте класс Validator, который будет проверять строки. 
//К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. 
//Если является - возвращает true, если не является - то false. 
//Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, 
//метод isDate для проверки даты и метод isPhone для проверки телефона.

// class Validator {
//     isEmail (str) {
//         if (str.includes('@') && str.includes('.',str.length - 4)){
//             return `сторка ${str} является корректным Email`
//         }else return 'строка не Email'
//     };

//     isDomain(str){
//         if (str.includes('.com') || str.includes('.ru')){
//           return  'является доменом';
//         }else return 'не домен';
//     };

//     isDate(str) {
//         let num = null;
//         let checkDate = null;
//         for (let i = 0; i < str.length ; i++){
//             if (str[i] === '.'){
//                 num +=1;
//             };
//             let arrStr = str.split('.');
//             if (arrStr[0] <= 31 && arrStr[1] <=12){
//                 checkDate = true
//             }
//         }
        
//         if (str.length === 10 && num === 2 && checkDate){
//           return  'корректная дата'
//         }else return 'не корректная дата'
//     }

//     //способ с Мапом - лучше не использовать
//     // isDate (str) {
//     //     let num = null;
//     //     str = str.split('').map((elem,ind,arr) => elem == '.'? num += 1: '')
//     //     return  str.length === 10 && num === 2? 'корректная дата' : 'не корректная дата';
    
//     // }

//     isPhone (str) {
//         if (str.includes(+7) && str.length === 12){
//             return ` номер ${str} введен верно`
//         }else  return `неверный номер`
//     }
// };

// let checkString = new Validator;
// console.log(checkString.isEmail('Guess20121286@gmail.com'));
// console.log(checkString.isDomain('yandex.ru'));
// console.log(checkString.isDomain('google.com'));
// console.log(checkString.isDate('31.12.2012'));
// console.log(checkString.isPhone('+79101351559'));





//7
//Реализуйте класс Student (Студент), который будет наследовать от класса User,
// подобно тому, как это сделано в теоретической части урока. 
//Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год поступления в вуз). 
//Класс должен иметь метод getFullName() (наследуется от User), 
//с помощью которого можно вывести одновременно имя и фамилию студента. 
//Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
//Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
//Текущий год получите самостоятельно.

class User {
    constructor (props){
        this.name = props.name;
        this.surname = props.surname;
    };

    getFullName (){
        return `имя ${this.name} фамилия ${this.surname}`
    };
};

class Student extends User {
    constructor(props) {
        super(props);
        this.year = props.year;
    };

    getCourse() {
        let today = new Date;
        let year = today.getFullYear();
        return `курс ${year - this.year}`;
    };

};

let studentDima = new Student({name: 'Dmitry', surname:'Azov', year: 2020});
console.log(studentDima.getCourse());