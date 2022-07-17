const hambuger = document.querySelector('.hambuger');
const hambugerSpan = document.querySelector('.span');
const navBox = document.querySelector('.nav')
let displayNav = false;

hambuger.addEventListener('click', showNav);

function showNav(){
    if(!displayNav){
        hambugerSpan.classList.add('open');
        navBox.classList.add('open');
        displayNav = true;
    }
    else{
        hambugerSpan.classList.remove('open');
        navBox.classList.remove('open');
        displayNav = false;
    }
    
}