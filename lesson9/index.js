// DOM

// console.log(document);

// let block2 = document.querySelector('.block-2');
// // let block2 = document.querySelector('div');
// // let block2 = document.querySelector('#block-2');
// // let block2 = document.querySelector('.block-2');
// // let block2 = document.querySelector('.block-2');

// console.log(block2.parentElement);

// console.log(document.getElementById('block-1'));

// console.log(document.getElementsByName('2'));

// console.log(document.querySelectorAll('div'));

// let link = document.querySelector('a');
// let input = document.querySelector('input');

// console.log(input);


// console.log(document.body.innerHTML += '1,2,3');
// console.log(document.body);

// const block1 = document.querySelector('#block-1');
// console.log(block1.outerHTML);

//работа со стилями
// const block1 = document.querySelector('#block-1');
// block1.style.backgroundColor = 'green';
// block1.className = 'div-block';
// block1.classList.add('block') 
// block1.style.width = '300px';
// block1.classList.toggle('block2');

// console.log(block1.classList.contains('block2'))
// console.log(block1.classList);

// let newEl = document.createElement('div');
// newEl.className = 'test';
// newEl.innerHTML = 'text';
// newEl.style.backgroundColor = 'red'
// let block1 = document.querySelector('.block-2');
// block1.before(newEl);

// let header = document.createElement('header');
// header.className = 'page-header';
// header.innerHTML = 'шапка сайта';
// header.style.backgroundColor = 'yellow';
// header.style.display = 'flex';
// header.style.height = '60px'
// header.style.justifyContent = 'center';
// header.style.alignItems = 'center';
// document.body.prepend(header);


// let header = document.createElement('header');
// header.className = 'main';
// header.innerHTML = 'Заголовок сайта';
// header.style.backgroundColor = 'yellow';
// header.style.color = 'red';
// header.style.display = 'flex';
// header.style.justifyContent = 'center';
// document.body.prepend(header);

// let content = document.createElement('section');
// content.className = 'content';
// content.style.padding = '10px'
// header.after(content);

// let input = document.createElement('input');
// input.innerHTML = 'text';
// input.style.marginRight = '10px';
// input.addEventListener('input', (event) => console.log(event.target.value))
// content.prepend(input);

// let button = document.createElement('button');
// button.className = 'todos-button';
// button.innerHTML = 'toDo';
// // button.onclick = () => console.log('clicked');   старый способ

// button.addEventListener('click', hendtoAdd);
// button.addEventListener('click', () => console.log('clicked clicked'));
// input.after(button);

// let ol = document.createElement('ol');
// button.after(ol);
// for (let i = 1; i <= 5; i++){
//     let li = document.createElement('li');
//     li.innerHTML = `пункт ${i}`
//     ol.append(li)
// };

// function hendtoAdd() {
//     const currentInputValue = input.value;
//     const
// }

