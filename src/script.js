const display = document.querySelector('#display');
const allClear = document.querySelector('#all-clear');
const deleteBtn = document.querySelector('#delete');
const decimal = document.querySelector('#decimal');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const substract = document.querySelector('#substract');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const doubleZero = document.querySelector('#dblzero');

let displayValue = '';

allClear.addEventListener('click', () => {
    display.value = '';

});

deleteBtn.addEventListener('click', () => {
    display.value = display.value.toString().slice(0, -1);

});

decimal.addEventListener('click', () => {
    display.value += '.';
});

divide.addEventListener('click', () => {
    display.value += '/';
});

multiply.addEventListener('click', () => {
    display.value += '*';
});

substract.addEventListener('click', () => {
    display.value += '-';
});

add.addEventListener('click', () => {
    display.value += '+';
});

equals.addEventListener('click', () => {
    display.value = eval(display.value)
})


one.addEventListener('click', () => {
    display.value += '1';
});

two.addEventListener('click', () => {
    display.value += '2';
});

three.addEventListener('click', () => {
    display.value += '3';
});

four.addEventListener('click', () => {
    display.value += '4';
});

five.addEventListener('click', () => {
    display.value += '5';
});

six.addEventListener('click', () => {
    display.value += '6';
});

seven.addEventListener('click', () => {
    display.value += '7';
});

eight.addEventListener('click', () => {
    display.value += '8';
});

nine.addEventListener('click', () => {
    display.value += '9';
});

zero.addEventListener('click', () => {
    display.value += '0';
});

doubleZero.addEventListener('click', () => {
    display.value += '00';
});

