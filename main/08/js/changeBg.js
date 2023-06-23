const bgname = document.querySelector('h1');
const body = document.querySelector('body');

function changeBg(){
    let randomNumber = Math.floor(Math.random()*5)+1;
    body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`;
};

bgname.addEventListener('click',changeBg)
bgname.addEventListener('load',changeBg());