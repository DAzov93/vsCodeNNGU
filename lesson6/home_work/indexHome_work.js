

//1
/* let myArr = ['Привет', "это", "Олег"];
let myArrResultLength = myArr.map((elem,ind,arr) => elem.length);
console.log(myArrResultLength); */


//2 
//лучшее решение 
/* let numbers = [2,3,5,7,11,13,17,19];
let surretnSums = (num) => {
    let resultArray = []
 num.reduce((previous,elem,ind) => resultArray[ind -1] = previous + elem);
   return resultArray
}

console.log(surretnSums(numbers)); */


//второе решение
/* let numbers = [2,3,5,7,11,13,17,19];
let surretnSums = (num) => {
    let resultArray = []
 let result =  num.reduce((previous,elem,ind) => {
     resultArray.push(previous)
    return previous + elem;
 })
  resultArray.push(result);
  return resultArray
}

console.log(surretnSums(numbers)); */


//3
//вариант 1 с использованием цикла в цикле.
/* let myArr = [0,3,4,2,7,1,6,9,2];
let newArraySum = [];
for(let i = 0; i < myArr.length; i++){
    for(let j = i + 1 ; j < myArr.length; j++){
        if (myArr[i] + myArr[j] === 7){
            newArraySum.push(`${myArr[i]}:${myArr[j]}`);
        }
    }
}

console.log(newArraySum); */


//4
/* let message = 'привет, это олег';
message = message.split(' ')
.map((elem,ind,arr) => elem[0]);

console.log(message); */



//5
//не оч получилось
/* let str = 'Приветик';
let newArray = [];
for(let i = 1; i< str.length; i++){
    newArray.push(str.slice(i-1,i+2))
}
console.log(newArray); */

//6
/* let arrNum = [34,23,62,12,3,6,31,7,4,9,12];
arrNum.sort((a,b) => b-a);
console.log(arrNum); */

//7
/* let arr1 = [34,23,62,12];
let arr2 = [23,1,56,12,18];
let arr3 = [31,93,17,29];

let arrAll = [...arr1,...arr2,...arr3].sort((a,b) => a-b).join(' ')
console.log(arrAll); */


//8
//решение с помощью цикла for
/* let myArray = [[1,2,3],[4,5],[6]];
let newSumm = null
for(let i = 0; i < myArray.length;i++){
    for(let j = 0;j < myArray[i].length; j++){
        newSumm += myArray[i][j];
    }
}

console.log(newSumm); */

// более облегченны вариант использования
/* let myArray = [[1,2,3],[4,5],[6]];
let newSumm = null
for(let i = 0; i < myArray.length;i++){
    for (let prop of myArray[i]){
        newSumm += prop
    }
}

console.log(newSumm); */

// самый легкий вариант с использованием метода массива flat()
/* let myArray = [[1,2,3],[4,5],[6]];
let newSumm = myArray.flat()
.reduce((previous,elem,ind,arr) => previous + elem, 0);

console.log(newSumm); */



//9
/* let arr1 = [34,23,62,12];
let newPushArray = [];
for(let i = arr1.length -1; i>=0 ;i--){
    newPushArray.push(arr1[i]);
};
console.log(newPushArray); */

//10
// let arr1 = [2,2,2,3,4,23]
//решение с помощью цикла for
/* let getSumNum = null;
let iteration = 0;
for(let i = 0;i < arr1.length;i++){
    if (getSumNum < 10){
        getSumNum += arr1[i];
        iteration +=1;
    }

}
console.log(iteration); */


//решение с помощью reduce
/* let newArray = arr1.reduce((previous,elem,ind,arr) => {
    if (previous < 10){
        return previous + elem
    }else return ind
});

console.log(newArray); */


//11
let newArray = [];
let arrayFill = (addArray,num) => {
   for (let i = 0; i < num; i++){
       newArray.push(addArray)
   }
}

arrayFill('привет',5);
arrayFill('это',3);
arrayFill('Олег',15)
console.log(newArray);