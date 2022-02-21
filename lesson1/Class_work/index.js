/* console.log('я вывел')

let prent = prompt('сколько тебе лет?');
console.log(prent); */

'use strict';



function userF (userName,yes,no) {
   if (confirm(userName)){
       yes();
   }else{
       no()
   }
}

function showOK() {
    alert('проходи');
}

function showNo() {
    alert('уходи');
}

userF('тебе есть 18?', showOK, showNo);