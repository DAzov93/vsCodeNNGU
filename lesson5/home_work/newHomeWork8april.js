
//1
/* let stringToArray = (str) => {
   return str = str.split(' '); 
}

let showHello = 'Привет это Олег'
let getArrayStr = stringToArray(showHello);
console.log(getArrayStr); */


//2 
/* let deleteCharacters = (str,length) => {
  return  str = str.slice(0,length);
};

console.log(deleteCharacters('Привет',3));
 */


//3
/* let insertDash = (str) => {
  return ( str.toUpperCase()
    .split(' ')
    .join('-')
  )
}

console.log(insertDash('привет это олегыч')); */


//4
/* let myStr = 'привет';
let myFuncOneStr = (str) =>{
return str[0].toUpperCase() + str.slice(1);

}

console.log(myFuncOneStr(myStr)); */



//5
//вариант с использованием метода массива map
/* let getStrToUpperCase = (str) =>{
   return str.split(' ')
    .map((elem,ind,arr) => elem[0].toUpperCase() + elem.slice(1))
    .join(' ')
   
    
}
console.log(getStrToUpperCase('привет, это олег')); */


// вариант 2 с помощью цикла for of, первый вариант намного лучше
/* let getStrToUpperCase = (str) =>{
   str = str.split(' ')
    let newArr = [];
    for (let prop of str){
        newArr.push(prop[0].toUpperCase() + prop.slice(1));
    };
    return newArr.join(' ')
 };

 console.log(getStrToUpperCase('привет, это олег')); */


//6
//вариант 1
/* let changeRegister = (str) => {
    let resultStr = "";
   for (let i = 0; i < str.length; i++){
       if (str[i] == str[i].toUpperCase()){
           resultStr += str[i].toLowerCase();
       }else resultStr += str[i].toUpperCase();
   }
return resultStr;
}

console.log(changeRegister('КаЖдЫй ОхОтНиК')); */


//вариант 2 , с использованием метода map - смотрится куда более приятнее
/* let changeRegister = (str) => {
    return str.split('')
    .map((elem,ind,arr) => elem == elem.toUpperCase()? elem.toLowerCase() : elem.toUpperCase())
    .join('')

}

console.log(changeRegister('КаЖдЫй ОхОтНиК')); */

//7 


//8 

//9 

//решение, с массивом лучше не нужно, тк includes не ищет одинаковые символы
/* let comparison = (str1,str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  stopFor :   for(let i = 0; i < str1.length; i++){
        for(let j = i; j < str2.length;){
            if (str1[i] ==  str2[j]){
                console.log('все совпадает');
            continue  stopFor;
            }else console.log('не совпадает');
            continue stopFor;
        }
} 
}

comparison('Прииет',"ПриВЕТ") */

//вариант без использования цикла в цикле
/* let comparison = (str1,str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
 for(let i = 0; i < str1.length; i++){
       if (str1[i] == str2[i]){
        console.log('все совпадает');
       }else console.log('не совпадает');
}
}

comparison('Прииет',"ПриВЕТ"); */


//10
/* let insensitiveSearch = (str1,str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    return str1.includes(str2);
};

console.log(insensitiveSearch('Привет',"ва")); */


//11
//вариант с использованием метода map
/* let initCap = (str) => {
  return  str.toLowerCase()
    .split(' ')
    .map((elem,ind,arr) => elem[0].toUpperCase() + elem.slice(1))
    .join('');
};

console.log(initCap('пРиВет эТо олеГ')); */

// вариант с использованием цикла for of
/* let initCap = (str) => {
  str = str.toLowerCase().split(' ');
  let getArrResult = [];
    for(let prop of str){
        getArrResult.push(prop[0].toUpperCase() + prop.slice(1));
    }
    return getArrResult.join('')
}
  console.log(initCap('пРиВет эТо олеГ')); */


  //вариант с использованием цикла for
/*   let initCap = (str) => {
    str = str.toLowerCase().split(' ');
    let getArrResult = [];
      for(let i = 0; i < str.length;i++){
          getArrResult.push(str[i][0].toUpperCase() + str[i].slice(1));
      }
      return getArrResult.join('')
  }
    console.log(initCap('пРиВет эТо олеГ'));  */



//12
/* let initSnake = (str) => {
   return str.toLowerCase()
   .split(' ')
   .join('_');
};

console.log(initSnake('пРиВет эТо олеГ')); */



//13
/* let repeatStr = (str,n) => {
    return(str.repeat(n));
}

console.log(repeatStr('Привет',5)); */


//14
/* let path = (pathname) => {
    pathname = pathname.split('/');
    return pathname[pathname.length -1];
}

let pName = '/Users/dmitrijazov/Documents/vsCodeNNGU/lesson5/home_work/newHomeWork8april'

console.log(path(pName)); */


//15
/* let str = {
    endsWith: function (str,str1){
    return str.endsWith(str1);
    }
}
console.log(str.endsWith('Привет','те')); */


//16

/* let getSubstr = (str,char, pos) => {
   return str.substring(char,pos);
}

console.log(getSubstr('Привет',3,-6)); */


//17
/* let insert =  (str,substr,pos = 0) => {
    str = str.split(' ')
    str.splice(pos,0,substr)
    return str.join(' ')
};

console.log(insert('Привет друг, это Олег','Димати',3)); */



//18
/* let limitStr = (str,n,symb = '<...>') => {
   if (str.length > n){
      str =  str.slice(0,n) + symb
   }
   return str
}

console.log(limitStr('Привет друг, это Олег',10)); */



//19
/* let count = (str, stringsearch) => {
    let resultSum = null;
    for (let i = 0; i < str.length; i++){
        if (str[i] == stringsearch){
            resultSum += 1;
        }
    }
    return resultSum
}

console.log(count("Приииииивет",'и')); */


//20
/* let strip = (str) => {
    return str.split(' ')
    .join('')
}

console.log(strip('П Ри Вет Д')); */


//21
//вариант 1
/* let cutString = (str,n) => {
    str = str.split(' ');
    for(let i = 0; str.length > n; i++ ){
        str.splice(i,1);
    }
    return str.join(' ')
};


console.log(cutString('ПРивет это Олег а это Дима ',3)); */

//вариант 2 так куда красевей и лаконичней
/* let cutString = (str,n) => {
return str.split(' ')
.filter((elem,ind,arr) => ind < n )
.join(' ')
};

console.log(cutString('ПРивет это Олег а это Дима ',3)); */


//22
//вариант 1
/* let findWord = (word,str) => {
    return str.includes(word);
}

console.log(findWord('fdg','ПРивет это Олег а это Дима ')); */


//готово
