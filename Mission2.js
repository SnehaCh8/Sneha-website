let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn1.addEventListener('click', () => {
    img.src = 'eng1.png';
})

btn2.addEventListener('click', () => {
    img.src = 'eng2.png';
})

btn3.addEventListener('click', () => {
    img.src = 'eng3.png';
})

btn4.addEventListener('click', () => {
    img.src = 'eng4.png';
})