'use strict'

const submit = document.getElementById('btn1');
const result = document.getElementById('result');
const small = document.getElementById('error1');

submit.addEventListener('click',binaryNum);

function binaryNum(e) {
    e.preventDefault();
    let num = document.getElementById('decimal').value;
    if(num === '') {
       small.style.visibility = 'visible';
       small.innerText = 'please enter a valid number';
    }
    else if( num < 0) {
    
       small.style.visibility = 'visible';
       small.innerText = 'please enter a positive number'
    } else {
        const number = Number(num).toString(2);
        result.style.visibility = 'visible';
        result.innerHTML = number;
    }

}