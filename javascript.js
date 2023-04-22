let add = (a,b) => {return a+b;}

let subtract = (a,b) => {return a-b;}

let multiply = (a,b) => {return a*b;}

let divide = (a,b) => {return a/b;}


function operate(num1,num2,operand){
    if(operand == "+"){
        return add(num1,num2);
    }
    else if(operand == "-"){
        return subtract(num1,num2);
    }
    else if(operand == "*"){
        return multiply(num1,num2);
    }
    else{
        return divide(num1,num2);
    }
}

let display = document.querySelector("#calculation");
let numBtns = document.querySelectorAll(".num");
let actionBtns = document.querySelectorAll(".action");
let operationBtns = document.querySelectorAll(".operation");
let equalBtn = document.querySelector(".equal");

let number1 = 0;
let number2 = 0;
let operand = "";

numBtns.forEach(btn => btn.addEventListener('click', function(){
    display.innerText += btn.value;
    if (display.innerText[0] === "0"){
        display.innerText = display.innerText.substring(1);
    }
}
));

operationBtns.forEach(btn => btn.addEventListener('click', function(){
    console.log(btn.innerText);
}
));

