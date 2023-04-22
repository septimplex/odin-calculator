function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

const number1 = 0;
const number2 = 0;
const operand = "";

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

let btns = document.querySelectorAll(".btn");

btns.forEach(btn => btn.addEventListener('click', function(){
    console.log(btn.value);
})
   );