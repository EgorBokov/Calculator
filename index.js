"use strict";
let isResult;
const text = document.getElementById('outtext');
const operators = [
    '*',
    '/',
    '+',
    '-',
    '.',
    '%',
];

let clearAllButton = document.getElementById('ac');
clearAllButton.addEventListener('click', clearInput);

function clearInput() {
    text.innerHTML = '';
}


let numbuttList = document.querySelectorAll('.numbutt');
let arrList = Array.from(numbuttList);
for (let every of arrList) {
    every.addEventListener('click', adder);
}

function adder(event) {
    const value = event.target.innerHTML;
    let lastChar = text.innerHTML[text.innerHTML.length - 1];
    let lastCharResult, valueResult;

    operators.map((op) => {
        if (op === value) valueResult = true
    })

    operators.map((op) => {
        if (op === lastChar) lastCharResult = true
    })

    if (!(valueResult && (lastCharResult || lastChar == ''))) {
        text.innerHTML += event.target.innerHTML;
    }
}

let resButt = document.querySelector('.resButt');
resButt.addEventListener('click', result);

function result() {
    text.innerHTML = eval(text.innerHTML);
}


let correctButt = document.querySelector('.correctButt');
correctButt.addEventListener('click', correcter);

function correcter() {
    text.innerHTML = text.innerHTML.slice(0, text.innerHTML.length - 1);
}