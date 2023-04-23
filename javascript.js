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
let btns = document.querySelectorAll("button");
let operationBtns = document.querySelectorAll(".operation");

let number1 = 0;
let number2 = 0;
let result = 0;

let current = 0;

operand = "";


btns.forEach(btn => btn.addEventListener('click', function(){

    // ako je number i current je nula
    //samo displayajaj broj
    if(btn.className == "num"){
        if(current == 0){
         display.innerText += btn.value;
                if (display.innerText[0] === "0"){
                    display.innerText = display.innerText.substring(1);
                }  
            
            }
        else {
            console.log(current);
            console.log(operand);
        }
        }

        
       
    
   

    if(btn.className == "operation"){
        operand = btn.value;
        current = display.innerText;
        
         
    }

    

    

    
    
        

    
    
    

    
    /*
    if(number1 > 0 && number2 > 0 && operand != ""){
        let result = operate(number1, number2, operand);
        display.innerText = result;
        number1 = result;
    }

    if(btn.className == "num"){
    if(number1 == 0){
        display.innerText += btn.value;
            if (display.innerText[0] === "0"){
                display.innerText = display.innerText.substring(1);
            }
            
        number1 = display.innerText;
    } 


    else{
        display.innerText = "";

    }
}

    

    

    if(btn.className == "num"){
        display.innerText += btn.value;
        if (display.innerText[0] === "0"){
            display.innerText = display.innerText.substring(1);
        }

    }

    if(btn.className == "operation"){
        if(operand == ""){
            number1 = display.innerText;
        }
    }*/
    
}
));



