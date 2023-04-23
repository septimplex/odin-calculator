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

let number1 = "";
let number2 = "";
let result = 0;

let stringOperand = "";
let currentOperand = "";

btns.forEach(btn => btn.addEventListener('click', function(){

    
    if(btn.className == "operation"){
        
        currentOperand = btn.value;
        removeClass();
        addClass(btn);

        if(number1 == ""){
            currentOperand = "";
            stringOperand+=btn.value;
            console.log("number1 empty");
        }
        
        else if(number1 != "" && number2 == ""){
            stringOperand = "";
            stringOperand+=btn.value;
            
            console.log("number1 exists and number2 empty");
        }

        else{
            num1 = parseFloat(number1);
            num2 = parseFloat(number2);
            operand = stringOperand[stringOperand.length-1];
            result = operate(num1,num2,operand);
            display.innerText = result;
            number1 = result;
            number2 = "";
            stringOperand=currentOperand;
            console.log(result);
            console.log("did operate");
        }

        
    }


    else if(btn.className == "equal"){
        
    }
    // ako je number i current je nula
    //samo displayajaj broj
    else if(btn.className == "num"){
        
        if(number1 == ""){
            if(btn.value == 0){
                number1 = "";
                display.innerText = "0";
            }

            else if(stringOperand[stringOperand.length-1] == "-"){
                number1 += "-";
                number1 += btn.value;
                display.innerText = number1;
                
                console.log("number 1 empty and operand -");
            }

            else{
                number1 += btn.value;
                display.innerText = number1;
                console.log("number 1 empty and operand not -");
            }

        }
        else if(number1 != "" && currentOperand == ""){
                number1 += btn.value;
                display.innerText = number1;
                console.log("number1 filled and current operand not exist");
        }

        else{
            number2 += btn.value;
            display.innerText = number2;
            console.log("filling number 2");
        }

            
        
        }
        console.log("num1 = "+ number1 + " num2 = " +number2 + " current op = " + currentOperand + " op string = " + stringOperand);
        
       
        
   

    

    

    

    
    
        

    
    
    

    
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

let opBtns = document.querySelectorAll("#plus, #minus, #multiply, #divide");


function removeClass(){
    opBtns.forEach(btn => btn.className = "operation");
}

function addClass(btn){
    btn.classList.add("active");
}

