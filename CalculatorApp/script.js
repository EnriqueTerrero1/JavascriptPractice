window.onload = iniciar;

function iniciar() {
  updateDisplay();
}

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};
function inputDigit(digit){

    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  
    console.log(calculator);
  }
    
/*if(calculator.displayValue==0 ||calculator.waitingForSecondOperand ===true){
    calculator.displayValue="";
    calculator.waitingForSecondOperand===false;
}
    calculator.displayValue +=digit;*/

   


function inputDecimal(dot){
    if(!calculator.displayValue.includes(dot)){
    calculator.displayValue += dot;
}
}
function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
 // calculator.displayValue=displayvalue === '0'? digit:displayValue+digit;
}

function handleOperator(nextOperator){
    const {firstOperand,displayValue,operator}=calculator
    const inputValue= parseFloat(displayValue);
    if(firstOperand ===null && !isNaN(inputValue)){
        calculator.firstOperand=inputValue;
    }
    calculator.waitingForSecondOperand=true;
    calculator.operator=nextOperator;


}


const keys = document.querySelector(".calculator-keys");

keys.addEventListener('click',(event)=>{

    const{target}=event;

    if(!target.matches('button')){
        return;
    }
    if(target.classList.contains('operator')){
        handleOperator(target.value);
    
    }
    if(target.classList.contains('decimal')){
       inputDecimal(target.value);
    }

    if(target.classList.contains('all-clear')){
        console.log('clear',target.value)
    }

    if(target.classList.contains('digit')) {
            inputDigit(target.value);
    }
   updateDisplay();
});
