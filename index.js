let number = document.querySelector('.numbers');
let minus = document.querySelector('.btn-1');
let reset = document.querySelector('.btn-2');
let plus = document.querySelector('.btn-3');
var num = number.innerHTML;

minus.addEventListener('click', ()=>{
    num--;
    
    if(num<0){
        number.style.color = 'red';
    }
    else if(num === 0){
        number.style.color = 'black';
    }
    number.textContent = num;
})
reset.addEventListener('click', ()=>{
    num =0;
if(num === 0){
        number.style.color = 'black';
    }
    number.textContent = num;
})
plus.addEventListener('click', ()=>{
    num++;
    if(num>0){
            number.style.color = '#0f0';
        }
    else if(num === 0){
        number.style.color = 'black';
    }
    number.textContent = num;
})