"use strict";
let isResult;
let text = document.getElementById('outtext');

// Назначение функции очистки поля ввода 
let ac = document.getElementById('ac');
ac.addEventListener('click', clearInput);


// Очистка поля ввода
function clearInput() {
    text.innerHTML = '';
}

// Каждому элементу добваить onclick функцию

let numbuttList = document.querySelectorAll('.numbutt');
let arrList = Array.from(numbuttList);
for ( let every of arrList ) {
    every.addEventListener('click',adder);
} 

// Функция добавления в поле ввода asdsad
function adder() {
text.innerHTML += event.target.innerHTML;
}


// Тест Юриного метода 
let final = eval('10*2');
console.log(final);


// Равно
let resButt = document.querySelector('.resButt');
resButt.addEventListener('click', result);

function result() {
    text.innerHTML = eval(text.innerHTML); 
}

// Корректор
let correctButt = document.querySelector('.correctButt');
correctButt.addEventListener('click', correcter);

function correcter() {
text.innerHTML = text.innerHTML.slice(0, text.innerHTML.length -1 );
}