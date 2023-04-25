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
        }
        
        else if(number1 != "" && number2 == ""){
            stringOperand = "";
            stringOperand+=btn.value;
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
            
        }

        
    }


    else if(btn.className == "equal"){
        removeClass();
        if(number1 == ""){
            return;
        }

        else if(currentOperand == ""){
            return;
        }

        else if(number1 != "" && number2 == "" && currentOperand != ""){
            num1 = parseFloat(number1);
            result = operate(num1,num1,currentOperand);
            display.innerText = result;
            number1 = result;
            number2 = "";     
        }

        else{
            num1 = parseFloat(number1);
            num2 = parseFloat(number2);
            result = operate(num1,num2,currentOperand);
            display.innerText = result;
            number1 = result;
            number2 = "";
        }
    }

    
    else if(btn.className == "num"){
        removeClass();
        if(number1 == ""){
            if(btn.value == 0){
                number1 = "";
                display.innerText = "0";
            }

            else if(stringOperand[stringOperand.length-1] == "-"){
                number1 += "-";
                number1 += btn.value;
                display.innerText = number1;
                
            }

            else{
                number1 += btn.value;
                display.innerText = number1;
            }

        }
        else if(number1 != "" && currentOperand == ""){
                number1 += btn.value;
                display.innerText = number1;
        }

        else{
            
            if(btn.value == 0 && number2.length < 1){
                    number2 = "";
                    display.innerText = "0";
                }
            

            else{
            number2 += btn.value;
            display.innerText = number2;
            }
        }
    }
        
    else{
        if(btn.id == "CA"){
            resetCalculator();
        }

        else if(btn.id == "C"){
            if(number1.length == 1){
                number1 = 0;
                display.innerText = number1;
            }

            else if(number2 == "" && number1.length > 1){
                number1 = number1.slice(0,-1);
                display.innerText = number1;
            }

            else if(number2 != ""){
                if(number2.length == 1){
                    number2 = 0;
                    display.innerText = number2;
                }
                else{
                    number2 = number2.slice(0,-1);
                    display.innerText = number2;
                }
            }
        }

    else if(btn.id == "plusminus"){
       
        if(display.innerText == number1){
            if(display.innerText != "0" && display.innerText[0]!="-"){
                display.innerText = "-" + display.innerText;
            }
        
            else if(display.innerText != "0"){
                display.innerText = number1.slice(1);
            }
            number1 = display.innerText;
    }
        if(display.innerText == number2){
            if(display.innerText != "0" && display.innerText[0]!="-"){
                display.innerText = "-" + display.innerText;
            }
        
            else if(display.innerText != "0"){
                display.innerText = number2.slice(1);
            }
            number2 = display.innerText;
        }
    }   
    else if (btn.id == "dot"){
        if(display.innerText == number1){}
    }

    }
    /*
    1. popravit ono kad se upisuje pa bude 012;
    2. dodat dot !not more then one // dodat da ispisuje do 2 decimale
    3. dodat msg kad se dijeli s nulom i resetirat
    4. uredit izgled
    5. backspace btn i funkcionalnost preko keyboard
    */
        
       


    
    
    

    
   
}
));

let opBtns = document.querySelectorAll("#plus, #minus, #multiply, #divide");


function removeClass(){
    opBtns.forEach(btn => btn.className = "operation");
}

function addClass(btn){
    btn.classList.add("active");
}

function resetCalculator(){
    removeClass();
    number1 = "";
    number2 = "";
    result = 0;

    stringOperand = "";
    currentOperand = "";
    display.innerText = "0";
}

