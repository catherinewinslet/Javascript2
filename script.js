let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');
const resetCount = document.querySelector('#resetCountBtn');
const CountZero = document.querySelector('#start');  //?

let count = 0;

addCount.addEventListener('click',incrementCounter);
lowerCount.addEventListener('click',decrementCounter);
resetCount.addEventListener('click',resetCounter);
//CountZero.addEventListener('click',Zero); //?

function incrementCounter(){
    counter.innerHTML = ++count;
    colorChange();
    Animate();
}

function decrementCounter(){
    counter.innerHTML = --count;
    colorChange();
    Animate();
}

function resetCounter(){
    count = 0;
    counter.innerHTML = 0;
    counter.style.color = '#000000';
    colorChange();
    Animate();
}

function colorChange(){
    if(counter.innerHTML >'0'){
        counter.style.color = '#4caf50';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = '#000000'
    }
    else    counter.style.color ='red';
}

function Animate(){
    counter.animate(
        [{opacity:'0.4'},{opacity:'1.0'}],
        {duration: 300,fill:'forwards'}
    );
}

//change image

const nextBtn = document.querySelector('#R');
const prevBtn = document.querySelector('#L');
const container = document.querySelector('body');

let x = 0;

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide(){
    if(x === 4) x=-1;
    x++;
    container.style.backgroundImage = `url(img/bg${x}.jpg`;
}

function prevSlide(){
    if(x === 0) x=5;
    x--;
    container.style.backgroundImage = `url(img/bg${x}.jpg`;
}